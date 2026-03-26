"use client";

import { useEffect, useState } from "react";

const PRODUCT_IMAGES = [
  {
    src: "/images/marketingsection/marketing-01.jpg",
    alt: "낭유안 아일랜드 호핑투어",
    label: "호핑투어",
    description:
      "낭유안 아일랜드와 주변 바다를 즐기는 대표 해양 일정으로, 코사무이 인기 선택 코스입니다.",
  },
  {
    src: "/images/marketingsection/marketing-02.jpg",
    alt: "코사무이 요트투어",
    label: "요트투어",
    description:
      "바다 위에서 여유롭게 풍경과 선셋을 즐길 수 있어 허니문 고객 반응이 특히 좋은 일정입니다.",
  },
  {
    src: "/images/marketingsection/marketing-03.jpg",
    alt: "짚라인 및 액티비티",
    label: "액티비티",
    description:
      "짚라인, 산악바이크, 오프로드 계열 체험처럼 활동적인 일정을 원하는 고객에게 잘 맞는 코스입니다.",
  },
  {
    src: "/images/marketingsection/marketing-04.jpg",
    alt: "허니문 스냅사진",
    label: "허니문 스냅",
    description:
      "리조트, 비치, 선셋 포인트에서 둘만의 순간을 남길 수 있는 허니문 전용 인기 일정입니다.",
  },
  {
    src: "/images/marketingsection/marketing-05.jpg",
    alt: "사파리 어드벤처",
    label: "사파리",
    description:
      "코사무이 자연과 체험 요소를 함께 즐길 수 있는 일정으로, 가족여행이나 액티브한 일정 구성에 잘 맞습니다.",
  },
  {
    src: "/images/marketingsection/marketing-06.jpg",
    alt: "전통 타이식 마사지",
    label: "타이 마사지",
    description:
      "여행 중 피로를 풀고 휴양 분위기를 높여주는 기본 만족도 높은 일정으로 커플과 가족 모두 선호합니다.",
  },
  {
    src: "/images/marketingsection/marketing-07.jpg",
    alt: "라텍스 및 진주 침향 쇼핑",
    label: "쇼핑 일정",
    description:
      "라텍스, 진주, 침향 등 현지 인기 품목을 둘러볼 수 있는 일정으로 필요에 따라 선택형으로 조정 가능합니다.",
  },
  {
    src: "/images/marketingsection/marketing-08.jpg",
    alt: "가이드 노팁 안내",
    label: "가이드 NO TIP",
    description:
      "불필요한 부담을 줄이기 위해 가이드 팁 부담 없이 편하게 여행할 수 있는 방향으로 구성합니다.",
  },
] as const;

export default function MarketingSection() {
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
    <div className="group rounded-2xl border border-violet-100 bg-violet-50/40 p-6 ring-1 ring-violet-100 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-50/60 hover:shadow-lg hover:shadow-violet-100/50 hover:ring-violet-200 active:translate-y-0 md:p-8">
      <style jsx global>{`
        .ss-product-grid {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 8px !important;
          align-items: stretch !important;
        }
        @media (min-width: 768px) {
          .ss-product-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            gap: 12px !important;
          }
        }
        .ss-product-grid > * {
          min-width: 0 !important;
          width: auto !important;
          max-width: none !important;
        }
      `}</style>

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">
            <span aria-hidden>🗓️</span>
            <span>이벤트 일정</span>
          </div>
          <h2 className="mt-3 text-lg font-bold md:text-xl">
            허니예스 코사무이 선택 일정 구성
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            허니문과 가족여행 스타일에 맞게 인기 일정만 골라 구성할 수 있습니다.
          </p>
        </div>

        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-sm transition-transform duration-200 ease-out group-hover:scale-105"
          aria-hidden
        >
          🗓️
        </div>
      </div>

      <ul className="mt-4 grid gap-2 text-sm text-gray-800 md:grid-cols-2">
        <li>• 해양투어, 요트투어, 액티비티 일정 선택 가능</li>
        <li>• 허니문 스냅, 마사지 등 감성 일정 구성 가능</li>
        <li>• 가족여행과 커플여행 성향에 맞춰 조정 가능</li>
        <li>• 불필요한 부담 없이 편하게 즐길 수 있도록 설계</li>
      </ul>

      <p className="mt-3 text-sm text-gray-600">
        ※ 허니예스는 원하지 않는 일정은 줄이고, 꼭 필요한 일정만 선택해서 구성하는 방식을 추천합니다.
      </p>

      <div className="ss-product-grid mt-4">
        {PRODUCT_IMAGES.map((img) => (
          <div
            key={img.src}
            className="min-w-0 overflow-hidden rounded-xl border border-violet-100 bg-white/60 ring-1 ring-violet-100/60"
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

            <div className="px-3 py-3">
              <p className="text-sm leading-relaxed text-gray-700">
                {img.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-5 h-1 w-full rounded-full bg-violet-200 transition-opacity duration-200 group-hover:opacity-90"
        aria-hidden
      />

      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
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