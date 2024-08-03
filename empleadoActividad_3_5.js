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