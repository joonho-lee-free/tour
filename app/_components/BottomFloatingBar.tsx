"use client";

type Props = {
  callPhone?: string;
  kakaoUrl?: string;
};

export default function BottomFloatingBar({
  callPhone = "051-714-3396",
  kakaoUrl = "http://pf.kakao.com/_TWfbG",
}: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950/95 px-3 py-3 backdrop-blur-md shadow-2xl">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-2 md:max-w-xl">
        {/* 📞 전화상담 */}
        <a
          href="/call"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-3 py-3 text-xs font-black text-white shadow transition hover:bg-slate-800 active:scale-95 sm:text-sm"
        >
          <span className="text-base">📞</span>
          <span>전화 상담</span>
        </a>

        {/* 💰 보조금 600만 조회 */}
        <a
          href="#sms-lead"
          className="flex flex-[1.4] items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-3 py-3 text-xs font-black text-slate-950 shadow-lg transition hover:from-amber-300 hover:to-amber-500 active:scale-95 sm:text-sm animate-pulse-subtle"
        >
          <span className="text-base">💰</span>
          <span>보조금 600만 조회</span>
        </a>

        {/* 💬 카톡상담 */}
        <a
          href={kakaoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-amber-300 px-3 py-3 text-xs font-black text-slate-950 shadow transition hover:bg-amber-400 active:scale-95 sm:text-sm"
        >
          <span className="text-base">💬</span>
          <span>카톡 상담</span>
        </a>
      </div>
    </div>
  );
}
