"use client";

export default function ProcessSection() {
  return (
    <div className="group rounded-2xl border border-rose-100 bg-rose-50/40 p-6 ring-1 ring-rose-100 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50/60 hover:shadow-lg hover:shadow-rose-100/50 hover:ring-rose-200 active:translate-y-0 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-900">
            <span aria-hidden>🧾</span>
            <span>진행 절차</span>
          </div>
          <h2 className="mt-3 text-lg font-bold md:text-xl">
            허니예스 예약 진행 순서
          </h2>
        </div>

        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-sm transition-transform duration-200 ease-out group-hover:scale-105"
          aria-hidden
        >
          🧾
        </div>
      </div>

      <ol className="mt-4 grid gap-2 text-sm text-gray-800 md:grid-cols-2">
        <li>1️⃣ 상담 접수 후 출발일 · 인원 · 예산대를 확인합니다</li>
        <li>2️⃣ 허니문 또는 가족여행 스타일에 맞는 호텔을 추천합니다</li>
        <li>3️⃣ 원하는 일정표와 선택 일정을 함께 조율합니다</li>
        <li>4️⃣ 항공 및 객실 가능 여부 확인 후 최종 견적을 안내합니다</li>
        <li>5️⃣ 예약 확정 후 출발 전 준비사항을 자세히 안내합니다</li>
        <li>6️⃣ 여행 전까지 변경 가능 범위와 체크사항을 계속 도와드립니다</li>
      </ol>

      <p className="mt-3 text-sm text-gray-600">
        ※ 허니예스는 호텔, 일정, 예산을 함께 보고 가장 잘 맞는 코사무이 단독상품으로 안내합니다.
      </p>

      <div
        className="mt-5 h-1 w-full rounded-full bg-rose-200 transition-opacity duration-200 group-hover:opacity-90"
        aria-hidden
      />
    </div>
  );
}