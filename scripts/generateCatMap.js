const fetch = require('node-fetch');
const fs = require('fs');

const Categories = [
  { category: 'living-room', name: '客厅', maxPage: 15 },
  { category: 'dining-room', name: '餐厅', maxPage: 5 },
  { category: 'kitchen', name: '厨房', maxPage: 2 },
  { category: 'bedroom', name: '卧室', maxPage: 11 },
  { category: 'bathroom', name: '浴室', maxPage: 4 },
  { category: 'childrens-room', name: '儿童房', maxPage: 3 },
  { category: 'home-office', name: '书房和办公室', maxPage: 4 },
  { category: 'hallway', name: '门厅', maxPage: 9 },
  { category: 'outdoor', name: '户外', maxPage: 2 },
  { category: 'laundry', name: '洗衣房', maxPage: 3 },
  { category: 'balcony', name: '阳台', maxPage: 3 },
];

async function getCateByRoom() {
  const categoriesPromises = Categories.map(async ({ category, maxPage }) => {
    const pageRange = Array.from({ length: maxPage }, (v, k) => k + 1);
    const promises = pageRange.map(async page => {
      const resp = await fetch(`https://www.ikea.cn/api-host/content/ranking/byRoom?roomId=${category}&page=${page}`, {
        headers: {
          'x-client-platform': 'PcWeb',
        },
        method: 'GET',
      });
      const { briefRankings } = await resp.json();
      const room = briefRankings.map(({ subTitle, rankingId }) => ({ rankingId, subTitle }));
      return room;
    });
    return { [category]: await Promise.all(promises) };
  });
  const cateRoomData = await Promise.all(categoriesPromises);
  const cateRoomMap = cateRoomData.reduce((acc, cur) => {
    // flatten
    Object.keys(cur).forEach(key => {
      cur[key] = cur[key].flat();
    });
    return { ...acc, ...cur };
  }, {});
  fs.writeFileSync(`${__dirname }/../public/roomMap.json`, JSON.stringify(cateRoomMap));
}

getCateByRoom();
