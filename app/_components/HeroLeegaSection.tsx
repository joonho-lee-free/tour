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
    <section className="bg-white text-gray-900 border-b border-gray-100">
      <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-8 md:px-8 md:pb-12 md:pt-12">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          {/* Left Column (이가에프엔비 스타일) */}
          <div>
            <p className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs sm:text-sm font-medium text-gray-700">
              부울경 전지역 출장 방문 · 소상공인 지원
            </p>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
              상가·매장 철거 비용,
              <br />
              내 돈 다 내지 마세요!
            </h1>

            <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
              <span className="font-semibold text-gray-900">
                정부지원금 최대 600만 원 지원으로 자부담은 줄이고,
              </span>
              <br />
              <span className="text-gray-600">
                복잡한 소진공 증빙 서류까지 100% 무료로 대행해 드립니다
              </span>
            </p>

            <p className="mt-3 text-sm text-gray-600 md:text-base">
              식당 · 카페 · 학원 · 미용실 · 상가 매장 원상복구 전문
            </p>

            {/* 3개 버튼 그룹 (이가에프엔비 스타일) */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <a
                href="tel:0517143396"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:opacity-80"
                aria-label="전화로 견적 상담 바로 받기"
              >
                <span aria-hidden="true">📞</span>
                전화 상담 받기
              </a>

              <a
                href="#quick-lead-form"
                onClick={handleScrollToForm}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 active:bg-gray-100"
                aria-label="지원금 무료 조회 폼으로 이동"
              >
                <span aria-hidden="true">💬</span>
                지원금 대상 조회
              </a>

              <a
                href="#quick-lead-form"
                onClick={handleScrollToForm}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 active:bg-gray-100"
                aria-label="빠른 실측 요청 폼으로 이동"
              >
                <span aria-hidden="true">✉️</span>
                빠른 실측 요청
              </a>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-600">
              ※ 현장 무료 실측 후 계약 시 철거 당일 추가 비용 0원 (추가 발생 시 본사 부담)
            </p>
          </div>

          {/* Right Column (이가에프엔비 스타일 이미지 & 오버레이 박스) */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-slate-900 shadow-md relative group">
              <img
                src="/images/company-bg.jpg"
                alt="부울경 상가·매장 철거 및 원상복구 현장"
                className="h-full w-full object-cover min-h-[260px] md:min-h-[340px] opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-900/10" />

              {/* 중앙 오버레이 배너 (이가에프엔비 레이아웃 100% 동일 구현) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="rounded-2xl border border-amber-400/30 bg-slate-950/85 p-5 md:p-6 backdrop-blur-md shadow-2xl max-w-sm">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 mb-2">
                    🏛️ 소상공인시장진흥공단 지원
                  </div>
                  <p className="text-base sm:text-xl font-black text-white leading-snug">
                    철거 견적 이미 받으셨죠?
                    <br />
                    <span className="text-amber-400">이제 정부지원금 받을 차례!</span>
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300">
                    최대 600만 원 지원 · 증빙 서류 100% 무료 대행
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
