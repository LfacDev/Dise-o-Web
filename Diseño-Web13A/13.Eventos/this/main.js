function saliendo(){
    console.log("Evento generado con el mouse");
}

//oneKeypress, onekeydown con inputs 


//Evento como propiedad en js 
//Metodo mediante propiedades

const sec1Propiedad = document.getElementById("sec1");

//asociamos el metodo mediante funcion anonima o como expresion
sec1Propiedad.onclick= function(){
    alert("click en el section");
}

//no funciona por medio de modulos 

//Mediante el metodo .addEventListener (MAS USADO)

//aqui usamos funcion anonima tipo flecha 
const btn = document.querySelector("#btnenviar");
btn.addEventListener("click", ()=>{
    alert("click con addEventListener");
});
