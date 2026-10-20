
function pesosadolares(){
    let pesos = Number(prompt("Ingrese cuantos pesos tiene..?"))
    let dolares = Number(prompt("Ingrese el valor del dolar a dia de hoy"))
    return `La conversion de ${pesos} es ${ pesos / dolares} dolares`
}

function temperatura(){
    let c = Number(prompt("Ingrese cuantos °C desea convertir"))
    return `Los grados ${c} centigrados son en ${c * 9 / 5 + 32} Farenheit`
}

function kmamillas(){
    let km = Number(prompt("Ingrese cuantos KM desea convertir"))
    return `Los KM ${km} kilometros son en ${km * 0.621371} Millas`
}

function segundosahoras(){
    let seg = Number(prompt("Ingrese cuantos segundos desea convertir"))
    return `Los segundos ${seg} son en ${seg / 3600} Horas`
}

function horasaminutos(){
    let horas = Number(prompt("Ingrese cuantos horas desea convertir"))
    return `Las horas ${horas} son en ${horas * 60} Minutos`
}

let opc = prompt("Menu\n1. Pesos a Dolares \n2. °C a °F\n3. KM a Millas \n4. Segundos a Horas\n5. Horas a Minutos \n 0. Salir") 
while (opc !=0){
    switch (opc){
        case"1":
            console.log(pesosadolares())
            break
        case"2":
            console.log(temperatura())
            break
        case"3":
            console.log(kmamillas())
            break
        case"4":
            console.log(segundosahoras())
            break
        case "5":
            console.log(horasaminutos())
            break
        default:
            alert("Debes elegir una opcion entre 1 y 5")
            console.log("Debes elegir una opcion entre 1 y 5")
            break
    }
    opc = prompt("Menu\n1. Pesos a Dolares \n2. °C a °F\n3. KM a Millas \n4. Segundos a Horas\n5 Horas a Minutos\n 0. Salir")

}