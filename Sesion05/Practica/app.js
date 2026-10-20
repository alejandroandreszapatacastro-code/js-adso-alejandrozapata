// function saludar (nombre){
//     console.log(`Hola ${nombre}`)
// }

// saludar("Alejandro")
// saludar("Andres")
// saludar("Zapata")
// saludar("Castro")

// // En JavaScript funcion y procedimiento es lo mismo 

// function areaRectangulo (b, h){
//     return b * h 
// }

// let arearec = areaRectangulo(5, 4) // Se debe crear una variable que reciba el resultado
// console.log(`El area del rectangulo es ${arearec}`) // Con este lo mando a la consola
// console.log(`El area del rectangulo es ${areaRectangulo(3, 8)}`) // Con este lo mando a la consola

// function areaRectangulo1 (){
//     let b = Number(prompt("Digite el valor de la base"))
//     let h = 10
//     return b * h 
// }

// console.log(areaRectangulo1())

// function doblevitrina (n){
//     console.log(n * 2)
// }

// function doblemano(n){
//     return n * 2
// }

// let a = doblevitrina(4)
// let b = doblemano(4)
// console.log(a, b)

// function esPar(numero) { // Funcion para saber si un numero es par o impar
//   return numero % 2 === 0;
// }

// let n = Number(prompt("Escribe un número:"));
// if (esPar(n)) {
//   console.log(`${n} es par`);
// } else {
//   console.log(`${n} es impar`);
// }

// Si no dicen la tasa, usa 19 %
// function calcularIVA(precio, tasa = 0.19) { // Se define la tasa 0,19
//   return precio * tasa; // Este es el procedimiento
// }
// console.log(calcularIVA(10000)); // Aca toma la tasa del 0,19
// console.log(calcularIVA(10000, 0.05)); // Aca toma el valor de la tasa 0,05

// // La misma idea, más corta
// const doble = (n) => n * 2; // La flecha hace de funcion sin necesidad de poner funcion

// function doble1(n){
//     return n*2
// }

// const saludo = (nombre) => { // Lo que esta en el parentesis es el parametro que va a ejecutar
//   return `Hola, ${nombre}`;
// };
// console.log(doble(21), saludo("Sofía"));
// console.log(doble1(10))

function clasificarNota(nota){
    if(nota < 3)
        return `Nota: ${nota} - Insuficiente. No Aprobado`
    else if(nota <4)
        return `Nota: ${nota} - Aceptable. Aprobado`
    else if(nota<4.6)
        return `Nota: ${nota} - Sobresaliente. Aprobado`
    else
        return`Nota: ${nota} - Excelente. Aprobado`
}

console.log(clasificarNota(4.8)); // Llamo la funcion en parentesis y dentro de otro parentesis el valor
console.log(clasificarNota(3.2));// Llamo la funcion en parentesis y dentro de otro parentesis el valor
console.log(clasificarNota(1.5));// Llamo la funcion en parentesis y dentro de otro parentesis el valor