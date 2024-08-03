class FiguraGeometrica {
    #nombreFigura = " ";
    #colorFigura = "";
    constructor(nombreFigura, colorFigura){
        this.establecerNombre(nombreFigura);
        this.establecerColor(colorFigura);
    }

    establecerNombre(nombreFigura){
        this.#nombreFigura = nombreFigura;
    }

    obtenerNombre(){
        return this.#nombreFigura;
    }

    establecerColor(colorFigura){
        this.#colorFigura = colorFigura;
    }

    obtenerColor(){
        return this.#colorFigura;
    }


}
const circulo = new FiguraGeometrica("Circulo", "Rojo");

console.log(circulo.obtenerNombre());

console.log(circulo.obtenerColor());


class Circulo extends FiguraGeometrica{

    #radio;

    constructor(nombre, color, radio){
        super(nombre, color);
        this.establecerRadio(radio);
    }

    establecerRadio(radio){
        this.#radio = radio;
    }



}


class Truangulo extends FiguraGeometrica{

    #radio;

    constructor(nombre, color, radio){
        super(nombre, color);
        this.establecerRadio(radio);
    }

    establecerRadio(radio){
        this.#radio = radio;
    }


}

class Cuadrado extends FiguraGeometrica{
    
    #radio;

    constructor(nombre, color, radio){
        super(nombre, color);
        this.establecerRadio(radio);
    }

    establecerRadio(radio){
        this.#radio = radio;
    }


}