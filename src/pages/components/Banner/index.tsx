import Image from "next/image";

export default function Banner() {
  return (
    <div className="h-72  w-full bg-[#b76d32] bg-cover relative bg-[url('/hero-bg.png')] lg:bg-[url('/hero-bg-lg.png')]">
      <div className="sm:hidden absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-[#b76d32]/0 to-[#f2f2f2]" />
      <div className="h-40 relative text-white flex flex-col items-center justify-end ">
        <div className="flex">
          <Image width={14} height={30} src="/icons/award-left.svg" />
          <span className="font-bold text-2xl mx-3">宜家特价榜</span>
          <Image width={14} height={30} src="/icons/award-right.svg" />
        </div>
        <div className="font-bold text-3xl mt-1">全部商品</div>
        <div className="text-white text-xs mt-8">
          数据来自宜家官网 | 每周更新
        </div>
      </div>
    </div>
  );
}
