import type { Metadata } from "next";
import HomeClient from "./_sections/HomeClient";

export const metadata: Metadata = {
  title: "코사무이 전문여행 | 온라인 최저가 맞춤 상담 - 허니예스",
  description:
    "허니예스는 코사무이 전문여행 상담을 진행합니다. 가족여행, 커플여행, 허니문, 자유여행을 일정과 예산에 맞춰 온라인 최저가 견적으로 빠르게 안내해드립니다.",
  alternates: {
    canonical: "https://tour6576.vercel.app/",
  },
  openGraph: {
    title: "코사무이 전문여행 | 온라인 최저가 맞춤 상담 - 허니예스",
    description:
      "코사무이 가족여행, 허니문, 자유여행, 풀빌라·리조트 상담까지 온라인 최저가 맞춤 견적으로 안내합니다.",
    url: "https://tour6576.vercel.app/",
    siteName: "허니예스",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "https://tour6576.vercel.app/images/hero-a.png",
        width: 1200,
        height: 630,
        alt: "허니예스 코사무이 여행 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "코사무이 전문여행 | 온라인 최저가 맞춤 상담 - 허니예스",
    description:
      "코사무이 여행을 일정과 예산에 맞춰 온라인 최저가로 상담해드립니다.",
    images: ["https://tour6576.vercel.app/images/hero-a.png"],
  },
  keywords: [
    "코사무이",
    "코사무이 여행",
    "코사무이 전문여행",
    "코사무이 여행사",
    "코사무이 자유여행",
    "코사무이 가족여행",
    "코사무이 허니문",
    "코사무이 풀빌라",
    "코사무이 리조트",
    "코사무이 최저가",
    "허니예스",
    "태국 여행",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

type SearchParams = {
  sent?: string;
  error?: string;
};

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<SearchParams> | SearchParams;
}) {
  const sp: SearchParams =
    searchParams && typeof (searchParams as any)?.then === "function"
      ? await (searchParams as Promise<SearchParams>)
      : ((searchParams as SearchParams) ?? {});

  return <HomeClient searchParams={sp} />;
}