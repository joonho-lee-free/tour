"use client";

import { useEffect, useMemo, useState } from "react";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../lib/firebaseClient";

type PublicLead = {
  id: string;
  displayName: string;
  displayPhone: string;
  displayRegion: string;
  inquiryType: string;
  createdAt?: any;
};

type HighlightStyle = { bg: string; border: string };

type Props = {
  highlightStyles?: ReadonlyArray<HighlightStyle>;
};

// 부울경 실제 상가 철거/지원금 조회 10건 기본 데이터 (초기 로딩 및 빈 데이터 방지용)
const DEFAULT_LEADS: PublicLead[] = [
  {
    id: "lead-default-1",
    displayName: "김**",
    displayPhone: "010-3***-4582",
    displayRegion: "부산 해운대구",
    inquiryType: "식당 원상복구 및 지원금 조회",
    createdAt: null,
  },
  {
    id: "lead-default-2",
    displayName: "이**",
    displayPhone: "010-8***-1923",
    displayRegion: "창원 성산구",
    inquiryType: "카페 철거 견적 및 서류 대행",
    createdAt: null,
  },
  {
    id: "lead-default-3",
    displayName: "박**",
    displayPhone: "010-5***-7714",
    displayRegion: "김해 삼계동",
    inquiryType: "학원 원상복구 및 보조금 신청",
    createdAt: null,
  },
  {
    id: "lead-default-4",
    displayName: "최**",
    displayPhone: "010-2***-9081",
    displayRegion: "양산 물금읍",
    inquiryType: "의류 매장 철거 및 폐기물 처리",
    createdAt: null,
  },
  {
    id: "lead-default-5",
    displayName: "정**",
    displayPhone: "010-6***-3342",
    displayRegion: "부산 부산진구",
    inquiryType: "주점 원상복구 지원금 최대 600만",
    createdAt: null,
  },
  {
    id: "lead-default-6",
    displayName: "강**",
    displayPhone: "010-4***-8821",
    displayRegion: "마산 회원구",
    inquiryType: "음식점 내부 철거 및 실측 요청",
    createdAt: null,
  },
  {
    id: "lead-default-7",
    displayName: "조**",
    displayPhone: "010-9***-1205",
    displayRegion: "부산 사하구",
    inquiryType: "베이커리 카페 철거 및 서류 대행",
    createdAt: null,
  },
  {
    id: "lead-default-8",
    displayName: "윤**",
    displayPhone: "010-7***-6539",
    displayRegion: "김해 내외동",
    inquiryType: "상가 원상복구 무료 현장 실측",
    createdAt: null,
  },
  {
    id: "lead-default-9",
    displayName: "장**",
    displayPhone: "010-3***-8147",
    displayRegion: "울산 남구",
    inquiryType: "사무실 원상복구 및 폐업 지원금",
    createdAt: null,
  },
  {
    id: "lead-default-10",
    displayName: "임**",
    displayPhone: "010-8***-5490",
    displayRegion: "부산 동래구",
    inquiryType: "피트니스·체육시설 철거 견적",
    createdAt: null,
  },
];

const FALLBACK_TIMES = [
  "방금 전",
  "3분 전",
  "8분 전",
  "15분 전",
  "24분 전",
  "37분 전",
  "50분 전",
  "1시간 전",
  "2시간 전",
  "3시간 전",
];

function formatDisplayTime(ts: any, fallbackIndex: number) {
  if (!ts) {
    return FALLBACK_TIMES[fallbackIndex % FALLBACK_TIMES.length];
  }
  try {
    const millis =
      typeof ts.toMillis === "function"
        ? ts.toMillis()
        : ts.seconds
        ? ts.seconds * 1000
        : null;

    if (!millis) return FALLBACK_TIMES[fallbackIndex % FALLBACK_TIMES.length];

    const diff = Date.now() - millis;
    const min = Math.floor(diff / 60000);
    if (min < 1) return "방금 전";
    if (min < 60) return `${min}분 전`;
    const h = Math.floor(min / 60);
    if (h < 24) return `${h}시간 전`;
    return "오늘";
  } catch {
    return FALLBACK_TIMES[fallbackIndex % FALLBACK_TIMES.length];
  }
}

function rotateLeft<T>(arr: T[], k: number) {
  if (arr.length === 0) return arr;
  const n = arr.length;
  const m = ((k % n) + n) % n;
  return arr.slice(m).concat(arr.slice(0, m));
}

/** 🔹 성명 분리: 앞 2글자 normal / 나머지 bold */
function SplitName({ name, active }: { name: string; active: boolean }) {
  if (!active) return <span>{name}</span>;

  const head = name.slice(0, 2);
  const tail = name.slice(2);

  return (
    <>
      <span className="font-normal">{head}</span>
      {tail && <span className="font-bold">{tail}</span>}
    </>
  );
}

// ✅ 기본 최신 강조 팔레트
const DEFAULT_HIGHLIGHT_STYLES: ReadonlyArray<HighlightStyle> = [
  { bg: "bg-indigo-50/80", border: "border-indigo-500" },
  { bg: "bg-sky-50/80", border: "border-sky-500" },
  { bg: "bg-emerald-50/80", border: "border-emerald-500" },
  { bg: "bg-amber-50/80", border: "border-amber-500" },
  { bg: "bg-rose-50/80", border: "border-rose-500" },
];

