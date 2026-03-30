"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import MarketingGalleryModal from "../_components/MarketingGalleryModal";

type MarketingItem = {
  id: string;
  name: string;
  cover: string;
  summary: string;
  desc: string;
  images: string[];
};

export default function MarketingSection() {
  const marketingItems: MarketingItem[] = useMemo(
    () => [
      {
        id: "nangyuan",
        name: "낭유안 호핑투어",
        cover: "/images/marketingsection/marketing-01.jpg",
        summary:
          "낭유안 아일랜드와 주변 바다를 즐기는 대표 해양 일정으로, 코사무이 인기 선택 코스입니다.",
        desc: "코사무이 대표 해양 일정으로 만족도가 높은 인기 코스",
        images: [
          "/images/marketingsection/01/01.jpg",
          "/images/marketingsection/01/02.jpg",
          "/images/marketingsection/01/03.jpg",
          "/images/marketingsection/01/04.jpg",
          "/images/marketingsection/01/05.jpg",
          "/images/marketingsection/01/06.jpg",
        ],
      },
      {
        id: "yacht",
        name: "요트투어",
        cover: "/images/marketingsection/marketing-02.jpg",
        summary:
          "바다 위에서 여유롭게 풍경과 선셋을 즐길 수 있어 허니문 고객 반응이 특히 좋은 일정입니다.",
        desc: "선셋과 바다 분위기를 함께 즐기기 좋은 감성 일정",
        images: [
          "/images/marketingsection/02/01.jpg",
          "/images/marketingsection/02/02.jpg",
          "/images/marketingsection/02/03.jpg",
          "/images/marketingsection/02/04.jpg",
          "/images/marketingsection/02/05.jpg",
          "/images/marketingsection/02/06.jpg",
        ],
      },
      {
        id: "activity",
        name: "액티비티 / ATV",
        cover: "/images/marketingsection/marketing-03.jpg",
        summary:
          "짚라인, 산악바이크, 오프로드 계열 체험처럼 활동적인 일정을 원하는 고객에게 잘 맞는 코스입니다.",
        desc: "활동적인 일정을 원하는 고객에게 잘 맞는 체험형 코스",
        images: [
          "/images/marketingsection/03/01.jpg",
          "/images/marketingsection/03/02.jpg",
          "/images/marketingsection/03/03.jpg",
          "/images/marketingsection/03/04.jpg",
          "/images/marketingsection/03/05.jpg",
          "/images/marketingsection/03/06.jpg",
        ],
      },
      {
        id: "honeymoon-snap",
        name: "허니문 스냅",
        cover: "/images/marketingsection/marketing-04.jpg",
        summary:
          "리조트, 비치, 선셋 포인트에서 둘만의 순간을 남길 수 있는 허니문 전용 인기 일정입니다.",
        desc: "둘만의 순간을 남길 수 있는 허니문 대표 감성 일정",
        images: [
          "/images/marketingsection/04/01.jpg",
          "/images/marketingsection/04/02.jpg",
          "/images/marketingsection/04/03.jpg",
          "/images/marketingsection/04/04.jpg",
          "/images/marketingsection/04/05.jpg",
          "/images/marketingsection/04/06.jpg",
        ],
      },
      {
        id: "safari",
        name: "사파리",
        cover: "/images/marketingsection/marketing-05.jpg",
        summary:
          "코사무이 자연과 체험 요소를 함께 즐길 수 있는 일정으로, 가족여행이나 액티브한 일정 구성에 잘 맞습니다.",
        desc: "가족여행과 액티브 일정에 잘 어울리는 체험 코스",
        images: [
          "/images/marketingsection/05/01.jpg",
          "/images/marketingsection/05/02.jpg",
          "/images/marketingsection/05/03.jpg",
          "/images/marketingsection/05/04.jpg",
          "/images/marketingsection/05/05.jpg",
          "/images/marketingsection/05/06.jpg",
        ],
      },
      {
        id: "massage",
        name: "타이 마사지",
        cover: "/images/marketingsection/marketing-06.jpg",
        summary:
          "여행 중 피로를 풀고 휴양 분위기를 높여주는 기본 만족도 높은 일정으로 커플과 가족 모두 선호합니다.",
        desc: "휴양 만족도를 높여주는 대표 기본 일정",
        images: [
          "/images/marketingsection/06/01.jpg",
          "/images/marketingsection/06/02.jpg",
          "/images/marketingsection/06/03.jpg",
          "/images/marketingsection/06/04.jpg",
          "/images/marketingsection/06/05.jpg",
          "/images/marketingsection/06/06.jpg",
          
        ],
      },
      {
        id: "shopping",
        name: "빅부다 미라사원",
        cover: "/images/marketingsection/marketing-07.jpg",
        summary:
          "라텍스, 진주, 침향 등 현지 인기 품목을 둘러볼 수 있는 일정으로 필요에 따라 선택형으로 조정 가능합니다.",
        desc: "필요에 따라 선택형으로 조정 가능한 쇼핑 일정",
        images: [
          "/images/marketingsection/07/01.jpg",
          "/images/marketingsection/07/02.jpg",
          "/images/marketingsection/07/03.jpg",
          "/images/marketingsection/07/04.jpg",
          "/images/marketingsection/07/05.jpg",
          "/images/marketingsection/07/06.jpg",
        ],
      },
      {
        id: "heaven",
        name: "코마숨 HEAVEN",
        cover: "/images/marketingsection/marketing-08.jpg",
        summary:
          "불필요한 부담을 줄이기 위해 가이드 팁 부담 없이 편하게 여행할 수 있는 방향으로 구성합니다.",
        desc: "부담은 줄이고 편하게 즐길 수 있도록 구성한 일정",
        images: [
          "/images/marketingsection/08/01.jpg",
          "/images/marketingsection/08/02.jpg",
          "/images/marketingsection/08/03.jpg",
          "/images/marketingsection/08/04.jpg",
          "/images/marketingsection/08/05.jpg",
          "/images/marketingsection/08/06.jpg",
        ],
      },
    ],
    []
  );

  const [selectedItem, setSelectedItem] = useState<MarketingItem | null>(null);

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
        <div className="rounded-[28px] border border-violet-200 bg-violet-50/45 p-5 shadow-sm md:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
                🗓️ 이벤트 일정
              </div>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                코사무이 선택 일정 구성
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                허니문과 가족여행 스타일에 맞게 인기 일정만 골라 구성할 수 있습니다.
              </p>
            </div>

            <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-xl text-white shadow md:flex">
              🗓️
            </div>
          </div>

          <div className="grid gap-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
            <div>
              • 해양투어 / 요트투어 / 액티비티 일정 선택 가능
              <br />
              • 허니문 스냅 / 마사지 등 감성 일정 구성 가능
            </div>
            <div>
              • 가족여행과 커플여행 성향에 맞춰 조정 가능
              <br />
              • 불필요한 부담 없이 편하게 즐길 수 있도록 설계
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-500 md:text-base">
            ※ 허니예스는 원하지 않는 일정은 줄이고, 꼭 필요한 일정만 선택해서 구성하는 방식을 추천합니다.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {marketingItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.cover}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                  <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-slate-700 shadow">
                    사진보기
                  </div>

                  <div className="absolute bottom-2 right-2 rounded-xl bg-black/55 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
                    {item.name}
                  </div>
                </div>

                <div className="p-3 md:p-4">
                  <p className="line-clamp-3 text-sm leading-6 text-slate-700 md:text-base">
                    {item.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <MarketingGalleryModal
        open={!!selectedItem}
        title={selectedItem?.name ?? ""}
        images={selectedItem?.images ?? []}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}