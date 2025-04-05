// arrow functions

//funcion clasica 
function saludar(nombre){
    return `Hola` + nombre;
}
console.log(saludar("Daniel clasica"));


//funciones anonimas
let saludo = function(nombre){
    return `Hola` + nombre;
}
console.log(saludo("Daniel anonima"));

//ejemplo de arrow function - ESTRUCTURA ()=>{}
let saludo2 = (nombre) => {
    console.log('Saludos ' + nombre);
};
saludo2('Carlos'); // También imprime: Saludos Carlos
