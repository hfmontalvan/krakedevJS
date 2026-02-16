
function invertirCadena(cadena) {

  // Variable resultado fuera del for
  let resultado = "";

  // Recorremos desde el final hasta el inicio
  for (let i = cadena.length - 1; i >= 0; i--) {

    let letra = cadena.charAt(i);

    // Concatenamos
    resultado = resultado + letra;
  }

  return resultado;
}


function ejecutarPrueba2() {

  // Tomar valor de la caja
  let texto = getTextoCaja("txtCadena");

  // Invocar función invertirCadena
  let invertida = invertirCadena(texto);

  // Mostrar resultado en pantalla
  setTexto("lblResultado", invertida);
}
