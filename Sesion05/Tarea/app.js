function bisiesto (numero){
    return numero % 4 === 0;
}

let n = Number(prompt("Ingrese el año que desea consultar"))
if (bisiesto(n)){
    console.log(`El año ${n} es bisiesto`);
} else {
    console.log(`El año ${n} no es bisiesto`)
}


function mayordetres (a, b, c){
    if (a >= b && a >= c){
        return a
    } else if (b >= a && b >= c){
        return b 
    } else {
        return c
    }
}

let a = Number(prompt("Ingrese el primer numero..."))
let b = Number(prompt("Ingrese el segundo numero..."))
let c = Number(prompt("Ingrese el tercer numero..."))

let mayor = mayordetres(a, b, c)

console.log(`El numero mayor de los tres numeros es ${mayor}`)

let preciofinal = (precio, descuento = 0) => {
    return precio - (precio * descuento / 100)
}
precio = Number(prompt("Ingrese el precio del producto..."))
descuento = Number(prompt("Ingrese el valor del descuento"))

console.log(`El valor final del producto es ${preciofinal(precio, descuento)}`)