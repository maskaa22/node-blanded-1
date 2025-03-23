import { createFakeProduct } from '../utils/createFakeProducts.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';

const addOneProduct = async () => {
  try {
    const parsedData = await readProducts();
    const product = createFakeProduct();
    const updateProducts = [...parsedData, product];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updateProducts, null, 2),
      'utf-8',
    );
    console.log('Added one product');
  } catch (error) {
    console.log(error);
  }
};
addOneProduct();
