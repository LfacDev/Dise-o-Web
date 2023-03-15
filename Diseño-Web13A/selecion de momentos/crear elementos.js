"use strict"

const myElementi= document.createElement('div');

myElementi.id="div1";
myElementi.className="div1";
myElementi.innerHTML="Este es un elemento desde js";
myElementi.style="color:blue";

//insertar documentos 
document.body.appendChild(myElementi);

//

const header = document.getElementById('myheader');

header.appendChild(myElementi);

let myparrafo1 = document.createElement("p");
//otra manera de asignar 
myparrafo1.setAttribute("class", "sec3");
let myparrafo2 = document.createElement("p");
myparrafo2.innerHTML="lorem sdvfssdfsdfsdfsdfdssdfsdsdfdsfdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf";
myparrafo1.innerHTML="***lorem sdvfssdfsdfsdfsdfdssdfsdsdfdsfdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd ***";

myparrafo2 = myparrafo1;

const sec2 = document.getElementById("sec2");
header.appendChild(myparrafo2);
sec2.appendChild(myparrafo1);

//Nota 
//la etiqueta template no se renderiza