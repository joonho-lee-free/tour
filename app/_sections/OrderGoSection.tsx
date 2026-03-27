"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import OrderGoGalleryModal from "../_components/OrderGoGalleryModal";

type OrderGoItem = {
  id: string;
  cover: string;
  alt: string;
  label: string;
  description: string;
  images: string[];
};

export default function OrderGoSection() {
  const orderGoItems: OrderGoItem[] = useMemo(
    () => [
      {
        id: "ordergo-01",
        cover: "/images/ordersection/order-01.jpg",
        alt: "코사무이 1일차 일정",
        label: "샌딩 미팅",
        description:
          "인천 또는 부산 출발 후 코사무이 도착, 공항 미팅과 리조트 체크인으로 첫 일정을 편하게 시작합니다.",
        images: [
          "/images/ordersection/01/01.jpg",
          "/images/ordersection/01/02.jpg",
          "/images/ordersection/01/03.jpg",
        ],
      },
      {
        id: "ordergo-02",
        cover: "/images/ordersection/order-02.jpg",
        alt: "코사무이 2일차 일정",
        label: "사무이도착",
        description:
          "리조트 조식 후 자유시간 또는 선택투어를 넣을 수 있으며, 첫 자유일정은 무리 없이 여유롭게 구성합니다.",
        images: [
          "/images/ordersection/02/01.jpg",
          "/images/ordersection/02/02.jpg",
          "/images/ordersection/02/03.jpg",
        ],
      },
      {
        id: "ordergo-03",
        cover: "/images/ordersection/order-03.jpg",
        alt: "코사무이 3일차 일정",
        label: "가이드미팅",
        description:
          "수영장, 비치, 스파, 선셋 감상 등 리조트 안에서 충분히 쉬는 일정이 허니문 만족도를 높여줍니다.",
        images: [
          "/images/ordersection/03/01.jpg",
          "/images/ordersection/03/02.jpg",
          "/images/ordersection/03/03.jpg",
        ],
      },
      {
        id: "ordergo-04",
        cover: "/images/ordersection/order-04.jpg",
        alt: "코사무이 4일차 일정",
        label: "전용차량 이동",
        description:
          "호핑투어, 마사지, 커플 자유일정 등 원하는 분위기에 따라 하루를 다르게 구성할 수 있습니다.",
        images: [
          "/images/ordersection/04/01.jpg",
          "/images/ordersection/04/02.jpg",
          "/images/ordersection/04/03.jpg",
        ],
      },
      {
        id: "ordergo-05",
        cover: "/images/ordersection/order-05.jpg",
        alt: "코사무이 5일차 일정",
        label: "차웽 디스커버리",
        description:
          "풀빌라 업그레이드 또는 두 번째 숙소 이동으로 여행 분위기를 바꾸며, 더 진한 휴양감을 느낄 수 있습니다.",
        images: [
          "/images/ordersection/05/01.jpg",
          "/images/ordersection/05/02.jpg",
          "/images/ordersection/05/03.jpg",
        ],
      },
      {
        id: "ordergo-06",
        cover: "/images/ordersection/order-06.jpg",
        alt: "5일차 선택",
        label: "씨푸드 및 식사",
        description:
          "체험형으로 사파리, 빅부다사원, 차웽 디스커버리등으로 다이나믹한 여행구성이 좋습니다.",
        images: [
          "/images/ordersection/06/01.jpg",
          "/images/ordersection/06/02.jpg",
          "/images/ordersection/06/03.jpg",
        ],
      },
      {
        id: "ordergo-07",
        cover: "/images/ordersection/order-07.jpg",
        alt: "코사무이 허니문 일정",
        label: "귀국일정",
        description:
          "허니문은 오션뷰, 선셋, 풀빌라, 커플 디너처럼 둘만의 분위기를 살리는 일정 구성이 핵심입니다.",
        images: [
          "/images/ordersection/07/01.jpg",
          "/images/ordersection/07/02.jpg",
          "/images/ordersection/07/03.jpg",
        ],
      },
      {
        id: "ordergo-08",
        cover: "/images/ordersection/order-08.jpg",
        alt: "코사무이 귀국 일정",
        label: "계약선물",
        description:
          "마지막 날은 조식과 자유시간 후 공항 이동으로 마무리하며, 무리 없는 동선으로 여행 피로를 줄여드립니다.",
        images: [
          "/images/ordersection/08/01.jpg",
          "/images/ordersection/08/02.jpg",
          "/images/ordersection/08/03.jpg",
        ],
      },
    ],
    []
  );

  const [selectedItem, setSelectedItem] = useState<OrderGoItem | null>(null);

  return (
    <>
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
              <span>일정표 안내</span>
            </div>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              안전한 출발 / 도착 / 가이드미팅 / 일정 안내
            </h2>

            <p className="mt-2 text-sm text-gray-700">
              호텔만 좋은 상품이 아니라, 일정 순서까지 자연스럽게 이어지도록 구성했습니다.
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
          <li>• 4박 6일 기준 허니문 / 가족여행 일정 구성 가능</li>
          <li>• 리조트 휴양 중심 + 선택투어 조합</li>
          <li>• 풀빌라, 오션뷰, 자유일정 중심 설계</li>
          <li>• 예산대와 호텔 등급에 따라 일정표 조정 가능</li>
        </ul>

        <p className="mt-3 text-sm text-gray-600">
          ※ 허니예스는 무리한 관광보다 리조트 중심 휴양형 일정이 만족도가 높다고 보고 구성합니다.
        </p>

        <div className="ss-product-grid mt-4">
          {orderGoItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="min-w-0 overflow-hidden rounded-xl border border-violet-100 bg-white/60 text-left ring-1 ring-violet-100/60 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src={item.cover}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition duration-300 hover:scale-105"
                />

                <div className="absolute right-2 top-2 z-10 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-slate-700 shadow">
                  사진보기
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />

                <div className="absolute bottom-2 right-2 z-10 rounded-md bg-black/35 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm md:bottom-3 md:right-3 md:text-sm">
                  {item.label}
                </div>
              </div>

              <div className="px-3 py-3">
                <p className="text-sm leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div
          className="mt-5 h-1 w-full rounded-full bg-violet-200 transition-opacity duration-200 group-hover:opacity-90"
          aria-hidden
        />
      </div>

      <OrderGoGalleryModal
        open={!!selectedItem}
        title={selectedItem?.label ?? ""}
        images={selectedItem?.images ?? []}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}