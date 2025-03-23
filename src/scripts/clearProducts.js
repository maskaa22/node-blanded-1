import { writeProducts } from '../utils/writeProducts.js';

const clearProducts = async () => {
  await writeProducts([]);
  console.log('All products deleted!');
};
clearProducts();
