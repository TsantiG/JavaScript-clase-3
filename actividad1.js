class persona{
    #nombre = '';
    #edad = 0;
    #fechaNacimiento;

    /* paque no se te olvide, los metodos de restrincion se ejecutan en el constructor para evaluar los datos del objeto que se va a agregar.
    y se hace otro metodo para obtener o mostrar  el dato de salida */

    constructor(nombre, edad){
        this.establecerNombre(nombre);
        this.establecerEdad(edad);
        // this.establecerFechaNacimiento(fechaNacimiento);
    }

    establecerNombre(nombre){
        if(typeof nombre === "string" && nombre.trim() !== ''){
            this.#nombre = nombre;
        }else{
            console.log("nombre invalido")
        }
    }

    obtenernombre(){
        return this.#nombre;
    }

    establecerEdad(edad){
        if (typeof edad === "number" && edad > 0){
            this.#edad = edad;
        }else{
            console.log("Ingrese una edad valida")
        }
    }

    obtenerEdad(){
        return this.#edad;
    }


}

const santi = new persona("santiago", 23);
console.log(santi.obtenernombre());

console.log(santi.obtenerEdad());