//Pre - entrega

import { getProducts } from "./modules/getProducts.js";
import { getProductsID } from "./modules/getProductsID.js";

//console.log(process.argv); // Imprimirá el array de argumentos
//console.log(process.argv[0])
//console.log(process.argv[1])
//console.log(process.argv[2])
//console.log(process.argv[3])
const parametro1 = process.argv[2];
const parametro2 = process.argv[3]

//getProducts();

if (parametro1 === "GET" && parametro2==="products"){
    getProducts();
}else if (parametro1 === "GET" && parametro2.length >9) {
    //console.log(parametro2)
    //console.log(parametro2.slice(9));
    getProductsID(parametro2.slice(9));
}else{
  console.log("Error! Parametros ingresados incorrectamente.")
}