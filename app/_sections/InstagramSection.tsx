"use client";

import InstagramEmbedGrid from "./InstagramEmbedGrid";

export default function InstagramSection() {
  // 공식 인스타그램 실제 게시물 URL
  const postUrls = [
    "https://www.instagram.com/p/Db7hDvCGSrd/",
    "https://www.instagram.com/p/Db7mBYMGU8H/",
    "https://www.instagram.com/p/Db7mM-iGTB1/",
    "https://www.instagram.com/p/Db7ndIxMBws/",
    "https://www.instagram.com/p/Db7nqbQs389/",
    "https://www.instagram.com/p/Db7n7k8s9Yj/",
  ];

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:py-16 md:px-8 bg-white border-b border-slate-200">
      <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-5 sm:p-7 shadow-xs">
        {/* 헤더 섹션 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-pink-500/20 px-3 py-1 text-xs font-bold text-pink-700">
              <span>📷</span>
              <span>Instagram Live</span>
            </div>
            <h2 className="mt-2 text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              공식 인스타그램 실시간 현장 소식
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              부울경 현장에서 매일 투명하게 진행되는 철거 과정을 확인하세요.
            </p>
          </div>

          {/* 공식 계정 바로가기 버튼 */}
          <a
            href="https://www.instagram.com/shcom4553"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:from-purple-500 hover:to-pink-500 transition cursor-pointer self-start sm:self-auto"
          >
            <span>인스타그램 @shcom4553 바로가기</span>
            <span>➔</span>
          </a>
        </div>

        {/* 인스타 피드 그리드 (6개) */}
        <InstagramEmbedGrid postUrls={postUrls} instagramProfileUrl="https://www.instagram.com/shcom4553" />

        <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
          <span>* 부울경 상가·매장 철거 실시간 포트폴리오</span>
          <a
            href="https://www.instagram.com/shcom4553"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-pink-600 underline underline-offset-4 hover:text-pink-700"
          >
            더 많은 현장 사진 보기
          </a>
        </div>
      </div>
    </section>
  );
}
