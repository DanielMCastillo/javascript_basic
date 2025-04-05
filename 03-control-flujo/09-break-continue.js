// break-continue

// break: termina el ciclo actual y sale de él
// continue: salta a la siguiente iteracion del ciclo actual

let i = 0;
while(i<6){
    i++
    if(i===3){
        continue; // salta a la siguiente iteracion
    }
    if(i===5){
        break; // termina el ciclo
    }
    console.log(i);
}