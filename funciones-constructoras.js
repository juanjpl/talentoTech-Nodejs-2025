//Funciones constructoras --- moldes

function Persona(nombre, apellido, edad){

        this.nombre=nombre;
        this.apellido=apellido;
        this.edad = edad;

        this.presentarse= function (){
            console.log(`Hola ${this.nombre} ${this.apellido}`)
        }
}


const contactoUno = new Persona("Javier","While",35);
console.log(contactoUno);

console.log(contactoUno.nombre);
console.log(contactoUno["apellido"])

const contactoDos = new Persona("Juan","Perez",40);
console.log(contactoDos.nombre)
console.log(contactoDos["apellido"])