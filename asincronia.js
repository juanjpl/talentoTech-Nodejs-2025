//Async await

async function solicitarPrenda(){
    try {
        const response = await devolverPrenda(respuesta)
        console.log(response);
    } catch (error) {
        console.log("Error:", error);
    }
}

solicitarPrenda("no");