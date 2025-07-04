import express from "express";
import path from "path";
import url from "url";


const app = express();
const __filename    = url.fileURLToPath(import.meta.url);
const __dirname     = path.dirname(__filename);


//middlewares --- funciones que permiten manejar diferentes funciones o tambien validaciones
app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));
const rootDir = path.join(__dirname, "public");

//routes
app.get("/",(req,res)=>{
    res.sendFile("index.html",{root: rootDir});
});

app.get("/about",(req,res)=>{
    res.sendFile("about.html",{root: rootDir});
});


//Api Rest --- no envío una vista al nageador
app.get("/usuarios",(req,res)=>{
    res.sendFile("Hola USUARIOS");
});


//listener
app.listen(5000,()=>{
    console.log("servidor corriendo")
})