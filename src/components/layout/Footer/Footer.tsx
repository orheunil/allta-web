"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import QRCode from "qrcode-generator";
import {
  blogIcon,
  instaIcon,
  qrClose,
  youtubeIcon,
} from "../../../../public/images";

export const Footer = () => {
  const [showQr, setShowQr] = useState<boolean>(false);

  const qr = QRCode(0, "H");

  qr.addData("https://app.allta.io");
  qr.make();

  const qrSvg = qr.createSvgTag({
    scalable: true,
  });

  const handleRouteAppStore = () => {
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    const isMobile = /Android|iPhone|Mobile/i.test(userAgent);

    if (isMobile) {
      window.open("https://app.allta.io", "_blank");
      return;
    }

    setShowQr(true);
  };

  return (
    <footer className="flex justify-center bg-gray-100 px-[60px]">
      {showQr && (
        <div
          onClick={() => setShowQr(false)}
          className="fixed flex justify-center items-center top-0 w-screen h-screen bg-black/50 z-[1] cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col justify-center items-center bg-white w-full max-w-[480px] h-full max-h-[510px] rounded-[20px] cursor-default"
          >
            <button
              onClick={() => setShowQr(false)}
              className="absolute top-[20px] right-[20px] cursor-pointer"
            >
              <Image src={qrClose} alt="닫기" className="size-[28px]" />
            </button>

            <p className="text-gray5 text-[16px]">올바른 자동세차의 시작</p>
            <p className="mt-[4px] text-[28px] font-semibold">
              올타 앱 이용하기
            </p>

            <div className="flex justify-center items-center w-[260px] h-[260px] mt-[24px] bg-gray1 rounded-[20px]">
              <div
                className="w-[200px] h-[200px] [&>svg]:w-full [&>svg]:h-full"
                dangerouslySetInnerHTML={{ __html: qrSvg }}
              />
            </div>

            <p className="mt-[32px] text-gray5 text-[16px]">
              QR코드를 스캔하면 앱을 설치할 수 있습니다.
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col w-full max-w-[1080px] pt-[80px] pb-[96px]">
        <div className="flex flex-col md:flex-row gap-[40px]">
          <div className="flex flex-col w-[130px] text-[16px]">
            <h3 className="font-medium">회사</h3>

            <div className="flex flex-col mt-[16px] gap-[8px] text-gray7">
              <a
                href="https://company.allta.io/company"
                target="_blank"
                rel="noopener noreferrer"
              >
                회사 소개
              </a>

              <a
                href="https://company.allta.io/tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                기술 소개
              </a>

              <a
                href="https://company.allta.io/solution"
                target="_blank"
                rel="noopener noreferrer"
              >
                솔루션
              </a>

              <a
                href="https://company.allta.io/news"
                target="_blank"
                rel="noopener noreferrer"
              >
                뉴스룸
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[130px] text-[16px]">
            <h3 className="font-medium">서비스</h3>

            <div className="flex flex-col mt-[16px] gap-[8px] text-gray7">
              <Link href={"/"}>서비스 소개</Link>

              <Link href={"/stores"}>세차장 찾기</Link>

              <button
                onClick={handleRouteAppStore}
                className="text-start cursor-pointer"
              >
                앱 다운로드
              </button>
            </div>
          </div>

          <div className="flex flex-col w-[130px] text-[16px]">
            <h3 className="font-medium">문의</h3>

            <div className="flex flex-col mt-[16px] gap-[8px] text-gray7">
              <a
                href="https://company.allta.io/faq"
                target="_blank"
                rel="noopener noreferrer"
              >
                자주 묻는 질문
              </a>

              <a
                href="https://company.allta.io/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                제휴 문의
              </a>

              <a
                href="https://company.allta.io/ir"
                target="_blank"
                rel="noopener noreferrer"
              >
                IR
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col mt-[80px] pb-[72px] md:pb-0">
          {/* 회사 정보 */}
          <p className="text-[15px] font-semibold">(주)옳은일</p>

          <address className="mt-[8px] text-gray5 text-[13px] not-italic">
            사업자 등록번호 : 850-81-02703 | 대표 : 이승열 | 주소 : 경기 하남시
            미사강변한강로 SKV1센터 A동 1031호
          </address>

          <p className="text-gray5 text-[13px]">
            TEL : 1668-1620 | EMAIL : orheunil@orheun.com
          </p>

          <small className="text-gray5 text-[13px]">
            ©2025. ORHEUNIL. All Rights Reserve
          </small>

          {/* 약관 */}
          <div className="flex flex-wrap items-center mt-[20px] gap-x-[20px] gap-y-[8px] text-[13px] font-semibold">
            <Link
              href="/terms/service"
              target="_blank"
              rel="noopener noreferrer"
            >
              이용약관
            </Link>

            <Link
              href="/terms/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              개인정보처리방침
            </Link>

            <Link
              href="/terms/policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              운영정책
            </Link>

            <Link
              href="/terms/location"
              target="_blank"
              rel="noopener noreferrer"
            >
              위치기반서비스 이용약관
            </Link>
          </div>

          {/* SNS */}
          <div className="absolute flex items-start bottom-0 md:top-0 md:right-0 gap-[20px]">
            <a
              href="https://www.instagram.com/allta.official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instaIcon} alt="instagram" className="size-[32px]" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCFIrfCGdLMktEiSewt5adRg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={youtubeIcon} alt="youtube" className="size-[32px]" />
            </a>

            <a
              href="https://blog.naver.com/orheunilallta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={blogIcon} alt="blog" className="size-[32px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
