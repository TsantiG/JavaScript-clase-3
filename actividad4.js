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

//SUBCLASES
//------------------------------------------1-----------
class Circulo extends FiguraGeometrica{

    #radio;

    constructor(nombre, color, radio){
        super(nombre, color);
        this.establecerRadio(radio);
    }

    establecerRadio(radio){
        this.#radio = radio;
    }

    obtenerRadio(){
        return this.#radio;
    }


    calcularArea() {
         const valor2 = Math.PI * this.#radio ** 2;
         return valor2.toFixed(2);
    }


    calcularCircunferencia() {
       const valor = 2 * Math.PI * this.#radio;
       return valor.toFixed(2);
    }

    obtenerTodo(){
        return `La figura es un ${this.obtenerNombre()}, su color es ${this.obtenerColor()}, su radio es ${this.obtenerRadio()}, su Area es de ${this.calcularArea()} y por ultimo su circunferencia es de ${this.calcularCircunferencia()}`;
    }

}

const circulo_ = new Circulo("circulo", "Azul", 1.5)

console.log(circulo_.obtenerTodo())

//-----------------------------------------2------------
class Triangulo extends FiguraGeometrica{

    #radio;

    constructor(nombre, color, radio){
        super(nombre, color);
        this.establecerRadio(radio);
    }

    establecerRadio(radio){
        this.#radio = radio;
    }

    
    obtenerRadio(){
        return this.#radio;
    }

        calcularArea() {
            const valor2 = Math.PI * this.#radio ** 2;
            return valor2.toFixed(2);
       }
   
   
       calcularCircunferencia() {
          const valor = 2 * Math.PI * this.#radio;
          return valor.toFixed(2);
       }
   
       obtenerTodo(){
           return `La figura es un ${this.obtenerNombre()}, su color es ${this.obtenerColor()}, su radio es ${this.obtenerRadio()}, su Area es de ${this.calcularArea()} y por ultimo su circunferencia es de ${this.calcularCircunferencia()}`;
       }
   
   }
   
   const triangulo = new Triangulo("Triangulo", "verde", 1.5)
   
   console.log(triangulo.obtenerTodo())

//--------------------------------------------3--------
class Cuadrado extends FiguraGeometrica{

    #radio;

    constructor(nombre, color, radio){
        super(nombre, color);
        this.establecerRadio(radio);
    }

    establecerRadio(radio){
        this.#radio = radio;
    }

    
    obtenerRadio(){
        return this.#radio;
    }

        calcularArea() {
            const valor2 = Math.PI * this.#radio ** 2;
            return valor2.toFixed(2);
       }
   
   
       calcularCircunferencia() {
          const valor = 2 * Math.PI * this.#radio;
          return valor.toFixed(2);
       }
   
       obtenerTodo(){
           return `La figura es un ${this.obtenerNombre()}, su color es ${this.obtenerColor()}, su radio es ${this.obtenerRadio()}, su Area es de ${this.calcularArea()} y por ultimo su circunferencia es de ${this.calcularCircunferencia()}`;
       }
   
   }
   
   const cuadrado = new Cuadrado("Cuadrado", "Amarillo", 1.5)
   
   console.log(cuadrado.obtenerTodo())
