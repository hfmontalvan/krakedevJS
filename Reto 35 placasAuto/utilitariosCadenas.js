function esMayuscula(caracter) {
  let codigo = caracter.charCodeAt(0);
  return codigo >= 65 && codigo <= 90; // A-Z
}

function esDigito(caracter) {
  let codigo = caracter.charCodeAt(0);
  return codigo >= 48 && codigo <= 57; // 0-9
}

function esGuion(caracter) {
  return caracter === "-";
}
