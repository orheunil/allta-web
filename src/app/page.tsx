import {
  MainBanner,
  MainSection1,
  MainSection2,
  MainSection3,
  MainSection4,
} from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white overflow-y-auto">
      <MainBanner />
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <MainSection4 />
    </div>
  );
}
