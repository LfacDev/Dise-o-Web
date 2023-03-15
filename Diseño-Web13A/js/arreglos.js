"use strict";

const myArray = [3,5,6,"hola 1", 3.6, false, "1"];
let myArray2 = new Array ("a","b","c");

//console.log(myArray);
//console.log(myArray2);

//iterar arreglos

for(let i=0; i<myArray.length; i++){

    console.log(myArray[i]);
}

for(let j in myArray2){
    console.log(myArray2^[j]);
}


for (let k of myArray){

    console.log([k]);
}

myArray2.forEach(Element => {
    console.log(Element);


});