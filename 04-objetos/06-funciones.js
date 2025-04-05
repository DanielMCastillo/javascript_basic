//funciones como objetos

function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U =  Usuario;
let user =  new U("Daniel");
console.log(user); //undefined


//paso por argumentos de una funcion
function of(Fn, arg){
    return new Fn(arg);
}
let user1 = of(Usuario, "Daniel");
console.log(user1); //undefined

// funciones pueden ser retornadas por otras funciones
function returned(){
    return function(){
        console.log("Hello World");
    }
}

let saludo = returned();
saludo(); //Hello World


