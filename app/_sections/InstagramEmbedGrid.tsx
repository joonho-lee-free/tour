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
    title: "부산 식당 주방 및 매장 완벽 원상복구",
    tag: "🔨 식당 철거",
    img: "/images/company-bg.jpg",
  },
  {
    title: "정부지원금 최대 600만 원 승인 완료",
    tag: "💰 지원금 600만",
    img: "/images/fitforsection/fit-01.jpg",
  },
  {
    title: "창원 대형 카페 인테리어 철거 및 폐기물 수거",
    tag: "☕ 카페 철거",
    img: "/images/fitforsection/fit-02.jpg",
  },
  {
    title: "김해 학원 가벽·천장 텍스 원상복구 현장",
    tag: "🏢 학원 철거",
    img: "/images/productsection/product-01.jpg",
  },
  {
    title: "소상공인시장진흥공단 증빙 서류 100% 무료 대행",
    tag: "📄 서류 무료대행",
    img: "/images/productsection/product-02.jpg",
  },
  {
    title: "양산 상가 바닥 데코타일 샌딩 및 원상복구",
    tag: "✨ 바닥 원상복구",
    img: "/images/productsection/product-03.jpg",
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

  // Ensure exactly 6 items for clean mobile/desktop grid
  const items = Array.from({ length: 6 }).map((_, index) => {
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
