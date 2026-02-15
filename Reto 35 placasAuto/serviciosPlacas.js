function validarPlaca() {

  let placa = document.getElementById("txtPlaca").value.trim().toUpperCase();
  let errores = [];

  // Validar longitud
  if (!(placa.length == 7 || placa.length == 8)) {
    errores.push("La placa debe tener 7 u 8 caracteres");
  }

  // Validar letras
  if (!esMayuscula(placa.charAt(0))) errores.push("Primer carácter incorrecto");
  if (!esMayuscula(placa.charAt(1))) errores.push("Segundo carácter incorrecto");
  if (!esMayuscula(placa.charAt(2))) errores.push("Tercer carácter incorrecto");

  // Validar guion
  if (!esGuion(placa.charAt(3))) errores.push("Debe tener guion en la posición 4");

  // Validar números
  if (!esDigito(placa.charAt(4))) errores.push("Posición 5 debe ser número");
  if (!esDigito(placa.charAt(5))) errores.push("Posición 6 debe ser número");
  if (!esDigito(placa.charAt(6))) errores.push("Posición 7 debe ser número");

  if (placa.length == 8) {
    if (!esDigito(placa.charAt(7))) errores.push("Posición 8 debe ser número");
  }

  // Mostrar resultado estructura
  if (errores.length == 0) {
    document.getElementById("lblEstructura").textContent = "VÁLIDA";
    document.getElementById("lblErrores").textContent = "Ninguno";

    mostrarProvincia(placa);
    mostrarTipoVehiculo(placa);
    mostrarDiaPicoPlaca(placa);

  } else {
    document.getElementById("lblEstructura").textContent = "INCORRECTA";
    document.getElementById("lblErrores").textContent = errores.join(" | ");

    document.getElementById("lblProvincia").textContent = "—";
    document.getElementById("lblTipo").textContent = "—";
    document.getElementById("lblDia").textContent = "—";
  }
}

function mostrarProvincia(placa) {

  let letra = placa.charAt(0);
  let provincia = "Desconocida";

  if (letra == "P") provincia = "Pichincha";
  if (letra == "G") provincia = "Guayas";
  if (letra == "L") provincia = "Loja";
  if (letra == "A") provincia = "Azuay";

  document.getElementById("lblProvincia").textContent = provincia;
}

function mostrarTipoVehiculo(placa) {

  let letra = placa.charAt(1);
  let tipo = "Particular";

  if (letra == "A") tipo = "Comercial";
  if (letra == "E") tipo = "Gubernamental";
  if (letra == "X") tipo = "Oficial";

  document.getElementById("lblTipo").textContent = tipo;
}

function mostrarDiaPicoPlaca(placa) {

  let ultimo = placa.charAt(placa.length - 1);
  let dia = "";

  if (ultimo == "1" || ultimo == "2") dia = "Lunes";
  if (ultimo == "3" || ultimo == "4") dia = "Martes";
  if (ultimo == "5" || ultimo == "6") dia = "Miércoles";
  if (ultimo == "7" || ultimo == "8") dia = "Jueves";
  if (ultimo == "9" || ultimo == "0") dia = "Viernes";

  document.getElementById("lblDia").textContent = dia;
}

function limpiar() {

  document.getElementById("txtPlaca").value = "";

  document.getElementById("lblEstructura").textContent = "—";
  document.getElementById("lblErrores").textContent = "—";
  document.getElementById("lblProvincia").textContent = "—";
  document.getElementById("lblTipo").textContent = "—";
  document.getElementById("lblDia").textContent = "—";
}
