const numeros = [20, 84, 51, 69, 71, 11, 33, 97, 100, 99, 6, 8, 2];
function nuevoArreglo(numeros) {
  const numerosPares = [];
  for (let i = 1; i <= numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosPares[numerosPares.length] = numeros[i];
    }
  }
  return numerosPares;
}
let respuesta = nuevoArreglo(numeros);
console.log(respuesta);
