"use client";

import { useEffect, useState } from "react";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../lib/firebaseClient";

type LeadItem = {
  id: string;
  location: string;
  store: string;
  status: string;
  timeAgo: string;
};

const DEFAULT_REALTIME_LEADS: LeadItem[] = [
  {
    id: "lead-1",
    location: "부산 해운대구",
    store: "OO식당",
    status: "정부지원금 420만 원 대상 확인",
    timeAgo: "12분 전",
  },
  {
    id: "lead-2",
    location: "창원 성산구",
    store: "OO카페",
    status: "무료 현장 실측 신청 완료",
    timeAgo: "34분 전",
  },
  {
    id: "lead-3",
    location: "김해 내외동",
    store: "OO학원",
    status: "원상복구 및 서류 대행 접수",
    timeAgo: "1시간 전",
  },
  {
    id: "lead-4",
    location: "양산 물금읍",
    store: "OO의류매장",
    status: "정부지원금 600만 원 한도 승인",
    timeAgo: "2시간 전",
  },
  {
    id: "lead-5",
    location: "부산 부산진구",
    store: "OO주점",
    status: "무료 방문 실측 예약 완료",
    timeAgo: "2시간 전",
  },
  {
    id: "lead-6",
    location: "마산 회원구",
    store: "OO베이커리",
    status: "원상복구 지원금 자격 승인",
    timeAgo: "3시간 전",
  },
];

export default function LiveLeadsRolling() {
  const [leads, setLeads] = useState<LeadItem[]>(DEFAULT_REALTIME_LEADS);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Firestore 실시간 데이터 연동 (있을 경우 결합)
  useEffect(() => {
    try {
      const q = query(
        collection(db, "tour_public"),
        orderBy("createdAt", "desc"),
        limit(8)
      );

      const unsub = onSnapshot(
        q,
        (snap) => {
          if (!snap.empty) {
            const firestoreItems: LeadItem[] = snap.docs.map((doc) => {
              const d = doc.data() as any;
              const diffMin = d.createdAt
                ? Math.floor((Date.now() - d.createdAt.toMillis()) / 60000)
                : 10;
              const timeStr =
                diffMin < 1
                  ? "방금 전"
                  : diffMin < 60
                  ? `${diffMin}분 전`
                  : `${Math.floor(diffMin / 60)}시간 전`;

              return {
                id: doc.id,
                location: d.displayRegion || "부울경",
                store: d.displayName || "상가점포",
                status: "지원금 자격 조회 및 실측 접수",
                timeAgo: timeStr,
              };
            });

            // 기본 데이터와 병합하여 풍성하게 노출
            setLeads([...firestoreItems, ...DEFAULT_REALTIME_LEADS].slice(0, 8));
          }
        },
        () => {
          // Firebase 에러 시 기본 부울경 데이터 유지
          setLeads(DEFAULT_REALTIME_LEADS);
        }
      );

      return () => unsub();
    } catch {
      // ignore
    }
  }, []);

  // 롤링 티커 타이머 (3초마다 자동 슬라이드)
  useEffect(() => {
    if (leads.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % leads.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [leads.length]);

  const activeItem = leads[currentIndex] || leads[0];

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-3.5 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* 상단 텍스트 롤링 배너 */}
        <div className="flex items-center justify-between gap-3 overflow-hidden rounded-xl bg-white px-3.5 py-2.5 shadow-xs border border-slate-200/80">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] sm:text-xs font-black text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md">
              실시간 접수
            </span>
          </div>

          {/* 롤링되는 단일 텍스트 */}
          <div className="flex-1 overflow-hidden">
            <div
              key={activeItem.id}
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 truncate animate-fade-in"
            >
              <strong className="text-slate-950 font-bold truncate">
                {activeItem.location} {activeItem.store}
              </strong>
              <span className="text-slate-400">·</span>
              <span className="text-amber-700 font-semibold truncate">
                {activeItem.status}
              </span>
              <span className="text-[11px] text-slate-500 ml-auto whitespace-nowrap hidden xs:inline">
                ({activeItem.timeAgo})
              </span>
            </div>
          </div>

          <span className="text-[11px] text-slate-500 whitespace-nowrap xs:hidden">
            {activeItem.timeAgo}
          </span>
        </div>

        {/* 신뢰 강조 문구 */}
        <p className="mt-1.5 text-center text-[11px] text-slate-600 font-medium">
          🔥 지금도 부울경 사장님들이 실시간으로 지원금 혜택을 챙겨받고 계십니다.
        </p>
      </div>
    </section>
  );
}
