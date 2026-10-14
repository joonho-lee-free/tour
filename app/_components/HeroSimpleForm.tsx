"use client";

import { useState } from "react";

type Props = {
  sent?: boolean;
  error?: string;
};

export default function HeroSimpleForm({ sent, error }: Props) {
  const [region, setRegion] = useState("부산 전지역");
  const [storeType, setStoreType] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(true);

  // 전화번호 자동 하이픈 포맷팅
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    let formatted = raw;
    if (raw.length > 3 && raw.length <= 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3)}`;
    } else if (raw.length > 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
    }
    setPhone(formatted);
  };

  // 폼으로 스크롤 이동 및 포커스
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("quick-lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const select = el.querySelector("select");
      if (select) {
        select.focus();
      }
    }
  };

  return (
    <header className="relative overflow-hidden bg-[#0F172A] text-white pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      {/* 배경 장식 그라데이션 및 은은한 빛 효과 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* 1. 상단 뱃지 (이가에프엔비 스타일) */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-amber-300 backdrop-blur-sm shadow-xs">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span>부울경(부산·김해·창원·양산·마산) 전지역 출장 방문</span>
        </div>

        {/* 2. 메인 헤드라인 (이가에프엔비처럼 시선이 확 꽂히는 굵고 직관적인 타이포그래피) */}
        <h1 className="mt-5 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
          상가·매장 철거 비용,
          <br className="sm:hidden" />
          <span className="text-white"> 내 돈 다 내지 마세요!</span>
        </h1>

        <p className="mt-3 text-base sm:text-2xl font-extrabold text-amber-400 tracking-tight leading-snug">
          정부지원금 최대 600만 원 지원
          <span className="text-slate-300 font-bold"> + </span>
          <span className="text-slate-100">복잡한 증빙 서류 100% 무료 대행</span>
        </p>

        {/* 3. 서브 카피 */}
        <p className="mt-3 text-xs sm:text-base text-slate-300 font-medium">
          현장 실측 무료 · 추가금 0원 보증 · 공단 정산 서류 완벽 대행
        </p>

        {/* 4. 상단 빠른 CTA 버튼 그룹 (이가에프엔비 스타일) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
          <a
            href="tel:0517143396"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3.5 text-sm sm:text-base font-extrabold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 active:scale-[0.98]"
            aria-label="전화 상담 051-714-3396 바로 연결"
          >
            <span aria-hidden="true">📞</span>
            <span>전화 상담 (051-714-3396)</span>
          </a>
          <a
            href="#quick-lead-form"
            onClick={handleScrollToForm}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/90 px-5 py-3.5 text-sm sm:text-base font-bold text-white shadow-md transition hover:bg-slate-700 hover:border-slate-500 active:scale-[0.98]"
            aria-label="지원금 무료 조회 폼으로 이동"
          >
            <span aria-hidden="true">✉️</span>
            <span>지원금 무료 조회 폼으로 이동</span>
          </a>
        </div>

        {/* 신뢰 뱃지 3종 */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/70 px-3 py-1.5 shadow-xs">
            <span className="text-emerald-400 font-black">✓</span>
            <span>추가금 0원 확정 견적</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/70 px-3 py-1.5 shadow-xs">
            <span className="text-amber-400 font-black">✓</span>
            <span>공단 서류 100% 무료 접수</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/70 px-3 py-1.5 shadow-xs">
            <span className="text-blue-400 font-black">✓</span>
            <span>세금계산서·폐기물 확인서 완벽 발행</span>
          </span>
        </div>

        {/* 5. 문자 접수 폼 (Hero 바로 아래 연결 & 이가에프엔비 스타일 적용) */}
        <div
          id="quick-lead-form"
          className="mt-8 mx-auto max-w-xl rounded-2xl sm:rounded-3xl border border-slate-700/90 bg-slate-800/95 p-5 sm:p-7 shadow-2xl backdrop-blur-md text-left"
        >
          {/* 카드 상단 헤더 (이가에프엔비 스타일) */}
          <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-bold text-emerald-400">
                <span>💬</span>
                <span>즉시 접수</span>
              </div>
              <h2 className="mt-1 text-lg sm:text-xl font-black text-white">
                상담 신청
              </h2>
              <p className="mt-0.5 text-xs text-slate-400">
                작성 즉시 담당자에게 문자로 안전하게 접수됩니다
              </p>
            </div>
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 font-black text-lg shadow-sm">
              📲
            </div>
          </div>

          {/* 성공/에러 메시지 알림 */}
          {sent && (
            <div className="mb-4 rounded-xl border border-emerald-500/50 bg-emerald-500/20 p-3.5 text-xs sm:text-sm font-bold text-emerald-300 animate-fade-in">
              🎉 <strong>상담 신청이 완료되었습니다!</strong> 담당자가 지원금 자격 검토 후 10분 내로 신속히 연락드립니다.
            </div>
          )}
          {error && (
            <div className="mb-4 rounded-xl border border-red-500/50 bg-red-500/20 p-3.5 text-xs sm:text-sm font-bold text-red-300">
              ⚠️ 접수 중 문제가 발생했습니다. 대표번호(051-714-3396)로 전화주시면 바로 안내해 드립니다.
            </div>
          )}

          <form action="/api/sms-lead" method="post" className="space-y-3.5">
            {/* 히든 필드: 분류 및 문의 타입 고정 */}
            <input
              type="hidden"
              name="inquiryType"
              value="부울경 상가·매장 철거 및 정부지원금 600만 원 문의"
            />
            <input
              type="hidden"
              name="message"
              value={`[상담 신청] 지역: ${region} / 업종: ${storeType || "미입력"}`}
            />

            {/* 항목 1: 철거 지역 선택 (드롭다운) */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                1. 철거 지역 선택 <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <select
                  name="region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required
                  className="w-full appearance-none rounded-xl border border-slate-600 bg-slate-900 px-3.5 py-3 text-sm font-semibold text-white outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition cursor-pointer"
                >
                  <option value="부산 전지역">부산광역시 전지역 (해운대/서면/동래/사하/사상 등)</option>
                  <option value="김해시">경남 김해시 (내외동/장유/삼계/진영 등)</option>
                  <option value="창원·마산">경남 창원시 · 마산 · 진해</option>
                  <option value="양산시">경남 양산시 (물금/웅상/덕계/상북 등)</option>
                  <option value="울산광역시">울산광역시 전지역</option>
                  <option value="기타 부울경">기타 경남 인근 지역</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 항목 2: 점포 업종 입력 */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                2. 점포 업종 입력 <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                name="storeName"
                value={storeType}
                onChange={(e) => setStoreType(e.target.value)}
                required
                maxLength={40}
                placeholder="예: 고깃집, 카페, 학원, 미용실 등"
                className="w-full rounded-xl border border-slate-600 bg-slate-900 px-3.5 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition"
              />
            </div>

            {/* 항목 3: 결과 안내받으실 연락처 */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                3. 결과 안내받으실 연락처 <span className="text-amber-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
                inputMode="numeric"
                maxLength={13}
                placeholder="010-0000-0000"
                className="w-full rounded-xl border border-slate-600 bg-slate-900 px-3.5 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 tracking-wider transition"
              />
            </div>

            {/* 항목 4: 개인정보 수집 및 지원금 자격 조회 목적 이용 동의 */}
            <label className="flex items-center gap-2 pt-1 text-xs text-slate-400 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
                className="rounded border-slate-600 bg-slate-900 text-amber-500 focus:ring-amber-400 h-4 w-4"
              />
              <span>개인정보 수집 및 지원금 자격 조회 목적 이용 동의</span>
            </label>

            {/* 제출 버튼: [상담 신청 하기] */}
            <button
              type="submit"
              disabled={!agreed}
              className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-3.5 sm:py-4 px-4 text-base sm:text-lg font-black text-slate-950 shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-amber-500 active:scale-[0.98] transition cursor-pointer disabled:opacity-50"
            >
              <span>상담 신청 하기</span>
            </button>

            {/* 하단 유의사항 */}
            <p className="text-[11px] text-slate-500 text-center pt-1">
              * 과도한 중복 접수는 제한될 수 있습니다.
            </p>
          </form>
        </div>
      </div>
    </header>
  );
}
