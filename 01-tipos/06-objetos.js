// Personaje de TV - Objeto

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

// Objeto literal - Creacion de objeto
let personaje = {
    nombre:"Tanjiro",
    anime:"emon slayer",
    edad:16,
};

//acceder a una propiedad 
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

//sobresecribir propiedad - ambas formas son validas
personaje.edad = 13;
personaje['edad'] = 16;

delete personaje.anime;
console.log(personaje);