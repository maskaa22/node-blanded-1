import { createFakeProduct } from '../utils/createFakeProducts.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const addOneProduct = async () => {
  try {
    const parsedData = await readProducts();
    const product = createFakeProduct();
    const updateProducts = [...parsedData, product];
    await writeProducts(updateProducts);
    console.log('Added one product');
  } catch (error) {
    console.log(error);
  }
};
addOneProduct();
