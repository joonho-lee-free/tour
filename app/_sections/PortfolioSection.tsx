"use client";

import { useMemo, useState } from "react";

type PortfolioItem = {
  id: string;
  category: "철거/원상복구" | "HACCP공사" | "전기/시설보수";
  title: string;
  location: string;
  desc: string;
  badge: string;
  bgGradient: string;
};

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<string>("전체");
  const [selectedCase, setSelectedCase] = useState<PortfolioItem | null>(null);

  const portfolioCases: PortfolioItem[] = useMemo(
    () => [
      {
        id: "demo-1",
        category: "철거/원상복구",
        title: "강남 70평 식당 주방 및 매장 전문 철거",
        location: "서울 강남구",
        desc: "희망리턴패키지 소상공인 정부보조금 600만 원 수혜 지원 완료. 주방 후드, 타일, 집기 수거 및 깔끔한 원상복구",
        badge: "정부보조금 600만 수혜",
        bgGradient: "from-amber-700 via-orange-800 to-slate-900",
      },
      {
        id: "demo-2",
        category: "철거/원상복구",
        title: "판교 IT 오피스 120평 가벽 & 천장 원상복구",
        location: "경기 성남시",
        desc: "소음/진동 최소화 장비 동원. 텍스, 유리 가벽, 바닥 데코타일 철거 및 건물주 검수 원상복구 승인 완료",
        badge: "오피스 원상복구",
        bgGradient: "from-slate-800 via-zinc-800 to-slate-900",
      },
      {
        id: "haccp-1",
        category: "HACCP공사",
        title: "육가공 HACCP 식품공장 150평 클린룸 신축",
        location: "경기 화성시",
        desc: "식약처 HACCP 위생 기준 100% 통과. 불연 위생 판넬, 에폭시 바닥, 에어샤워 및 트렌치 배수 시스템 통합 구축",
        badge: "HACCP 인증 100%",
        bgGradient: "from-emerald-800 via-teal-900 to-slate-900",
      },
      {
        id: "haccp-2",
        category: "HACCP공사",
        title: "베이커리 및 소스 제조공장 위생 리모델링",
        location: "충남 천안시",
        desc: "노후 공장 내부 벽체 판넬 교체, 양압 환기 공조 시스템 및 친환경 위생 우레탄 바닥 시공 완료",
        badge: "위생공장 개선",
        bgGradient: "from-teal-800 via-emerald-900 to-slate-900",
      },
      {
        id: "elec-1",
        category: "전기/시설보수",
        title: "공장 한전 100kW 승압 & 동력 분전반 공사",
        location: "인천 서구",
        desc: "산업용 3상 동력 배선, 메인 차단기 교체, 한전 수속 대행 및 안전 안전검사 완벽 통과",
        badge: "한전 승압 완료",
        bgGradient: "from-blue-800 via-indigo-900 to-slate-900",
      },
      {
        id: "elec-2",
        category: "전기/시설보수",
        title: "상가건물 옥상 우레탄 방수 & 외벽 균열 보수",
        location: "울산 남구",
        desc: "누수 고위험 옥상 4중 우레탄 방수, 고층 외벽 크랙 인젝션 주입 보수 및 3년 사후 AS 보증",
        badge: "옥상 방수 완료",
        bgGradient: "from-indigo-800 via-slate-900 to-slate-900",
      },
    ],
    []
  );

  const filteredCases = useMemo(() => {
    if (activeTab === "전체") return portfolioCases;
    return portfolioCases.filter((c) => c.category === activeTab);
  }, [activeTab, portfolioCases]);

  return (
    <section id="portfolio" className="w-full py-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
              📸 시공 & 철거 현장 사례
            </span>
            <h3 className="mt-2 text-xl font-black text-slate-900 md:text-3xl">
              실제 현장 포트폴리오
            </h3>
            <p className="mt-1 text-xs text-slate-600 md:text-sm">
              정부보조금 지원 철거현장부터 HACCP 인증 공사, 전기 승압 및 방수 보수 현장 실적입니다.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 text-xs">
            {["전체", "철거/원상복구", "HACCP공사", "전기/시설보수"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl px-3.5 py-2 font-bold transition ${
                  activeTab === tab
                    ? "bg-slate-900 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`relative flex h-48 w-full flex-col justify-between bg-gradient-to-br ${item.bgGradient} p-5 text-white`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-white/20 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
                    {item.category}
                  </span>
                  <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[11px] font-black text-slate-900">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <div className="text-xs text-slate-300 font-semibold">{item.location}</div>
                  <h4 className="mt-1 text-base font-black leading-snug text-white group-hover:underline">
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="p-4">
                <p className="line-clamp-2 text-xs leading-relaxed text-slate-600">
                  {item.desc}
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-slate-900">
                  <span>상세 보기</span>
                  <span className="text-amber-600">클릭 ➔</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Detail Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 shadow-2xl transition"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold text-amber-900">
                {selectedCase.badge}
              </span>
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <div className="mt-4">
              <div className="text-xs font-bold text-slate-500">{selectedCase.location} | {selectedCase.category}</div>
              <h3 className="mt-1 text-xl font-black text-slate-900">{selectedCase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{selectedCase.desc}</p>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
              💡 <strong>전문 시공 문의</strong>: 본 사례와 유사한 현장의 **무료 방문 견적** 및 **정부보조금(최대 600만원) 지원 자격 조회**를 원하시면 아래 상담 폼을 제출해 주세요.
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href="#sms-lead"
                onClick={() => setSelectedCase(null)}
                className="flex-1 rounded-xl bg-slate-900 py-3 text-center text-xs font-bold text-white transition hover:bg-slate-800"
              >
                견적 및 보조금 문의하기
              </a>
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="rounded-xl border border-slate-300 px-4 py-3 text-xs font-bold text-slate-700"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
