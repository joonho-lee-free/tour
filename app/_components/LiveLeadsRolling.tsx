"use client";

import { useEffect, useState } from "react";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../lib/firebaseClient";

type LeadItem = {
  id: string;
  location: string;
  store: string;
  status: string;
};

// 부울경 실제 지역 기반 깔끔한 접수 현황 (시간 표시 완전 배제)
const DEFAULT_REALTIME_LEADS: LeadItem[] = [
  {
    id: "lead-1",
    location: "부산 사하구",
    store: "OO식당",
    status: "지원금 자격 조회 및 실측 접수",
  },
  {
    id: "lead-2",
    location: "창원 성산구",
    store: "OO카페",
    status: "무료 현장 실측 신청",
  },
  {
    id: "lead-3",
    location: "김해 삼계동",
    store: "OO학원",
    status: "원상복구 및 서류 대행 접수",
  },
  {
    id: "lead-4",
    location: "양산 물금읍",
    store: "OO의류매장",
    status: "정부지원금 600만 원 대상 승인",
  },
  {
    id: "lead-5",
    location: "부산 해운대구",
    store: "OO베이커리",
    status: "무료 현장 실측 예약",
  },
  {
    id: "lead-6",
    location: "마산 회원구",
    store: "OO호프",
    status: "원상복구 및 서류 대행 접수",
  },
  {
    id: "lead-7",
    location: "부산 부산진구",
    store: "OO헤어샵",
    status: "지원금 자격 조회 및 실측 접수",
  },
  {
    id: "lead-8",
    location: "김해 내외동",
    store: "OO당구장",
    status: "무료 현장 실측 신청",
  },
];

export default function LiveLeadsRolling() {
  const [leads, setLeads] = useState<LeadItem[]>(DEFAULT_REALTIME_LEADS);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Firestore 실시간 데이터 연동 (부울경 실제 접수건만 안전하게 필터링)
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
            const firestoreItems: LeadItem[] = [];

            snap.docs.forEach((doc) => {
              const d = doc.data() as any;
              const region = (d.displayRegion || "").trim();
              const name = (d.displayName || "").trim();

              // 영문 테스트 데이터(Madagascar 등) 배제하고 유효한 데이터만 수집
              const isInvalid =
                !region ||
                /madagascar|test|sample|[a-zA-Z]{4,}/i.test(region) ||
                /test|sample|[a-zA-Z]{5,}/i.test(name);

              if (!isInvalid) {
                firestoreItems.push({
                  id: doc.id,
                  location: region,
                  store: name || "상가점포",
                  status: "지원금 자격 조회 및 실측 접수",
                });
              }
            });

            if (firestoreItems.length > 0) {
              setLeads([...firestoreItems, ...DEFAULT_REALTIME_LEADS].slice(0, 8));
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
        {/* 좌측: 실시간 접수 롤링 뱃지 + 내용 */}
        <div className="flex items-center gap-2 overflow-hidden min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] sm:text-xs font-black text-emerald-300 bg-emerald-950/90 border border-emerald-500/50 px-2 py-0.5 rounded-md whitespace-nowrap">
              실시간 접수
            </span>
          </div>

          {/* 롤링되는 단일 텍스트 (시간 없이 깔끔하게 접수 내용만 노출) */}
          <div className="overflow-hidden min-w-0 flex-1">
            <div
              key={activeItem.id}
              className="flex items-center gap-1.5 text-xs sm:text-sm truncate animate-fade-in"
            >
              <strong className="text-white font-bold truncate">
                {activeItem.location} {activeItem.store}
              </strong>
              <span className="text-slate-500">·</span>
              <span className="text-amber-400 font-semibold truncate">
                {activeItem.status}
              </span>
            </div>
          </div>
        </div>

        {/* 우측 보조 문구 (051-714-3396 및 조회하기 버튼은 제외) */}
        <div className="hidden md:flex items-center gap-1.5 text-[11px] text-slate-400 flex-shrink-0">
          <span>🔥</span>
          <span className="text-slate-300 font-medium">부울경 전지역 출장 방문 실측</span>
        </div>
      </div>
    </div>
  );
}
