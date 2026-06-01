"use client";

import {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";
import { StoreListItem } from "@/types";
import { alltaMarker, closeIcon } from "../../../public/images";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  lat: number;
  lng: number;
  store: StoreListItem | null;
  setModal: Dispatch<SetStateAction<StoreListItem | null>>;
}

export const StoreMap = ({ lat, lng, store, setModal }: Props) => {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_APP_KEY ?? "",
    libraries: ["services"],
  });

  const [stores, setStores] = useState<StoreListItem[]>([]);
  const [selected, setSelected] = useState<StoreListItem | null>(null);

  useEffect(() => {
    const fetchStores = async () => {
      const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/store/web`);

      const response = await fetch(url.toString());
      const data = await response.json();

      setStores(data.data);
    };

    fetchStores();
  }, []);

  useEffect(() => {
    if (store) {
      setSelected(store);
    }
  }, [store]);

  return (
    <Map
      level={6}
      center={{ lat, lng }}
      style={{ width: "100%", height: "100%" }}
    >
      {stores.map((value, index) => (
        <div key={value.id}>
          <MapMarker
            onClick={() => setSelected(value)}
            position={{
              lat: value.lat,
              lng: value.lng,
            }}
            image={{
              src: "/images/allta-marker.png",
              size: {
                width: 60,
                height: 60,
              },
            }}
          ></MapMarker>

          {selected && selected.id === value.id && (
            <CustomOverlayMap
              position={{
                lat: value.lat,
                lng: value.lng,
              }}
              yAnchor={1.4}
            >
              <div
                className="customoverlay relative flex flex-col justify-between w-[236px] h-[166px] p-[20px] bg-white rounded-[8px] cursor-default"
                style={{
                  boxShadow: "0 4px 10px 2px rgba(28, 28, 44, 0.2)",
                }}
              >
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[16px] font-semibold">{value.name}</p>
                  <p className="text-gray7 text-[14px] line-clamp-1">
                    {value.address}
                  </p>
                  <p className="text-gray7 text-[14px]">{value.phoneNumber}</p>
                </div>

                <button
                  onClick={() => setModal(value)}
                  className="w-full py-[8px] text-white text-[14px] font-semibold bg-main rounded-[8px] cursor-pointer"
                >
                  자세히 보기
                </button>

                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-[20px] cursor-pointer"
                >
                  <Image src={closeIcon} alt="닫기" className="size-[20px]" />
                </button>
              </div>
            </CustomOverlayMap>
          )}
        </div>
      ))}
    </Map>
  );
};
