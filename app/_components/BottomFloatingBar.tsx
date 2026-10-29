"use client";

type Props = {
  callPhone?: string;
};

export default function BottomFloatingBar({
  callPhone = "051-714-3396",
}: Props) {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("quick-lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const input = el.querySelector("input[name='storeName']") as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }
  };

  return (
    <aside
      aria-label="빠른 상담 및 지원금 조회"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-700/80 bg-slate-950/95 px-3 py-2.5 sm:py-3 backdrop-blur-md shadow-2xl"
    >
      <div className="mx-auto flex max-w-lg items-center gap-2.5">
        {/* 좌측: [전화 상담] */}
        <a
          href={`tel:${callPhone.replace(/[^0-9]/g, "")}`}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 py-3 sm:py-3.5 px-3 text-xs sm:text-sm font-black text-white shadow-md transition hover:bg-slate-800 active:scale-95 cursor-pointer"
        >
          <span className="text-base sm:text-lg">📞</span>
          <span>전화 상담</span>
        </a>

        {/* 우측: [지원금 무료 조회] */}
        <a
          href="#quick-lead-form"
          onClick={handleScrollToForm}
          className="flex flex-[1.3] items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-3 sm:py-3.5 px-3 text-xs sm:text-sm font-black text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500 active:scale-95 cursor-pointer"
        >
          <span className="text-base sm:text-lg">⚡</span>
          <span>지원금 무료 조회</span>
        </a>
      </div>
    </aside>
  );
}
