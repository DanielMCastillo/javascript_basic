//Function
function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){console.log("Dibujando...")};
}

let punto = {z:7};
Punto.call(punto,1,2);
console.log(punto); //{ z: 7, x: 1, y: 2, dibujar: [Function] }


//**
// const Point =  new Function('x','y',
   // `this.x = x;
   // this.y = y;
   // this.dibujar = function(){console.log("Dibujando...")};`
//);  

//const p = new Point(1,2);
//console.log(p); //Punto { x: 1, y: 2, dibujar: [Function] }