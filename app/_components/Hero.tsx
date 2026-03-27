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
    <section className="mx-auto w-full max-w-6xl px-4 pt-10 pb-8 md:px-8 md:pt-16 md:pb-12">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
        {/* Left */}
        <div>
          <p className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800">
            허니문 · 가족여행 · 다이렉트
          </p>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
            코사무이 최저가,
            <br />
            기회는 단한번!
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
            <span className="font-semibold text-gray-900">
              코사무이 현지랜드 다이렉트 상품
            </span>
            <br />
            <span className="text-gray-600">
              코사무이 여행 견적서를 받은분이라면
              <span className="font-medium text-gray-800"> 중간마진(여행사마진 )없이 </span>
              <span>재견적받고! 비교해보세요!</span>
            </span>
          </p>

          <div className="mt-5 space-y-2 text-sm leading-6 text-gray-700 md:text-base">
            <p>
              항공 · 풀빌라 · 리조트 · 여행일정 현지랜드 장점! 
              <span className="font-semibold text-gray-900">
                {" "}<span>빠를면 빠를수록 더 최저가!</span>
              </span>
             
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {/* 📞 전화 */}
            <a
              href="/call"
              onClick={() => trackEvent("call_click")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:opacity-80"
              aria-label="전화로 코사무이 견적 상담"
              title={tel ? `전화 상담 ${tel}` : "전화 상담"}
            >
              <span aria-hidden>📞</span>
              전화 상담
            </a>

            {/* 💬 카톡 */}
            <a
              href={kakaoChatUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("kakao_click")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 active:bg-gray-100"
              aria-label="카톡으로 코사무이 견적 문의"
            >
              <span aria-hidden>💬</span>
              카톡 문의
            </a>

            {/* ✉️ 문자 */}
            <a
              href={`#${leadAnchorId}`}
              onClick={() => trackEvent("sms_click")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 active:bg-gray-100"
              aria-label="코사무이 상담 폼으로 이동"
            >
              <span aria-hidden>✉️</span>
              일정표 상담
            </a>
          </div>

         
          <p className="mt-4 text-sm text-gray-600">
            ※ 실시간 항공/호텔 상황에 따라 요금은 변동될 수 있으며,
            <span className="font-semibold text-gray-900">
              {" "}상담 시 가장 유리한 조건으로 견적내
            </span>
             드립니다.
          </p>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
            <img
              src={heroImageSrc}
              alt="코사무이 허니문 및 가족여행 대표 리조트 이미지"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}