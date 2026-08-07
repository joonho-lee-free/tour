import type { Metadata } from "next";
import HomeClient from "./_sections/HomeClient";

export const metadata: Metadata = {
  title: "전문 철거공사 · 정부보조금 최대 600만원 지원 | HACCP공사 & 전기/시설보수",
  description:
    "상가·사무실·공장 전문 철거, 점포 원상복구 시 소상공인 정부 보조금 최대 600만원 지원 신청 대행! HACCP 인증 공사, 전기공사(승압/배선/동력), 시설 보수 및 리모델링 전문기업",
  alternates: {
    canonical: "https://haccp4553.vercel.app/",
  },
  openGraph: {
    title: "전문 철거공사 · 정부보조금 최대 600만원 지원 | HACCP공사 & 전기/시설보수",
    description:
      "전문 철거 및 점포 원상복구 소상공인 정부보조금 최대 600만원 지원! HACCP공사, 전기공사(승압/배선), 시설 보수 리모델링 무료 방문견적",
    url: "https://haccp4553.vercel.app/",
    siteName: "전문 철거 & HACCP · 전기/시설보수 센터",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "https://haccp4553.vercel.app/images/hero-demolition.jpg",
        width: 1200,
        height: 630,
        alt: "전문 철거 및 정부보조금 600만원 지원 시공 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "전문 철거공사 · 정부보조금 최대 600만원 지원 | HACCP공사 & 전기/시설보수",
    description:
      "전문 철거 및 점포 원상복구 소상공인 정부보조금 최대 600만원 지원! HACCP공사 및 전기/시설보수 전문",
    images: ["https://haccp4553.vercel.app/images/hero-demolition.jpg"],
  },
  keywords: [
    "전문 철거",
    "상가 철거",
    "사무실 철거",
    "공장 철거",
    "철거 보조금",
    "정부보조금 600만원",
    "소상공인 점포철거 지원금",
    "원상복구 공사",
    "HACCP 공사",
    "식품공장 공사",
    "클린룸 시공",
    "전기공사",
    "한전 승압공사",
    "동력전기",
    "시설 보수",
    "옥상 방수",
    "외벽 방수",
    "시설 리모델링",
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