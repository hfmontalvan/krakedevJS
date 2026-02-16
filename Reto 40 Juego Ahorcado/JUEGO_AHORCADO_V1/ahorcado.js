//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

// VARIABLES GLOBALES 

let palabraSecreta = "";   // se guarda en guardarPalabra
let intentos = 0;          // se incrementa cada vez que entra a ingresarLetra
let coincidencias = 0;     // se incrementa cada vez que se encuentra la letra dentro de la palabra
let errores = 0;           // se incrementa cuando la letra NO es parte de la palabra


// PASO 0

function esMayuscula(caracter) {
  let codigo = caracter.charCodeAt(0);
  return (codigo >= 65 && codigo <= 90); // A-Z
}


// PASO 1: Ingresar palabra secreta
// - Debe tener EXACTAMENTE 5 caracteres
// - Deben ser letras MAYÚSCULAS
// - Si pasa, guardar en palabraSecreta (global)

function guardarPalabra() {
  let palabra = recuperarTexto("txtSecreta");

  // Validar longitud 5
  if (palabra.length !== 5) {
    alert("Debe ingresar una palabra de 5 letras MAYÚSCULAS.");
    return;
  }

  // Validar que todas sean mayúsculas
  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra.charAt(i);

    // Solo aceptamos A-Z (mayúsculas)
    if (!esMayuscula(letra)) {
      alert("Debe ingresar una palabra de 5 letras MAYÚSCULAS.");
      return;
    }
  }

  // Guardar en variable global
  palabraSecreta = palabra;

  // Reiniciar juego
  intentos = 0;
  coincidencias = 0;
  errores = 0;

  // Limpiar los 5 divs
  mostrarTexto("div0", "");
  mostrarTexto("div1", "");
  mostrarTexto("div2", "");
  mostrarTexto("div3", "");
  mostrarTexto("div4", "");

  // Limpiar caja de letra
  mostrarTextoEnCaja("txtLetra", "");

  // Limpiar imagen del ahorcado
  mostrarImagen("ahorcadoImagen", "");

  // Probar en consola (lo pide el PDF)
  console.log("Palabra secreta:", palabraSecreta);
}


// PASO 2: mostrarLetra(letra, posicion)
// - Mostrar en div0..div4 según la posición

function mostrarLetra(letra, posicion) {
  if (posicion === 0) mostrarTexto("div0", letra);
  if (posicion === 1) mostrarTexto("div1", letra);
  if (posicion === 2) mostrarTexto("div2", letra);
  if (posicion === 3) mostrarTexto("div3", letra);
  if (posicion === 4) mostrarTexto("div4", letra);
}


// PASO 3 y PASO 5: validar(letra)
// - Recorre palabraSecreta
// - Si coincide: mostrarLetra + incrementar letrasEncontradas
// - Además: incrementar coincidencias por cada coincidencia encontrada (PASO 5)
// - Si no encontró ninguna: alert + errores++ + mostrarAhorcado() (PASO 5 y 6)

function validar(letra) {
  let letrasEncontradas = 0; // local (PASO 3)

  for (let i = 0; i < palabraSecreta.length; i++) {
    let letraSecreta = palabraSecreta.charAt(i);

    if (letraSecreta === letra) {
      mostrarLetra(letra, i);
      letrasEncontradas = letrasEncontradas + 1;

      // PASO 5: coincidencias incrementa por cada letra encontrada
      coincidencias = coincidencias + 1;
    }
  }

  // PASO 5: si no encontró ninguna letra
  if (letrasEncontradas === 0) {
    alert("LA LETRA NO ES PARTE DE LA PALABRA");
    errores = errores + 1;
    mostrarAhorcado(); // PASO 6
  }
}


function ingresarLetra() {
  // Si no hay palabra secreta guardada, no se puede jugar
  if (palabraSecreta === "") {
    alert("Primero debe GUARDAR una palabra secreta.");
    return;
  }

  // PASO 5: incrementar intentos al entrar
  intentos = intentos + 1;

  let letra = recuperarTexto("txtLetra");

  // Validar que ingrese 1 solo caracter
  if (letra.length !== 1) {
    alert("Ingrese SOLO una letra");
    return;
  }

  // Validar mayúscula
  if (esMayuscula(letra)) {
    validar(letra);
  } else {
    alert("SOLO SE ACEPTAN MAYUSCULAS");
    return;
  }

  // PASO 7: cuando gana, cambiar alert por ganador.gif
  if (coincidencias === 5) {
    mostrarImagen("ahorcadoImagen", "./ganador.gif");
    return;
  }

  // PASO 7: cuando pierde, cambiar alert por gameOver.gif
  if (intentos === 10) {
    mostrarImagen("ahorcadoImagen", "./gameOver.gif");
    return;
  }
}


// PASO 6: 
// - Si errores==1 mostrar Ahorcado_01.png, si 2 Ahorcado_02.png, etc.

function mostrarAhorcado() {
  if (errores === 1) mostrarImagen("ahorcadoImagen", "./Ahorcado_01.png");
  if (errores === 2) mostrarImagen("ahorcadoImagen", "./Ahorcado_02.png");
  if (errores === 3) mostrarImagen("ahorcadoImagen", "./Ahorcado_03.png");
  if (errores === 4) mostrarImagen("ahorcadoImagen", "./Ahorcado_04.png");
  if (errores === 5) mostrarImagen("ahorcadoImagen", "./Ahorcado_05.png");
  if (errores === 6) mostrarImagen("ahorcadoImagen", "./Ahorcado_06.png");
  if (errores === 7) mostrarImagen("ahorcadoImagen", "./Ahorcado_07.png");
  if (errores === 8) mostrarImagen("ahorcadoImagen", "./Ahorcado_08.png");
  if (errores === 9) mostrarImagen("ahorcadoImagen", "./Ahorcado_09.png");
}


// ENGANCHE DE BOTONES 

window.onload = function () {
  // PASO 1: Cambiar type de txtSecreta a password (el PDF lo pide)
  // (Si ya lo cambiaste en el HTML, no pasa nada)
  let cajaSecreta = document.getElementById("txtSecreta");
  if (cajaSecreta) {
    cajaSecreta.type = "password";
  }

  // Botón GUARDAR
  let btnGuardar = document.getElementById("btnGuardar");
  if (btnGuardar) {
    btnGuardar.addEventListener("click", guardarPalabra);
  }

  // Botón VALIDAR
  let btnValidar = document.getElementById("btnValidar");
  if (btnValidar) {
    btnValidar.addEventListener("click", ingresarLetra);
  }
};
