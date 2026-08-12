import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import MobileCTA from "./_components/MobileCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shcom714.com"),
  title: {
    default: "신흥건설 전문 철거공사 · 정부보조금 최대 600만원 | HACCP공사 & 전기/시설보수",
    template: "%s | 신흥건설 전문철거 · HACCP · 전기/시설보수",
  },
  description:
    "신흥건설 상가·사무실·공장 전문 철거 및 원상복구시 소상공인 정부 보조금 최대 600만원 지원 컨설팅! HACCP 인증 공사, 전기공사(승압/배선/동력), 시설 보수 리모델링 전문",
  keywords: [
    "신흥건설",
    "신흥건설 철거",
    "전문 철거",
    "철거 공사",
    "상가 철거",
    "공장 철거",
    "철거 보조금",
    "정부보조금 600만원",
    "소상공인 철거지원금",
    "원상복구 공사",
    "HACCP 공사",
    "식품공장 공사",
    "클린룸 시공",
    "전기공사",
    "한전 승압공사",
    "동력전기",
    "시설 보수",
    "옥상 방수",
    "외벽 방수",
    "시설 리모델링",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "신흥건설 전문 철거공사 · 정부보조금 최대 600만원 | HACCP공사 & 전기/시설보수",
    description:
      "신흥건설 전문 철거 및 점포 원상복구 소상공인 정부보조금 최대 600만원 지원! HACCP공사, 전기공사, 시설 보수 리모델링 무료 방문견적",
    url: "/",
    siteName: "신흥건설 전문 철거 & HACCP · 전기/시설보수 센터",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/hero-demolition.jpg",
        width: 1200,
        height: 630,
        alt: "전문 철거공사 및 정부보조금 600만원 지원 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "전문 철거공사 · 정부보조금 최대 600만원 지원 | HACCP공사 & 전기/시설보수",
    description:
      "전문 철거 및 점포 원상복구 소상공인 정부보조금 600만원 지원! HACCP 인증 공사 및 전기/시설보수 전문",
    images: ["/images/hero-demolition.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* ================= GA4 ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8R35CVBW02"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8R35CVBW02', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* ================= Meta Pixel ================= */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1776616939205613');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* 🔽 Mobile Fixed CTA (기존 로직 유지) */}
        <MobileCTA />

        {/* Meta Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1776616939205613&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}