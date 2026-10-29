"use client";

const CASE_STUDIES = [
  {
    id: 1,
    tag: "부산 전포동 · 18평 카페",
    badge: "지원금 400만 수령",
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
    title: "부산 전포동 18평 카페 원상복구, 지원금 400만 원 받고 자부담 절감 완공",
    summary:
      "카운터 바 철거, 맞춤 목공 가벽 분리, 바닥 데코타일 철거 및 소진공 서류 100% 무료 대행으로 자부담 대폭 절감 완공.",
    points: ["✓ 당일 추가금 0원 확정보증", "✓ 소진공 증빙사진 촬영 대행", "✓ 지원금 400만 원 전액 입금"],
    date: "최근 시공 완료",
  },
  {
    id: 2,
    tag: "김해 내외동 · 28평 고깃집",
    badge: "당일 추가금 0원",
    badgeColor: "bg-amber-500/10 text-amber-700 border-amber-500/30",
    title: "김해 내외동 28평 고깃집 바닥·닥트 철거, 당일 추가금 0원으로 마감",
    summary:
      "기름때 찌든 주방 바닥 타일 철거, 대형 후드 닥트 분리, 도시가스 배관 마감까지 최초 견적 그대로 0원 추가금 마감.",
    points: ["✓ 건물주 원패스 검수 합격", "✓ 폐기물 전액 합법 처리확인서", "✓ 보증금 전액 안전 반환"],
    date: "최근 시공 완료",
  },
  {
    id: 3,
    tag: "창원 성산구 · 40평 학원",
    badge: "지원금 최대 600만",
    badgeColor: "bg-blue-500/10 text-blue-700 border-blue-500/30",
    title: "창원 성산구 40평 학원 칸막이 철거 및 소진공 서류 100% 무료 대행 후기",
    summary:
      "강의실 4개 석고 가벽, 방음 흡음재, 천장 텍스 복구 완료 후 소상공인시장진흥공단 서류 완벽 통과로 600만 원 전액 수령.",
    points: ["✓ 공단 서류 반려율 0%", "✓ 전자세금계산서 완벽 발급", "✓ 600만 원 최대 한도 수령"],
    date: "최근 시공 완료",
  },
  {
    id: 4,
    tag: "양산 물금읍 · 15평 매장",
    badge: "야간 철거 분쟁 0건",
    badgeColor: "bg-purple-500/10 text-purple-700 border-purple-500/30",
    title: "양산 15평 매장 야간 철거로 임대차 원상복구 분쟁 없이 종료",
    summary:
      "상가 영업 종료 후 야간에 쇼윈도, 행거 집기, 전면 간판 철거 완료. 까다로운 임대인 검수 기준 100% 충족하여 원상복구 분쟁 없이 종료.",
    points: ["✓ 야간 신속 무소음 집기 철거", "✓ 임대차 원상복구 원스톱 해결", "✓ 관리실 최종 확인 완료"],
    date: "최근 시공 완료",
  },
];

export default function CaseStudiesSection() {
  const handleScrollToForm = () => {
    const el = document.getElementById("quick-lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const input = el.querySelector("input[name='storeName']") as HTMLInputElement;
      if (input) input.focus();
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/70 border-b border-gray-100">
      <div className="mx-auto max-w-5xl">
        {/* 헤더 */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-3.5 py-1 text-xs font-bold">
            <span>📋</span>
            <span>부울경 실제 현장 시공 사례</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            부울경 상가·매장 원상복구 실제 시공 스토리
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600">
            철거비 자부담 절감부터 소진공 지원금 전액 수령까지, 부울경 사장님들의 실제 검증된 시공 사례입니다.
          </p>
        </div>

        {/* 4종 시공 사례 카드 그리드 */}
        <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition flex flex-col justify-between group"
            >
              <div>
                {/* 상단 태그 & 뱃지 */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* 카드 타이틀 */}
                <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug group-hover:text-amber-600 transition">
                  {item.title}
                </h3>

                {/* 상세 요약 */}
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                  {item.summary}
                </p>

                {/* 체크 포인트 3종 */}
                <div className="mt-4 space-y-1 border-t border-gray-100 pt-3 text-xs font-semibold text-gray-700">
                  {item.points.map((pt, i) => (
                    <div key={i} className="text-emerald-700 flex items-center gap-1">
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 하단 CTA 링크 */}
              <div className="mt-5 border-t border-gray-100 pt-3 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-medium">{item.date}</span>
                <button
                  type="button"
                  onClick={handleScrollToForm}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>내 점포 지원금 조회하기</span>
                  <span>➔</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 지원금 조회 유도 바 */}
        <div className="mt-8 rounded-2xl bg-slate-900 p-4 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <div className="text-sm sm:text-base font-bold text-amber-400">
              ⚡ 내 점포도 정부지원금 최대 600만 원 대상일까요?
            </div>
            <div className="text-xs text-slate-300 mt-0.5">
              철거전문 이가에서 1분 만에 지원금 대상 여부와 확정 최저가 견적을 무료로 확인해 드립니다.
            </div>
          </div>
          <button
            type="button"
            onClick={handleScrollToForm}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:from-amber-300 hover:to-amber-400 transition whitespace-nowrap cursor-pointer"
          >
            1분 무료 지원금 조회 ➔
          </button>
        </div>
      </div>
    </section>
  );
}
