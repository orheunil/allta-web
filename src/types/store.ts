import { Json } from "./common";

export type GetStoreListForWebResponse = {
  ok: boolean;
  data: StoreListItem[];
};

export type StoreListItem = {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  lat: number;
  lng: number;
  mainImage: string | null;
  tags: string | null;
  passPrice: Json | null;
  businessHours: Json | null;
  breakTime: string | null;
};
