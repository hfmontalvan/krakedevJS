
// 2) Función que NO recibe parámetros y retorna un entero aleatorio entre 1 y 100 (incluidos)
function obtenerAleatorio1a100() {
  // Math.random() => 0 a 0.999...
  // *100 => 0 a 99.999...
  // floor => 0 a 99
  // +1 => 1 a 100
  return Math.floor(Math.random() * 100) + 1;
}

// 4) Función mostrarResultados(arregloNumeros)
// Muestra el arreglo en pantalla creando una tabla dinámica
function mostrarResultados(arregloNumeros) {

  // Vamos a armar HTML en una variable
  let html = "";
  html = html + "<table>";
  html = html + "<tr><th>Índice</th><th>Valor</th></tr>";

  for (let i = 0; i < arregloNumeros.length; i++) {
    html = html + "<tr>";
    html = html + "<td>" + i + "</td>";
    html = html + "<td>" + arregloNumeros[i] + "</td>";
    html = html + "</tr>";
  }

  html = html + "</table>";

  // Pintar en el div
  document.getElementById("divResultados").innerHTML = html;
}


function generarAleatorios() {

  // a) declarar e inicializar arreglo
  let aleatorios = [];

  // b) tomar número del usuario
  let texto = document.getElementById("txtCantidad").value;
  let cantidad = Number(texto);

  // Validar que sea número
  if (isNaN(cantidad)) {
    document.getElementById("lblMensaje").textContent = "Error: ingrese un número válido.";
    document.getElementById("divResultados").innerHTML = "";
    return;
  }

  // Validar rango 5 a 20 incluidos
  if (cantidad < 5 || cantidad > 20) {
    document.getElementById("lblMensaje").textContent = "Error: el número debe estar entre 5 y 20.";
    document.getElementById("divResultados").innerHTML = "";
    return;
  }

  document.getElementById("lblMensaje").textContent = "Generando " + cantidad + " números...";

  // c) for desde 0 hasta cantidad (excluido)
  for (let i = 0; i < cantidad; i++) {
    console.log(i); // imprime el índice (0..cantidad-1)

    // e) generar aleatorio y agregar al arreglo
    let num = obtenerAleatorio1a100();
    aleatorios.push(num);
  }

  // 5) mostrar resultados
  mostrarResultados(aleatorios);
}
