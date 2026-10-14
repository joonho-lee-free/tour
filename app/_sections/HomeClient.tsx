"use client";

import TopAnnouncementBar from "../_components/TopAnnouncementBar";
import HeroLeegaSection from "../_components/HeroLeegaSection";
import HeroSimpleForm from "../_components/HeroSimpleForm";
import LiveLeadsRolling from "../_components/LiveLeadsRolling";
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
    <main className="min-h-screen bg-slate-900 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* 1. 상단 알림 바 (대표번호 051-714-3396) */}
      <TopAnnouncementBar />

      {/* 2. 이가에프엔비 스타일 히어로 섹션 (화이트 2열 레이아웃: 헤드라인 + 3개 액션 버튼 + 우측 이미지 카드) */}
      <HeroLeegaSection />

      {/* 3. 문자 접수 폼 (기존과 동일하게 유지) */}
      <HeroSimpleForm sent={sent} error={error} />

      {/* 3. 실시간 접수 현황 (시간 표시 완전 삭제, 실제 부울경 지역 기반 텍스트 롤링) */}
      <LiveLeadsRolling />

      {/* 4. 내 점포 보조금 지원액 실시간 계산기 (평수 슬라이더 + 유형 선택 + 즉시 산출) */}
      <SubsidyCalculatorInteractive />

      {/* 5. 공식 인스타그램 현장 소식 (6개 피드 그리드 + 공식 계정 연동) */}
      <InstagramSection />

      {/* 6. 인스타그램 하단 추가 설명 블록 보강: [왜 SH철거인가? 안심 3대 약속 카드] + [자주 묻는 질문 FAQ 아코디언] */}
      <TrustAndFaqSection />

      {/* 7. 푸터 (대표번호 051-714-3396 & 사업자 정보) */}
      <Footer />

      {/* 8. 모바일 하단 고정 바 (Sticky CTA: 전화상담 tel:0517143396 + 지원금 무료조회) */}
      <BottomFloatingBar callPhone="051-714-3396" />
    </main>
  );
}