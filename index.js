//console.log("Hola mundo");
//prompt("Ingrese su nombre:")
//const pi = 3.1416;
//console.log(pi);

const fs = require("fs");
//console.log(fs);

let mensaje ="Dentro de cada hombre existe una lucha entre el bien y el mal que no se resuelve"

fs.writeFile("./archivo.txt", "Estoy creando un archivo con NODE.", ()=>{
    try {
        console.log("Exito")
    } catch (error) {
        console.log(error)
    }
})