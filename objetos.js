//objetos literales {}

const personaje = {
    nombre:"Homero",
    apellido:"Simpson",
    casado:true,
    edad:38
}

console.log(personaje)
console.log(personaje.nombre)
console.log(personaje.edad)
console.log(personaje.apellido)
console.log(personaje.casado)

console.log(personaje["casado"])
console.log(personaje["apellido"])

const personaje2 = {
    nombre:"Ned",
    apellido:"Flanders",
    casado:true,
    edad:60,

    diLoTuyo: function(){
        console.log("Hola tarola, soy Ned flanders")
    }
}
console.log(personaje2)

personaje2.vecino=personaje ;
console.log(personaje2)

personaje2.diLoTuyo();