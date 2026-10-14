"use client";

const PROMISES = [
  {
    icon: "🚫",
    badge: "비용 투명성",
    title: "추가금 0원 보증",
    desc: "현장 무료 실측 후 확정된 계약 금액 외에, 철거 당일 추가 비용을 일체 요구하지 않습니다.",
    highlight: "당일 추가금 100% 없음",
  },
  {
    icon: "📄",
    badge: "100% 무료 대행",
    title: "서류 탈락 걱정 NO",
    desc: "소상공인시장진흥공단 필수 제출 증빙 서류와 사진을 전문가가 1:1로 완벽 무료 대행합니다.",
    highlight: "복잡한 서류 스트레스 제로",
  },
  {
    icon: "🏛️",
    badge: "공식 정산",
    title: "공식 정산 증빙 완벽 발급",
    desc: "정부 지원금 수령에 필요한 전자세금계산서, 이체증빙, 폐기물 처리확인서를 즉시 발행합니다.",
    highlight: "국가지원금 정상 입금 보장",
  },
];

const ROADMAP_STEPS = [
  {
    step: "01",
    title: "무료 방문 실측",
    desc: "부울경 전지역 담당자가 0원으로 현장 방문하여 실측 및 맞춤 지원금 견적 산출",
    badge: "부울경 전지역 0원",
  },
  {
    step: "02",
    title: "서류 무료 접수",
    desc: "점포철거비 지원사업 자격 확인부터 공단 필수 제출 서류 및 전후 사진 100% 대행",
    badge: "서류 100% 무료 대행",
  },
  {
    step: "03",
    title: "완공 및 지원금 수령",
    desc: "건물주 완벽 검수 승인 완료 후, 대표님 통장으로 최대 600만 원 지원금 입금 확인",
    badge: "최대 600만 원 입금",
  },
];

export default function TrustPromiseRoadmap() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-4xl">
        {/* 파트 1: 안심 3대 약속 (카드형 다이어트) */}
        <div>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-black text-amber-600 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Safe & Trust Guarantee
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              대표님을 위한 안심 3대 약속
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              철거 업계의 불투명한 추가 요금과 번거로운 서류 걱정을 말끔히 해결해 드립니다.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {PROMISES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 transition hover:border-amber-400 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl">{item.icon}</span>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-200/70 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-black text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 border-t border-slate-200 pt-3 text-[11px] font-bold text-amber-700">
                  ✓ {item.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 파트 2: 3단계 로드맵 (초간단 인포그래픽) */}
        <div className="mt-16 sm:mt-20 border-t border-slate-200/80 pt-12 sm:pt-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-black text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Simple 3-Step Process
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              가장 쉬운 지원금 수령 3단계 절차
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              대표님은 신청만 하세요. 실측부터 서류와 지원금 입금 확인까지 원스톱 케어합니다.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 relative">
            {ROADMAP_STEPS.map((s, idx) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-black text-amber-500">
                      STEP {s.step}
                    </span>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-black text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 text-[11px] font-bold text-slate-400">
                  {idx === 0 && "➔ 실측 후 맞춤 견적서 즉시 전달"}
                  {idx === 1 && "➔ 복잡한 서류 작성 걱정 끝"}
                  {idx === 2 && "➔ 공단 통장 입금 확인 완료"}
                </div>
              </div>
            ))}
          </div>

          {/* 중간 CTA 배너 */}
          <div className="mt-8 rounded-2xl bg-slate-900 p-5 sm:p-6 text-white text-center sm:flex sm:items-center sm:justify-between gap-4">
            <div className="text-left">
              <div className="text-sm sm:text-base font-bold text-amber-300">
                폐업 예정이시거나 이전을 준비 중이신가요?
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                철거 시작 전에 신청하셔야 최대 600만 원 지원 혜택을 온전히 받으실 수 있습니다.
              </p>
            </div>
            <a
              href="#quick-lead-form"
              className="mt-4 sm:mt-0 inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-amber-400 px-5 py-3 text-xs sm:text-sm font-black text-slate-950 transition hover:bg-amber-300 shadow-md"
            >
              내 점포 무료 실측 신청하기 ➔
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
