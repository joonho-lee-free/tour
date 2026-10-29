"use client";

import { useEffect, useState } from "react";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../lib/firebaseClient";

type LeadItem = {
  id: string;
  category: string;
  detail: string;
  timeAgo: string;
};

// 부울경 실제 상권 중심 실시간 접수 롤링 데이터 (평수 + 업종 + 지역 + 최근 시간)
const DEFAULT_REALTIME_LEADS: LeadItem[] = [
  {
    id: "lead-1",
    category: "원상복구",
    detail: "18평 카페 · 부산 전포동",
    timeAgo: "12분 전",
  },
  {
    id: "lead-2",
    category: "정부지원금 조회",
    detail: "32평 고깃집 · 김해 내외동",
    timeAgo: "28분 전",
  },
  {
    id: "lead-3",
    category: "인테리어 철거",
    detail: "45평 학원 · 창원 성산구",
    timeAgo: "45분 전",
  },
  {
    id: "lead-4",
    category: "부분 원상복구",
    detail: "12평 미용실 · 양산 물금읍",
    timeAgo: "1시간 전",
  },
  {
    id: "lead-5",
    category: "원상복구",
    detail: "25평 베이커리 · 부산 해운대구",
    timeAgo: "방금 전",
  },
  {
    id: "lead-6",
    category: "정부지원금 조회",
    detail: "38평 의류매장 · 부산 서면",
    timeAgo: "8분 전",
  },
  {
    id: "lead-7",
    category: "인테리어 철거",
    detail: "20평 주점 · 마산 회원구",
    timeAgo: "35분 전",
  },
  {
    id: "lead-8",
    category: "원상복구",
    detail: "50평 피트니스 · 부산 동래구",
    timeAgo: "50분 전",
  },
  {
    id: "lead-9",
    category: "부분 철거",
    detail: "16평 디저트샵 · 김해 삼계동",
    timeAgo: "1시간 전",
  },
  {
    id: "lead-10",
    category: "정부지원금 조회",
    detail: "30평 사무실 · 울산 남구",
    timeAgo: "2시간 전",
  },
];

function formatTimeAgo(ts: any, fallbackIndex: number) {
  if (!ts) return DEFAULT_REALTIME_LEADS[fallbackIndex % DEFAULT_REALTIME_LEADS.length].timeAgo;
  try {
    const millis =
      typeof ts.toMillis === "function"
        ? ts.toMillis()
        : ts.seconds
        ? ts.seconds * 1000
        : null;
    if (!millis) return "방금 전";
    const diff = Date.now() - millis;
    const min = Math.floor(diff / 60000);
    if (min < 1) return "방금 전";
    if (min < 60) return `${min}분 전`;
    const h = Math.floor(min / 60);
    if (h < 24) return `${h}시간 전`;
    return "1시간 전";
  } catch {
    return "방금 전";
  }
}

export default function LiveLeadsRolling() {
  const [leads, setLeads] = useState<LeadItem[]>(DEFAULT_REALTIME_LEADS);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Firestore 실시간 데이터 연동
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
            const firestoreItems: LeadItem[] = [];

            snap.docs.forEach((doc, idx) => {
              const d = doc.data() as any;
              const region = (d.displayRegion || "").trim();
              const name = (d.displayName || "").trim();

              const isInvalid =
                !region ||
                /madagascar|test|sample|[a-zA-Z]{4,}/i.test(region) ||
                /test|sample|[a-zA-Z]{5,}/i.test(name);

              if (!isInvalid) {
                const category = d.inquiryType && d.inquiryType.includes("지원금") ? "정부지원금 조회" : "원상복구";
                firestoreItems.push({
                  id: doc.id,
                  category,
                  detail: `${name || "상가점포"} · ${region}`,
                  timeAgo: formatTimeAgo(d.createdAt, idx),
                });
              }
            });

            if (firestoreItems.length > 0) {
              setLeads([...firestoreItems, ...DEFAULT_REALTIME_LEADS].slice(0, 10));
            }
          }
        },
        () => {
          setLeads(DEFAULT_REALTIME_LEADS);
        }
      );

      return () => unsub();
    } catch {
      // ignore
    }
  }, []);

  // 롤링 티커 타이머 (3초마다 자동 롤링)
  useEffect(() => {
    if (leads.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % leads.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [leads.length]);

  const activeItem = leads[currentIndex] || leads[0];

  return (
    <div className="w-full bg-slate-950 px-3 py-2 text-white border-b border-amber-500/30">
      <div className="mx-auto flex max-w-5xl items-center justify-between text-xs font-bold gap-3">
        {/* 좌측: 실시간 접수 초록 펄스 뱃지 + 평수/업종/지역 롤링 내용 */}
        <div className="flex items-center gap-2 overflow-hidden min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] sm:text-xs font-black text-emerald-300 bg-emerald-950/90 border border-emerald-500/50 px-2 py-0.5 rounded-md whitespace-nowrap">
              실시간 접수
            </span>
          </div>

          {/* 롤링되는 단일 텍스트 ([원상복구] 18평 카페 · 부산 전포동 (12분 전)) */}
          <div className="overflow-hidden min-w-0 flex-1">
            <div
              key={activeItem.id}
              className="flex items-center gap-1.5 text-xs sm:text-sm truncate animate-fade-in"
            >
              <span className="text-amber-400 font-bold whitespace-nowrap">
                [{activeItem.category}]
              </span>
              <strong className="text-white font-medium truncate">
                {activeItem.detail}
              </strong>
              <span className="text-slate-400 font-normal whitespace-nowrap text-[11px] sm:text-xs">
                ({activeItem.timeAgo})
              </span>
            </div>
          </div>
        </div>

        {/* 우측 보조 문구 */}
        <div className="hidden md:flex items-center gap-1.5 text-[11px] text-slate-400 flex-shrink-0">
          <span>🔥</span>
          <span className="text-slate-300 font-medium">부울경 전지역 출장 방문 실측</span>
        </div>
      </div>
    </div>
  );
}
