
import fs from "fs"

fs.writeFile("ejemplo.txt","Mensaje a guardar",(err)=>{
    if(err) return console.log("Error al crear el archivo");

    fs.readFile("ejemplo.txt","utf-8",(err,resultado)=>{
        if(err) return console.log("Error al crear el archivo");

        console.log(resultado);
         fs.appendFile("ejemplo.txt","\nMensaje nuevo",(err,resultado)=>{
        if(err) return console.log("Error al crear el archivo");

        console.log(resultado);
         fs.readFile("ejemplo.txt","utf-8",(err,resultado)=>{
        if(err) return console.log("Error al leer el archivo");

        console.log(resultado);
        fs.unlink("ejemplo.txt",(err)=>{
              if(err) return console.log("Error al eliminar el archivo");

        })
      
    })
      
    })
      
    })
});
