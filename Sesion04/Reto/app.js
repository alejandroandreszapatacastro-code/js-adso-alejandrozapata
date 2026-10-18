do{

    let secreto = Math.floor(Math.random() * 100) + 1
    let adivino = false
    let intentos = 0
    let maxintentos = 7

    alert("Adivina el numero secreto entre 1 y 100")

    while (intentos < maxintentos && !adivino){
        let numero = Number(prompt(`Intento ${intentos + 1} de ${maxintentos}. Ingresa el numero que creas es el numero secreto`))
        if (numero < 1 || numero > 100 || Number.isNaN(numero)){
            alert("Ingrese un numero entre 1 y 100")
            continue
        }
        intentos++
    
        if (numero === secreto){
            adivino = true
            alert(`Adivinaste el numero secreto en ${intentos} intentos`)
        } else if (numero < secreto){
        alert(`Mas Alto. Tienes aun disponible ${intentos} de ${maxintentos} intentos.`)
        } else {
        alert(`Mas Bajo. Tienes aun disponible ${intentos} de ${maxintentos} intentos.`)
        }
    }
    if (!adivino){
        alert(`Perdiste. El numero secreto era ${secreto}`)
    }
    var jugardenuevo = confirm("Desea jugar de nuevo?")
} while (jugardenuevo)

