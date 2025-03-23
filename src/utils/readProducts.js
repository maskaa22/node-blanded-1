import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const readProducts = async () => {
    try {
        const products = await fs.readFile(PATH_DB, 'utf-8');
        return products.length > 0 ? JSON.parse(products) : [];
    } catch (err) {
        console.log(err);
        
    }
};