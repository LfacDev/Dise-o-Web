"use strict";
import { potencia,rCuadrada } from "./Calculo.js";
import { Persona } from "./Persona.js";

console.log (potencia(2.4));
console.log (rCuadrada(9));

const myPerson = new Persona("maria","Perez",4);

console.info (myPerson.getDAta());