const Persona = require('./actividad1'); // no podia importar, mejor usar esto. nota(no podia importar por que no puse el module en el package.json 
//y por lo tanto solo podia usar la forma base que tiene node.js para exportar y importar.

class Estudiante extends Persona {
    #grado; 

    constructor(nombre, edad, fechaNacimiento, grado){
        super(nombre, edad, fechaNacimiento); // acuerdate que este es lo que se hereda.
        this.establecerGrado(grado);
    }


    establecerGrado(grado) {
        this.#grado = grado;
    }

    obtenerGrado(){
        return this.#grado;
    }
    
    toString() {
        return `Nombre: ${this.obtenerNombre()}, Edad: ${this.obtenerEdad()}, Fecha de Nacimiento: ${this.obtenerFechaNacimiento()}, Grado: ${this.#grado}`;
    }

}

const santiago = new Estudiante("santi", 17, "2001-04-17", "Avanzado");

console.log(santiago.obtenerGrado());

console.log(santiago.toString());

