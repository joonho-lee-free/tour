"use client";

import TopAnnouncementBar from "../_components/TopAnnouncementBar";
import HeroSimpleForm from "../_components/HeroSimpleForm";
import LiveLeadsRolling from "../_components/LiveLeadsRolling";
import SubsidyCalculatorInteractive from "../_components/SubsidyCalculatorInteractive";
import TrustPromiseRoadmap from "../_components/TrustPromiseRoadmap";
import InstagramSection from "./InstagramSection";
import Footer from "../_components/Footer";
import BottomFloatingBar from "../_components/BottomFloatingBar";

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
    <main className="min-h-screen bg-slate-900 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* 1. 상단 알림 바 (초간결 부울경 혜택 안내) */}
      <TopAnnouncementBar />

      {/* 2. 히어로 섹션 (첫 화면 - 모바일 스크롤 없이 핵심 노출 + 초간단 1분 신청 폼) */}
      <HeroSimpleForm sent={sent} error={error} />

      {/* 3. 실시간 접수 현황 (최근 문의사항 유지 - 텍스트 롤링 배너) */}
      <LiveLeadsRolling />

      {/* 4. 내 점포 보조금 지원액 실시간 계산기 (평수 슬라이더 + 유형 선택 + 즉시 산출) */}
      <SubsidyCalculatorInteractive />

      {/* 5. 안심 3대 약속 & 3단계 절차 (카드형 인포그래픽 다이어트) */}
      <TrustPromiseRoadmap />

      {/* 6. 공식 인스타그램 현장 소식 (6개 피드 그리드 + 공식 계정 연동) */}
      <InstagramSection />

      {/* 7. 푸터 (사업자 정보 & 무료 방문 실측 안내) */}
      <Footer />

      {/* 8. 모바일 하단 고정 바 (Sticky CTA: 2버튼 전화상담 + 지원금 무료조회) */}
      <BottomFloatingBar callPhone="010-6638-6576" />
    </main>
  );
}