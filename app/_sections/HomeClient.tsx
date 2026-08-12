"use client";

import TopAnnouncementBar from "../_components/TopAnnouncementBar";
import BottomFloatingBar from "../_components/BottomFloatingBar";
import Hero from "../_components/Hero";
import Footer from "../_components/Footer";
import BodyCardsSection from "./BodyCardsSection";
import RecentLeadsSection from "./RecentLeadsSection";

const CALL_PHONE = "051-714-3396";
const HERO_IMAGE_SRC = "/images/hero-a.png";

type SearchParams = {
  sent?: string;
  error?: string;
};

export default function HomeClient({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sent = searchParams.sent === "1";
  const error = searchParams.error;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      {/* 상단 핫 페어 공지바 */}
      <TopAnnouncementBar />

      {/* HERO */}
      <Hero
        kakaoChatUrl=""
        callPhone={CALL_PHONE}
        heroImageSrc={HERO_IMAGE_SRC}
        leadAnchorId="sms-lead"
      />

      {/* 본문 핵심 서비스, 계산기, 인스타, 최근문의, 견적신청 폼 및 공정 안내 카드 */}
      <BodyCardsSection sent={sent} error={error} />

      <Footer />

      {/* 모바일 및 데스크톱 고정 하단 퀵바 */}
      <BottomFloatingBar callPhone={CALL_PHONE} />
    </main>
  );
}