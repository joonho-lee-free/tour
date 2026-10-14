"use client";

import TopAnnouncementBar from "../_components/TopAnnouncementBar";
import HeroLeegaSection from "../_components/HeroLeegaSection";
import HeroSimpleForm from "../_components/HeroSimpleForm";
import LiveLeadsRolling from "../_components/LiveLeadsRolling";
import RecentLeadsSection from "./RecentLeadsSection";
import SubsidyCalculatorInteractive from "../_components/SubsidyCalculatorInteractive";
import InstagramSection from "./InstagramSection";
import TrustAndFaqSection from "../_components/TrustAndFaqSection";
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
    <main className="min-h-screen bg-white text-gray-900 selection:bg-amber-500 selection:text-slate-950">
      {/* 1. 상단 알림 바 (대표번호 051-714-3396) */}
      <TopAnnouncementBar />

      {/* 2. 이가에프엔비 스타일 히어로 섹션 (화이트 2열 레이아웃: 헤드라인 + 3개 액션 버튼 + 우측 이미지 카드) */}
      <HeroLeegaSection />

      {/* 3. 문자 접수 폼 (1분 빠른 자격 조회) */}
      <HeroSimpleForm sent={sent} error={error} />

      {/* 4. 실시간 접수 현황 (시간 표시 완전 삭제, 실제 부울경 지역 기반 텍스트 롤링) */}
      <LiveLeadsRolling />

      {/* 5. 최근 문의 접수 10개 목록 (실시간 접수 바로 밑에 원래 있던 10건 표) */}
      <RecentLeadsSection />

      {/* 6. 내 점포 보조금 지원액 실시간 계산기 (평수 슬라이더 + 유형 선택 + 즉시 산출) */}
      <SubsidyCalculatorInteractive />

      {/* 6. 공식 인스타그램 현장 소식 (6개 피드 그리드 + 공식 계정 연동) */}
      <InstagramSection />

      {/* 7. [안심 3대 약속 카드] + [자주 묻는 질문 FAQ 아코디언] */}
      <TrustAndFaqSection />

      {/* 7. 푸터 (대표번호 051-714-3396 & 사업자 정보) */}
      <Footer />

      {/* 8. 모바일 하단 고정 바 (Sticky CTA: 전화상담 tel:0517143396 + 지원금 무료조회) */}
      <BottomFloatingBar callPhone="051-714-3396" />
    </main>
  );
}