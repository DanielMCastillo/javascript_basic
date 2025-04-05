//Fucnion con argumentos y parametros
function suma(a,b){
    console.log(arguments);
    return a+b;
}

console.log(suma(5,6,1,2,3));
console.log(typeof suma);