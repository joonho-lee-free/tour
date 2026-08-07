import { NextResponse } from "next/server";
import CoolSMS from "coolsms-node-sdk";
import admin from "firebase-admin";
import crypto from "crypto";

export const runtime = "nodejs";

function redirect303(reqUrl: string, pathWithHash: string) {
  return NextResponse.redirect(new URL(pathWithHash, reqUrl), { status: 303 });
}

function shortErr(err: any) {
  const name = err?.name || "Error";
  const msg = err?.message || "unknown";
  return encodeURIComponent(`${name}:${String(msg).slice(0, 120)}`);
}

function detectInquiryType(message: string) {
  const m = (message || "").toLowerCase();
  if (/(철거|원상복구|보조금|지원금|600만|희망리턴|소상공인|폐업|점포)/.test(m))
    return "전문철거/보조금 600만 문의";
  if (/(haccp|해썹|식품공장|클린룸|판넬|에폭시|위생)/.test(m))
    return "HACCP공사 문의";
  if (/(전기|승압|동력|차단기|분전반|배선|조명|누전)/.test(m))
    return "전기공사 문의";
  if (/(보수|방수|옥상|외벽|크랙|균열|수리|리모델링)/.test(m))
    return "시설보수/방수 문의";
  if (/(견적|비용|가격|방문|상담)/.test(m)) return "무료방문견적 문의";
  return "기타 시공 문의";
}

function detectRegion(message: string) {
  const m = (message || "").toLowerCase();
  const regions: Array<[RegExp, string]> = [
   [/제주/, "제주출발"],
   [/서울/, "서울출발"],
   [/경기|수원|성남|용인|화성|평택|고양|부천/, "경기출발"],
   [/인천/, "인천출발"],
   [/부산/, "부산출발"],
   [/대구/, "대구출발"],
   [/울산/, "울산출발"],
   [/대전/, "대전출발"],
   [/광주/, "광주출발"],
   [/세종/, "세종출발"],
   [/강원/, "강원출발"],
   [/충북|청주/, "충북출발"],
   [/충남|천안|아산/, "충남출발"],
   [/전북|전주/, "전북출발"],
   [/전남|여수|순천|목포/, "전남출발"],
   [/경북|포항|구미|경주/, "경북출발"],
   [/경남|창원|김해|양산|진주/, "경남출발"],
  ];
  for (const [re, label] of regions) if (re.test(m)) return label;
  return "미정";
}

function maskStoreNamePublic(storeName: string) {
  const s = (storeName || "").trim();
  if (!s) return "익명***";
  if (s.length === 1) return `${s}***`;
  return `${s.slice(0, 2)}***`;
}

/** ✅ 최근 문의현황용: 마지막 4자리만 */
function phoneLast4(phone: string) {
  const digits = (phone || "").replace(/\D/g, "");
  if (digits.length >= 4) return digits.slice(-4);
  return "****";
}

/** ✅ 최근 문의현황/문자 알림용(공개표시용): 마지막 4자리만 노출 */
function maskPhone(phone: string) {
  const last4 = phoneLast4(phone);
  return `010-****-${last4}`;
}

/**
 * ✅ (직원/내 폰으로 받는 문자용) 연락처 “전체” 하이픈 포맷
 * - 11자리(010xxxxxxxx) => 010-xxxx-xxxx
 * - 10자리(01xxxxxxxxx) => 01x-xxx-xxxx (일반적인 예외 포함)
 * - 9~10자리 지역번호(02 등)도 최대한 자연스럽게
 */
function formatPhoneFull(phone: string) {
  const d = (phone || "").replace(/\D/g, "");
  if (!d) return "";

  // 휴대폰 11자리 (010,011,016,017,018,019 등)
  if (d.length === 11) return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;

  // 휴대폰 10자리(드물지만 존재) 01x-xxx-xxxx
  if (d.length === 10 && d.startsWith("01")) {
    return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
  }

  // 서울(02) 9~10자리
  if (d.startsWith("02") && (d.length === 9 || d.length === 10)) {
    const midLen = d.length === 9 ? 3 : 4;
    return `02-${d.slice(2, 2 + midLen)}-${d.slice(2 + midLen)}`;
  }

  // 기타 지역번호 10자리(0xx-xxx-xxxx) / 11자리(0xx-xxxx-xxxx)
  if (d.startsWith("0") && (d.length === 10 || d.length === 11)) {
    const area = d.slice(0, 3);
    const midLen = d.length === 10 ? 3 : 4;
    return `${area}-${d.slice(3, 3 + midLen)}-${d.slice(3 + midLen)}`;
  }

  // 그 외는 그냥 원문(숫자)
  return d;
}

function getAdminDb() {
  if (!admin.apps.length) {
    const projectId = process.env.FIREBASE_PROJECT_ID?.trim();
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL?.trim();
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error("FIREBASE_ADMIN_ENV_MISSING");
    }

    admin.initializeApp({
      credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
    });
  }
  return admin.firestore();
}

