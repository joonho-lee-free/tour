"use client";

import { useState } from "react";

const PROMISES = [
  {
    icon: "🚫",
    num: "01",
    title: "추가금 0원 약속",
    desc: "현장 무료 실측 후 계약 시 철거 당일 추가 비용 0원 (추가 발생 시 본사 전액 부담)",
    badge: "추가금 100% 0원",
  },
  {
    icon: "📄",
    num: "02",
    title: "공단 서류 100% 무료 대행",
    desc: "소상공인시장진흥공단 필수 제출 증빙 서류와 전후 사진을 반려 걱정 없이 원스톱 무료 처리",
    badge: "서류 반려 걱정 NO",
  },
  {
    icon: "🏛️",
    num: "03",
    title: "공식 행정 서류 즉시 발급",
    desc: "정부 지원금 수령을 위한 전자세금계산서, 이체증빙, 폐기물 처리확인서 등 완벽 발급",
    badge: "행정 서류 즉시 발급",
  },
];

const FAQS = [
  {
    q: "임대차 계약 만료 전에도 신청 가능한가요?",
    a: "네, 폐업 예정이거나 계약 만료를 앞둔 경우 사전 실측 및 공단 서류 준비가 가능합니다. 오히려 철거 공사 시작 전에 미리 신청하셔야 지원금 대상 심사를 안전하게 통과하실 수 있으므로 사전 문의를 권장합니다.",
  },
  {
    q: "정부지원금(최대 600만 원)은 어떻게 지급되나요?",
    a: "철거 완공 후 현장 증빙 사진과 지출 증빙 서류를 공단에 접수하면, 심사 완료 후 대표님 사업자 통장으로 직접 현금 입금됩니다. (평당 20만 원 기준, 최대 600만 원 한도 지원)",
  },
  {
    q: "방문 실측 후 계약을 안 해도 비용이 발생하나요?",
    a: "출장 실측 및 견적 산정은 100% 무료입니다. 견적을 받아보신 후 계약을 진행하지 않으셔도 일체의 출장비나 위약금이 발생하지 않으니 부담 없이 편하게 신청하세요.",
  },
];

export default function TrustAndFaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const handleScrollToForm = () => {
    const el = document.getElementById("quick-lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const input = el.querySelector("input[name='storeName']") as HTMLInputElement;
      if (input) input.focus();
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 border-b border-gray-100">
      <div className="mx-auto max-w-4xl space-y-12 sm:space-y-16">
        {/* 1) 안심 3대 약속 카드 */}
        <div>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-black text-amber-700 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wider">
              소상공인 안심 약속
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              안심 3대 약속
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              불투명한 추가 요금과 복잡한 서류 탈락 스트레스 없이 정직하게 원상복구합니다.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {PROMISES.map((item) => (
              <div
                key={item.num}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl">{item.icon}</span>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-black text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 border-t border-gray-100 pt-3 text-[11px] font-bold text-emerald-600">
                  ✓ 본사 직영 시공 책임 보증
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2) 자주 묻는 질문 (FAQ 아코디언) */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <span className="text-xs font-black text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
              FAQ
            </span>
            <h3 className="mt-2 text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              자주 묻는 질문
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-600">
              대표님들께서 가장 많이 궁금해하시는 질문을 모았습니다.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-gray-200 overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gray-50/70 hover:bg-gray-100/70 transition cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-amber-600 font-black">Q.</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className={`text-gray-400 text-sm font-bold transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 animate-fade-in">
                      <div className="flex gap-2">
                        <span className="text-emerald-600 font-black">A.</span>
                        <div>{faq.a}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 하단 간이 CTA */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center sm:flex sm:items-center sm:justify-between gap-4">
            <div className="text-left text-xs sm:text-sm text-gray-600">
              더 궁금한 사항이 있으신가요? <strong>대표번호 051-714-3396</strong>으로 편하게 문의하세요.
            </div>
            <button
              type="button"
              onClick={handleScrollToForm}
              className="mt-3 sm:mt-0 inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-4 py-2.5 text-xs font-bold hover:bg-gray-800 transition cursor-pointer whitespace-nowrap shadow-sm"
            >
              내 점포 무료 실측 접수하기 ➔
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
