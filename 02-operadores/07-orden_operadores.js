// Orden jerarquico de operadores
// 1. () -> () -> ()
// 2. ** -> ** -> ()
// 3. *, /, % -> *, /, % -> ()
// 4. +, - -> +, - -> ()

let resultado = 8/(2*(2+2));
console.log(resultado); // 1