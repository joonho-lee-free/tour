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
    <section className="relative overflow-hidden bg-white text-center flex flex-col items-center justify-center pt-8 pb-14 px-4 sm:px-6 border-b border-gray-100">
      {/* 폼 안내 상단 헤더 */}
      <div className="mb-6 max-w-xl text-center">
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 border border-amber-500/30 mb-2">
          ⚡ 1분 빠른 자격 조회
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-gray-900">
          정부지원금 최대 600만 원 무료 조회 신청
        </h2>
      </div>

      {/* 문자 접수 폼 카드 */}
      <div
        id="quick-lead-form"
        className="w-full max-w-xl rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-5 sm:p-7 shadow-xl text-left"
      >
        {/* 폼 카드 타이틀 */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-gray-900">
              내 지원금 대상 여부 무료 조회
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              작성 즉시 담당자에게 문자로 안전하게 접수됩니다
            </p>
          </div>
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-400/30 text-amber-600 font-black text-lg shadow-xs">
            📲
          </div>
        </div>

        {/* 성공/에러 메시지 알림 */}
        {sent && (
          <div className="mb-4 rounded-xl border border-emerald-500/40 bg-emerald-50 p-3.5 text-xs sm:text-sm font-bold text-emerald-800 animate-fade-in">
            🎉 <strong>조회 신청이 완료되었습니다!</strong> 담당자가 지원금 자격 검토 후 10분 내로 신속히 연락드립니다.
          </div>
        )}
        {error && (
          <div className="mb-4 rounded-xl border border-red-500/40 bg-red-50 p-3.5 text-xs sm:text-sm font-bold text-red-800">
            ⚠️ 접수 중 문제가 발생했습니다. 대표번호(051-714-3396)로 전화주시면 바로 안내해 드립니다.
          </div>
        )}

        <form action="/api/sms-lead" method="post" className="space-y-3.5">
          {/* 히든 필드 */}
          <input
            type="hidden"
            name="inquiryType"
            value="부울경 상가·매장 철거 및 정부지원금 600만 원 문의"
          />
          <input
            type="hidden"
            name="message"
            value={`[지원금 조회] 지역: ${region} / 업종: ${storeType || "미입력"}`}
          />

          {/* 항목 1: [철거 지역 선택] (드롭다운) */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              철거 지역 선택 <span className="text-amber-500">*</span>
            </label>
            <div className="relative">
              <select
                name="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                required
                className="w-full appearance-none rounded-xl border border-gray-300 bg-gray-50 px-3.5 py-3 text-sm font-semibold text-gray-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition cursor-pointer"
              >
                <option value="부산 전지역">부산광역시 전지역 (해운대/서면/동래/사하/사상 등)</option>
                <option value="김해시">경남 김해시 (내외동/장유/삼계/진영 등)</option>
                <option value="창원·마산">경남 창원시 · 마산 · 진해</option>
                <option value="양산시">경남 양산시 (물금/웅상/덕계/상북 등)</option>
                <option value="울산광역시">울산광역시 전지역</option>
                <option value="기타 부울경">기타 경남 인근 지역</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 항목 2: [점포 업종 입력] */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              점포 업종 입력 <span className="text-amber-500">*</span>
            </label>
            <input
              type="text"
              name="storeName"
              value={storeType}
              onChange={(e) => setStoreType(e.target.value)}
              required
              maxLength={40}
              placeholder="예: 고깃집, 카페, 학원, 미용실 등"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition"
            />
          </div>

          {/* 항목 3: [결과 안내받으실 연락처] */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              결과 안내받으실 연락처 <span className="text-amber-500">*</span>
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
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 tracking-wider transition"
            />
          </div>

          {/* 개인정보 수집 동의 체크박스 */}
          <label className="flex items-center gap-2 pt-1 text-xs text-gray-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              className="rounded border-gray-300 bg-white text-amber-500 focus:ring-amber-400 h-4 w-4"
            />
            <span>개인정보 수집 및 지원금 자격 조회 목적 이용 동의</span>
          </label>

          {/* 제출 버튼: [내 지원금 대상 여부 무료 조회하기] */}
          <button
            type="submit"
            disabled={!agreed}
            className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 py-3.5 sm:py-4 px-4 text-base sm:text-lg font-black text-gray-950 shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98] transition cursor-pointer disabled:opacity-50"
          >
            <span>내 지원금 대상 여부 무료 조회하기</span>
          </button>

          {/* 하단 유의사항 */}
          <p className="text-[11px] text-gray-500 text-center pt-1">
            * 과도한 중복 접수는 제한될 수 있습니다.
          </p>
        </form>
      </div>
    </section>
  );
}
