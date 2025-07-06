
import fs from "fs/promises";
import {__dirname, join} from "../utils/index.js";

const productsFilePath = join(__dirname, 'data/products.json');

const getAllProducts = async()=>{

    try {

        const data = await fs.readFile(productsFilePath, 'utf-8');
        return JSON.parse(data);
        
    } catch (error) {
        console.log("Error al leer el archivo");
    }
}

const saveProducts = async(products)=>{
    try {
        await fs.writeFile(productsFilePath,JSON.stringify(products,null,2,'utf-8'))
    } catch (error) {
         console.log("Error al guardar el archivo");
    }
}

export default {getAllProducts, saveProducts};