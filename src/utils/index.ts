import productsData from "@/public/data.json";
import roomMap from "@/public/roomMap.json";
import { Product, RankData, RoomType } from "@/types";

export const getProducts = (roomType: RoomType = 'all') => {
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
