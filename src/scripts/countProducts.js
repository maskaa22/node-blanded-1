import { readProducts } from '../utils/readProducts.js';

const countProducts = async () => {
  try {
    const products = await readProducts();

    return products.length;
  } catch (err) {
    console.log(err);
  }
};

console.log(await countProducts());
