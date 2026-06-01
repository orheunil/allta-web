"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import QRCode from "qrcode-generator";
import { useResizeHandler } from "@/hooks";
import {
  closeIcon,
  hamburgerIcon,
  navLogo,
  qrClose,
} from "../../../../public/images";

export const Navigation = () => {
  const { isDesktop } = useResizeHandler();

  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  useEffect(() => {
    if (!isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  const qrModal =
    showQr && typeof document !== "undefined"
      ? createPortal(
          <div
            onClick={() => setShowQr(false)}
            className="fixed inset-0 flex justify-center items-center bg-black/50 z-[1000] cursor-pointer"
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
          </div>,
          document.body,
        )
      : null;

  return (
    <header className="fixed flex justify-center items-center top-0 w-screen h-[64px] px-[32px] md:px-[80px] bg-white z-[50]">
      {qrModal}

      {isDesktop ? (
        <nav className="flex justify-between items-center w-full">
          <Image src={navLogo} alt="올타" className="w-[62px]" />

          <div className="flex items-center gap-[40px] text-[16px] font-semibold">
            <Link href="/">서비스</Link>

            <Link href="/stores">세차장 찾기</Link>

            <button
              onClick={handleRouteAppStore}
              className="px-[12px] py-[8px] text-main text-[14px] border-[2px] border-main rounded-[8px] cursor-pointer"
            >
              앱 다운로드
            </button>
          </div>
        </nav>
      ) : (
        <nav className="flex justify-between items-center w-full">
          <Image src={navLogo} alt="올타" className="w-[62px]" />

          <button onClick={() => setIsOpen(!isOpen)}>
            <Image src={hamburgerIcon} alt="메뉴" className="size-[28px]" />
          </button>

          <div
            className={`fixed flex flex-col top-0 left-0 z-[60] w-screen ${isOpen ? "h-screen" : "h-0"} px-[32px] bg-white duration-500 overflow-hidden`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="self-end my-[18px]"
            >
              <Image src={closeIcon} alt="닫기" className="size-[28px]" />
            </button>

            <button
              onClick={handleRouteAppStore}
              className="w-full py-[14px] text-white text-[16px] font-medium bg-main rounded-[12px] cursor-pointer"
            >
              앱 다운로드
            </button>

            {/* <button className="w-full mt-[12px] py-[14px] text-[16px] font-medium bg-white border border-gray2 rounded-[12px] cursor-pointer">
              로그인/회원가입
            </button> */}

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="mt-[28px] py-[14px] text-[20px] font-semibold border-b border-line"
            >
              서비스
            </Link>

            <Link
              href="/stores"
              onClick={() => setIsOpen(false)}
              className="py-[14px] text-[20px] font-semibold border-b border-line"
            >
              세차장 찾기
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
