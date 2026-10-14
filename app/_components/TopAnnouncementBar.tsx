"use client";

export default function TopAnnouncementBar() {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("quick-lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="w-full bg-slate-950 px-3 py-2 text-white border-b border-amber-500/30">
      <div className="mx-auto flex max-w-4xl items-center justify-between text-xs font-bold">
        <div className="flex items-center gap-1.5 truncate">
          <span className="rounded-md bg-red-600 px-1.5 py-0.5 text-[10px] font-black text-white">
            HOT
          </span>
          <span className="truncate text-amber-300 text-[11px] sm:text-xs">
            2026 소상공인 점포철거비 정부지원금 최대 600만 원 (서류 100% 무료 대행)
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:01066386576"
            className="flex items-center gap-1 text-slate-200 hover:text-amber-400 font-bold transition text-xs"
          >
            <span>📞 010-6638-6576</span>
          </a>
          <a
            href="#quick-lead-form"
            onClick={handleScrollToForm}
            className="rounded-lg bg-amber-400 px-2 py-0.5 text-[11px] font-black text-slate-950 transition hover:bg-amber-300"
          >
            조회하기 ➔
          </a>
        </div>
      </div>
    </div>
  );
}
