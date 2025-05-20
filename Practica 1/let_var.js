var nombre = "Armando";
var edad = 25;

nombre = "Ana Maria";

var saludo = "Hola " + nombre + ", tienes " + edad + " años";
console.log(saludo); //muestra el saludo en la consola

//muestra en consola el contenido del saludo

//function cuadrado(numero) {
//  return numero * numero;
//}

const cuadrado = numero => numero * numero;

console.log(cuadrado(5));
console.log(cuadrado(2));
console.log(cuadrado(7));

//console.log()

//mostrar en consola el resultado

// crear una arrow function llamada saludoPersonalizado que reciba dos parametros
//: nombre y edad , y retorne una cadena como la siguiente
// hola me llamo isay y tengo 37 años

const saludoPersonalizado = (nombre, edad) => `Hola, me llamo ${nombre} y tengo ${edad} años`;

console.log(saludoPersonalizado("Fernando", 30));