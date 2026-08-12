"use client";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "상담 & 무료 방문 견적",
      desc: "현장 상태 확인, 공사 분야(철거/HACCP/전기/보수) 및 정부 보조금(최대 600만 원) 지원 대상 무료 자격 조회",
    },
    {
      num: "02",
      title: "도면 설계 & 투명한 견적",
      desc: "HACCP 위생 동선 설계, 철거 공정표, 전기 승압 용량 계산 및 세부 투명 견적서 제공",
    },
    {
      num: "03",
      title: "보조금 맞춤 컨설팅 & 시공 준비",
      desc: "소상공인 점포철거 보조금 수혜 가이드 및 안전 시공/철거를 위한 준비 완수",
    },
    {
      num: "04",
      title: "직영 시공 & 안전 철거",
      desc: "소음/진동 최소화 전문 철거, HACCP 판넬/바닥 시공, 전기 승압/배선, 방수 보수 정밀 작업",
    },
    {
      num: "05",
      title: "준공 검사 & 보조금 수령 지원",
      desc: "건물주/위생 검사 원상복구 승인, 철거 완료 보고서 제출 및 보조금 수령 최종 케어",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
            🧾 SYSTEMATIC PROCESS
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
            원스톱 철거 · 시공 · 보조금 5단계 프로세스
          </h2>
          <p className="mt-1 text-xs text-slate-600 md:text-sm">
            상담 접수부터 무료 방문견적, 보조금 맞춤 컨설팅, 안전 시공, 사후 AS 관리까지 체계적으로 진행됩니다.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <div
            key={s.num}
            className="relative rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition hover:border-amber-300 hover:bg-white"
          >
            <div className="text-xl font-black text-amber-600">{s.num}</div>
            <h3 className="mt-2 text-base font-bold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}