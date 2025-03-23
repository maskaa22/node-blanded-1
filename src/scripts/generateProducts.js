import { createFakeProduct } from '../utils/createFakeProducts.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';

export const generateProducts = async (number) => {
  const products = Array(number).fill(0).map(createFakeProduct);
  try {
    const parsedData = await readProducts();
    const updateProducts = [...parsedData, ...products];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updateProducts, null, 2),
      'utf-8',
    );
    console.log(`Added ${number} products`);
  } catch (error) {
    console.log(error);
  }
};
generateProducts(2);