/**
 * ✅ 4) “문자로 접수하기” 더블클릭/재시도 방지 (딱 1회만 접수)
 * - 동일 (상호 + 휴대폰) 조합이 짧은 시간(3분) 안에 다시 들어오면 중복으로 간주
 * ⚠️ Firestore가 죽어있으면(ENV/권한) 중복 방지 불가 → 기존처럼 진행(로직 유지)
 */
function makeDedupKey(phoneDigits: string, storeName: string) {
  const base = `${phoneDigits}|${(storeName || "").trim().toLowerCase()}`;
  return crypto.createHash("sha256").update(base).digest("hex");
}

async function tryAcquireDedupLock(params: {
  db: FirebaseFirestore.Firestore;
  phoneDigits: string;
  storeName: string;
  windowMs: number;
}): Promise<"acquired" | "duplicate"> {
  const { db, phoneDigits, storeName, windowMs } = params;

  const key = makeDedupKey(phoneDigits, storeName);
  const ref = db.collection("tour_lead_dedup").doc(key);
  const nowMs = Date.now();

  return await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (snap.exists) {
      const data: any = snap.data() || {};
      const ts = data?.createdAt;
      const createdMs =
        typeof ts?.toMillis === "function"
          ? ts.toMillis()
          : typeof data?.createdAtMs === "number"
          ? data.createdAtMs
          : 0;

      if (createdMs && nowMs - createdMs < windowMs) {
        return "duplicate" as const;
      }
    }

    tx.set(
      ref,
      {
        phoneDigits,
        storeName: (storeName || "").trim(),
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        createdAtMs: nowMs, // fallback
      },
      { merge: true }
    );

    return "acquired" as const;
  });
}

/**
 * ✅ JSON / form-urlencoded / multipart 모두 지원
 * + CTA/Hero 필드명 차이를 흡수하도록 키 후보 여러 개 받음
 */
async function readBody(req: Request): Promise<{
  storeName: string;
  phone: string;
  region: string;
  inquiryType: string;
  message: string;
  source: string;
}> {
  const ct = (req.headers.get("content-type") || "").toLowerCase();

  const pick = (obj: any, keys: string[]) => {
    for (const k of keys) {
      const v = obj?.[k];
      if (typeof v === "string" && v.trim()) return v.trim();
    }
    return "";
  };

  if (ct.includes("application/json")) {
    const data: any = await req.json();
    return {
      storeName: pick(data, ["storeName", "name", "customerName", "fullName"]),
      phone: pick(data, ["phone", "tel", "contact", "mobile"]),
      region: pick(data, ["region", "area", "location"]),
      inquiryType: pick(data, ["inquiryType", "inquiry", "type", "category"]),
      message: pick(data, ["message", "content", "memo", "detail"]),
      source: pick(data, ["source", "from", "utm_source", "event_label"]),
    };
  }

  const fd = await req.formData();
  const pickFd = (keys: string[]) => {
    for (const k of keys) {
      const v = fd.get(k);
      if (typeof v === "string" && v.trim()) return v.trim();
    }
    return "";
  };

  return {
    storeName: pickFd(["storeName", "name", "customerName", "fullName"]),
    phone: pickFd(["phone", "tel", "contact", "mobile"]),
    region: pickFd(["region", "area", "location"]),
    inquiryType: pickFd(["inquiryType", "inquiry", "type", "category"]),
    message: pickFd(["message", "content", "memo", "detail"]),
    source: pickFd(["source", "from", "utm_source", "event_label"]),
  };
}

