import { CategoryMap } from "@/const";
import { ProductContext } from "@/pages";
import { RoomType } from "@/types";
import { useContext } from "react";

export default function Category() {
  const { setCategory, category: room } = useContext(ProductContext);

  return (
    <div className="px-4 sm:px-0 flex overflow-x-auto -mt-24 sm:mt-8 sm:mb-8 z-10 relative scrollbar-hide">
      {Object.keys(CategoryMap).map((key) => (
        <button
          role="button"
          key={key}
          onClick={() => setCategory && setCategory(key as RoomType)}
          className={` rounded-full px-4 py-2 w-fit h-fit shrink-0 w-100 mx-2 ${
            room === key ? "bg-black text-white" : "bg-white text-black "
          }`}
        >
          {CategoryMap[key as RoomType]}
        </button>
      ))}
    </div>
  );
}
