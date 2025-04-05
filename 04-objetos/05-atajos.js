//atajos 
//constructor de objetos vació por defecto
let obj = {
};

let obj2 = new Object(); //undefined
//console.log(obj2); //undefined


//tipos de objetos
/**
 * new array() //array
 * new date() //fecha
 * new regex() //expresion regular
 * new error() //error
 * new function() //funcion
 * new boolean() //booleano
 * new number() //numero
 * new string() //string
 * 
 */

function Usuario(){
    this.name = "Daniel Castillo";
}

let user = new Usuario(); //undefined
console.log(user.constructor); //undefined

//ejemplo de constructores error comun
const s1 = "1+1";
const s2 = new String("1+1"); //undefined
console.log(s1,s2); //undefined

//eval es una funcion que evalua una cadena de texto como si fuera un codigo javascript
//eval(s1) //undefined

console.log(s2.valueOf()); //undefined