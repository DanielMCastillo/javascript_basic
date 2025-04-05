// Short circuit evaluation

// falso 
let nombre = 'DanyAMC';
let username = nombre || 'Anonimo';
console.log(username); // Anonimo

function fn1(){
    console.log('soy la funcion 1')
    return true;
}

function fn2(){
    console.log('soy la funcion 2')
    return true;
}

let x = fn1 && fn2(); // fn1 se ejecuta y fn2 no