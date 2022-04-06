import { Dispatch, SetStateAction } from "react";

export type RoomType =
  | "all"
  | "living-room"
  | "dining-room"
  | "kitchen"
  | "bedroom"
  | "bathroom"
  | "childrens-room"
  | "home-office"
  | "hallway"
  | "outdoor"
  | "laundry"
  | "balcony"
  | "other";

export type RankData = {
  title: string;
  subTitle: string;
  description: string;
  products: Product[];
};

export type Product = {
  id: string;
  globalId: string;
  name: string;
  itemType: string;
  productType: string;
  designText: string;
  measureText: string;
  price: Price;
  image: string;
  sceneImage: string;
  secondImage: boolean;
  new: boolean;
  seriesId: string;
  hasFacet: boolean;
  onlineSalable: boolean;
  hasARModel: boolean;
  hasMoreSize: boolean;
  hasAssemblyService: boolean;
  language: string;
  labelImage: LabelImage;
  moreColors: any[];
  flashSale: boolean;
  productTags: ProductTag[];
  productSubTags: any[];
  isIkeaBusiness: boolean;
  isKitchen: boolean;
  seoSlug: string;
  tracking: LabelImage;
  parcelEligible: boolean;
  priceDisplay: PriceDisplay;
  fullDescription: string;
  productFormatId: string;
  productFullId: string;
  appLinkUrl: string;
  displayName: string;
};

export type LabelImage = {};

export type Price = {
  currencyCode: string;
  type: string;
  regularPrice: number;
  priceUnit: string;
  breathTaking: boolean;
  hasFamilyCard: boolean;
};

export type PriceDisplay = {
  tags: any[];
  priceUnit: string;
  currentPrice: number;
  currentPriceColorType: string;
  currentPriceColorHex: string;
  originalPriceLineThrough: boolean;
};

export type ProductTag = {
  type: string;
  name: string;
};

export type ProductContextType = {
  category: RoomType;
  isDark: boolean;
  setCategory: Dispatch<SetStateAction<RoomType>>;
};

export type RoomMap = {
  [key in RoomType]: {
    rankingId: string;
    subTitle: string;
  }[];
};
