let producto = prompt("Ingrese un producto:...");
let precio = Number(prompt("Digite el precio del producto:... "));
let cantidad = Number(prompt("Digite la cantidad del producto:... "));
let descuento = Number(prompt("Digite el descuento:... "));
const IVA = 0.19;


if (precio===null || cantidad===null || descuento===null) {
  alert("Compra cancelada");
} else {


    if (Number.isNaN(precio) || Number.isNaN(cantidad) || Number.isNaN(descuento)) {
    alert("Revisa los datos");
    } else {
    let subtotal = precio * cantidad;
    let desc = (subtotal * descuento) / 100;
    let viva = subtotal * IVA;
    let total = subtotal - desc + viva;
    console.log(`El producto es ${producto}`);
    console.log(`El subtotal es: ${subtotal.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`);
    console.log(`El descuento es: ${desc.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`);
    console.log(`El IVA (19%) es: ${viva.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`);
    console.log(`El valor total a pagar es de: ${total.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`);

    alert(`El precio es ${precio.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`);
    }
}

//let pesos = 250000;
//console.log(pesos.toLocaleString("es-CO", { style: "currency", currency: "COP" }));