// listar propiedades de un objeto

const punto ={
    x:10,
    y:20,
    dibujar(){
        console.log("Dibujando");
    }
}
//delete punto.dibujar;
if("dibujar" in punto){
   punto.dibujar(); 
}

console.log(Object.keys(punto)); // ['x', 'y', 'dibujar']
for(let llave of Object.keys(punto)){
    console.log(llave, punto[llave]); // x, y, dibujar
}

// Object.values(punto) devuelve un array con los valores de las propiedades del objeto
for(let entry of Object.entries(punto)){
    console.log(entry); // ['x', 10], ['y', 20], ['dibujar', f dibujar() {}]
}

for (let llave in punto){
    console.log(llave, punto[llave]); // x, y, dibujar
}