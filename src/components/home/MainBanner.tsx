import Image from "next/image";
import {
  appStoreButton,
  phoneImage,
  playStoreButton,
  textLogo,
} from "../../../public/images";

export const MainBanner = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/images/main-background.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex flex-col lg:flex-row lg:justify-center items-center w-full h-[calc(100vh-64px)] px-[20px] md:px-[80px] py-[80px] md:py-[120px] lg:py-[200px] gap-[60px] lg:gap-[120px]"
    >
      <div className="flex flex-col self-start lg:self-auto">
        <Image
          src={textLogo}
          alt="올타"
          className="w-[80px] md:w-[140px] lg:w-[200px]"
        />

        <p className="mt-[12px] md:mt-[16px] lg:mt-[24px] text-white text-[24px] md:text-[40px] lg:text-[60px] font-medium text-nowrap">
          올바른 자동세차의 시작
        </p>

        <div className="flex items-center gap-[20px] mt-[32px] md:mt-[60px] lg:mt-[80px]">
          <a
            href="https://apps.apple.com/kr/app/%EC%98%AC%ED%83%80-%EB%AA%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0-%EC%B0%A8%EB%9F%89%EA%B4%80%EB%A6%AC-%EC%9E%90%EB%8F%99%EC%B0%A8-%EC%9E%90%EB%8F%99%EC%84%B8%EC%B0%A8%EC%9E%A5-%EC%B6%9C%EC%9E%A5%EC%84%B8%EC%B0%A8/id6467127880?l=en&uo=4"
            target="_blank"
          >
            <Image
              src={appStoreButton}
              alt="앱스토어"
              className="w-[102px] md:w-[168px] lg:w-[268px]"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=io.allta.user"
            target="_blank"
          >
            <Image
              src={playStoreButton}
              alt="플레이스토어"
              className="w-[102px] md:w-[168px] lg:w-[268px]"
            />
          </a>
        </div>
      </div>

      <div className="self-end lg:self-auto w-full max-w-[240px] md:max-w-[448px] lg:max-w-[640px]">
        <Image src={phoneImage} alt="올타" className="w-full h-auto" />
      </div>
    </section>
  );
};
