
import fs from "fs/promises"

export const opAsincrona = async ()=>{

    try {
        await fs.writeFile("ejemplo-promesa.txt","Hola soy una promesa")
        let resultado = await fs.readFile("ejemplo-promesa.txt","utf-8");
        console.log(resultado);

        await fs.appendFile("ejemplo-promesa.txt","\nNuevo Contenido")
        resultado = await fs.readFile("ejemplo-promesa.txt","utf-8");
        console.log(resultado);
        
    } catch (error) {
        console.log("Error al escribir el archivo");
    }
    
};

opAsincrona();