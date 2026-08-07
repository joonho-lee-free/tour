"use client";

import { useEffect, useMemo, useState } from "react";

const WHY_IMAGES = [
  { src: "/images/whysection/why-01.jpg", alt: "코사무이 오션뷰 리조트", label: "무료특전" },
  { src: "/images/whysection/why-02.jpg", alt: "코사무이 풀빌라", label: "허니문특전" },
  { src: "/images/whysection/why-03.jpg", alt: "코사무이 선셋 다이닝", label: "얼리버드할인" },
  { src: "/images/whysection/why-04.jpg", alt: "코사무이 휴양 일정", label: "풀빌라할인" },
] as const;

export default function WhySection() {
  const strengths = [
    {
      icon: "💰",
      title: "정부 보조금 600만 원 환급 서류 100% 무료 대행",
      desc: "소상공인 철거 보조금 서류 작성부터 증빙 사진 촬영까지 李家(이가)가 무료 대행! 손 안 대고 코 풉니다!",
    },
    {
      icon: "🔨",
      title: "철거 ➔ HACCP ➔ 전기 ➔ 방수 무한 직영 파워",
      desc: "따로따로 불러서 출장비만 수백 만원 뜯기지 마세요! 오얏나무 가문 李家 전문 직영팀이 한 방에 해결!",
    },
    {
      icon: "⚡",
      title: "한전 승압 & 3상 동력전기 불패 신화",
      desc: "과부하 누전 100% 차단! 전기안전공사 검사 합격률 100%에 빛나는 짱짱한 전기 시공 기술력!",
    },
    {
      icon: "🛡️",
      title: "출장 방문견적 0원 & 철저한 사후 AS 보증",
      desc: "찔러보기 견적 환영! 현장 방문 견적 0원! 공사 완료 후 물 세거나 문제 생기면 끝까지 책임 A/S!",
    },
  ];

  return (
    <div className="rounded-3xl border-2 border-slate-900 bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full bg-slate-900 px-3.5 py-1 text-xs font-black text-amber-400">
            🔥 왜 李家(이가)를 찾아오실까요?
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
            사장님들이 李家(이가)만 찾으시는 4가지 이유
          </h2>
          <p className="mt-1 text-xs text-slate-600 md:text-sm">
            철거비 보조금 600만 원 받아내는 유능함부터 식품공장/전기/방수 파괴 시공력까지!
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border-2 border-slate-100 bg-slate-50/80 p-5 transition hover:border-amber-500 hover:bg-white"
          >
            <div className="text-3xl">{item.icon}</div>
            <h3 className="mt-3 text-base font-black text-slate-900">{item.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}