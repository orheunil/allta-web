import Image from "next/image";
import { HoverWrapper } from "../animation/Hover";
import { wash1, wash2 } from "../../../public/images";

export const MainSection3 = () => {
  return (
    <section className="flex flex-col items-center w-full h-full px-[20px] lg:px-[80px]">
      <div className="flex flex-col w-full max-w-[1080px] py-[240px]">
        <HoverWrapper
          display="flex"
          flexDirection="column"
          width="100%"
          distance={0}
          duration={1.25}
          threshold={0.8}
        >
          <p className="text-[28px] md:text-[40px] lg:text-[48px] font-bold">
            내 차량에 맞는 세차 서비스
          </p>
          <p className="mt-[12px] text-[16px] md:text-[20px] lg:text-[24px] font-medium">
            상황과 취향에 맞게
            <br />
            원하는 세차 서비스를 선택할 수 있습니다
          </p>

          <div className="flex flex-col md:flex-row justify-center mt-[40px] md:mt-[60px] gap-[40px]">
            <div className="flex flex-col items-center text-center">
              <Image
                src={wash1}
                alt="세차 1"
                className="w-full max-w-[520px]"
              />

              <p className="mt-[8px] font-semibold">빠르고 간편한, 자동세차</p>
              <p className="mt-[12px] text-gray5 font-medium">
                최신 세차 설비로
                <br />
                빠르고 간편하게 이용하세요
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src={wash2}
                alt="세차 2"
                className="w-full max-w-[520px]"
              />

              <p className="mt-[8px] font-semibold">더 꼼꼼한, 핸즈클리닝</p>
              <p className="mt-[12px] text-gray5 font-medium">
                실내부터 외부 디테일까지
                <br />
                프리미엄 차량 관리를 경험하세요
              </p>
            </div>
          </div>
        </HoverWrapper>
      </div>
    </section>
  );
};
