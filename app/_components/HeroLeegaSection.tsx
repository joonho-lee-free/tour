"use client";

export default function HeroLeegaSection() {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("quick-lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const select = el.querySelector("select");
      if (select) {
        select.focus();
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      {/* 배경 장식 은은한 그라데이션 */}
      <div className="absolute inset-0 bg-radial from-slate-900/60 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-8 sm:pt-12 md:px-8 md:pb-16 md:pt-14">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
          {/* Left Column (핵심 카피 & CTA) */}
          <div className="md:col-span-7 text-left">
            {/* 상단 뱃지 */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs sm:text-sm font-semibold text-amber-300">
              <span>📍</span>
              <span>부울경(부산·김해·창원·양산·마산) 상가·매장 원상복구 전문</span>
            </div>

            {/* 메인 헤드라인 (굵고 강렬한 타이포) */}
            <h1 className="mt-4 text-2xl sm:text-4xl lg:text-[2.75rem] font-black leading-tight sm:leading-snug tracking-tight text-white">
              철거업체 비용 폭리와
              <br className="hidden sm:block" />
              깜깜이 추가금, 이제 그만!
              <br />
              <span className="text-amber-400">
                당일 추가금 0% 보증 · 정부지원금 최대 600만 원 원스톱 지원
              </span>
            </h1>

            {/* 서브 카피 */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300 md:text-lg font-medium">
              현장 실측 무료 · 추가금 발생 시 본사 100% 부담 · 소진공 정산 서류 반려 걱정 없는 0원 대행
            </p>

            {/* 상단 빠른 액션 CTA 버튼 그룹 */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              {/* 1. 직통 전화 버튼 */}
              <a
                href="tel:0517143396"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-3.5 sm:py-4 text-sm sm:text-base font-black text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500 active:scale-[0.98] cursor-pointer"
                aria-label="051-714-3396 직통 전화 걸기"
              >
                <span className="text-lg">📞</span>
                <span>051-714-3396 직통 전화</span>
              </a>

              {/* 2. 1분 무료 견적·지원금 조회 버튼 */}
              <a
                href="#quick-lead-form"
                onClick={handleScrollToForm}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/90 px-5 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-md transition hover:bg-slate-700 hover:border-slate-600 active:scale-[0.98] cursor-pointer"
                aria-label="1분 무료 견적·지원금 조회 폼으로 이동"
              >
                <span className="text-amber-400 text-lg">⚡</span>
                <span>1분 무료 견적·지원금 조회 ↓</span>
              </a>
            </div>

            {/* 3대 핵심 안심 신뢰 포인트 */}
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-800/80 pt-4 text-center">
              <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-2">
                <div className="text-amber-400 font-black text-xs sm:text-sm">추가금 0%</div>
                <div className="text-slate-400 text-[10px] sm:text-xs mt-0.5">계약금액 100% 보증</div>
              </div>
              <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-2">
                <div className="text-amber-400 font-black text-xs sm:text-sm">최대 600만 원</div>
                <div className="text-slate-400 text-[10px] sm:text-xs mt-0.5">소진공 정부지원금</div>
              </div>
              <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-2">
                <div className="text-amber-400 font-black text-xs sm:text-sm">서류 100% 무료</div>
                <div className="text-slate-400 text-[10px] sm:text-xs mt-0.5">반려 걱정 0원 대행</div>
              </div>
            </div>
          </div>

          {/* Right Column (비주얼 이미지 & 소진공 배너 카드) */}
          <div className="md:col-span-5 relative">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl relative group">
              <img
                src="/images/company-bg.jpg"
                alt="부울경 상가·매장 철거 및 원상복구 현장 - 철거전문 이가"
                className="h-full w-full object-cover min-h-[260px] md:min-h-[360px] opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* 중앙 오버레이 배너 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="rounded-2xl border border-amber-400/30 bg-slate-950/90 p-5 md:p-6 backdrop-blur-md shadow-2xl max-w-sm">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 mb-2">
                    🏛️ 소상공인시장진흥공단 지원
                  </div>
                  <p className="text-base sm:text-xl font-black text-white leading-snug">
                    철거 견적 이미 받으셨죠?
                    <br />
                    <span className="text-amber-400">이제 정부지원금 챙길 차례!</span>
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300">
                    최대 600만 원 지원 · 증빙 서류 100% 무료 대행
                  </p>
                  <div className="mt-3 inline-block rounded-lg bg-slate-800/80 px-2.5 py-1 text-[11px] text-amber-300 font-semibold border border-amber-500/30">
                    철거전문 이가 · 부울경 전지역
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
