"use client";

import { useMemo, useState } from "react";

export default function BeforeAfterSection() {
  const cases = useMemo(
    () => [
      {
        id: "restaurant",
        category: "식당 · 주방",
        title: "부산 식당 45평 주방 덕트 & 타일 철거",
        subsidy: "보조금 600만 원 수혜 완료",
        beforeTag: "공사 전 (기름때 주방/후드)",
        afterTag: "공사 후 (원상복구 시멘트 마감)",
        desc: "대형 덕트 3기, 주방 후드, 바닥 방수 턱 철거 후 시멘트 평탄화 깔끔 마감 완료",
        icon: "🍳",
      },
      {
        id: "office",
        category: "사무실 · 학원",
        title: "해운대 사무실 30평 가벽 & 천장 텍스 철거",
        subsidy: "보조금 600만 원 수혜 완료",
        beforeTag: "공사 전 (석고 가벽/노후 조명)",
        afterTag: "공사 후 (건물주 승인 원상복구)",
        desc: "스터드 석고 가벽 12m 철거, 천장 텍스 원상복구 및 LED 레이스웨이 조명 정리",
        icon: "🏢",
      },
      {
        id: "factory",
        category: "공장 · 물류창고",
        title: "강서구 공장 120평 샌드위치 판넬 & H빔 철거",
        subsidy: "보조금 600만 원 수혜 완료",
        beforeTag: "공사 전 (노후 판넬/중장비)",
        afterTag: "공사 후 (바닥 에폭시 원상복구)",
        desc: "중장비 동원 샌드위치 판넬 철거, H빔 철거 및 폐기물 15톤 청소 배출 완료",
        icon: "🏭",
      },
      {
        id: "cafe",
        category: "카페 · 디저트",
        title: "수영구 카페 25평 바닥 타일 & 카운터 철거",
        subsidy: "보조금 500만 원 수혜 완료",
        beforeTag: "공사 전 (목재 카운터/타일)",
        afterTag: "공사 후 (깔끔 원상복구)",
        desc: "목재 카운터 부수기, 붙박이 의자 철거, 바닥 데코타일 철거 및 시멘트 바닥 마감",
        icon: "☕",
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(cases[0].id);
  const activeCase = cases.find((c) => c.id === activeId) || cases[0];

  return (
    <section className="w-full py-6">
      <div className="rounded-3xl border-2 border-slate-900 bg-white p-6 shadow-sm md:p-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="rounded-full bg-slate-900 px-3.5 py-1 text-xs font-black text-amber-400">
              📸 무촌 스타일 시공 갤러리
            </span>
            <h2 className="mt-3 text-2xl font-black text-slate-900 md:text-3xl">
              BEFORE & AFTER 완벽 원상복구 현장
            </h2>
            <p className="mt-1 text-xs text-slate-600 md:text-sm">
              건물주 검수 승인 100%! 철거 전과 후의 놀라운 변화를 확인해보세요.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {cases.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveId(c.id)}
                className={`rounded-xl px-3.5 py-2 text-xs font-black transition ${
                  activeId === c.id
                    ? "bg-slate-900 text-amber-400 shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {c.icon} {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* 선택된 사례 카드 */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="rounded-md bg-red-100 px-2.5 py-0.5 text-xs font-black text-red-700">
                {activeCase.subsidy}
              </span>
              <h3 className="mt-2 text-xl font-black text-slate-900">
                {activeCase.title}
              </h3>
              <p className="mt-1 text-xs text-slate-600">{activeCase.desc}</p>
            </div>
          </div>

          {/* Before / After 비교 시각화 카드 */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {/* BEFORE */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-red-200 bg-red-950/90 p-5 text-white shadow">
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-red-600 px-3 py-1 text-xs font-black text-white">
                  BEFORE (철거 전)
                </span>
                <span className="text-xl">🛠️</span>
              </div>
              <div className="mt-4 rounded-xl bg-slate-900/80 p-4 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="font-bold text-red-400">상태: {activeCase.beforeTag}</div>
                <div>• 노후 집기류, 가벽, 불법 건축물 방치</div>
                <div>• 주방 타일, 덕트 기름때 및 폐기물 가득</div>
                <div>• 건물주 임대차 원상복구 이행 요구 상태</div>
              </div>
            </div>

            {/* AFTER */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-300 bg-emerald-950/90 p-5 text-white shadow">
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-black text-slate-950">
                  AFTER (철거 후)
                </span>
                <span className="text-xl">✨</span>
              </div>
              <div className="mt-4 rounded-xl bg-slate-900/80 p-4 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="font-bold text-emerald-400">결과: {activeCase.afterTag}</div>
                <div>• 폐기물 100% 수거 및 깔끔 시멘트 평탄화</div>
                <div>• 조물주 건물주 검수 승인 100% 패스!</div>
                <div>• <strong>정부 보조금 {activeCase.subsidy} 수령 완료!</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
