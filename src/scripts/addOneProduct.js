import {createFakeProduct} from "../utils/createFakeProducts.js"
import fs from "node:fs/promises"
import {PATH_DB} from "../constants/products.js"


const addOneProduct = async()=> {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const parsedData = data.length > 0 ? JSON.parse(data) : [];
        const product = createFakeProduct();
        const updateProducts = [...parsedData, product]
        await fs.writeFile(PATH_DB, JSON.stringify(updateProducts, null, 2), "utf-8")
    } catch (error) {
        console.log(error);
        
    }
};
addOneProduct();
