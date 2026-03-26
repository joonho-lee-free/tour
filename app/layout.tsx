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
  metadataBase: new URL("https://tour6576.vercel.app"),
  title: {
    default: "허니예스 | 코사무이 전문여행 온라인 최저가 상담",
    template: "%s | 허니예스",
  },
  description:
    "허니예스는 코사무이 전문여행 상담을 진행하며, 가족여행·커플여행·허니문·자유여행을 온라인 최저가 맞춤 견적으로 안내합니다.",
  keywords: [
    "허니예스",
    "코사무이",
    "코사무이 여행",
    "코사무이 자유여행",
    "코사무이 가족여행",
    "코사무이 허니문",
    "코사무이 풀빌라",
    "코사무이 리조트",
    "코사무이 최저가",
    "코사무이 여행사",
    "태국 코사무이",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "허니예스 | 코사무이 전문여행 온라인 최저가 상담",
    description:
      "코사무이 가족여행, 커플여행, 허니문, 자유여행까지 원하는 일정에 맞춰 온라인 최저가 견적으로 안내합니다.",
    url: "/",
    siteName: "허니예스",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/hero-a.png",
        width: 1200,
        height: 630,
        alt: "허니예스 코사무이 여행 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "허니예스 | 코사무이 전문여행 온라인 최저가 상담",
    description:
      "코사무이 여행을 온라인 최저가 맞춤 견적으로 안내합니다. 가족여행·커플여행·허니문 상담 가능.",
    images: ["/images/hero-a.png"],
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