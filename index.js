//al borrar la carpeta node_modules al descargar 
//npm i && npm i -D

console.log("Hola desde Node!");
console.log("Bienvenidos a un nuevo proyecto!");

/*
const fs = require("fs"); //modulo nativo File System
const os = require("os"); //modulo nativo Sistema Operativo
const math = require("./modules/math")
*/

import fs from "fs";
import os from "os";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
import math from "./modules/math.js";

//con estas dos lineas puedo trabajar rutas absolutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaDeArchivo = path.join( __dirname, "/archivo.txt");
console.log(rutaDeArchivo);


//console.log(os);
console.log(os.platform())
console.log(os.arch())
console.log(os.release())
console.log(os.networkInterfaces())

fs.writeFile("./archivo.txt", "Bounjour!" , (err)=>{
    if(err){
        console.log(err);
    }
    console.log("Archivo creado");
});

console.log(math)
console.log(math.suma(10,40));