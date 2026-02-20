
mostrarImagen = function (idComponente, rutaImagen) {
  let componente = document.getElementById(idComponente);
  componente.src = rutaImagen;
};

mostrarTexto = function (idComponente, mensaje) {
  let componente = document.getElementById(idComponente);
  componente.innerText = mensaje;
};

mostrarTextoEnCaja = function (idComponente, mensaje) {
  let componente = document.getElementById(idComponente);
  componente.value = mensaje;
};

recuperarTexto = function (idComponente) {
  let componente = document.getElementById(idComponente);
  return componente.value;
};

recuperarInt = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  return parseInt(valorCaja);
};

recuperarFloat = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  return parseFloat(valorCaja);
};

// NUEVAS 

habilitarComponente = function (idComponente) {
  let componente = document.getElementById(idComponente);
  componente.disabled = false;
};

deshabilitarComponente = function (idComponente) {
  let componente = document.getElementById(idComponente);
  componente.disabled = true;
};

mostrarComponente = function (idComponente) {
  let componente = document.getElementById(idComponente);
  componente.style.display = "block";
};

ocultarComponente = function (idComponente) {
  let componente = document.getElementById(idComponente);
  componente.style.display = "none";
};

limpiarCajaTexto = function (idComponente) {
  mostrarTextoEnCaja(idComponente, "");
};

limpiarTexto = function (idComponente) {
  mostrarTexto(idComponente, "");
};