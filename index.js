//Clase de asyncronias

/*
console.log("Inicio del Proceso");

setTimeout(() => {
    console.log("Mitad del proceso")
}, 3000);

console.log("Fin del Proceso");
*/

/*  PROMESAS
*/

/*
function taskAsync (){
    return new Promise((resolve, reject)=>{
            //cuerpo de la promesa
            setTimeout(() => {
                if(Math.random() > 0.5){
                    resolve("Tarea resuelta")
                }else{
                    reject(new Error("Tarea no resuelta"))
                }
            }, 3000);
    })
}

const result = taskAsync();
console.log(result);


const resultFullfilled = taskAsync().then((response)=>{
    console.log(response);
})

console.log(resultFullfilled);

const resultRejected = taskAsync().catch((err)=>{
    console.log(err);
});

console.log(resultRejected);

*/

const devolverPrenda = (respuesta)=>{
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            if(respuesta == "si"){
                resolve("Si gracias por prestarme la campera, ya te la llevo")
            }else{
                reject("Uh no me acuerdo, no la tengo")
            }
        }, 3000);
    })
}

console.log("Hola, te acordas la campera que te presté el sabado?")

devolverPrenda("")
.then((response)=>{
    console.log(response);
})
.catch((err)=>{
    console.log(err)
})

async function solicitarPrenda(){
    try {
        const response = await devolverPrenda(respuesta)
        console.log(response);
    } catch (error) {
        console.log("Error:", error);
    }
}

solicitarPrenda("no");