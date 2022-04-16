import { CategoryColorMap, CategoryMap } from "@/const";
import { ProductContext } from "@/pages";
import { RoomType } from "@/types";
import Image from "next/image";
import { useContext } from "react";

export default function Banner() {
  const { category, isDark } = useContext(ProductContext);
  const bgColor = CategoryColorMap[category as RoomType];

  return (
    <div
      className={`h-72 sm:h-44 sm:rounded-md  w-full dark:bg-dark-black dark:sm:bg-dark-black bg-cover relative bg-[url('/hero-bg.png')] lg:bg-[url('/hero-bg-lg.png')] transition-all duration-200`}
      style={{ backgroundColor: `${isDark ? "#35363a" : bgColor}` }}
    >
      <div className="sm:hidden absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-ikea-orange/0 to-[#f2f2f2] dark:to-dark-black" />
      <div className="h-40 relative text-white flex flex-col items-center justify-end ">
        <div className="flex">
          <Image width={14} height={30} src="/icons/award-left.svg" />
          <span className="font-bold text-2xl mx-3">宜家特价榜</span>
          <Image width={14} height={30} src="/icons/award-right.svg" />
        </div>
        <div className="font-bold text-3xl mt-1">
          {CategoryMap[category as RoomType]}
        </div>
        <div className="text-white text-xs mt-8 font-normal">
          数据来自宜家官网 | 每周更新
        </div>
      </div>
    </div>
  );
}
