"use client";

export default function TopAnnouncementBar() {
  return (
    <div className="w-full bg-slate-950 px-4 py-2.5 text-white border-b border-amber-500/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-xs font-bold md:text-sm">
        <div className="flex items-center gap-2 truncate">
          <span className="rounded-md bg-red-600 px-2 py-0.5 text-[11px] font-black text-white animate-pulse">
            HOT
          </span>
          <span className="truncate text-amber-300">
            🔥 2026 소상공인 점포철거 정부보조금 지원 (평당 20만원 / 최대 600만원까지 서류대행)
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:0517143396"
            className="flex items-center gap-1 text-white hover:text-amber-400 font-black transition"
          >
            <span>📞 051-714-3396</span>
          </a>
          <a
            href="#sms-lead"
            className="rounded-lg bg-amber-500 px-2.5 py-1 text-xs font-black text-slate-950 transition hover:bg-amber-400"
          >
            보조금 0원 자격조회 ➔
          </a>
        </div>
      </div>
    </div>
  );
}
