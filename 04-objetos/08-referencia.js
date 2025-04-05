// Valo por referencia
let a = 1;
let b = a;

b ++;
console.log(a,b);


let a1 = {};
let b1 = a1;

b1.prop = 1;
console.log(a1,b1);

//ejemplo con funciones

let s = 1;

function suma(n) {
    n++;
}

suma(s);
console.log(s); // 1, porque se pasa por valor

//ejemplo con objetos

let r = {};
function sumas(x){
    x.prop++;
}
sumas(r);
console.log(r); // {}, porque se pasa por referencia