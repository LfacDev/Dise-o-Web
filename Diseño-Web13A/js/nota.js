"use strict";

let option = parseFloat(prompt("Dame tu nota"));

switch(true){
    case option>=0 && option<3:
        alert(`su nota ${option} es deficiente`);
        break;

    case option>=3 && option<3.9:
        alert("su nota es regular");   
        break;

    case option>=4 && option<4.5:
        alert("su nota es buen");
         break;


    default:

            alert("nota invalida");
            
}