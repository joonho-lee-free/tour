import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import MobileCTA from "./_components/MobileCTA";

const geistSans = { variable: "font-sans" };
const geistMono = { variable: "font-mono" };

export const metadata: Metadata = {
  metadataBase: new URL("https://shcom714.com"),
  title: {
    default: "부울경 상가·매장 철거 | 정부지원금 최대 600만 원 + 서류 100% 무료 대행 - 李家(이가)",
    template: "%s | 李家(이가) 부울경 상가철거 & 정부지원금 센터",
  },
  description:
    "상가·매장 철거 비용 내 돈 다 내지 마세요! 부산·김해·창원·마산·양산 전지역 무료 방문 실측, 소상공인 점포철거비 정부지원금 최대 600만 원 지원 + 복잡한 증빙 서류 100% 무료 대행",
  keywords: [
    "부산 상가 철거",
    "김해 상가 철거",
    "창원 상가 철거",
    "양산 상가 철거",
    "마산 상가 철거",
    "부울경 점포 철거",
    "상가 원상복구",
    "식당 철거",
    "카페 철거",
    "학원 철거",
    "소상공인 철거지원금",
    "점포철거비 지원사업",
    "정부지원금 600만원",
    "철거 서류 무료대행",
    "희망리턴패키지",
    "이가철거",
    "李家",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "부울경 상가·매장 철거 | 정부지원금 최대 600만 원 + 서류 100% 무료 대행 - 李家(이가)",
    description:
      "상가·매장 철거 비용 내 돈 다 내지 마세요! 부울경 전지역 무료 방문 실측 및 정부지원금 최대 600만 원 대상 1분 즉시 조회",
    url: "/",
    siteName: "李家(이가) 부울경 상가철거 & 정부지원금 센터",
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