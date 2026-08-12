"use client";

import TopAnnouncementBar from "../_components/TopAnnouncementBar";
import BottomFloatingBar from "../_components/BottomFloatingBar";
import Hero from "../_components/Hero";
import Footer from "../_components/Footer";
import BodyCardsSection from "./BodyCardsSection";
import RecentLeadsSection from "./RecentLeadsSection";
import InstagramSection from "./InstagramSection";

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

      {/* 본문 3대 핵심 서비스 및 실시간 계산기, 비포애프터, 포트폴리오 카드 */}
      <BodyCardsSection />

      {/* 최근 상담 문의 현황 */}
      <RecentLeadsSection />

      {/* 실시간 견적 및 보조금 대상 조회 신청 폼 */}
      <section
        id="sms-lead"
        className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-8"
      >
        <div className="group rounded-3xl border-2 border-slate-900 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-white shadow-2xl md:p-8">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-black text-amber-400 border border-amber-400/40">
                <span>🏛️ 소상공인 정부보조금 지원 컨설팅</span>
                <span className="h-1 w-1 rounded-full bg-amber-400"></span>
                <span>0원 찔러보기 환영</span>
              </div>
              <h2 className="mt-3 text-xl font-black text-white md:text-3xl">
                정부 보조금 최대 600만 원까지! 신흥건설 자격 조회 & 무료 방문견적
              </h2>
              <p className="mt-1 text-xs text-slate-300 md:text-sm">
                접수 즉시 신흥건설 보조금 전문 컨설팅팀 & 직영 기술자가 확인 후 신속하게 연락드립니다.
              </p>
            </div>

            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-slate-950 text-2xl font-black shadow-lg"
              aria-hidden
            >
              📞
            </div>
          </div>

          {sent && (
            <div className="mb-6 rounded-2xl border-2 border-emerald-400/40 bg-emerald-500/20 px-5 py-4 text-sm font-black text-emerald-300">
              ✅ 접수가 완료되었습니다! 신흥건설 담당자가 빛의 속도로 확인 후 연락드리겠습니다. 🙂
            </div>
          )}

          {error && (
            <div className="mb-6 rounded-2xl border-2 border-red-400/40 bg-red-500/20 px-5 py-4 text-sm font-black text-red-300">
              ⚠️ 접수 중 오류가 발생했습니다. 직통 전화(051-714-3396)로 언제든 문의 주세요!
            </div>
          )}

          <form action="/api/sms-lead" method="post" className="grid gap-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-300">
                  성함 / 상호명 <span className="text-amber-400">*</span>
                </label>
                <input
                  name="storeName"
                  required
                  maxLength={40}
                  placeholder="예: 홍길동 / 신흥상가"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-300">
                  연락처 <span className="text-amber-400">*</span>
                </label>
                <input
                  name="phone"
                  required
                  inputMode="numeric"
                  placeholder="연락처 (010-XXXX-XXXX)"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-300">
                  공사 분야 선택
                </label>
                <select
                  name="inquiryType"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="전문철거 및 정부보조금 600만 문의">🔨 전문 철거 & 정부 보조금(최대 600만)</option>
                  <option value="HACCP공사 문의">🏭 HACCP 식품공장 & 클린룸 시공</option>
                  <option value="전기공사 문의">⚡ 전기공사 (한전 승압 / 동력전기 / 배선)</option>
                  <option value="시설보수 및 리모델링 문의">🛠️ 옥상·외벽 철통 방수 / 균열 보수 / 리모델링</option>
                  <option value="종합 공사 문의">🏗️ 신흥건설 종합 철거 & 시공 문의</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-300">
                현장 위치 (지역)
              </label>
              <input
                name="region"
                placeholder="예: 부산 강서구 / 서울 강남구 / 경기 화성시 / 경남 김해시"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-300">
                상세 요청 내용
              </label>
              <textarea
                name="message"
                rows={4}
                maxLength={400}
                placeholder="요청 내용 (예: 40평 식당 철거하려는데 600만원 보조금 진짜 되나요? / HACCP 판넬이랑 승압공사 한 방에 0원 출장견적 와주세요!)"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <label className="flex items-start gap-2 text-xs text-slate-300 cursor-pointer">
              <input type="checkbox" required className="mt-0.5 accent-amber-500 h-4 w-4" />
              <span>개인정보 수집 및 이용에 동의합니다 (보조금 조회 및 견적 목적)</span>
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-4 text-base font-black text-slate-950 shadow-xl transition hover:from-amber-300 hover:to-amber-500 active:scale-95"
            >
              <span>🚀</span>
              <span>0원 현장 방문견적 & 600만 보조금 조회 신청하기</span>
            </button>

            <p className="text-[11px] text-slate-400 text-center">
              * 작성해주신 개인정보는 보조금 자격 조회 및 견적 안내 목적 외 절대로 남용되지 않습니다.
            </p>
          </form>
        </div>
      </section>

      {/* Instagram / SNS / Gallery grid */}
      <InstagramSection />

      <Footer />

      {/* 모바일 및 데스크톱 고정 하단 퀵바 */}
      <BottomFloatingBar callPhone={CALL_PHONE} />
    </main>
  );
}