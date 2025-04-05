//switch control

let accion = 'listar';

switch(accion){
    case 'crear':
        console.log('Crear un nuevo elemento');
        //break;
    case 'listar':
        console.log('Listar todos los elementos');
        //break;
    case 'actualizar':
        console.log('Actualizar un elemento');
        //break;
    case 'eliminar':
        console.log('Eliminar un elemento');
        //break;
    default:
        console.log('Accion no reconocida');
        break;
}