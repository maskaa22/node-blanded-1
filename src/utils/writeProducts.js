import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (arr) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(arr, null, 2), 'utf-8');
  } catch (error) {
    console.log(error);
  }
};
