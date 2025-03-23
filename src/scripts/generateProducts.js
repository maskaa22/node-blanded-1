import { createFakeProduct } from '../utils/createFakeProducts.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (number) => {
  const products = Array(number).fill(0).map(createFakeProduct);
  try {
    const parsedData = await readProducts();
    const updateProducts = [...parsedData, ...products];
    await writeProducts(updateProducts);
    console.log(`Added ${number} products`);
  } catch (error) {
    console.log(error);
  }
};
generateProducts(5);
