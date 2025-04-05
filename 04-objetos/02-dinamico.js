// dinamicos
const user = {if:1};
user.name = 'Daniel Morales Castaneda';
user.age = 25;
user.guardar = function(){
    console.log('Guardando...', this.name);
}

user.guardar();