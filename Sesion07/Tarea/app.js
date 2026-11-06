const agenda = [
    {nombre: "Alejandro", numero: "3045679126", correo: "alejo21@ejemplo.com"},
    {nombre: "Maria", numero: "3024790258", correo: "maria35@ejemplo.com"},
    {nombre: "Daniel", numero: "3102854027", correo: "dani99@ejemplo.com"}
]

function crearcontacto (){
    let nombre = prompt("Ingrese el nombre")
    let numero = (prompt("Ingrese el numero"))
    let correo = prompt("Ingrese el correo")

    let contacto = {
        nombre: nombre,
        numero: numero,
        correo: correo
    }

    agenda.push(contacto)

    alert("Contacto ha sido agregado correctamente")
}

function veragenda (){
    console.table(agenda)
}

function buscarcontacto(){
    let nombrebuscar = prompt("Ingrese el nombre que desea buscar:...")

    let resultados = agenda.filter(contacto => contacto.nombre.toLowerCase().includes(nombrebuscar.toLowerCase())
    )

    if (resultados.length > 0){
        console.table(resultados)
    } else {
        alert("No se encontraron contactos")
    }
}

function menu (){
    let opcion

    do{
        opcion = prompt("Bienvenido al menu. \n1. Agregar un contacto \n2. Desea ver su agenda \n3. Buscar un contacto \n4. Salir")

        switch(opcion){
            case "1":
                crearcontacto()
                break
            
            case"2":
                veragenda()
                break

            case"3":
                buscarcontacto()
                break

            case"4":
                console.log("Hasta Pronto")
                break

            default:
                console.log("Por favor ingrese una opcion valida entre 1 y 4")
        }
    } while (opcion !== "4")
}

menu()