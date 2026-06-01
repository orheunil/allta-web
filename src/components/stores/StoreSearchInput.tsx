"use client";

import { SubmitEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { searchIcon } from "../../../public/images";

export const StoreSearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState<string>(
    searchParams.get("searchTerms") ?? "",
  );

  const handleSearch = (e: SubmitEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("searchTerms", value);
    } else {
      params.delete("searchTerms");
    }

    router.push(`/stores?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={30}
        placeholder="지역명 또는 매장명을 입력해주세요"
        className="w-full mt-[24px] pr-[36px] pl-[16px] py-[10px] text-[12px] rounded-[8px] border border-line"
      />

      <button
        type="submit"
        className="absolute top-[50%] right-[8px] cursor-pointer"
      >
        <Image src={searchIcon} alt="검색" className="size-[24px]" />
      </button>
    </form>
  );
};
