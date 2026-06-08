import { HoverWrapper } from "../animation/Hover";

export const MainSection1 = () => {
  return (
    <section className="flex flex-col items-center w-full h-full px-[20px] lg:px-[80px]">
      <div className="flex flex-col w-full max-w-[375px] md:max-w-[736px] lg:max-w-[1080px] py-[240px]">
        <HoverWrapper
          display="flex"
          flexDirection="column"
          width="100%"
          distance={0}
          duration={1.25}
        >
          <p className="text-[28px] md:text-[40px] lg:text-[48px] font-bold">
            부담없는 월 구독으로 자유롭게
          </p>
          <p className="mt-[12px] text-[16px] md:text-[20px] lg:text-[24px] font-medium">
            올타 월 구독 하나로
            <br />한 달 동안 자유롭게 세차하세요.
          </p>

          <div
            className="self-end w-full max-w-[335px] md:max-w-[620px] lg:max-w-[840px] h-[212px] md:h-[392px] lg:h-[530px] mt-[60px] rounded-[40px]"
            style={{
              backgroundImage: "url(/images/main-1.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </HoverWrapper>
      </div>

      <div className="flex flex-col w-full max-w-[375px] md:max-w-[736px] lg:max-w-[1080px] py-[240px]">
        <HoverWrapper
          display="flex"
          flexDirection="column"
          width="100%"
          distance={0}
          duration={1.25}
        >
          <p className="text-[28px] md:text-[40px] lg:text-[48px] font-bold">
            앱 하나로 간편하게
          </p>
          <p className="mt-[12px] text-[16px] md:text-[20px] lg:text-[24px] font-medium">
            결제 · 이용 · 내역 관리까지
            <br />
            올타 앱에서 한 번에.
          </p>

          <div
            className="self-end w-full max-w-[335px] md:max-w-[620px] lg:max-w-[840px] h-[212px] md:h-[392px] lg:h-[530px] mt-[60px] rounded-[40px]"
            style={{
              backgroundImage: "url(/images/main-2.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </HoverWrapper>
      </div>
    </section>
  );
};
