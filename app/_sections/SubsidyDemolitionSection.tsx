"use client";

import { useMemo } from "react";

export default function SubsidyDemolitionSection() {
  const subsidyPoints = useMemo(
    () => [
      {
        title: "누가 받나요?",
        desc: "폐업 예정이거나 이전·원상복구가 필요한 대한민국 소상공인/자영업자 누구나!",
        badge: "최대 600만 원 환급",
        icon: "📋",
      },
      {
        title: "어디까지 지원되나요?",
        desc: "점포 철거비, 천장/가벽 철거, 타일 바닥 원상복구, 쓰레기 폐기물 수거 비용 전반",
        badge: "실비 지원 혜택",
        icon: "🏗️",
      },
      {
        title: "서류 복잡하지 않나요?",
        desc: "전혀요! 李家(이가)에서 시공 전후 사진부터 신청 증빙 서류까지 100% 무료 작성 대행!",
        badge: "서류 100% 무료 대행",
        icon: "✍️",
      },
      {
        title: "돈은 언제 나오나요?",
        desc: "안전 철거 완료 보고서 제출 후 실질적인 보조금 통장 입금까지 李家가 1:1 끝까지 밀착 케어!",
        badge: "속도전 1:1 케어",
        icon: "⚡",
      },
    ],
    []
  );

  const demolitionTypes = useMemo(
    () => [
      {
        title: "상가 · 식당 · 카페 원상복구",
        desc: "기름때 범벅 주방 후드, 파티션, 타일 및 집기류 싹 쓸어버리고 조물주 건물주 검수 승인 100%!",
        tag: "소상공인 대강추",
      },
      {
        title: "사무실 · 학원 · 병원 철거",
        desc: "가벽 털고, 천장 텍스 털고, 바닥 데코타일 깔끔 제거! 보조금 600만 원 챙겨서 가벼운 발걸음!",
        tag: "보조금 600만 지원",
      },
      {
        title: "공장 · 물류창고 대형 철거",
        desc: "H빔, 샌드위치 판넬, 고중량 생산 설비 중장비 동원해서 남김없이 부수고 원상복구!",
        tag: "대형 파괴 전문",
      },
      {
        title: "특수 구조물 · 수영장 철거",
        desc: "무진동/소음 최소화 특수 타공 장비로 민원 제로 도전! 콘크리트 및 수영장 특수 철거 완벽 배출",
        tag: "민원 제로 기술력",
      },
    ],
    []
  );

  return (
    <section id="demolition-subsidy" className="w-full py-6">
      {/* 정부 보조금 600만 원 강조 하이라이트 박스 */}
      <div className="rounded-3xl border-2 border-slate-900 bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-red-500/15 p-6 shadow-xl md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-black text-amber-400 shadow">
              <span>🏛️ 국가 지원 정책 사업</span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
              <span>李家(이가) 서류 대행 컨설팅</span>
            </div>
            
            <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-4xl leading-tight">
              철거할 때 그냥 부수면 손해! <br className="hidden sm:block" />
              <span className="text-red-600 underline decoration-amber-400 decoration-4">정부 보조금 최대 600만 원까지</span> 챙겨서 부수세요!
            </h2>
            
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              폐업이나 이전 점포 철거 시 국가에서 지원하는 소상공인 정책 지원금(희망리턴패키지 등)! <br />
              <strong className="text-slate-900 font-black">李家(이가)</strong>가 600만 원 보조금 신청 서류 작성부터 증빙 제출, 전문 철거 시공까지 100% 대행해 드립니다.
            </p>
          </div>

          <div className="flex-shrink-0 text-center md:text-right">
            <div className="inline-block rounded-2xl border-2 border-slate-900 bg-slate-950 p-6 text-white shadow-2xl">
              <div className="text-xs font-black text-amber-400">내 보조금 600만 원 자격 조회</div>
              <div className="mt-1 text-2xl font-black text-amber-300 md:text-3xl">051-714-3396</div>
              <a
                href="#sms-lead"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-3 text-xs font-black text-slate-950 transition hover:from-amber-300 hover:to-amber-400 shadow-md"
              >
                보조금 자격 0원 확인 ➔
              </a>
            </div>
          </div>
        </div>

        {/* Q&A 안내 박스 */}
        <div className="mt-6 rounded-2xl border border-amber-400/60 bg-amber-500/10 p-4 text-xs text-slate-800">
          <span className="font-black text-slate-950">💡 자주 묻는 질문: "이가에서 보조금을 직접 주는 건가요?"</span>
          <p className="mt-1 text-slate-700 leading-relaxed">
            <strong>아닙니다!</strong> 본 지원금은 소상공인 시장진흥공단 등 국가 기관에서 지급하는 **정부 정책 보조금**입니다. 
            <strong className="text-slate-950"> 李家(이가)</strong>는 사장님이 지원금을 100% 챙겨받으실 수 있도록 
            <strong> 자격 조회, 서류 작성, 공사 사진 증빙, 신청 절차를 무료 대행해 드리는 전문 컨설팅 & 철거 시공업체</strong>입니다.
          </p>
        </div>

        {/* 보조금 포인트 Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subsidyPoints.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border-2 border-amber-300/70 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{item.icon}</span>
                <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-black text-red-700">
                  {item.badge}
                </span>
              </div>
              <h3 className="mt-3 text-base font-black text-slate-900">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 전문 철거 서비스 영역 */}
      <div className="mt-10 rounded-3xl border-2 border-slate-900 bg-white p-6 shadow-sm md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-black text-amber-400">
              🔨 李家(이가) 대표 철거 시공
            </span>
            <h3 className="mt-2 text-xl font-black text-slate-900 md:text-3xl">
              소음·민원 제로 도전! 완벽 원상복구 철거
            </h3>
            <p className="mt-1 text-xs text-slate-600 md:text-sm">
              상가, 사무실, 공장, 특수 구조물까지 신속하고 흔적 없이 원상복구합니다.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {demolitionTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition hover:border-amber-500 hover:bg-white"
            >
              <div className="inline-block rounded-md bg-slate-900 px-2.5 py-0.5 text-[11px] font-black text-amber-400">
                {item.tag}
              </div>
              <h4 className="mt-3 text-base font-black text-slate-900">{item.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
