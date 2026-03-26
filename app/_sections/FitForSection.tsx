"use client";

import { useEffect, useState } from "react";

const FIT_IMAGES = [
  {
    src: "/images/fitforsection/fit-01.jpg",
    alt: "코사무이 허니문 리조트",
    label: "허니문",
  },
  {
    src: "/images/fitforsection/fit-02.jpg",
    alt: "코사무이 가족여행 리조트",
    label: "가족여행",
  },
  {
    src: "/images/fitforsection/fit-03.jpg",
    alt: "코사무이 풀빌라",
    label: "풀빌라",
  },
  {
    src: "/images/fitforsection/fit-04.jpg",
    alt: "코사무이 오션뷰",
    label: "코사무이 현지랜드",
  },
] as const;

export default function FitForSection() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    if (!openImage) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openImage]);

  return (
    <div className="group rounded-2xl border border-blue-100 bg-blue-50/40 p-6 ring-1 ring-blue-100 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-lg hover:shadow-blue-100/50 hover:ring-blue-200 active:translate-y-0 md:p-8">
      <style jsx global>{`
        .ss-fit-grid {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 8px !important;
          align-items: stretch !important;
        }
        @media (min-width: 768px) {
          .ss-fit-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            gap: 12px !important;
          }
        }
        .ss-fit-grid > * {
          min-width: 0 !important;
          width: auto !important;
          max-width: none !important;
        }
      `}</style>

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
            <span aria-hidden>🎯</span>
            <span>추천 대상</span>
          </div>
          <h2 className="mt-3 text-lg font-bold md:text-xl">
            이런 분께 추천합니다
          </h2>
        </div>

        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm transition-transform duration-200 ease-out group-hover:scale-105"
          aria-hidden
        >
          🎯
        </div>
      </div>

      <ul className="mt-4 grid gap-2 text-sm text-gray-800 md:grid-cols-2">
        <li>✔ 신혼여행을 리조트 중심으로 제대로 즐기고 싶은 분</li>
        <li>✔ 가족여행을 편안한 동선과 객실 구성으로 준비하고 싶은 분</li>
        <li>✔ 풀빌라 · 오션뷰 · 프라이빗한 분위기를 중요하게 보는 분</li>
        <li>✔ 온라인 최저가 비교 기준으로 합리적인 상품을 찾는 분</li>
      </ul>

      <p className="mt-3 text-sm text-gray-600">
        ※ 단순 항공권 예약이 아니라 <b>호텔 + 일정표 중심 단독상품</b>으로 안내합니다.
      </p>

      <div className="ss-fit-grid mt-4">
        {FIT_IMAGES.map((img) => (
          <div
            key={img.src}
            className="min-w-0 overflow-hidden rounded-xl border border-blue-100 bg-white/60 ring-1 ring-blue-100/60"
          >
            <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onClick={() => setOpenImage(img.src)}
                className="absolute inset-0 h-full w-full cursor-zoom-in object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-2 right-2 z-10 rounded-md bg-black/35 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm md:bottom-3 md:right-3 md:text-sm">
                {img.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 h-1 w-full rounded-full bg-blue-200" aria-hidden />

      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenImage(null)}
              className="absolute -right-3 -top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg ring-1 ring-black/10 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="닫기"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            <img
              src={openImage}
              alt="확대 이미지"
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />

            <div className="mt-3 text-center text-xs text-white/80">
              배경을 누르거나 <b>ESC</b> 또는 <b>×</b>로 닫을 수 있어요.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}