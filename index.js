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
axios.get("https://jsonplaceholder.typicode.com/posts")
.then(response=>{
    console.log(response.data);
})

//GET   -   Hace un pedido
//POST  -   Crea un recurso
//PUT   -   Actualizar un recurso
//PATCH -   Actualizar un algo de un recurso
//DELETE-   Elimina un recurso

