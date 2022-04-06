import productsData from "@/public/data.json";
import roomMap from "@/public/roomMap.json";
import { Product, RankData, RoomType } from "@/types";

export const getProducts = (roomType: RoomType = "all") => {
  const sortedData = (products: Product[]) =>
    products.sort(
      (data1, data2) =>
        Number(data1.price.regularPrice) - Number(data2.price.regularPrice)
    );

  const removeDuplicate = (rankData: RankData[]) => {
    const products = rankData
      .map(({ products }) => products)
      .flat()
      .filter((product) => product != undefined);
    const map = new Map();
    return products.reduce((acc, curr) => {
      if (map.has(curr.id)) {
        return [...acc];
      } else {
        map.set(curr.id, "true");
        return [...acc, curr];
      }
    }, [] as Product[]);
  };

  if (roomType !== "all") {
    const roomItems = roomMap[roomType].map((item) => item.subTitle);

    const filterProducts = productsData.filter((product) =>
      roomItems.includes(product.subTitle as string)
    );
    return sortedData(removeDuplicate(filterProducts as RankData[]));
  }
  const allProducts = productsData;
  return sortedData(removeDuplicate(allProducts as RankData[]));
};

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f2f2f2" offset="20%" />
      <stop stop-color="#f9f9f9" offset="50%" />
      <stop stop-color="#f2f2f2" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#eee" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
