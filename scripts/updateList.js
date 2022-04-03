const fs = require('fs');
const axios = require('axios').default;

const catalog = require('../public/catalog.json');

const getAllSubcategories = catalog => {
  const map = new Map();
  const recursive = catalog => {
    for (const category of catalog) {
      if (category.subCategories.length > 0) {
        recursive(category.subCategories);
      } else {
        // just get the last child & filter duplicates
        if (!map.has(category.id)) {
          map.set(category.id, category);
        }
      }
    }
  };
  recursive(catalog);
  const categories = [...map.values()];
  return categories;
};

// const getBreathTakingProducts = async categories =>;

const run = async () => {
  const categories = getAllSubcategories(catalog);
  const data = await Promise.all(
    categories.map(async category => {
      try {
        const { data } = await axios.get(
          `https://www.ikea.cn/api-host/content/ranking/THIRD_CATALOG_${category.id}_SALES_QUANTITY`
        );
        const breathTakingProducts = data.products.filter(product => product.price.breathTaking === true);
        return { ...category, breathTakingProducts };
      } catch (error) {
        return { ...category, breathTakingProducts: [] };
      }
    })
  );
  const filterCategories = data.filter(category => category.breathTakingProducts.length > 0);
  fs.writeFileSync(__dirname + '/../public/data.json', JSON.stringify(filterCategories));
};

run();
