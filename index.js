//Pre - entrega

import { getProducts } from "./modules/getProducts.js";
import { getProductsID } from "./modules/getProductsID.js";
import { deleteProductID } from "./modules/deleteProductID.js";
import { postProduct } from "./modules/postProduct.js";

//console.log(process.argv); // Imprimirá el array de argumentos
//console.log(process.argv[0])
//console.log(process.argv[1])
//console.log(process.argv[2])
//console.log(process.argv[3])
const peticion = process.argv[2];
const parametro2 = process.argv[3];
const parametro3 = process.argv[4];
const parametro4 = process.argv[5];
const parametro5 = process.argv[6];
const parametro6 = process.argv[7];

//npm run start POST products <title> <price> <category>

//getProducts();

if (peticion === "GET" && parametro2 === "products") {
    getProducts();
} else if (peticion === "GET" && parametro2.length > 9) {
    if (parametro2.slice(0, 8) === "products") {
        //console.log(parametro2)
        //console.log(parametro2.slice(9));
        //console.log(parametro2.slice(0,8))
        getProductsID(parametro2.slice(9));
    }

} else if (peticion === "DELETE" && parametro2.length > 9) {
    deleteProductID(parametro2.slice(9));
} else if (peticion =="POST" && parametro2 ==="products" && parametro3.length >2 && parametro4.length >2 &&parametro5.length>2  ) {
    const product ={
        title:parametro3,
        price:parametro4,
        category:parametro5
    }
    postProduct(product)
} else {
    console.log("Error! Parametros ingresados incorrectamente.")
}