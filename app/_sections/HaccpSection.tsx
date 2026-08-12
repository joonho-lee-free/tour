"use client";

import { useMemo } from "react";

export default function HaccpSection() {
  const haccpFeatures = useMemo(
    () => [
      {
        title: "위생 판넬 & 클린룸 시공",
        desc: "식약처 위생 검열관도 고개 끄덕이는 R곡선 몰딩 및 먼지 하나 안 들어가는 밀폐성 완벽 시공!",
        icon: "🏭",
      },
      {
        title: "에폭시 & 친환경 위생바닥",
        desc: "뜨거운 물, 기름, 내화학성에 끄떡없는 고강도 에폭시! 안 미끄러지는 최고급 바닥재!",
        icon: "✨",
      },
      {
        title: "공조 / 환기 / 에어샤워",
        desc: "양압/음압 공조 및 헤파필터 에어샤워로 미세먼지 및 세균 침입 차단막 형성!",
        icon: "💨",
      },
      {
        title: "스텐 트렌치 & 위생 배수",
        desc: "물 고임·냄새 고임 제로! 청소 쉬운 스텐 트렌치 및 HACCP 전용 배관 특허급 설계!",
        icon: "💧",
      },
    ],
    []
  );

  return (
    <section id="haccp-construction" className="w-full py-4">
      <div className="rounded-3xl border-2 border-emerald-900 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-white p-6 shadow-md md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="rounded-full bg-emerald-900 px-3.5 py-1 text-xs font-black text-emerald-300">
              🏭 신흥건설 HACCP 식품공장 시공
            </span>
            <h3 className="mt-2 text-xl font-black text-slate-900 md:text-3xl">
              "위생검사 탈락? 신흥건설 시공에선 절대 없는 일!"
            </h3>
            <p className="mt-1 text-xs text-slate-600 md:text-sm">
              식품의약품안전처 HACCP 평가 통과 기준을 100% 충족하는 클린룸, 위생 판넬, 에폭시 전문 시공!
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center rounded-xl bg-emerald-700 px-4 py-2.5 text-xs font-black text-white shadow-md">
              HACCP 통과율 100% 자부심!
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {haccpFeatures.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-xs transition hover:border-emerald-500 hover:shadow-sm"
            >
              <div className="text-3xl">{item.icon}</div>
              <h4 className="mt-3 text-base font-black text-slate-900">{item.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