export async function POST(req: Request) {
  try {
    const { storeName, phone, region, inquiryType, message, source } =
      await readBody(req);

    /**
     * ✅ 필수값 정책 변경
     * - 상호(가게명), 연락처만 필수
     * - 나머지(지역/문의/요청내용)는 비어도 저장 가능
     */
    if (!storeName || !phone) {
      return redirect303(req.url, "/?error=invalid_input#sms-lead");
    }

    const norm = (s: string) => s.replace(/[^0-9]/g, "");
    const phoneDigits = norm(phone);

    // ✅ 4) 딱 1회만 접수(더블클릭/재시도 중복 방지)
    try {
      const db = getAdminDb();
      const lock = await tryAcquireDedupLock({
        db,
        phoneDigits,
        storeName,
        windowMs: 3 * 60 * 1000, // 3분
      });
      if (lock === "duplicate") {
        return redirect303(req.url, "/sms/sent?dup=1");
      }
    } catch (dedupErr: any) {
      console.error("⚠️ DEDUP SKIPPED:", dedupErr?.message || dedupErr);
    }

    // ✅ 빈칸이면 “미지정”으로 처리
    const messageSafe = (message || "").trim() || "미지정";
    const regionSafe = (region || "").trim() || "미지정";
    const inquiryTypeSafe = (inquiryType || "").trim() || "미지정";

    /** ✅ SOLAPI 우선 / 없으면 COOLSMS fallback */
    const apiKey =
      process.env.SOLAPI_API_KEY?.trim() || process.env.COOLSMS_API_KEY?.trim();
    const apiSecret =
      process.env.SOLAPI_API_SECRET?.trim() ||
      process.env.COOLSMS_API_SECRET?.trim();
    const from =
      process.env.SOLAPI_FROM?.trim() || process.env.COOLSMS_FROM?.trim();

    const to = process.env.SOLAPI_TO?.trim() || process.env.COOLSMS_TO?.trim();

    if (!apiKey || !apiSecret || !from || !to) {
      console.error("❌ ENV missing", {
        SOLAPI_API_KEY: !!process.env.SOLAPI_API_KEY,
        SOLAPI_API_SECRET: !!process.env.SOLAPI_API_SECRET,
        SOLAPI_FROM: !!process.env.SOLAPI_FROM,
        SOLAPI_TO: !!process.env.SOLAPI_TO,
        COOLSMS_API_KEY: !!process.env.COOLSMS_API_KEY,
        COOLSMS_API_SECRET: !!process.env.COOLSMS_API_SECRET,
        COOLSMS_FROM: !!process.env.COOLSMS_FROM,
        COOLSMS_TO: !!process.env.COOLSMS_TO,
      });
      return redirect303(req.url, "/?error=server_env#sms-lead");
    }

    const fromN = norm(from);
    const toN = norm(to);

    if (fromN.length < 10 || toN.length < 10) {
      console.error("❌ Phone format invalid", { from, to });
      return redirect303(req.url, "/?error=bad_phone_env#sms-lead");
    }

    const sms = new (CoolSMS as any)(apiKey, apiSecret);

    /**
     * ✅ 1) 첫 행 강조(볼드 대체)  2) 연락처 전체 표기(내 폰 수신용)  3) 지역 표기
     * - SMS는 진짜 Bold 불가 → “【 】” 헤더로 한 줄 강조
     * - 공개용 마스킹(maskPhone)은 Firestore public_leads 쪽에서만 유지
     */
    const text =
      `【李家(이가) 보조금600만/전문철거/HACCP/전기/보수 견적문의】\n` +
      `성함/상호: ${storeName}\n` +
      `연락처: ${formatPhoneFull(phoneDigits) || phone}\n` +
      `지역: ${regionSafe}\n` +
      `문의분야: ${inquiryTypeSafe}\n` +
      `내용: ${messageSafe}\n` +
      (source ? `출처: ${source}\n` : "");

    const result = await sms.sendOne({
      from: fromN,
      to: toN,
      text,
    });

    console.log("✅ SMS SENT result:", result);

    // ✅ Firestore 저장 (기존: dual-write 유지)
    try {
      const db = getAdminDb();

      const hasRealMessage = (message || "").trim().length > 0;
      const regionAuto = hasRealMessage ? detectRegion(message) : "미지정";
      const inquiryTypeAuto = hasRealMessage
        ? detectInquiryType(message)
        : "미지정";

      const finalRegion =
        regionSafe !== "미지정"
          ? regionSafe
          : regionAuto === "미정"
          ? "미지정"
          : regionAuto;

      const finalInquiryType =
        inquiryTypeSafe !== "미지정" ? inquiryTypeSafe : inquiryTypeAuto;

      const displayName = maskStoreNamePublic(storeName);
      const displayPhone = maskPhone(phone); // ✅ 공개표시용은 계속 “마스킹”
      const displayRegion = finalRegion;

      const createdAt = admin.firestore.FieldValue.serverTimestamp();

      await db.collection("tour_secure").add({
        storeName,
        phone,
        phoneLast4: phoneLast4(phone),
        message: messageSafe,
        region: finalRegion,
        inquiryType: finalInquiryType,
        source: (source || "").trim() || "sms",
        displayName,
        displayPhone,
        displayRegion,
        createdAt,
      });

      await db.collection("tour_public").add({
        storeName: displayName,
        phone: displayPhone,
        phoneLast4: phoneLast4(phone),
        region: displayRegion,
        inquiryType: finalInquiryType,
        message: messageSafe,
        source: (source || "").trim() || "sms",
        createdAt,

        displayName,
        displayPhone,
        displayRegion,
      });

      console.log(
        "✅ FIRESTORE SAVED (dual-write): tour_secure + tour_public"
      );
    } catch (firebaseErr: any) {
      console.error("❌ FIRESTORE FAILED:", firebaseErr?.message || firebaseErr);
    }

    return redirect303(req.url, "/sms/sent");
  } catch (err: any) {
    console.error("[sms-lead] error:", err);
    return redirect303(req.url, `/?error=${shortErr(err)}#sms-lead`);
  }
}
