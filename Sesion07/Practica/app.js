// const aprendiz = {
//     nombre: "Alejandro Zapata",
//     ficha: 3534466,
//     jornada: "noche",
//     activo: true,
//     edad: 34,

//     saludar() {
//     return `Hola, soy ${this.nombre} de la ficha ${this.ficha}`;
//     }
// }

// console.log(aprendiz)
// console.table(aprendiz)

// console.log(aprendiz.nombre) // de esta manera traemos el valor de la propiedad nombre

// aprendiz.jornada = "mañana"
// console.table(aprendiz)

// delete aprendiz.activo
// console.table(aprendiz)

// function saludar() {
//     return `Hola, soy ${this.nombre} de la ficha ${this.ficha}`;
// }

// console.log(aprendiz.saludar());

const productos = [
    { codigo: "P01", nombre: "Cuaderno", precio: 4500, stock: 20 },
    { codigo: "P02", nombre: "Lápiz", precio: 1200, stock: 0 },
    { codigo: "P03", nombre: "Borrador", precio: 800, stock: 35 }
];

console.table(productos);
console.log(productos[0].nombre); //accedo a las propiedades del objeto
console.log(productos[2].precio);

// Buscar una ficha
let buscado = prompt("Código del producto:") ?? "";
let encontrado = null;

for (const p of productos) {
  if (p.codigo === buscado.toUpperCase()) {
    encontrado = p;
    break;
  }
}

if (encontrado) {
  console.log(`${encontrado.nombre}: $${encontrado.precio}: ${encontrado.stock}`);
} else {
  console.log("No existe ese código");
}

let contador = 0
let suma = 0

for(const p of productos){
    if (p.stock === 0)
        contador++
    
    suma += (p.precio * p.stock)
}

console.log(`La cantidad de productos sin stock es ${contador}`)
console.log(`El total del inventario es ${suma}`)