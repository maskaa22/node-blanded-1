import {createFakeProduct} from "../utils/createFakeProducts.js"
import fs from "node:fs/promises"
import {PATH_DB} from "../constants/products.js"

export const generateProducts = async(number)=> {
    const products = Array(number).fill(0).map(createFakeProduct);
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const parsedData = data.length > 0 ? JSON.parse(data) : [];
        const updateProducts = [...parsedData, ...products]
        await fs.writeFile(PATH_DB, JSON.stringify(updateProducts, null, 2), "utf-8")
    } catch (error) {
        console.log(error);
        
    }
};
generateProducts(2);
