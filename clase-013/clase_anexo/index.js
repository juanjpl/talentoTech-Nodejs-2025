
const libroJSON ='{"title":"Cien años de soledad","author":"Gabriel Garcia Marquez","disponible":true,"portada":"img.jpg"}';

console.log(libroJSON);
console.log(typeof libroJSON);


const libroObj = JSON.parse(libroJSON);
console.log(libroObj);
console.log(typeof libroObj);


const user={
    nombre: "Juan",
    edad: 25,
    ciudad: "Mendoza",
    hobbies: ["Ciclismo","Leer","Nadar","Comer"],
    avatar: "img.jpg",
    password:"password123"
}

const userToJSON = JSON.stringify(user, ["Nombre","Ciudad","hobbies"], 2);
console.log(userToJSON);

const userJSONToObject = JSON.parse(userToJSON);

console.log(userJSONToObject);



