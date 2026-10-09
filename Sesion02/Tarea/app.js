let segundos = Number(prompt("Ingrese una cantidad de segundos en numeros:..."))

let horas = Math.floor(segundos/3600)
let minutos = Math.floor((segundos % 3600) / 60)
let seg = segundos % 60

console.log(horas + "horas")
console.log(minutos + "minutos")
console.log(seg + "segundos")

let celsius = Number(prompt("Ingrese una cantidad de grados celsius:..."))
let fahrenheit = (celsius * 9 / 5) + 32
console.log(`${celsius} °C equivalen a ${fahrenheit} °F`)

let nota1 = Number(prompt("Digite su nota 1: "))
let nota2 = Number(prompt("Digite su nota 2: "))
let nota3 = Number(prompt("Digite su nota 3: "))

let promedio = (nota1 + nota2 + nota3)/3
console.log(`Su nota definitiva es: ${promedio.toFixed(1)}`)
