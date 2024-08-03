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
        super();
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#salario = salario;
        this.#numEmpleado = numEmpleado;
    }

    obtenerNombre(){
        return this.#nombre;
    }

    obtenerApellido(){
        return this.#apellido;
    }

    obtenerSalario(){
        return this.#salario;
    }

    obtenerNumEmpleado(){
        return this.#numEmpleado;
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


    calcularSalario(){
        
        return this.obtenerSalario()+this.#bono;
    }

    obtenerTodo(){
        return `El gerente ${this.obtenerNombre()} con salario base de ${this.obtenerSalario()} recive un pago total de ${this.calcularSalario()} por el bono con la cantidad de ${this.obtenerBono()}`
    }

}

const felipe = new Gerente("felipe", "Perez", 30, 1, 35);
console.log(felipe.obtenerTodo());


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