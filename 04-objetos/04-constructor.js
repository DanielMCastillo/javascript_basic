// function constructora
// {id:1, recuperarClave:fucntion(){}}
function Usuario(){
    this.id=1;
    this.recuperarClave = function(){
        console.log('Recuperar clave');
    };
}

let usuario = new Usuario(); //undefined
console.log(usuario); //undefined