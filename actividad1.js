class Persona{
    #nombre = '';
    #edad = 0;
    #fechaNacimiento;

    /* paque no se te olvide, los metodos de restrincion se ejecutan en el constructor para evaluar los datos del objeto que se va a agregar.
    y se hace otro metodo para obtener o mostrar  el dato de salida */

    constructor(nombre, edad, fechaNacimiento){
        this.establecerNombre(nombre);
        this.establecerEdad(edad);
        this.#fechaNacimiento = fechaNacimiento;
    }

    establecerNombre(nombre){
        if(typeof nombre === "string" && nombre.trim() !== ''){
            this.#nombre = nombre;
        }else{
            console.log("nombre invalido")
        }
    }

    obtenerNombre(){
        return this.#nombre;
    }

    establecerEdad(edad){
        if (typeof edad === "number" && edad > 0){
            this.#edad = edad;
        }else{
            console.log("Ingrese una edad valida")
        }
    }

    // opcion mejorada para evitar decimales:
    // establecerEdad(edad){
    //     if (Number.isInteger(edad) && edad > 0){
    //         this.#edad = edad;
    //     } else {
    //         console.log("Edad inválida");
    //     }
    // }


    obtenerEdad(){
        return this.#edad;
    }


    obtenerFechaNacimiento(){
        return this.#fechaNacimiento;
    }

    calcularAñoNacimiento(){
        const añoActual = new Date().getFullYear();
        return añoActual - this.#edad;
    }


}

const santi = new Persona("santiago", 23, "2001-04-17");
console.log(santi.obtenerNombre());

console.log(santi.obtenerEdad());

console.log(santi.obtenerFechaNacimiento());

console.log(santi.calcularAñoNacimiento());

module.exports = Persona;
