
function calcularPromedio() {

  // 1) Declarar variables
  let sumaNotas = 0;
  let promedio = 0;

  // Obtener texto del input
  let textoNotas = document.getElementById("txtNotas").value;

  // Convertir texto en arreglo usando coma como separador
  let arregloNotas = textoNotas.split(",");

  // 2) Recorrer arreglo y sumar
  for (let i = 0; i < arregloNotas.length; i++) {

    // Convertir cada valor a número
    let nota = Number(arregloNotas[i]);

    sumaNotas = sumaNotas + nota;
  }

  // 3) Calcular promedio
  promedio = sumaNotas / arregloNotas.length;

  // 4) Retornar promedio
  return promedio;
}

function ejecutarPromedio() {

  let prom = calcularPromedio();

  // Mostrar resultado con 2 decimales
  document.getElementById("lblPromedio").textContent = prom.toFixed(2);
}
