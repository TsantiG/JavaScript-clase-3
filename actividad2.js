const Persona = require('./actividad1'); // no podia importar, mejor usar esto.

class Estudiante extends Persona {
    #grado; 

    constructor(nombre, edad, fechaNacimiento, grado){
        super(nombre, edad, fechaNacimiento); // acuerdate que este es lo que se hereda.
        this.#grado = grado;
    }


    establecerGrado(grado) {
        this.#grado = grado;
    }

    obtenerGrado(){
        return this.#grado;
    }
    

}

const santiago = new Estudiante("santi", 17, "2001-04-17", "Avanzado");

console.log(santiago.obtenerGrado());

