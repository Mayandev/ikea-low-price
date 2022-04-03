import goodsData from "@/public/data.json";

export const getAllProduct = () =>
  goodsData
    .map(({ breathTakingProducts }) => breathTakingProducts)
    .reduce((acc, cur) => [...acc, ...cur], [] as any[]);
