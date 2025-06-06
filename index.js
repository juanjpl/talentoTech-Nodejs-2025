//Solicita información a una API

//console.log(fetch("https://jsonplaceholder.typicode.com/post"));
/*
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=> response.json())
.then((data)=>{
    console.log(data);
})
    */


//Axios --- compatibles con codigo antiguo
const axios = require("axios");
/*
axios.get("https://jsonplaceholder.typicode.com/posts")
.then(response=>{
    console.log(response.data);
})
    */

//GET   -   Hace un pedido
axios.get("https://jsonplaceholder.typicode.com/posts")
.then(response=>{
    console.log(response.data);
})

axios.post("https://jsonplaceholder.typicode.com/posts")
.then(response=>{
    console.log(response.data);
})


//POST  -   Crea un recurso
const config ={
    method: "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        title:"Nuevo Post",
        body:"Soy un nuevo post",
        userId:100,
        id:200
    })
}
fetch("https://jsonplaceholder.typicode.com/posts", config)
.then( (response) => response.json())
.then((data)=>{
    console.log(data);
})

//PUT   -   Actualizar un recurso
//PATCH -   Actualizar un algo de un recurso
//DELETE-   Elimina un recurso

