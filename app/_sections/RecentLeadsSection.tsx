"use client";

import RecentLeads from "../_components/RecentLeads";

export default function RecentLeadsSection() {
  const highlightStyles = [
    { bg: "bg-indigo-50/80", border: "border-indigo-500" },
    { bg: "bg-sky-50/80", border: "border-sky-500" },
    { bg: "bg-emerald-50/80", border: "border-emerald-500" },
    { bg: "bg-amber-50/80", border: "border-amber-500" },
    { bg: "bg-rose-50/80", border: "border-rose-500" },
  ] as const;

  return (
    <section className="w-full bg-white py-8 sm:py-12 border-b border-gray-100">
      {/* RecentLeads(내부 표 카드) 모바일 가로 비율 최적화 */}
      <style jsx global>{`
        .ss-recent-leads > * {
          width: 100% !important;
          max-width: none !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        .ss-recent-leads table {
          width: 100% !important;
          table-layout: fixed;
          border-collapse: separate;
          border-spacing: 0;
        }
        .ss-recent-leads th,
        .ss-recent-leads td {
          white-space: normal;
          word-break: keep-all;
        }
        @media (max-width: 640px) {
          .ss-recent-leads table th,
          .ss-recent-leads table td {
            font-size: 11px !important;
            line-height: 1.35 !important;
            padding: 8px 4px !important;
          }
          .ss-recent-leads th:nth-child(1),
          .ss-recent-leads td:nth-child(1) {
            width: 15%;
          }
          .ss-recent-leads th:nth-child(2),
          .ss-recent-leads td:nth-child(2) {
            width: 25%;
            word-break: break-all;
          }
          .ss-recent-leads th:nth-child(3),
          .ss-recent-leads td:nth-child(3) {
            width: 20%;
          }
          .ss-recent-leads th:nth-child(4),
          .ss-recent-leads td:nth-child(4) {
            width: 25%;
          }
          .ss-recent-leads th:nth-child(5),
          .ss-recent-leads td:nth-child(5) {
            width: 15%;
            white-space: nowrap;
            text-align: right;
          }
        }
      `}</style>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-gray-50/50 p-4 sm:p-6 md:p-8 shadow-sm">
          {/* 섹션 헤더 */}
          <div className="mb-4 sm:mb-6 flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>실시간 접수 현황</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-black text-gray-900">
                최근 문의 접수 내역 (최근 10건)
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">
                부울경 점포 사장님들의 실제 지원금 조회 및 무료 현장 실측 접수 현황입니다.
              </p>
            </div>

            <div
              className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm text-xl"
              aria-hidden
            >
              📋
            </div>
          </div>

          {/* RecentLeads 표 컴포넌트 */}
          <div className="ss-recent-leads">
            <RecentLeads highlightStyles={highlightStyles} />
          </div>

          <p className="mt-3 text-center text-[11px] text-gray-400">
            🔒 개인정보 보호를 위해 성명 및 전화번호 일부가 안전하게 마스킹 처리되어 노출됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
