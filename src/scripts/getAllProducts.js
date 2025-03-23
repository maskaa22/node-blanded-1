import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';

const getAllProducts = async () => {
  try {
    return await readProducts();
  } catch (err) {
    console.log(err);
  }
};

console.log(await getAllProducts());
