"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import QRCode from "qrcode-generator";
import { navLogo, qrClose } from "../../../../public/images";

export const Navigation = () => {
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
    <header className="fixed flex justify-center items-center top-0 w-screen h-[72px] px-[32px] md:px-[80px] bg-white z-[2]">
      {qrModal}

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
    </header>
  );
};
