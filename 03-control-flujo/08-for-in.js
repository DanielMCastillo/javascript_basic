//for in
//for in es un bucle que se utiliza para
// recorrer las propiedades de un objeto
// y no es recomendable usarlo para recorrer arrays
// ya que no garantiza el orden de las propiedades
// y puede incluir propiedades heredadas de la cadena de prototipos 
// (prototypal inheritance)
let user = {
    id:1,
    name:'Chancho feliz',
    age:25,
};

for(let propiedad in user){
    console.log(propiedad,user[propiedad]); // id, name, age
}

