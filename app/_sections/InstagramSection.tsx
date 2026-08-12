"use client";

import InstagramEmbedGrid from "./InstagramEmbedGrid";

export default function InstagramSection() {
  // ✅ 여기에 "공개 게시물 URL" 9개를 직접 넣어야 실제 게시물이 뜹니다.
  // 형식 예) https://www.instagram.com/p/XXXXXXXXX/
  const postUrls = [
    "https://www.instagram.com/p/DWgBLU5mb-d/",
    "https://www.instagram.com/p/DWgBfqxGT7t/",
    "https://www.instagram.com/p/DWgBEXBmVO_/",
    "https://www.instagram.com/p/DWgA9YMmek7/",
    "https://www.instagram.com/p/DWgApp1mbkw/",
    "https://www.instagram.com/p/DWgAUNUmZMS/",
    "https://www.instagram.com/p/DWgAj_xGaIK/",
    "https://www.instagram.com/p/DWgAfFdGRpw/",
    "https://www.instagram.com/p/DWgA0Y0mYp-/",
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-24 md:px-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
              <span aria-hidden>📷</span>
              <span>Instagram</span>
            </div>
            <h2 className="mt-3 text-lg font-bold md:text-xl text-slate-900">
              📸 신흥건설 생생 현장 인스타그램
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              전문 철거, HACCP 인증 공사, 한전 승압 전기, 방수 보수 시공 생생 현장
            </p>
          </div>
        </div>

        <InstagramEmbedGrid postUrls={postUrls} />

        <div className="mt-4">
          <a
            href="https://www.instagram.com/shcom4553"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-800 underline underline-offset-4 hover:text-amber-600 transition"
          >
            <span>@shcom4553 인스타그램에서 더보기</span>
            <span>➔</span>
          </a>
        </div>
      </div>
    </section>
  );
}
