import { RoomType } from "./types";

export const CategoryMap = {
  all: "全部商品",
  "living-room": "客厅",
  "dining-room": "餐厅",
  kitchen: "厨房",
  bedroom: "卧室",
  bathroom: "浴室",
  "childrens-room": "儿童房",
  "home-office": "书房和办公室",
  hallway: "门厅",
  outdoor: "户外",
  laundry: "洗衣房",
  balcony: "阳台",
} as { [key in RoomType]: string };
