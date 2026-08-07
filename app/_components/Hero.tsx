"use client";

// 파일위치: app/_components/Hero.tsx
// 파일명: Hero.tsx

type HeroProps = {
  kakaoChatUrl: string;
  callPhone: string; // "010-1234-5678" 또는 "01012345678" 둘 다 OK
  heroImageSrc?: string; // 예: "/images/hero-a.png"
  leadAnchorId?: string; // 기본 "sms-lead"
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function digitsOnly(s: string) {
  return (s || "").replace(/\D/g, "");
}

export default function Hero({
  kakaoChatUrl,
  callPhone,
  heroImageSrc = "/images/hero-a.png",
  leadAnchorId = "sms-lead",
}: HeroProps) {
  const tel = digitsOnly(callPhone);

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        event_category: "lead",
        event_label: "hero",
      });
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-8 pb-10 md:px-8 md:pt-14 md:pb-16">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400 bg-amber-400/20 px-3.5 py-1.5 text-xs font-black text-amber-900 shadow-sm md:text-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping"></span>
            🔥 정부 보조금 최대 600만 원까지 지원! (100% 서류대행 컨설팅)
          </div>

          <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl">
            철거비 다 내면 손해!
            <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
              정부 보조금 최대 600만 원까지!
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            <span className="font-extrabold text-slate-900">
              "정부 지원금 챙겨받고 철거하세요! 복잡한 신청 서류, 李家(이가)가 100% 대행합니다!"
            </span>
            <br />
            <span className="text-slate-600">
              소상공인 점포철거 정부보조금 **최대 600만 원까지** 자격 조회부터 증빙 서류 뚝딱!
              오얏나무의 묵직한 기술 가문 <strong className="text-slate-900 font-black">李家(이가) 컨설팅 & 직영 시공팀</strong>이 **전문 철거 ➔ HACCP ➔ 전기(승압) ➔ 방수/보수**까지 한 방에 끝내드립니다.
            </span>
          </p>

          {/* Key Advantages Bullet List */}
          <div className="mt-5 space-y-2 text-xs text-slate-800 md:text-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 font-black">💰</span>
              <span><strong>정부 보조금 최대 600만 원까지 대상 0원 확인!</strong> (서류 대행 컨설팅)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-black">🔨</span>
              <span><strong>소음·진동 싹 잡는 신기원 전문 철거 & 완벽 원상복구</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-black">⚡</span>
              <span><strong>식약처 통과 HACCP + 한전 승압 전기 + 옥상방수</strong> 직영 시공</span>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {/* 📞 전화 */}
            <a
              href="/call"
              onClick={() => trackEvent("call_click")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-black text-white shadow-lg transition hover:bg-slate-800 active:scale-95"
              aria-label="전화로 철거/보조금 견적 상담"
              title={tel ? `전화 상담 ${tel}` : "전화 상담"}
            >
              <span aria-hidden>📞</span>
              지금 당장 전화
            </a>

            {/* 💰 보조금 & 견적문의 */}
            <a
              href={`#${leadAnchorId}`}
              onClick={() => trackEvent("sms_click")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3.5 text-sm font-black text-slate-900 shadow-lg transition hover:from-amber-400 hover:to-amber-500 active:scale-95 animate-bounce-short"
              aria-label="보조금 및 견적 신청 폼으로 이동"
            >
              <span aria-hidden>💰</span>
              보조금 600만 자격조회
            </a>

            {/* 💬 카톡 */}
            <a
              href={kakaoChatUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("kakao_click")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-4 py-3.5 text-sm font-black text-slate-900 shadow-sm transition hover:bg-slate-50 active:scale-95"
              aria-label="카톡으로 철거 및 공사 상담"
            >
              <span aria-hidden>💬</span>
              카톡 1:1 상담
            </a>
          </div>

          <p className="mt-4 text-xs font-semibold text-slate-500">
            ※ **李家(이가)**는 정부 보조금(희망리턴패키지 등) 수혜를 돕는 **전문 대행 컨설팅 및 철거/시공 직영 업체**입니다. (무료 현장 방문)
          </p>
        </div>

        {/* Right - Hero Banner Container */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-white shadow-2xl">
            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl"></div>
            
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
              <div>
                <span className="rounded-md bg-amber-500/25 px-2.5 py-1 text-xs font-black text-amber-400">
                  李家 (오얏 리 · 집 가)
                </span>
                <h3 className="mt-2 text-2xl font-black text-white">李家 컨설팅 & 원스톱 시공</h3>
              </div>
              <span className="text-4xl">🏗️</span>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="rounded-2xl border-2 border-amber-500/50 bg-amber-500/15 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between text-amber-300 font-black">
                  <span>🏛️ 정부 보조금 철거 지원</span>
                  <span className="text-xl text-amber-400 underline decoration-2">최대 600만 원까지</span>
                </div>
                <p className="mt-1.5 text-xs font-semibold text-slate-200">
                  국가 지원 소상공인 철거 보조금! 서류작성부터 자격신청까지 100% 대행 컨설팅!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-slate-700 bg-slate-800/90 p-3 hover:border-amber-500 transition">
                  <div className="font-black text-amber-400">🔨 전문 철거 & 원상복구</div>
                  <div className="mt-1 text-slate-300">소음·진동 싹 잡고 깔끔 청소 마감</div>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/90 p-3 hover:border-emerald-500 transition">
                  <div className="font-black text-emerald-400">🏭 HACCP 인증 공사</div>
                  <div className="mt-1 text-slate-300">식약처 위생 검사 한 방 통과!</div>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/90 p-3 hover:border-blue-500 transition">
                  <div className="font-black text-blue-400">⚡ 한전 승압 & 전기공사</div>
                  <div className="mt-1 text-slate-300">3상 동력 배선 차단기 짱짱하게!</div>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/90 p-3 hover:border-sky-500 transition">
                  <div className="font-black text-sky-400">🛠️ 옥상방수 & 시설보수</div>
                  <div className="mt-1 text-slate-300">물 한 방울 안 새는 철통 방수!</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-950 px-4 py-3.5 text-xs text-slate-300">
              <span>📞 직통 전화: <strong className="text-amber-400 font-black text-sm">051-714-3396</strong></span>
              <span className="rounded-full bg-amber-500 px-2.5 py-1 text-[11px] font-black text-slate-950">무료 방문견적</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}