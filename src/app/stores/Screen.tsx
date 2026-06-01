"use client";

import { useEffect, useState } from "react";
import { StoreList, StoreMap, StoreSearchInput } from "@/components/stores";
import { GetStoreListForWebResponse, StoreListItem } from "@/types";
import Image from "next/image";
import { closeIcon } from "../../../public/images";

interface Props {
  data: GetStoreListForWebResponse;
}

export const Screen = ({ data }: Props) => {
  const [coordinate, setCoordinate] = useState<{ lat: number; lng: number }>({
    lat: 37.5759785,
    lng: 127.1935115,
  });
  const [store, setStore] = useState<StoreListItem | null>(null);
  const [modal, setModal] = useState<StoreListItem | null>(null);

  const handleCloseModal = () => {
    setModal(null);
  };

  useEffect(() => {
    if (store) {
      setCoordinate({
        lat: store.lat,
        lng: store.lng,
      });
    }
  }, [store]);

  return (
    <div className="flex w-full h-[calc(100vh-72px)]">
      {modal && (
        <div
          onClick={handleCloseModal}
          className="fixed flex justify-center items-center w-screen h-screen px-[20px] md:px-[80px] bg-black/50 cursor-pointer z-[99]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col w-full max-w-[720px] mb-[72px] px-[24px] pt-[24px] pb-[40px] lg:pb-[60px] bg-white rounded-[12px] cursor-default"
          >
            <button
              onClick={handleCloseModal}
              className="self-end cursor-pointer"
            >
              <Image src={closeIcon} alt="닫기" className="size-[24px]" />
            </button>

            <div className="flex flex-col lg:flex-row lg:items-center mt-[20px] gap-[24px] lg:gap-[40px]">
              <div
                className="w-full lg:w-[316px] h-[160px] md:h-[332px] lg:h-[286px] rounded-[12px]"
                style={{
                  backgroundImage: `url(${modal.mainImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />

              <div className="flex flex-col">
                <p className="text-[20px] font-semibold">{modal.name}</p>

                <div className="mt-[20px] flex items-center gap-[12px] text-[16px]">
                  <p className="text-gray5">매장주소</p>
                  <p>{modal.address}</p>
                </div>

                <div className="mt-[8px] flex items-center gap-[12px] text-[16px]">
                  <p className="text-gray5">전화번호</p>
                  <p>{modal.phoneNumber}</p>
                </div>

                <div className="mt-[8px] flex items-center gap-[12px] text-[16px]">
                  <p className="text-gray5">운영시간</p>
                  <p>
                    {(modal.businessHours as any)?.MON?.open ?? "09:00"} ~{" "}
                    {(modal.businessHours as any)?.MON?.close ?? "18:00"}
                  </p>
                </div>

                <p className="mt-[4px] text-gray3 text-[12px]">
                  *운영시간은 매장 사정에 따라 변동될 수 있습니다.
                </p>

                <div className="flex items-center mt-[16px] gap-[6px]">
                  {modal.tags
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
          </div>
        </div>
      )}

      <div className="flex flex-col w-[380px] px-[28px] py-[24px]">
        <h1 className="text-[24px] font-bold">세차장 찾기</h1>

        <StoreSearchInput />
        <StoreList data={data.data} store={store} setStore={setStore} />
      </div>

      <div className="flex flex-1">
        <StoreMap
          lat={coordinate.lat}
          lng={coordinate.lng}
          store={store}
          setModal={setModal}
        />
      </div>
    </div>
  );
};
