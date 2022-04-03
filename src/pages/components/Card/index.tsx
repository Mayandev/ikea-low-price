import { getAllProduct } from "@/utils";
import Image from "next/image";

import arrowRight from "@/public/icons/arrow-right.svg";

type CardProps = {
  title: string;
  description: string;
  image: string;
  price: number;
};

function Card({ title, description, image, price }: CardProps) {
  return (
    <div className="flex bg-white mb-6 sm:mb-0 rounded-xl p-2 relative">
      <Image objectFit="contain" width={150} height={150} src={image} />
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
    </div>
  );
}

export default function CardList() {
  const productList = getAllProduct();

  return (
    <div className="mt-6 px-5 relative sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
      {productList.map(
        ({ name, productType, designText, price: { regularPrice }, image }) => (
          <Card
            key={name}
            title={name}
            description={`${productType}, ${designText}`}
            image={image}
            price={regularPrice}
          />
        )
      )}
    </div>
  );
}
