import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "올타",
  // description: "당신의 모빌리티 케어 파트너, 옳은일입니다",
  // alternates: {
  //   canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://allta.io",
  // },
  // icons: {
  //   icon: "/meta/favicon.png",
  //   shortcut: "/meta/favicon.png",
  //   apple: "/meta/icon-192.png",
  //   other: [
  //     { url: "/meta/icon-192.png", sizes: "192x192", type: "image/png" },
  //     { url: "/meta/icon-512.png", sizes: "512x512", type: "image/png" },
  //   ],
  // },
  // metadataBase: new URL(
  //   process.env.NEXT_PUBLIC_SITE_URL || "https://allta.io",
  // ),
  // openGraph: {
  //   title: "옳은일 | 모빌리티 케어 파트너",
  //   description: "당신의 모빌리티 케어 파트너, 옳은일입니다",
  //   images: "/images/og-image.png",
  // },
  // twitter: {
  //   title: "옳은일 | 모빌리티 케어 파트너",
  //   description: "당신의 모빌리티 케어 파트너, 옳은일입니다",
  //   images: "/meta/og-image.png",
  //   card: "summary_large_image",
  // },
  // keywords: [
  //   "옳은일",
  //   "orheunil",
  //   "올타",
  //   "allta",
  //   "모빌리티 플랫폼",
  //   "자동세차 구독",
  //   "차량 관리 서비스",
  //   "자동세차 플랫폼",
  // ],
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_VERIFICATION,
  // },
  // other: {
  //   "naver-site-verification":
  //     process.env.NEXT_PUBLIC_NAVER_SEARCH_VERIFICATION ?? "",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body
        className={`flex min-h-dvh flex-col pt-[72px] ${pretendard.className} text-black text-[16px] leading-[1.4]`}
      >
        <Navigation />

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
