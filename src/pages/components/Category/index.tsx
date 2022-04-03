export const Categories = [
  "全品类",
  "客厅",
  "餐厅",
  "厨房",
  "卧室",
  "浴室",
  "儿童房",
  "书房和办公室",
  "门厅",
  "户外",
  "洗衣房",
  "阳台",
];

export default function Category() {
  return (
    <div className="px-4 flex overflow-x-auto -mt-24 z-10 relative scrollbar-hide">
      {Categories.map((category) => (
        <div className="bg-white rounded-full text-gray-600  px-4 py-2 w-fit h-fit shrink-0 w-100 mx-2">
          {category}
        </div>
      ))}
    </div>
  );
}
