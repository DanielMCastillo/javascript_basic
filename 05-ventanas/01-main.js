//alertas
let mensaje = "Hola soy Daniel, esta es una alerta";
alert(mensaje);

//mensajes de confirmacion
let confirmacion = confirm("¿Quieres continuar?");
if (confirmacion) {
    alert("Continuamos");
}
//prompts () ingreso de datos por el user
let edad = prompt("¿Cuantos años tienes?");
alert("Tienes " +parseInt(edad) + " años");

