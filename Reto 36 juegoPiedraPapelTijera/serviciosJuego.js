// 1) obtenerAleatorio: entero entre 1 y 3 (incluidos)
function obtenerAleatorio() {
  // Math.random() da un número entre 0 y 0.999...
  // Multiplicamos por 3 => 0 a 2.999...
  // floor => 0 a 2
  // +1 => 1 a 3
  return Math.floor(Math.random() * 3) + 1;
}

// 2) generarElemento: devuelve "piedra", "papel" o "tijera" (random)
function generarElemento() {
  let numero = obtenerAleatorio();

  if (numero === 1) return "piedra";
  if (numero === 2) return "papel";
  return "tijera";
}

// 3) determinarGanador: 0 empate, 1 gana jugador1, 2 gana jugador2
function determinarGanador(eleccionJugador1, eleccionJugador2) {
  // normalizamos a minúsculas por seguridad
  let j1 = eleccionJugador1.toLowerCase();
  let j2 = eleccionJugador2.toLowerCase();

  // empate
  if (j1 === j2) {
    return 0;
  }

  // casos donde gana jugador1
  if (j1 === "piedra" && j2 === "tijera") return 1;
  if (j1 === "papel" && j2 === "piedra") return 1;
  if (j1 === "tijera" && j2 === "papel") return 1;

  // si no empata y no gana jugador1, gana jugador2
  return 2;
}

// 4) generarRuta: "./imagenes/<nombre>.png"
function generarRuta(nombre) {
  return "./imagenes/" + nombre + ".png";
}
