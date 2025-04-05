//factory function
//Permite crear objetos sin usar la palabra reservada new

function crearUsuario(name, email){
    return{
        id:1,
        email:email,
        name,
        age : 25,
        activo: true,
        recuperarContrasena: function(){
            console.log('Recuperar contraseña');
        }
    };
}

let user1 = crearUsuario('Juam', 'juan@hotmail.com');
let user2 = crearUsuario('Pedro', 'pedro@hotmail.com');


console.log(user1);
console.log(user2);
