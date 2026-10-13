let edad = Number(prompt("Por favor ingrese su edad:..."))
if (edad >= 18) {
    console.log("Puedes votar...✓")
} else {
    console.log(`Te faltan ${18 - edad} años para votar`)
}

let numparimpar = Number(prompt("Ingrese un numero entero:...."))
if (numparimpar % 2 === 0) {
    console.log(`El numero ${numparimpar} es par`)
} else {
    console.log(`El numero ${numparimpar} es impar`)
}

let compra = Number(prompt("Ingrese el valor de la compra:..."))
let descuento
if (compra >= 100000) {
    descuento = 10   
} else if (compra >= 200000) {
    descuento = 20
} else {
    descuento = 0
}
console.log(`Tienes ${descuento} % de descuento en tu compra`)

let usuario = prompt("Ingrese por favor su usuario:...")
let clave = prompt("Ingrese su clave:...")

if (usuario === "aprendiz" && clave === "adso2026"){
    console.log("✅ Usuario y clave son corrrectos Bienvenido")
} else {
    console.log("❌ Usuario y clave no son correctos, por favor intentelo de nuevo")
}

let valorproducto = prompt("Escoja entre los siguientes productos: 1 Empanada, 2 Arepa, 3 Jugo")
switch (valorproducto) {
    case "1":
        console.log("El valor del producto Empanada es de $2.500")
        break
    case "2":
        console.log("El valor del prodcuto Arepa es de: $3.500")
        break
    case "3":
        console.log("El valor del producto Jugo es de: $5.000")
        break
    default:
        console.log("La opcion ingresada no existe")
}