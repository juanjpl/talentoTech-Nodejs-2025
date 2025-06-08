import express from "express";

const PORT = 5000;
const app = express()

//routes
app.get("/",(req,res)=>{
    res.status = 200;
    res.send("Hello from simple server :)")
})

app.get("/nosotros",(req,res)=>{
    res.status(200).send("Pagina Nosotros")
})

//listeners
app.listen(5000, ()=>{
    console.log(`Servidor corriendo el puerto ${PORT}`)
})