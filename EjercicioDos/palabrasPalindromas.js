function palabrasPalindromas(palabra){
  // Pasar a minúsculas y quitar espacios
  let texto = palabra.toLowerCase().replace(/\s+/g, '');
  
  // Invertir la palabra
  let invertida = texto.split('').reverse().join('');
  
  // Comparar
  return texto === invertida;
}

 module.exports = palabrasPalindromas;