"use client";

import { useEffect, useState } from "react";

const PRODUCT_IMAGES = [
  {
    src: "/images/productsection/product-01.jpg",
    alt: "콘래드 사무이",
    label: "콘래드 사무이",
    description: "전 객실 풀빌라 중심의 럭셔리 리조트로, 오션뷰 허니문 대표 상품에 잘 맞습니다.",
  },
  {
    src: "/images/productsection/product-02.jpg",
    alt: "반얀트리 사무이",
    label: "반얀트리 사무이",
    description: "프라이빗 베이와 인피니티 풀빌라 분위기가 강한, 고급 허니문 수요에 잘 맞는 리조트입니다.",
  },
  {
    src: "/images/productsection/product-03.jpg",
    alt: "실라와디",
    label: "실라와디",
    description: "절벽형 오션뷰와 감성적인 풀빌라 무드가 강해 커플 여행과 사진 중심 여행에 잘 어울립니다.",
  },
  {
    src: "/images/productsection/product-04.jpg",
    alt: "통사이베이",
    label: "통사이베이",
    description: "조용한 프라이빗 비치와 자연친화형 분위기가 강점이라 차분한 허니문에 적합합니다.",
  },
  {
    src: "/images/productsection/product-05.jpg",
    alt: "킴튼 키탈레이",
    label: "킴튼 키탈레이",
    description: "세련된 감성과 편한 동선이 장점이라 허니문과 가족여행 모두 반응이 좋은 리조트입니다.",
  },
  {
    src: "/images/productsection/product-06.jpg",
    alt: "인터컨티넨탈",
    label: "인터컨티넨탈",
    description: "객실 선택 폭이 넓고 리조트 밸런스가 좋아 가족여행과 휴양형 일정에 잘 맞습니다.",
  },
  {
    src: "/images/productsection/product-07.jpg",
    alt: "피스 사무이",
    label: "피스 사무이",
    description: "합리적인 가격대에서 분위기와 리조트 만족도를 같이 잡기 좋은 호텔입니다.",
  },
  {
    src: "/images/productsection/product-08.jpg",
    alt: "치 사무이",
    label: "치 사무이",
    description: "실속형 예산으로 코사무이 감성을 담고 싶은 고객에게 잘 맞는 합리형 상품용 호텔입니다.",
  },
] as const;

export default function ProductSection() {
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
            <span aria-hidden>🏨</span>
            <span>호텔 자료</span>
          </div>
          <h2 className="mt-3 text-lg font-bold md:text-xl">
            허니예스 추천 코사무이 호텔 라인업
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            허니문과 가족여행에 반응 좋은 코사무이 대표 리조트 중심으로 구성했습니다.
          </p>
        </div>

        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-sm transition-transform duration-200 ease-out group-hover:scale-105"
          aria-hidden
        >
          🏨
        </div>
      </div>

      <ul className="mt-4 grid gap-2 text-sm text-gray-800 md:grid-cols-2">
        <li>• 허니문 대표: 콘래드 / 반얀트리 / 실라와디 / 통사이베이</li>
        <li>• 가족여행 추천: 킴튼 / 인터컨티넨탈 / 피스 / 치 사무이</li>
        <li>• 풀빌라 / 오션뷰 / 프라이빗 비치 중심 비교</li>
        <li>• 예산대별 맞춤 추천 가능</li>
      </ul>

      <p className="mt-3 text-sm text-gray-600">
        ※ 허니예스는 온라인 최저가 비교 기준으로 가장 유리한 조합을 안내합니다.
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