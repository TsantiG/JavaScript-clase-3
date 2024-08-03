const Trabajador = require('./interfaceActividad3');

class Empleado extends Trabajador{

    realizarTarea() {
        console.log("Trabajando en la oficina.");
    }

    #nombre;
    #apellido;
    #salario;
    #numEmpleado;

    constructor(nombre, apellido, salario, numEmpleado){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#salario = salario;
        this.#numEmpleado = numEmpleado;
    }


}

class Gerente extends Empleado{

    #bono;
    constructor(nombre, apellido, salario, numEmpleado, bono){
        super(nombre, apellido, salario, numEmpleado);
        this.#bono=bono;
    }

    obtenerBono(){
        return this.#bono;
    }




}


class Vendedor extends Empleado{

    #comision;
    constructor(nombre, apellido, salario, numEmpleado, comision){
        super(nombre, apellido, salario, numEmpleado);
        this.#comision=comision;
    }

    obtenerComision(){
        return this.#comision;
    }


    

}

class Faltas extends Empleado{

    #FaltaTrabajo;
    constructor(nombre, apellido, salario, numEmpleado, faltaTrabajo){
        super(nombre, apellido, salario, numEmpleado);
        this.#FaltaTrabajo=faltaTrabajo;
    }

    obtenerBono(){
        return this.#FaltaTrabajo;
    }


    

}