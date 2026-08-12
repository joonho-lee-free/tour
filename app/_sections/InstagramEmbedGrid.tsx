"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: any;
  }
}

type Props = {
  postUrls: string[];
  instagramProfileUrl?: string;
};

const DEFAULT_POSTS = [
  {
    title: "상가 전문 철거 & 완벽 원상복구",
    tag: "🔨 전문 철거",
    img: "/images/company-bg.jpg",
  },
  {
    title: "정부 보조금 최대 600만 자격 검수",
    tag: "💰 보조금 600만",
    img: "/images/fitforsection/fit-01.jpg",
  },
  {
    title: "HACCP 식품공장 위생 판넬 시공",
    tag: "🏭 HACCP 인증",
    img: "/images/fitforsection/fit-02.jpg",
  },
  {
    title: "한전 승압 & 3상 동력 배선 공사",
    tag: "⚡ 한전 승압",
    img: "/images/productsection/product-01.jpg",
  },
  {
    title: "옥상 우레탄 4중 철통 방수 보수",
    tag: "🛠️ 옥상 방수",
    img: "/images/productsection/product-02.jpg",
  },
  {
    title: "에폭시 라이닝 바닥 고광택 마감",
    tag: "✨ 에폭시 시공",
    img: "/images/productsection/product-03.jpg",
  },
  {
    title: "공장 · 물류창고 대형 파괴 철거",
    tag: "🏗️ 대형 철거",
    img: "/images/productsection/product-04.jpg",
  },
  {
    title: "외벽 방수 & 콘크리트 균열 보강",
    tag: "🏢 구조 보강",
    img: "/images/productsection/product-05.jpg",
  },
  {
    title: "식품 클린룸 에어샤워 설치 현장",
    tag: "🧼 클린룸 시공",
    img: "/images/productsection/product-06.jpg",
  },
];

function loadInstagramEmbedScript(): Promise<void> {
  return new Promise((resolve) => {
    if (window.instgrm?.Embeds?.process) {
      resolve();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      setTimeout(() => resolve(), 400);
      return;
    }

    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.onload = () => resolve();
    document.body.appendChild(s);
  });
}

export default function InstagramEmbedGrid({
  postUrls,
  instagramProfileUrl = "https://www.instagram.com/shcom4553",
}: Props) {
  useEffect(() => {
    let alive = true;

    (async () => {
      await loadInstagramEmbedScript();
      if (!alive) return;

      try {
        window.instgrm?.Embeds?.process?.();
        setTimeout(() => window.instgrm?.Embeds?.process?.(), 300);
      } catch {}
    })();

    return () => {
      alive = false;
    };
  }, [postUrls]);

  // Ensure exactly 9 items
  const items = Array.from({ length: 9 }).map((_, index) => {
    const url = postUrls[index] || "";
    const isRealInstagramEmbed =
      url.includes("instagram.com/p/") || url.includes("instagram.com/reel/");
    const defaultData = DEFAULT_POSTS[index % DEFAULT_POSTS.length];

    return {
      url,
      isRealInstagramEmbed,
      defaultData,
    };
  });

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
      {items.map((item, i) => (
        <div
          key={`insta-grid-${i}`}
          className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          {item.isRealInstagramEmbed ? (
            <blockquote
              className="instagram-media w-full h-full"
              data-instgrm-permalink={item.url}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                margin: 0,
                padding: 0,
                width: "100%",
                height: "100%",
              }}
            />
          ) : (
            <a
              href={item.url || instagramProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="block h-full w-full relative overflow-hidden"
              aria-label={`${item.defaultData.title} 인스타그램 보기`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.defaultData.img}
                alt={item.defaultData.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-3 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="rounded-md bg-amber-500/90 px-2 py-0.5 text-[11px] font-black text-slate-950 shadow">
                    {item.defaultData.tag}
                  </span>
                  <span className="text-white text-base drop-shadow">📷</span>
                </div>
                <div>
                  <h4 className="text-xs font-black text-white line-clamp-2 md:text-sm drop-shadow">
                    {item.defaultData.title}
                  </h4>
                  <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-amber-400">
                    <span>인스타그램 보기</span>
                    <span>➔</span>
                  </div>
                </div>
              </div>
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
