let numero = Number(prompt("Ingrese un numero para crear su tabla de multiplicar"))
for(let i = 0; i<=10; i++){
    console.log(`${numero} * ${i} = ${numero * i}`)
}

let cantidadnotas

do{
    cantidadnotas = Number(prompt("Cuantas notas desea ingresar...?"))

    if(isNaN(cantidadnotas) || cantidadnotas <=0 || cantidadnotas % 1 !== 0){
        alert("La cantidad de notas no puede ser 0")
    }
} while (isNaN(cantidadnotas) || cantidadnotas <= 0 || cantidadnotas % 1 !==0)

let suma = 0 
let notamayor
let notamenor

for (let i = 1; i <= cantidadnotas; i++){
    let nota
    do {
        nota = Number(prompt(`Ingresa la nota ${i} entre 0 y 5`))

        if(isNaN (nota) || nota < 0 || nota > 5){
            alert("Nota Invalida. Ingrese una nota entre 0 y 5")
        }
    } while (isNaN (nota) || nota < 0 || nota > 5)
    
    suma += nota

    if (i === 1){
        notamayor = nota
        notamenor = nota
    } else {
        if (nota > notamayor){
            notamayor = nota
        }
        if (nota < notamenor){
            notamenor = nota
        }

    }
}
let promedio = suma / cantidadnotas

alert(`Estadistica: Promedio: ${promedio.toFixed(1)}, Nota Mayor: ${notamayor}, Nota Menor: ${notamenor}`)