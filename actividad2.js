const Persona = require('./actividad1'); // no podia importar, mejor usar esto.

class Estudiante extends Persona {


    constructor(nombre, edad, fechaNacimiento, grado){
        super(nombre, edad, fechaNacimiento); // acuerdate que este es lo que se hereda.

    }



    

}

const santiago = new Estudiante("santi", 17, "2001-04-17",);

