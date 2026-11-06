

const DOMINIO = "@adso.ejemplo.co";
const correos = [];  
const registros = []; 


function quitarTildes(texto) {
  const conTilde = "áéíóúüñ";
  const sinTilde = "aeiouun";
  let resultado = "";
  for (const letra of texto) {
    const pos = conTilde.indexOf(letra);
    if (pos !== -1) {
      resultado += sinTilde[pos];
    } else {
      resultado += letra;
    }
  }
  return resultado;
}


function formatoTitulo(texto) {
  const palabras = texto.toLowerCase().split(" ");
  let resultado = [];
  for (const p of palabras) {
    resultado.push(p[0].toUpperCase() + p.slice(1));
  }
  return resultado.join(" ");
}


let nombre = prompt("Nombre completo (deja vacío para terminar):");

while (nombre !== null && nombre.trim() !== "") {

  const limpio = quitarTildes(nombre.trim().toLowerCase());
  const partes = limpio.split(" ").filter(p => p !== "");


  let apellido;
  if (partes.length === 1) {
    apellido = partes[0];
  } else if (partes.length === 2) {
    apellido = partes[partes.length - 1];
  } else {
    apellido = partes[partes.length - 2];
  }


  const usuario = partes[0][0] + apellido;


  let correo = usuario + DOMINIO;
  let numero = 2;
  while (correos.includes(correo)) {
    correo = usuario + numero + DOMINIO;
    numero++;
  }


  correos.push(correo);
  registros.push({ nombre: formatoTitulo(partes.join(" ")), correo: correo });

  nombre = prompt("Nombre completo (deja vacío para terminar):");
}


console.log("=== Correos generados ===");
for (let i = 0; i < correos.length; i++) {
  console.log(`${i + 1}. ${correos[i]}`);
}
console.log(`Total de correos generados: ${correos.length}`);


console.table(registros);