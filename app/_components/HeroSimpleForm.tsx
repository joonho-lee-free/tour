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

  return (
    <header className="relative overflow-hidden bg-[#0F172A] text-white pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      {/* 배경 장식 그라데이션 및 은은한 빛 효과 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* 1. 최상단 강조 뱃지 */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-amber-300 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span>부울경(부산·김해·창원·양산·마산) 전지역 출장 방문</span>
        </div>

        {/* 2. 메인 카피라이팅 (초간결 & 강렬) */}
        <h1 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
          상가·매장 철거 비용,
          <br className="sm:hidden" />
          <span className="text-white"> 내 돈 다 내지 마세요!</span>
        </h1>

        <p className="mt-3 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          <strong className="text-amber-400 font-extrabold">정부지원금 최대 600만 원 지원</strong>
          <span className="text-slate-400"> + </span>
          복잡한 증빙 서류 100% 무료 대행
        </p>

        {/* 3. 초간단 1분 신청 폼 (첫 화면 핵심 노출) */}
        <div
          id="quick-lead-form"
          className="mt-6 sm:mt-8 mx-auto max-w-xl rounded-2xl sm:rounded-3xl border border-slate-700/80 bg-slate-800/90 p-5 sm:p-7 shadow-2xl backdrop-blur-md text-left"
        >
          <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                1 Minute Fast Check
              </span>
              <h2 className="text-base sm:text-lg font-black text-white">
                내 지원금 대상 여부 무료 조회
              </h2>
            </div>
            <span className="rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-[11px] font-bold px-2.5 py-0.5">
              조회비용 0원
            </span>
          </div>

          {/* 성공/에러 메시지 알림 */}
          {sent && (
            <div className="mb-4 rounded-xl border border-emerald-500/50 bg-emerald-500/20 p-3.5 text-xs sm:text-sm font-bold text-emerald-300 animate-fade-in">
              🎉 <strong>접수가 완료되었습니다!</strong> 담당자가 지원금 자격 검토 후 10분 내로 신속히 연락드립니다.
            </div>
          )}
          {error && (
            <div className="mb-4 rounded-xl border border-red-500/50 bg-red-500/20 p-3.5 text-xs sm:text-sm font-bold text-red-300">
              ⚠️ 접수 중 문제가 발생했습니다. 직통 번호(010-6638-6576)로 전화주시면 바로 안내해 드립니다.
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
              value={`[초간단1분신청] 지역: ${region} / 업종: ${storeType || "미입력"}`}
            />

            {/* 항목 1: 지역 선택 (드롭다운) */}
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
                  <option value="부산 전지역">부산광역시 전지역 (해운대/서면/동래/사상 등)</option>
                  <option value="김해시">경남 김해시 (내외동/장유/진영 등)</option>
                  <option value="창원·마산">경남 창원시 · 마산 · 진해</option>
                  <option value="양산시">경남 양산시 (물금/웅상/덕계 등)</option>
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

            {/* 항목 2: 업종 입력 */}
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
                placeholder="예: 고깃집, 카페, 학원, 미용실, 옷가게 등"
                className="w-full rounded-xl border border-slate-600 bg-slate-900 px-3.5 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition"
              />
            </div>

            {/* 항목 3: 연락처 입력 */}
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

            {/* 개인정보 수집 동의 */}
            <label className="flex items-center gap-2 pt-1 text-[11px] text-slate-400 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
                className="rounded border-slate-600 bg-slate-900 text-amber-500 focus:ring-amber-400 h-3.5 w-3.5"
              />
              <span>개인정보 수집 및 지원금 자격 조회 목적 이용 동의</span>
            </label>

            {/* 강조 액션 버튼 */}
            <button
              type="submit"
              disabled={!agreed}
              className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-3.5 sm:py-4 px-4 text-sm sm:text-base font-black text-slate-950 shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-amber-500 active:scale-[0.98] transition cursor-pointer"
            >
              <span>⚡</span>
              <span>내 지원금 대상 여부 1분 조회하기 (무료)</span>
            </button>
          </form>

          {/* 신뢰 서브 안내 문구 */}
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 px-1">
            <span className="flex items-center gap-1">
              <span className="text-emerald-400">✓</span> 조회 시 신용점수 영향 0%
            </span>
            <span className="flex items-center gap-1">
              <span className="text-emerald-400">✓</span> 상담 후 취소해도 위약금 0원
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
