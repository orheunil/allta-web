import Image from "next/image";
import { HoverWrapper } from "../animation/Hover";
import { app1, app2, app3 } from "../../../public/images";

export const MainSection2 = () => {
  return (
    <section className="flex flex-col items-center w-full h-full px-[20px] lg:px-[80px] bg-back4">
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1080px] py-[240px] gap-[48px] md:gap-[80px] lg:gap-[150px]">
        <div className="flex flex-col self-start md:self-auto">
          <HoverWrapper distance={0} duration={1.25}>
            <p className="text-[28px] md:text-[40px] lg:text-[48px] font-bold">
              원하는 매장
              <br />
              <strong className="text-main">이용권 구매</strong>하고
            </p>
            <p className="mt-[12px] text-gray5 text-[16px] md:text-[20px] lg:text-[24px] font-medium">
              내 주변 올타 제휴 매장의
              <br />
              이용권을 앱에서 간편하게 구매하세요
            </p>
          </HoverWrapper>
        </div>

        <HoverWrapper
          direction="LEFT"
          distance={150}
          duration={1.25}
          delay={0.5}
          threshold={0.2}
        >
          <Image
            src={app1}
            alt="앱 이미지 1"
            className="w-full max-w-[240px] md:max-w-[360px] aspect-[360/734]"
          />
        </HoverWrapper>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1080px] py-[240px] gap-[48px] md:gap-[80px] lg:gap-[150px]">
        <div className="flex flex-col self-start md:self-auto">
          <HoverWrapper distance={0} duration={1.25}>
            <p className="text-[28px] md:text-[40px] lg:text-[48px] font-bold">
              <strong className="text-main">예약없이</strong> 바로
              <br />
              매장 방문해서
            </p>
            <p className="mt-[12px] text-gray5 text-[16px] md:text-[20px] lg:text-[24px] font-medium">
              이용권을 구매한 매장에서
              <br />
              예약없이 바로 이용할 수 있습니다.
            </p>
          </HoverWrapper>
        </div>

        <HoverWrapper
          direction="LEFT"
          distance={150}
          duration={1.25}
          delay={0.5}
          threshold={0.2}
        >
          <Image
            src={app2}
            alt="앱 이미지 2"
            className="w-full max-w-[240px] md:max-w-[360px] aspect-[360/734]"
          />
        </HoverWrapper>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1080px] py-[240px] gap-[48px] md:gap-[80px] lg:gap-[150px]">
        <div className="flex flex-col self-start md:self-auto">
          <HoverWrapper distance={0} duration={1.25}>
            <p className="text-[28px] md:text-[40px] lg:text-[48px] font-bold">
              <strong className="text-main">QR스캔</strong>으로
              <br />
              빠른 세차 시작!
            </p>
            <p className="mt-[12px] text-gray5 text-[16px] md:text-[20px] lg:text-[24px] font-medium">
              현장에서 Qr스캔하고
              <br />
              이용권 선택하면 바로 세차 가능
            </p>
          </HoverWrapper>
        </div>

        <HoverWrapper
          direction="LEFT"
          distance={150}
          duration={1.25}
          delay={0.5}
          threshold={0.2}
        >
          <Image
            src={app3}
            alt="앱 이미지 3"
            className="w-full max-w-[240px] md:max-w-[360px] aspect-[360/734]"
          />
        </HoverWrapper>
      </div>
    </section>
  );
};
