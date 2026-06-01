"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useResizeHandler } from "@/hooks";
import { navLogo } from "../../../../public/images";

export const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { isDesktop } = useResizeHandler();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed flex justify-center items-center top-0 w-screen h-[72px] px-[32px] md:px-[80px] bg-white z-[1]">
      <nav className="flex justify-between items-center w-full">
        <Image src={navLogo} alt="올타" className="w-[62px]" />

        <div className="flex items-center gap-[40px] text-[16px] font-semibold">
          <Link href="/">서비스</Link>
          <Link href="/stores">세차장 찾기</Link>
          <a
            href="https://app.allta.io"
            target="_blank"
            className="px-[12px] py-[8px] text-main text-[14px] border-[2px] border-main rounded-[8px]"
          >
            앱 다운로드
          </a>
        </div>
      </nav>
    </header>
  );
};
