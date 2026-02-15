
let puntosUsuario = 0;
let puntosComputador = 0;

function jugar(seleccionado) {
  // Mostrar elección del usuario
  setTexto("lblUsuario", seleccionado);

  // 1) PC genera elemento random
  let eleccionPC = generarElemento();

  // 2) Con ese valor genera ruta y pinta imagen del PC
  let rutaPC = generarRuta(eleccionPC);
  setSrcImagen("imgPC", rutaPC);

  // También mostramos el texto de la elección del PC
  setTexto("lblPcTexto", eleccionPC);

  // 3) determinarGanador (según el texto del reto):
  // "pasándole el valor que obtuvo en generarElemento y el valor seleccionado"
  // => jugador1 = PC, jugador2 = Usuario
  let resultado = determinarGanador(eleccionPC, seleccionado);

  // Interpretación:
  // 0 empate
  // 1 gana jugador1 (PC)
  // 2 gana jugador2 (Usuario)
  if (resultado === 0) {
    setTexto("lblResultado", "EMPATE");
  } else if (resultado === 2) {
    // gana usuario
    puntosUsuario = puntosUsuario + 1;
    setTexto("lblResultado", "GANASTE LA PARTIDA!!");
  } else {
    // gana PC
    puntosComputador = puntosComputador + 1;
    setTexto("lblResultado", "PERDISTE LA PARTIDA!!");
  }

  // Actualizar marcador siempre
  setTexto("lblPuntosUsuario", puntosUsuario);
  setTexto("lblPuntosComputador", puntosComputador);

  // Validar si alguien llegó a 5
  if (puntosUsuario === 5) {
    setTexto("lblResultado", "HAS GANADO EL JUEGO");
  }

  if (puntosComputador === 5) {
    setTexto("lblResultado", "EL COMPUTADOR TE HA VENCIDO");
  }
}

function limpiar() {
  // Reiniciar variables
  puntosUsuario = 0;
  puntosComputador = 0;

  // Reiniciar textos
  setTexto("lblUsuario", "—");
  setTexto("lblPcTexto", "—");
  setTexto("lblResultado", "—");

  // Reiniciar marcador
  setTexto("lblPuntosUsuario", "0");
  setTexto("lblPuntosComputador", "0");

  // Quitar imagen del PC (src vacío)
  setSrcImagen("imgPC", "");
}
