let año = Number(prompt("Ingrese un año:..."))

if (Number.isInteger(año) && año > 0) {
    if ((año % 4 === 0 && año % 100 !== 0) ||
        año % 400 === 0) {
        console.log(`${año} es un año bisiesto`)
    } else {
        console.log(`${año} no es un año bisiesto`)
    }
} else {
    console.log("Ingrese un año entero válido")
}

let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese una operación (+, -, *, /):");

switch (operacion) {
    case "+":
        console.log(`Resultado: ${num1 + num2}`);
        break;

    case "-":
        console.log(`Resultado: ${num1 - num2}`);
        break;

    case "*":
        console.log(`Resultado: ${num1 * num2}`);
        break;

    case "/":
        if (num2 === 0) {
            console.log("Error: no se puede dividir entre cero");
        } else {
            console.log(`Resultado: ${num1 / num2}`);
        }
        break;

    default:
        console.log("La operación ingresada no existe");
}

let peso = Number(prompt("Ingrese su peso en kilogramos:"));
let estatura = Number(prompt("Ingrese su estatura en metros:"));

if (!Number.isFinite(peso) || !Number.isFinite(estatura) ||
    peso <= 0 || estatura <= 0) {
    console.log("Ingrese un peso y una estatura válidos");
} else {
    let imc = peso / estatura ** 2;

    console.log(`Su IMC es: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log("Clasificación: Bajo peso");
    } else if (imc <= 24.9) {
        console.log("Clasificación: Normal");
    } else if (imc <= 29.9) {
        console.log("Clasificación: Sobrepeso");
    } else {
        console.log("Clasificación: Obesidad");
    }
}
