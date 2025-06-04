//Clases
//Metodo Constructor

class Auto{
    constructor(marca , modelo, año){

        this.marca=marca;
        this.modelo=modelo;
        this.año = año;

        this.presentarse= function (){
            console.log(`Hola, soy ${this.marca} modelo: ${this.modelo}`)
        }
}

}


const auto1 = new Auto("Toyota","Yaris",2025);
console.log(auto1)
console.log(auto1.marca)
console.log(auto1["modelo"])

const marca1= auto1.marca
console.log(marca1)

const {año , marca } = auto1;
console.log(año)
console.log(marca)


for (const key in auto1) {
    console.log(key , auto1[key])
}