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
  other: "其他",
} as { [key in RoomType]: string };

export const CategoryColorMap = {
  all: "#4b82ee",
  "living-room": "#ffd800",
  "dining-room": "#1a52bf",
  kitchen: "#5de04e",
  bedroom: "#4ee0a7",
  bathroom: "#4eb3e0",
  "childrens-room": "#4e8ce0",
  "home-office": "#4e62e0",
  hallway: "#884ee0",
  outdoor: "#e04ed6",
  laundry: "#349f44",
  balcony: "#cf7474",
  other: "#1a52bf",
} as { [key in RoomType]: string };
