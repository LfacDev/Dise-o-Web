"use strict";

let mensaje = "hola"

// función como expresion o guardada en una expresion o variable 

const saludo  = function(cad) {
    console.log (cad + "estudiantes");
    console.log(`${cad} estudiantes`);
    
}

//callback

function saludar (callback, msn){
 callback (msn);

}

//invocar el callback o funcion de retro llamada

saludar (saludo,mensaje);

