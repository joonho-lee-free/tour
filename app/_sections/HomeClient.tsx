"use client";

import LiveLeadsRolling from "../_components/LiveLeadsRolling";
import HeroLeegaSection from "../_components/HeroLeegaSection";
import HeroSimpleForm from "../_components/HeroSimpleForm";
import RecentLeadsSection from "./RecentLeadsSection";
import CaseStudiesSection from "../_components/CaseStudiesSection";
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
      {/* 1. 상단 띠 배너: 실시간 접수 롤링 배너 (평수 + 업종 + 지역 상세 노출) */}
      <LiveLeadsRolling />

      {/* 2. Hero 섹션: 다크 네이비 톤, 굵고 강렬한 타이포 & 빠른 액션 CTA (051-714-3396 & 1분 무료 견적·지원금 조회) */}
      <HeroLeegaSection />

      {/* 3. Hero 바로 밑 '초간단 1분 지원금 조회 폼' (GA4 & Meta Pixel 전환 이벤트 트래킹 탑재) */}
      <HeroSimpleForm sent={sent} error={error} />

      {/* 4. 최근 문의 접수 10개 목록 (10건 실시간 테이블 롤링) */}
      <RecentLeadsSection />

      {/* 5. 블로그/키워드형 시공 사례 카드 4종 */}
      <CaseStudiesSection />

      {/* 6. 내 점포 보조금 지원액 실시간 계산기 (평수 슬라이더 + 유형 선택 + 즉시 산출) */}
      <SubsidyCalculatorInteractive />

      {/* 7. 공식 인스타그램 현장 소식 (6개 피드 그리드 + 공식 계정 연동) */}
      <InstagramSection />

      {/* 8. [안심 3대 약속 카드] + [자주 묻는 질문 FAQ 아코디언] */}
      <TrustAndFaqSection />

      {/* 9. 푸터 (대표번호 051-714-3396 & 철거전문 이가 사업자 정보) */}
      <Footer />

      {/* 10. 모바일 하단 고정 바 (Sticky Bar: 📞 전화상담 + ⚡ 지원금 무료 조회) */}
      <BottomFloatingBar callPhone="051-714-3396" />
    </main>
  );
}
