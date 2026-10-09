const nombre = "Ana";
let edad = 17;
let estatura = 1.68;
let esAprendiz = true;
let apodo;

console.log(typeof nombre, typeof edad, typeof estatura, typeof esAprendiz, typeof apodo); 

//con typeof identifico que tipo de texto es si string, numero, boleano

console.log(7 / 2); // Decimal 3.5
console.log(7 % 2); // Entero 1.0
console.log(2 ** 3); // Entero 8
console.log(10 + 3 * 2); // Entero 16
console.log((10 + 3) * 2); // Entero 26
console.log(0.1 + 0.2); // Decimal 0.3

console.log("5"+"5") // 55
console.log("5"+5+5) // 55 /// 555
console.log(5+5) // 10
console.log(5+5+"5") // 55 // 105

//Si al menos hay uno que es string se genera una concatenacion y no una suma, en el ejercicio final como los dos primeros si son numeros genero la suma 10 y luego concateno por eso queda 105

console.log(typeof("5"+"5"))
console.log(typeof("5"+5+5))
console.log(typeof(5+5)) 
console.log(typeof(5+5+"5"))

console.log("5" + 5);
console.log("5" - 5);
console.log("5" * 5);
console.log(5 == "5");
console.log(5 === "5");

// let nombre1 = prompt("Digite su nombre: ")
// let entrada = Number(prompt("Digite su edad"))
// let edad1 = 0
// let suma = 0

// console.log(`Su nombre es: ${nombre1}`)

// if (Number.isNaN(entrada)){
//     console.log("Eso no es un número.")
// }else{
//     edad1 = entrada
//     suma = edad1 + 15
//     console.log("Y su edad incrementada es " + suma)
// }

// let nota1= 0
// entrada = Number(prompt("Digite su nota de JavaScript"))

// if (Number.isNaN(entrada)){
//     console.log("Eso no es un número.")
// }else{
//     nota = entrada
//     console.log(`su Nota definitiva es ${nota}`)
// }

let nota2 = Number(prompt("Digite su nota 2: "))
let nota3 = Number(prompt("Digite su nota 3: "))
let nota4 = Number(prompt("Digite su nota 4: "))

let promedio = (nota2 + nota3 + nota4)/3
console.log(`Su nota definitiva es: ${promedio.toFixed(1)}`)

// Como pedir notas, sacar el promedio y con.toFixed para que salga solo un decimal

let pesos = 250000;
console.log(pesos.toLocaleString("es-CO", { style: "currency", currency: "COP" }));
// Formato para poner en formato moneda 




