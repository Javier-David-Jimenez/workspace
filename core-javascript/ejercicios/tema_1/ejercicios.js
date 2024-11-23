// 1 Declara una variable normal y una constante

let x = 25;
const Nombre = "David";

// 2 Declara una variable normal. Asígnala después a un número

let Num;
Num = 25;


//Declara dos variables numéricas y declara una tercera con su suma

let num1 = 12;
let num2 = 13;
let sumado = num1 + num2;
console.log(sumado);

//Declara dos variables de string y declara una tercera con su suma

let cadena1 = "Estoy en casas. ";
let cadena2 = "Haciendo ejercicios.";
let unido = cadena1 + cadena2;
console.log("frase completa" + unido + "acaba aqui");

// Como declarar una clase
class Persona {
    // El constructor es un método especial que se llama cuando se crea una instancia de la clase
    constructor(nombre, edad) {
        this.nombre = nombre; // Asigna el parámetro 'nombre' a una propiedad de la instancia
        this.edad = edad; // Asigna el parámetro 'edad' a una propiedad de la instancia
    }

    // Método de la clase
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear una instancia de la clase
let persona1 = new Persona("Juan", 25);

// Llamar al método 'saludar' de la instancia
persona1.saludar(); // Imprime: Hola, mi nombre es Juan y tengo 25 años.

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@222

let carName = "Volvo";




