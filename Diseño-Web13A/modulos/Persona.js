"use strict";
// modulo = atributos caracteristicas o propiedades
// constructor = valores iniciales a los atributos
// this pertence a esta clase 
class Persona{

    constructor(nombre, apellido, promedio){
    this.nombre = nombre;
    this.apellido = apellido;
    this.promedio = promedio;

    }
     get nombre(){

        return this.nombre;
     }
     set nombre(nombre){
        this.nombre = nombre;
    }
    
    getDAta (){
        const data = `nombres:${this.nombre} aprellido:${this.apellido} promedio;${this.promedio}`;
        return data;
        
    }
     getValoracionAvg(){
        let response = (this, this.promedio>=3) ? "promedio aprovado"
        : "promedio Reprobado";
        return response;
     }

}

export {Persona};

