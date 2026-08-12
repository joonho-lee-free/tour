"use client";

type Props = {
  callPhone?: string;
  kakaoUrl?: string;
};

export default function BottomFloatingBar({
  callPhone = "051-714-3396",
}: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950/95 px-3 py-3 backdrop-blur-md shadow-2xl">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-2 md:max-w-xl">
        {/* 📞 전화상담 */}
        <a
          href="/call"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-2 py-3 text-xs font-black text-white shadow transition hover:bg-slate-800 active:scale-95 sm:text-sm"
        >
          <span className="text-base">📞</span>
          <span>지금 당장 전화</span>
        </a>

        {/* 💬 문자상담 */}
        <a
          href="sms:0517143396?body=철거/보조금600만/HACCP/전기/보수 견적 문의드립니다."
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-2 py-3 text-xs font-black text-white shadow transition hover:bg-slate-700 active:scale-95 sm:text-sm"
        >
          <span className="text-base">💬</span>
          <span>문자 상담</span>
        </a>

        {/* 💰 보조금 600만 조회 */}
        <a
          href="#sms-lead"
          className="flex flex-[1.2] items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-2 py-3 text-xs font-black text-slate-950 shadow-lg transition hover:from-amber-300 hover:to-amber-500 active:scale-95 sm:text-sm"
        >
          <span className="text-base">💰</span>
          <span>보조금 600만 조회</span>
        </a>
      </div>
    </div>
  );
}
