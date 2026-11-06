function contarPalabras(frase) {
    let palabras = frase.trim().split(/\s+/);
    return palabras[0] === "" ? 0 : palabras.length;
}

function formatoTitulo(frase) {
    return frase
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ");
}

// Prueba de la primera función
console.log(contarPalabras("Hola mundo"));
console.log(contarPalabras("  Hola    mundo   JavaScript  "));

// Prueba de la segunda función
console.log(formatoTitulo("hOLA mUNDO"));
console.log(formatoTitulo("bienvenido a JAVASCRIPT"));