function contadorVocales(palabra){

    const coincidencias = palabra.match(/[aeiouáéíóú]/gi);
    return coincidencias ? coincidencias.length : 0;
}

 module.exports = contadorVocales