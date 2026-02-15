calcularPromedioNotas = function () {
    // a) Recuperar valores de cada caja de texto como float
    let n1 = recuperarFloat("txtNota1");
    let n2 = recuperarFloat("txtNota2");
    let n3 = recuperarFloat("txtNota3");

    // b) Invocar a calcularPromedio
    let promedio = calcularPromedio(n1, n2, n3);

    // c) Mostrar en pantalla el valor del promedio con 2 decimales
    // toFixed devuelve string
    mostrarTexto("lblPromedio", promedio.toFixed(2));

    // Mostrar gif según condición (> 7 éxito, caso contrario fracaso)
    if (promedio > 7) {
        mostrarImagen("imgResultado", "exito.gif");
    } else {
        mostrarImagen("imgResultado", "fracaso.gif");
    }


}
limpiar = function () {
    // Cajas
    mostrarTextoEnCaja("txtNota1", "0.0");
    mostrarTextoEnCaja("txtNota2", "0.0");
    mostrarTextoEnCaja("txtNota3", "0.0");

    // Salidas
    mostrarTexto("lblPromedio", "0.00");
    mostrarImagen("imgResultado", ""); // limpia la imagen
}
