"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import HotelGalleryModal from "../_components/HotelGalleryModal";

type HotelItem = {
  id: string;
  name: string;
  cover: string;
  summary: string;
  desc: string;
  images: string[];
};

export default function ProductSection() {
  const hotels: HotelItem[] = useMemo(
    () => [
      {
        id: "conrad",
        name: "콘래드 사무이",
        cover: "/images/productsection/product-01.jpg",
        summary: "전 객실 풀빌라 중심의 럭셔리 리조트로, 오션뷰 허니문 대표 상품에 잘 맞습니다.",
        desc: "프라이빗 풀빌라와 절벽형 바다 전망이 강점인 대표 럭셔리 라인",
        images: [
          "/images/hotels/conrad/01.jpg",
          "/images/hotels/conrad/02.jpg",
          "/images/hotels/conrad/03.jpg",
          "/images/hotels/conrad/04.jpg",
        ],
      },
      {
        id: "banyantree",
        name: "반얀트리 사무이",
        cover: "/images/productsection/product-02.jpg",
        summary: "프라이빗 베이와 인피니티 풀빌라 분위기가 강한, 고급 허니문 수요에 잘 맞는 리조트입니다.",
        desc: "프라이빗 비치와 럭셔리 풀빌라 감성이 강한 허니문 대표 라인",
        images: [
          "/images/hotels/banyantree/01.jpg",
          "/images/hotels/banyantree/02.jpg",
          "/images/hotels/banyantree/03.jpg",
          "/images/hotels/banyantree/04.jpg",
        ],
      },
      {
        id: "silavadee",
        name: "실라와디",
        cover: "/images/productsection/product-03.jpg",
        summary: "절벽형 오션뷰와 감성적인 풀빌라 무드가 강해 커플 여행과 사진 중심 여행에 잘 어울립니다.",
        desc: "감성적인 오션뷰와 무드 있는 숙소 분위기가 장점인 리조트",
        images: [
          "/images/hotels/silavadee/01.jpg",
          "/images/hotels/silavadee/02.jpg",
          "/images/hotels/silavadee/03.jpg",
          "/images/hotels/silavadee/04.jpg",
        ],
      },
      {
        id: "thesiambay",
        name: "통사이베이",
        cover: "/images/productsection/product-04.jpg",
        summary: "조용한 프라이빗 비치와 자연친화형 분위기가 강점이라 차분한 허니문에 적합합니다.",
        desc: "조용한 분위기와 자연친화형 비치 감성을 원하는 고객에게 적합",
        images: [
          "/images/hotels/thesiambay/01.jpg",
          "/images/hotels/thesiambay/02.jpg",
          "/images/hotels/thesiambay/03.jpg",
          "/images/hotels/thesiambay/04.jpg",
        ],
      },
      {
        id: "kimpton",
        name: "킴튼 키탈레이",
        cover: "/images/productsection/product-05.jpg",
        summary: "세련된 감성과 편한 동선이 장점이라 허니문과 가족여행 모두 반응이 좋은 리조트입니다.",
        desc: "트렌디한 감성과 세련된 휴양 무드를 원하는 고객에게 추천",
        images: [
          "/images/hotels/kimpton/01.jpg",
          "/images/hotels/kimpton/02.jpg",
          "/images/hotels/kimpton/03.jpg",
        ],
      },
      {
        id: "intercontinental",
        name: "인터컨티넨탈",
        cover: "/images/productsection/product-06.jpg",
        summary: "객실 선택 폭이 넓고 리조트 밸런스가 좋아 가족여행과 휴양형 일정에 잘 맞습니다.",
        desc: "가족여행과 휴양형 일정 모두 소화하기 좋은 대표 밸런스형 리조트",
        images: [
          "/images/hotels/intercontinental/01.jpg",
          "/images/hotels/intercontinental/02.jpg",
          "/images/hotels/intercontinental/03.jpg",
        ],
      },
      {
        id: "peace",
        name: "피스 사무이",
        cover: "/images/productsection/product-07.jpg",
        summary: "합리적인 가격대에서 분위기와 리조트 만족도를 같이 잡기 좋은 호텔입니다.",
        desc: "가성비와 리조트 무드를 같이 챙기고 싶은 고객에게 추천",
        images: [
          "/images/hotels/peace/01.jpg",
          "/images/hotels/peace/02.jpg",
          "/images/hotels/peace/03.jpg",
        ],
      },
      {
        id: "chi",
        name: "치 사무이",
        cover: "/images/productsection/product-08.jpg",
        summary: "실속형 예산으로 코사무이 감성을 담고 싶은 고객에게 잘 맞는 합리형 상품용 호텔입니다.",
        desc: "합리형 예산대 일정에 맞는 실속 숙소 라인",
        images: [
          "/images/hotels/chi/01.jpg",
          "/images/hotels/chi/02.jpg",
          "/images/hotels/chi/03.jpg",
        ],
      },
    ],
    []
  );

  const [selectedHotel, setSelectedHotel] = useState<HotelItem | null>(null);

  return (
    <>
      <section
        id="product"
        className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20"
      >
        <div className="rounded-[28px] border border-violet-200 bg-violet-50/45 p-5 shadow-sm md:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
                🏨 호텔 자료
              </div>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                허니예스 추천 코사무이 호텔 라인업
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                허니문과 가족여행에 반응 좋은 코사무이 대표 리조트 중심으로 구성했습니다.
              </p>
            </div>

            <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-xl text-white shadow md:flex">
              🏨
            </div>
          </div>

          <div className="grid gap-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
            <div>
              • 허니문 대표: 콘래드 / 반얀트리 / 실라와디 / 통사이베이
              <br />
              • 풀빌라 / 오션뷰 / 프라이빗 비치 중심 비교
            </div>
            <div>
              • 가족여행 추천: 킴튼 / 인터컨티넨탈 / 피스 / 치 사무이
              <br />
              • 예산대별 맞춤 추천 가능
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-500 md:text-base">
            ※ 허니예스는 온라인 최저가 비교 기준으로 가장 유리한 조합을 안내합니다.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {hotels.map((hotel) => (
              <button
                key={hotel.id}
                type="button"
                onClick={() => setSelectedHotel(hotel)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={hotel.cover}
                    alt={hotel.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                  <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-slate-700 shadow">
                    사진보기
                  </div>

                  <div className="absolute bottom-2 right-2 rounded-xl bg-black/55 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
                    {hotel.name}
                  </div>
                </div>

                <div className="p-3 md:p-4">
                  <p className="line-clamp-3 text-sm leading-6 text-slate-700 md:text-base">
                    {hotel.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <HotelGalleryModal
        open={!!selectedHotel}
        title={selectedHotel?.name ?? ""}
        images={selectedHotel?.images ?? []}
        onClose={() => setSelectedHotel(null)}
      />
    </>
  );
}