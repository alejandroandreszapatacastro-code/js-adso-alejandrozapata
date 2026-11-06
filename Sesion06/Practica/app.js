// Lista o Arreglo tren

// let tren = ["Ana", "Sofia", "Ricardo", "Rosalva", "Edison"]

// console.log(tren.length) // Saber la cantidad de elementos
// console.log(tren) // Muestra la lista completa
// console.log(tren[2]) // Muestra el elemento en la posicion 2 de la lista
// console.log(tren[tren.length - 1]) // Muestra el ultimo elemento de la lista

// tren.push("Boris") // Adicionar un elemento al final de la lista o arreglo
// console.log(tren)

// tren.unshift("Pedro") // Adiciona el elemento Pedro de primero en la lista o arreglo
// console.log(tren)

// tren.pop() // Elimina el elemento que este en la ultima posicion
// console.log(tren)

// console.log(tren.includes("Sofia")) // En el arreglo aparece el nombre Sofia y arroja true si no esta arroja false
// console.log(tren.indexOf("Ricardo")) // Indica en que posicion esta la persona arroja el numero en este caso 3
// //console.log(tren.splice(3, -1)) // Muestra los elementos en las posiciones iniciando en la 1 y terminando en la 3

// for(let i = tren.length-1; i >= 3; i--) //Iteracion para buscar de atras hacia adelante
// {
//     console.log([i]) // Muestra el numero posicion del elemento
//     console.log(tren[i]) // Muestra el nombre que hay en la posicion
// }

// let nombre = "Estefania"
// for(let n in nombre){ //Muestra la cantidad de letras del nombre
//     console.log(n)
// }
// let nombrearreglo = []
// for(let n of nombre){ // Muestra el nombre 
//     console.log(n)
//     nombrearreglo.push(n) // Lo agrega a la ultima posicion y la muestra al derecho
//     nombrearreglo.unshift(n) // Pone el nombre estefania como aniafetse la pone al reves

// }

// console.log(nombrearreglo.join(" "))
// console.log(tren.join(" "))

// for(let i = 0; i < tren.length; i++){
//     console.log(`${i+1}. ${tren[i]}`) // i+1 es para que se visualice desde 1 y no desde 0
// }

// for(const pasajero of tren){
//     console.log(pasajero)
// }

// console.table(tren)

const compras = [] // Arreglo cerrado
let compra
do {
    compra = prompt("Ingrese un producto para agregar \no deje vacio para terminar").trim() // Prompt que le pide al usuario que ingrese la compra
    compras.push(compra) // Ingresa los productos a la lista cerrada
} while (compra != "")
compras.pop() // Elimino la ultima posicion que es un espacio vacio
console.table(compras) // Imprime como tabla en la consola
for(let i = 0; i < compras.length; i++){ // Imprime numerado en la consola
console.log(`${i+1}. ${compras[i]}`)
}

let quitarproducto = prompt("Indique que producto desea eliminar").trim()
let posicion = -1
posicion = compras.indexOf(quitarproducto)
console.log(posicion)
compras.splice(posicion, 1)
console.table(compras)
if (posicion == -1)
    console.log("No se elimino ningun producto")
else
    console.log(`Producto ${quitarproducto} se elimino correctamente`)