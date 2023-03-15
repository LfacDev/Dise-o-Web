// muy usado para arreglos
// expandir valores
//operador ...

"use strict";

let myArray = [2,4,5,6,10];

console.log(...myArray);


let myArray2 = [1,3,5,3,6,4,5,...myArray];

console.log(...myArray2);


//propagancion con una funcion

let lenguajes = ["js","php","python","java"];

const myPrint =(lg1,lg2,...resto) => {

    console.log(`**** lenguajes de progrmacion*****
                        1.${lg1}
                        2.${lg2}
                        3.${resto}`);

}

myPrint("c++","c#");
myPrint (...lenguajes,"cobol");

