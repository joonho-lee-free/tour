"use client";

import { useState, useMemo } from "react";

export default function SubsidyCalculator() {
  const [pyung, setPyung] = useState<number>(20);

  const calculatedAmount = useMemo(() => {
    // 평당 20만 원, 최대 600만 원
    const raw = pyung * 20;
    return Math.min(raw, 600);
  }, [pyung]);

  return (
    <section className="w-full py-6">
      <div className="rounded-3xl border-2 border-slate-900 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-white shadow-2xl md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-black text-amber-400 border border-amber-400/30">
              <span>🧮 무촌 스타일 실시간 계산기</span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
              <span>평당 20만 원 기준</span>
            </div>
            <h2 className="mt-3 text-2xl font-black text-white md:text-4xl">
              내 점포 보조금 지원액 실시간 계산기
            </h2>
            <p className="mt-1.5 text-xs text-slate-300 md:text-sm">
              점포 전용 면적(평수)만 입력하면 최대 600만 원까지 받을 수 있는 예상 정부 보조금을 즉시 계산해 드립니다!
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/90 p-4 text-center md:text-right">
            <span className="text-xs text-slate-400 font-bold">예상 최대 환급 보조금</span>
            <div className="mt-1 text-3xl font-black text-amber-400 md:text-4xl">
              최대 {calculatedAmount.toLocaleString()} 만 원!
            </div>
            <span className="text-[11px] text-slate-400">
              (평당 20만 원 지원기준 · 부가세 제외)
            </span>
          </div>
        </div>

        {/* 계산기 조작 영역 */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between text-sm">
              <label className="font-black text-amber-300">
                점포 면적 선택 (평수)
              </label>
              <div className="text-xl font-black text-white">
                <span className="text-amber-400">{pyung}</span> 평 ({Math.round(pyung * 3.3058)} ㎡)
              </div>
            </div>

            <input
              type="range"
              min={5}
              max={60}
              step={1}
              value={pyung}
              onChange={(e) => setPyung(Number(e.target.value))}
              className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />

            <div className="flex justify-between text-[11px] font-bold text-slate-400">
              <span>5평 (100만원)</span>
              <span>15평 (300만원)</span>
              <span>30평 이상 (최대 600만원)</span>
            </div>

            <div className="grid grid-cols-4 gap-2 pt-2">
              {[10, 20, 30, 40].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setPyung(val)}
                  className={`rounded-xl py-2 text-xs font-black transition border ${
                    pyung === val
                      ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                      : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                  }`}
                >
                  {val}평
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
              <h4 className="text-sm font-black text-amber-300 flex items-center gap-2">
                <span>💡</span>
                <span>보조금 100% 챙겨받는 3대 수혜 공식</span>
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">1.</span>
                  <span><strong>반드시 철거 공사 전</strong>에 신청하셔야 혜택이 적용됩니다!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">2.</span>
                  <span>정식 사업자 등록된 전문 철거업체 시공 증빙 필수</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">3.</span>
                  <span>자격 검수부터 증빙 가이드는 <strong>신흥건설에서 100% 맞춤 컨설팅!</strong></span>
                </li>
              </ul>
            </div>

            <a
              href="#sms-lead"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-4 text-base font-black text-slate-950 shadow-xl transition hover:from-amber-300 hover:to-amber-500 active:scale-95"
            >
              <span>💰</span>
              <span>{pyung}평 예상 보조금({calculatedAmount}만 원) 신청하기 ➔</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
