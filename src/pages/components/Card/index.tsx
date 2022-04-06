import { getProducts, shimmer, toBase64 } from "@/utils";
import Image, { ImageLoaderProps } from "next/image";

import arrowRight from "@/public/icons/arrow-right.svg";
import { useContext, useMemo } from "react";
import { ProductContext } from "@/pages";
import { RoomType } from "@/types";

type CardProps = {
  title: string;
  description: string;
  image: string;
  price: number;
  id: string;
  seoSlug: string;
};

function Card({ title, description, image, price, id, seoSlug }: CardProps) {
  return (
    <a
      href={`https://www.ikea.cn/cn/zh/p/${seoSlug}-${id}`}
      className="h-40 flex bg-white mb-6 sm:mb-0 rounded-xl p-2 relative"
    >
      <Image
        objectFit="contain"
        width={120}
        height={120}
        src={image}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
      <div className="ml-2 py-3 flex flex-col justify-between w-2/3">
        <div className="font-bold">{title}</div>
        <div className="text-sm text-gray-400 w-2/3">{description}</div>
        <div className="bg-[#FFD800] font-bold px-3 py-1 w-fit shadow-[3px_3px_0px_rgba(250,0,0,1)]">
          <span className="text-xs">¥</span>
          <span className="ml-1">{price}</span>
        </div>
        <div className="absolute right-4 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src={arrowRight} height={12} width={8} />
        </div>
      </div>
    </a>
  );
}

export default function CardList() {
  const { category } = useContext(ProductContext);
  const productList = useMemo(
    () => getProducts(category as RoomType),
    [category]
  );

  return (
    <div className="mt-6 px-5 relative sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8">
      {productList.map(
        ({
          id,
          seoSlug,
          name,
          productType,
          designText,
          price: { regularPrice },
          image,
        }) => (
          <Card
            key={id}
            id={id}
            title={name}
            description={`${productType} ${designText && ", "} ${designText}`}
            image={image}
            price={regularPrice}
            seoSlug={seoSlug}
          />
        )
      )}
    </div>
  );
}
