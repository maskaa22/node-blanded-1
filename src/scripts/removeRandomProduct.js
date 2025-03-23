import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const removeRandomProduct = async () => {
  try {
    const products = await readProducts();
    if (products.length === 0) {
      console.log('We have not products!');
      return;
    }
    const randomIndex = Math.floor(Math.random() * products.length);
    // const filteredProducts = products.filter(
    //   (product, index) => index !== randomIndex,
    // );
    products.splice(randomIndex, 1);
    await writeProducts(products);
    console.log(`Deleted product with index ${randomIndex}`);
  } catch (error) {
    console.log(error);
  }
};
removeRandomProduct();
