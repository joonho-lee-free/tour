"use client";

import { useMemo } from "react";

export default function RepairSection() {
  const electricalServices = useMemo(
    () => [
      {
        title: "한전 전기 승압 공사",
        desc: "에어컨 틀면 차단기 툭 떨어지나요? 한전 수속 지원부터 계약전력 빵빵하게 증설 완료!",
        badge: "승압 해결사",
      },
      {
        title: "동력 전기 & 분전반 시공",
        desc: "3상 380V/220V 산업용 동력배선 및 과부하 안 걸리는 기적의 분전반 맞춤 설계!",
        badge: "동력/산업 전문",
      },
      {
        title: "배선 · 조명 · 누전 잡기",
        desc: "노후 배선 싹 교체하고 감전/화재 위험 누전 100% 탐지 및 짱짱한 LED 조명 시공!",
        badge: "누전 잡기 달인",
      },
    ],
    []
  );

  const repairServices = useMemo(
    () => [
      {
        title: "옥상 & 외벽 방수 공사",
        desc: "장마철에 물 세서 대야 받아놓으셨죠? 신흥건설 우레탄 4중 방수로 물 한 방울 안 샙니다!",
        badge: "철통 4중 방수",
      },
      {
        title: "균열 보수 & 구조 보강",
        desc: "금 간 콘크리트에 고압 인젝션 주입! 신축 건물 급으로 짱짱하게 인공호흡 보강!",
        badge: "구조 안심 보강",
      },
      {
        title: "시설 수리 & 대개조 리모델링",
        desc: "찌그러진 샌드위치 판넬, 고장 난 셔터문 교체하고 건물 신상급으로 대개조!",
        badge: "시설 대개조",
      },
    ],
    []
  );

  return (
    <section id="repair-electrical" className="w-full py-4">
      <div className="rounded-3xl border-2 border-blue-900 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-white p-6 shadow-md md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="rounded-full bg-blue-900 px-3.5 py-1 text-xs font-black text-blue-300">
              ⚡ 신흥건설 전기 & 방수 보수
            </span>
            <h3 className="mt-2 text-xl font-black text-slate-900 md:text-3xl">
              "차단기 픽픽 떨어지고 옥상 비 샐 땐? 땜빵 공사 말고 신흥건설!"
            </h3>
            <p className="mt-1 text-xs text-slate-600 md:text-sm">
              전기 승압·동력배선부터 옥상/외벽 방수, 균열 보수, 시설 리모델링까지 안전 베테랑 직영팀 직접 시공!
            </p>
          </div>
        </div>

        {/* 전기공사 블록 */}
        <div className="mt-6">
          <div className="flex items-center gap-2 text-sm font-black text-blue-900">
            <span>⚡ 전기공사 파트 (승압 · 동력 · 배선)</span>
            <span className="h-0.5 flex-1 bg-blue-200"></span>
          </div>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {electricalServices.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-200 bg-white p-5 shadow-xs transition hover:border-blue-500"
              >
                <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[11px] font-black text-blue-800">
                  {item.badge}
                </span>
                <h4 className="mt-2 text-base font-black text-slate-900">{item.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 시설보수 & 방수 블록 */}
        <div className="mt-8">
          <div className="flex items-center gap-2 text-sm font-black text-indigo-900">
            <span>🛠️ 시설 보수 & 방수 / 리모델링 파트</span>
            <span className="h-0.5 flex-1 bg-indigo-200"></span>
          </div>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {repairServices.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-indigo-200 bg-white p-5 shadow-xs transition hover:border-indigo-500"
              >
                <span className="rounded-md bg-indigo-100 px-2 py-0.5 text-[11px] font-black text-indigo-800">
                  {item.badge}
                </span>
                <h4 className="mt-2 text-base font-black text-slate-900">{item.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
