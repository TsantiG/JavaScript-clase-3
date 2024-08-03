const Trabajador = require('./interfaceActividad3'); // no podia importar, mejor usar esto.

class Estudiante extends Trabajador {
    
    realizarTarea() {
        console.log("Estudiando para los exámenes.");
    }

    #nombre;
    #grado; 

    constructor(nombre, grado){
        super();
        this.establecerNombre(nombre)
        this.establecerGrado(grado);
    }

    establecerNombre(nombre){
        this.#nombre = nombre;
    }

    establecerGrado(grado) {
        this.#grado = grado;
    }

    obtenerGrado(){
        return this.#grado;
    }
    
    toString() {
        return `Nombre: ${this.#nombre}, Grado: ${this.#grado}`;
    }

}

const santiago = new Estudiante("santi", "Avanzado");

console.log(santiago.obtenerGrado());

console.log(santiago.toString());

