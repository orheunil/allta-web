import type { Metadata } from "next";
import { terms } from "@/contants";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Terms({
  params,
}: {
  params: Promise<{
    lang: string;
    term: string;
  }>;
}) {
  const { term } = await params;

  const currentTerm = terms.find((value) => value.term === term);

  return (
    <div className="flex flex-col items-center pb-[80px] px-[20px] md:px-[60px]">
      <div className="w-full max-w-[1080px]">
        <h1 className="text-[40px] font-semibold">{currentTerm?.title}</h1>

        <div
          className="
            mt-[40px]

            [&_h1]:text-[40px]
            [&_h1]:font-bold
            [&_h1]:mb-[32px]

            [&_h2]:text-[28px]
            [&_h2]:font-semibold
            [&_h2]:mt-[48px]
            [&_h2]:mb-[20px]

            [&_h3]:text-[22px]
            [&_h3]:font-semibold
            [&_h3]:mt-[32px]
            [&_h3]:mb-[16px]

            [&_p]:text-[16px]
            [&_p]:leading-[1.8]
            [&_p]:text-gray-700
            [&_p]:mb-[16px]

            [&_ul]:pl-[20px]
            [&_ul]:list-disc
            [&_ul]:mb-[16px]

            [&_li]:text-[16px]
            [&_li]:leading-[1.8]
            [&_li]:mb-[8px]
          "
          dangerouslySetInnerHTML={{
            __html: currentTerm?.content ?? "",
          }}
        />
      </div>
    </div>
  );
}