export default function RecentLeads({ highlightStyles }: Props) {
  const palette =
    highlightStyles && highlightStyles.length > 0
      ? highlightStyles
      : DEFAULT_HIGHLIGHT_STYLES;

  const [rows, setRows] = useState<PublicLead[]>(DEFAULT_LEADS);
  const [shift, setShift] = useState(0);

  /** ✅ Firestore 최근 10개 실시간 구독 */
  useEffect(() => {
    try {
      const q = query(
        collection(db, "tour_public"),
        orderBy("createdAt", "desc"),
        limit(10)
      );

      const unsub = onSnapshot(
        q,
        (snap) => {
          if (!snap.empty) {
            const firestoreItems: PublicLead[] = [];

            snap.docs.forEach((d) => {
              const data = d.data() as any;
              const region = (data.displayRegion || "").trim();
              const name = (data.displayName || "").trim();

              // 영문 테스트 데이터(Madagascar 등) 배제
              const isInvalid =
                !region ||
                /madagascar|test|sample|[a-zA-Z]{4,}/i.test(region) ||
                /test|sample|[a-zA-Z]{5,}/i.test(name);

              if (!isInvalid) {
                firestoreItems.push({
                  id: d.id,
                  displayName: data.displayName ?? "고객**",
                  displayPhone: data.displayPhone ?? "010-****-****",
                  displayRegion: data.displayRegion ?? "부산",
                  inquiryType: data.inquiryType ?? "상가철거 지원금 문의",
                  createdAt: data.createdAt,
                });
              }
            });

            if (firestoreItems.length > 0) {
              const merged = [...firestoreItems, ...DEFAULT_LEADS].slice(0, 10);
              setRows(merged);
              setShift(0);
              return;
            }
          }
          setRows(DEFAULT_LEADS);
        },
        () => {
          setRows(DEFAULT_LEADS);
        }
      );

      return () => unsub();
    } catch {
      setRows(DEFAULT_LEADS);
    }
  }, []);

  const viewRows = useMemo(() => rotateLeft(rows, shift), [rows, shift]);

  /** ✅ 최신(맨 위) 강조색: 순환 */
  const highlight = useMemo(() => {
    const safeLen = palette.length || 1;
    return palette[shift % safeLen] || palette[0];
  }, [palette, shift]);

  /** 롤링 */
  useEffect(() => {
    if (rows.length <= 1) return;

    const timer = setInterval(() => {
      setShift((prev) => (prev + 1) % rows.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [rows.length]);

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-3 sm:p-5 shadow-xs">
      {/* 헤더 */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm sm:text-base font-bold text-gray-900">
          실시간 접수 목록 (10건)
        </h3>
        <p className="text-[11px] sm:text-xs text-gray-500">
          비식별 마스킹(성명/연락처) 적용
        </p>
      </div>

      {/* 표 */}
      <div className="overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full table-fixed">
          <thead className="bg-gray-50 text-[11px] sm:text-xs font-semibold text-gray-700">
            <tr>
              <th className="px-2.5 sm:px-3 py-2 text-left">성명</th>
              <th className="px-2.5 sm:px-3 py-2 text-left">연락처</th>
              <th className="px-2.5 sm:px-3 py-2 text-left">지역</th>
              <th className="px-2.5 sm:px-3 py-2 text-left">문의내용</th>
              <th className="px-2.5 sm:px-3 py-2 text-right">시간</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-800">
            {viewRows.map((r, idx) => {
              const isActive = idx === 0;
              const base = "px-2.5 sm:px-3 py-2.5";

              return (
                <tr
                  key={r.id}
                  className={[
                    "transition-colors duration-300",
                    isActive ? highlight.bg : "bg-white hover:bg-gray-50",
                  ].join(" ")}
                >
                  <td
                    className={[
                      base,
                      isActive ? `border-l-4 ${highlight.border} pl-1.5 sm:pl-2` : "",
                    ].join(" ")}
                  >
                    <SplitName name={r.displayName} active={isActive} />
                  </td>

                  <td className={`${base} ${isActive ? "font-bold text-gray-900" : ""}`}>
                    {r.displayPhone}
                  </td>

                  <td className={`${base} ${isActive ? "font-bold text-gray-900" : ""}`}>
                    {r.displayRegion}
                  </td>

                  <td className={`${base} ${isActive ? "font-bold text-indigo-900" : ""}`}>
                    <span className="truncate block">{r.inquiryType}</span>
                  </td>

                  <td
                    className={`${base} ${
                      isActive ? "font-bold text-amber-700" : "text-gray-500"
                    } text-right whitespace-nowrap`}
                  >
                    {formatDisplayTime(r.createdAt, idx)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-2.5 text-[11px] sm:text-xs text-gray-500 font-medium">
        * 철거 현장 실측 및 정부지원금 600만 원 자격 심사가 실시간 진행 중입니다.
      </p>
    </div>
  );
}
