console.log("Hola desde Procesos")
console.log(process.argv);
console.log(process.argv[1])
console.log(process.argv.slice(1));

const argumentos = process.argv

if(argumentos[0]=="saludo"){
    console.log("Hola como estas desde Saludo proccess")
}