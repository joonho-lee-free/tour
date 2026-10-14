"use client";

import { useState, useMemo } from "react";

const DEMOLITION_TYPES = [
  { id: "full_restore", label: "상가·식당 전체 원상복구", desc: "바닥/벽체/천장/주방 집기류 일체" },
  { id: "interior_only", label: "내부 인테리어 철거", desc: "가구/파티션/조명/데코타일 제거" },
  { id: "partial", label: "부분 철거 및 시설 분리", desc: "가벽 철거/주방 철거/간판 철거" },
];

export default function SubsidyCalculatorInteractive() {
  const [pyung, setPyung] = useState<number>(20);
  const [selectedType, setSelectedType] = useState<string>("full_restore");

  // 평당 20만 원 기준, 최대 600만 원 한도 (소상공인시장진흥공단 기준)
  const subsidyAmount = useMemo(() => {
    const raw = pyung * 20;
    return Math.min(raw, 600);
  }, [pyung]);

  // 상단 폼으로 부드럽게 스크롤
  const handleScrollToForm = () => {
    const el = document.getElementById("quick-lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      // 폼의 업종/메모 등에 포커스 유도
      const input = el.querySelector("input[name='storeName']") as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }
  };

  return (
    <section id="subsidy-calculator" className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="mx-auto max-w-4xl">
        {/* 헤더 안내 */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 px-3 py-1 text-xs font-bold text-amber-300">
            <span>💰</span>
            <span>2026 정부 지원금 산출 기준 반영</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            내 점포 보조금 지원액 실시간 계산기
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            점포 평수와 철거 유형을 선택하시면 내가 받을 수 있는 최대 지원금을 1초 만에 계산해 드립니다.
          </p>
        </div>

        {/* 인터랙티브 계산 카드 */}
        <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-950 p-6 sm:p-8 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* 좌측: 컨트롤러 (슬라이더 + 옵션) */}
            <div className="lg:col-span-7 space-y-6">
              {/* 1. 평수 슬라이더 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-slate-200">
                    점포 전용 면적 선택 (평수)
                  </label>
                  <div className="text-lg sm:text-xl font-black text-amber-400">
                    {pyung}평 <span className="text-xs text-slate-400 font-normal">({Math.round(pyung * 3.3058)}㎡)</span>
                  </div>
                </div>

                <input
                  type="range"
                  min={5}
                  max={60}
                  step={1}
                  value={pyung}
                  onChange={(e) => setPyung(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
                />

                <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1.5">
                  <span>5평 (최소)</span>
                  <span>15평 (300만원)</span>
                  <span>30평 이상 (최대 600만 한도)</span>
                </div>

                {/* 퀵버튼 */}
                <div className="grid grid-cols-5 gap-1.5 mt-3">
                  {[10, 20, 30, 40, 50].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setPyung(val)}
                      className={`rounded-lg py-1.5 text-xs font-bold transition border cursor-pointer ${
                        pyung === val
                          ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                          : "bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"
                      }`}
                    >
                      {val}평
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. 폐업/철거 유형 선택 */}
              <div>
                <label className="block text-sm font-bold text-slate-200 mb-2">
                  폐업 / 철거 유형 선택
                </label>
                <div className="grid gap-2 sm:grid-cols-3">
                  {DEMOLITION_TYPES.map((type) => {
                    const isSelected = selectedType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`text-left p-3 rounded-xl border transition cursor-pointer ${
                          isSelected
                            ? "bg-amber-500/15 border-amber-400 text-white shadow-xs"
                            : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-amber-400 bg-amber-400" : "border-slate-500"
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                          </span>
                          <span className="text-xs font-bold">{type.label}</span>
                        </div>
                        <p className="mt-1 text-[10px] text-slate-400 leading-tight pl-4">
                          {type.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 우측: 계산 결과 카드 및 액션 버튼 */}
            <div className="lg:col-span-5 rounded-2xl border border-amber-400/40 bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-950 p-5 sm:p-6 text-center flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-amber-400/20 px-3 py-0.5 text-xs font-bold text-amber-300">
                  {pyung}평 기준 산출 결과
                </span>

                <div className="mt-4">
                  <div className="text-xs text-slate-300">예상 정부지원금</div>
                  <div className="mt-1 text-3xl sm:text-4xl font-black text-amber-400">
                    최대 {subsidyAmount.toLocaleString()}만 원
                  </div>
                  <p className="mt-1 text-xs font-bold text-emerald-400">
                    ✓ 자부담 비용 대폭 절감 가능
                  </p>
                </div>

                <div className="mt-4 border-t border-slate-800 pt-3 text-[11px] text-slate-400 text-left space-y-1">
                  <div className="flex justify-between">
                    <span>지원 기준:</span>
                    <span className="text-slate-200">평당 20만 원 지원 (전용면적)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>최대 지원한도:</span>
                    <span className="text-slate-200">사업장당 최대 600만 원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>서류 대행 비용:</span>
                    <span className="text-amber-400 font-bold">100% 무료 대행</span>
                  </div>
                </div>
              </div>

              {/* 연동 버튼 */}
              <button
                type="button"
                onClick={handleScrollToForm}
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-3.5 px-4 text-xs sm:text-sm font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-300 hover:to-amber-500 active:scale-95 transition cursor-pointer"
              >
                <span>🚀</span>
                <span>이 금액으로 무료 현장 실측 예약하기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
