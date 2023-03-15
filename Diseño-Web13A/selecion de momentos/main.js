"use strict"
// selecion de elementos por id

const seccion1 = document.getElementById("sec1");
console.log(seccion1);
seccion1.innerHTML =" <em>desde</em> <b>java s</b>"; // permite renderizar etiquetas
//seccion1.textContent = "otra vez desde js"; // insertar texto


//seleccion por claas

const seccion2 = document.getElementsByClassName("sec2");
console.log(seccion2);

//selecion por nombre
const seccion3 = document.getElementsByName("sec3");
console.log(seccion3);

// selecion por etiqueta

const labelP = document.getElementsByTagName("p");
console.log(labelP);