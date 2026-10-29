import type { Metadata } from "next";
import HomeClient from "./_sections/HomeClient";

export const metadata: Metadata = {
  title: "부울경 상가·매장 철거 비용, 내 돈 다 내지 마세요! | 정부지원금 최대 600만 원 지원 - 李家",
  description:
    "부산·김해·창원·마산·양산 상가·매장 전문 철거 및 원상복구! 소상공인 점포철거 정부지원금 최대 600만 원 지원 + 복잡한 증빙 서류 100% 무료 대행. 추가금 0원 보증 무료 방문 실측",
  alternates: {
    canonical: "https://shcom714.com/",
  },
  openGraph: {
    title: "부울경 상가·매장 철거 | 정부지원금 최대 600만 원 + 서류 100% 무료 대행 - 李家",
    description:
      "상가·매장 철거비 내 돈 다 내지 마세요! 부울경 전지역 무료 방문 실측 및 정부지원금 600만 원 1분 즉시 조회",
    url: "https://shcom714.com/",
    siteName: "李家(이가) 부울경 상가철거 & 정부지원금 지원센터",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "부울경 상가·매장 철거 비용, 내 돈 다 내지 마세요! - 李家",
    description:
      "정부지원금 최대 600만 원 지원 + 복잡한 증빙 서류 100% 무료 대행. 부울경 전지역 0원 출장 실측",
  },
  keywords: [
    "부산 상가 철거",
    "김해 상가 철거",
    "창원 상가 철거",
    "양산 상가 철거",
    "마산 상가 철거",
    "부울경 점포 철거",
    "상가 원상복구",
    "식당 철거",
    "카페 철거",
    "학원 철거",
    "소상공인 철거지원금",
    "점포철거비 지원사업",
    "정부지원금 600만원",
    "철거 서류 무료대행",
    "희망리턴패키지 철거",
    "이가철거",
    "李家",
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

export default async function Page(props: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await props.searchParams) || {};
  return <HomeClient searchParams={sp} />;
}