"use client";

import { Dispatch, SetStateAction } from "react";
import { StoreListItem } from "@/types";

interface Props {
  data: StoreListItem[];
  store: StoreListItem | null;
  setStore: Dispatch<SetStateAction<StoreListItem | null>>;
}

export const StoreList = ({ data, store, setStore }: Props) => {
  return (
    <div className="flex flex-col mt-[12px] overflow-y-auto">
      {data.map((value, index) => (
        <div
          key={value.id}
          onClick={() => setStore(value)}
          className="flex items-center mr-[10px] py-[16px] gap-[20px] border-b border-b-line cursor-pointer"
        >
          <div
            className="size-[86px] rounded-[12px]"
            style={{
              backgroundImage: `url(${value.mainImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />

          <div className="flex flex-col">
            <p className="text-[16px] font-semibold">{value.name}</p>
            <p className="mt-[4px] text-gray7 text-[14px] line-clamp-1">
              {value.address}
            </p>
            <p className="mt-[4px] text-gray7 text-[14px]">
              {value.phoneNumber}
            </p>

            <div className="flex items-center mt-[16px] gap-[6px]">
              {value.tags
                ?.split(",")
                .map((tag) => tag.trim())
                .map((tag) => (
                  <div
                    key={tag}
                    className="px-[6px] py-[2px] text-back1 text-[12px] bg-back4 rounded-[4px]"
                  >
                    {tag}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
