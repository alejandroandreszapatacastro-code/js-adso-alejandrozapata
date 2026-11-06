const productos = [
  { codigo: "P01", nombre: "Aceite de Freno", categoria: "Aceite", precio: 10000, stock: 20 },
  { codigo: "P02", nombre: "Aceite de Motor", categoria: "Aceite", precio: 25000, stock: 0 },
  { codigo: "P03", nombre: "Aceite de Caja", categoria: "Aceite", precio: 18000, stock: 12 },
  { codigo: "P04", nombre: "Liquido para Vidrios", categoria: "Liquidos", precio: 18000, stock: 35 },
  { codigo: "P05", nombre: "Manguera", categoria: "Mangueras", precio: 30000, stock: 0 }
];

// Buscar por codigo
function buscarporcodigo(buscado){    
    let encontrado = null;
    for (const p of productos) {
        if (p.codigo === buscado.toUpperCase()) {
            encontrado = p;
            break;
        }
    }

    if (encontrado) {
    console.log(`${encontrado.nombre}: $${encontrado.precio}`);
    } else {
    console.log("No existe ese código");
    }
} 

// CONTAR AGOTADOS

function contaragotados(){
    let contador = 0;
    for(const p of productos){
        if (p.stock === 0){
            contador++
            console.log(`Producto Agotado: ${p.nombre}`)
        }
    
    }
    console.log(`La cantidad de productos sin stock es ${contador}`)
}

//Valor Inventario

function valorinventario(){
    let suma = 0
    for(const p of productos){
        suma += p.precio * p.stock
    }
    console.log(`El total del inventario es ${suma}`)
}

function menu(){
    let opcion;
    do{
        opcion = prompt("Bienvenido al menu \n1. Buscar producto por codigo\n2. Buscar por producto agotado\n3. Valor del inventario \n4. Salir ")

        switch(opcion){
            case "1":
                let buscado = prompt("Código del producto:") ?? "";
                buscarporcodigo(buscado)
                break

            case"2":
                contaragotados()
                break

            case"3":
                valorinventario()
                break

            case"4":
                console.log("Hasta pronto")
                break

            default:
                console.log("Debes ingresar una opcion valida entre 1 y 4 ")
        }
    }while(opcion!="4")
}
console.log(menu())