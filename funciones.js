//console.log("Hola");

//Declaraciones
function saludar(){
    console.log("Hola desde la funcion anonima 1");
}

//invocacion
saludar()

//funcion anonima
const saludar2 = function(){
    console.log("Hola desde la funcion anonima 2");
}

//funciones flecha 
const saludar3 = ()=>{
    console.log("Hola desde la funcion anonima 3")
}

const saludarConParametros = (parametro)=>{
    console.log("Hola, " + parametro);
}

saludarConParametros("Javier While");
saludarConParametros("Juan Pascual");

const add = (num1, num2) =>{

    if(!isNaN(num1) &&!isNaN(num2)){
console.log(num1 + num2);
    }else{
        console.log("Error")
    }
    
}

const sustract = (num1, num2) =>{

    if(!isNaN(num1) &&!isNaN(num2)){
        return(num1 - num2);
    }else{
        return "Error"
    }
    
}

console.log(sustract(4,1));
let resultado = sustract(10,2);
console.log(resultado);



const multi = (num1, num2)=> num1 * num2 ;
console.log(multi(3,5))

//HOF High Order Functions
function saludo4(nombre){
    return "Hola " + nombre;
}
function procesarNombre (nombre , callback){
    return callback(nombre); // ---- saludo4(nombre)
}

//boton.addEventListener("click", ()=>{funcionalidad})
console.log(procesarNombre("Gabriel",saludo4));

const array = [1,2,3,4,5,6,7,8,9];

console.log(array);

array.push(1,3,5,44,5,6);
console.log(array);

array.unshift(66);
console.log(array);

array.pop()
console.log(array);

array.shift()
console.log(array);

array.splice(0,3);
console.log(array);

const encontrado = array.find((item)=> item>4);
console.log(encontrado);

const encontrado2 = array.find((item)=> {
    return item>4;
});

const filtrado = array.filter((item)=> item>4);
console.log(filtrado);

const filtrado2 = array.filter((item)=> {
    return item*10;
});
console.log(filtrado2);