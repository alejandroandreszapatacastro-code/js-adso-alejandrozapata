let nombreaprendiz = prompt("Ingrese el nombre del Aprendiz:...")
let nota = Number(prompt("Ingrese una nota"))
let jornada = prompt("Ingrese una jornada: 1 Mañana, 2 Tarde, 3 Noche")

if (Number.isNaN(nota)){
    console.log("El valor ingresado no es un numero")
} else if (nota < 0 || nota > 5) {
    console.log("La nota debe estar entre 0 y 5")
} else if (nota >= 4.6){
    console.log(`${nombreaprendiz}: ${nota.toFixed(1)} → 🏆 Excelente`)
} else if (nota >= 4.0){
    console.log(`${nombreaprendiz}: ${nota.toFixed(1)} → ⭐ Sobresaliente`)
} else if (nota >= 3.0){
    console.log(`${nombreaprendiz}: ${nota.toFixed(1)} → ✅ Aprobado`)
} else {
    console.log(`${nombreaprendiz}: ${nota.toFixed(1)} → ❌ No aprobado`)
}

switch (jornada) {
    case "1":
        console.log(`el aprendiz ${nombreaprendiz} esta en la Jornada de la Mañana`)
        break
    case "2":
        console.log(`el aprendiz ${nombreaprendiz} esta en la Jornada de la Tarde`)
        break
    case "3":
        console.log(`el aprendiz ${nombreaprendiz} esta en la Jornada de la Noche`)
        break
    default:
        console.log("La opcion ingresada no existe")
}