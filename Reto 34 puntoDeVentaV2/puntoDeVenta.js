

esProductoValido = function (producto) {
    // Obligatorio + máximo 10 caracteres
    if (producto === null || producto === undefined) {
        return false;
    }
    let p = producto.trim();
    return p.length > 0 && p.length <= 10;
};

esCantidadValida = function (textoCantidad) {
    // Obligatorio + entero entre 0 y 100
    if (textoCantidad === null || textoCantidad === undefined) {
        return false;
    }
    let t = textoCantidad.trim();
    if (t.length === 0) {
        return false;
    }

    // Validar que sea entero (evita "3.5" o "10a")
    let cantidad = parseInt(t, 10);
    if (isNaN(cantidad)) {
        return false;
    }
    if (String(cantidad) !== t) {
        // Si t tiene espacios, ya los quitamos con trim().
        // Esta comparación evita que "3.5" pase como 3.
        return false;
    }

    return cantidad >= 0 && cantidad <= 100;
};

esPrecioValido = function (textoPrecio) {
    // Obligatorio + número entre 0 y 50
    if (textoPrecio === null || textoPrecio === undefined) {
        return false;
    }
    let t = textoPrecio.trim();
    if (t.length === 0) {
        return false;
    }

    let precio = parseFloat(t);
    if (isNaN(precio)) {
        return false;
    }

    return precio >= 0 && precio <= 50;
};


// Principal

calcularValorTotal = function () {

    // 1) Recuperar valores (como texto)
    let productoTxt = recuperarTexto("txtProducto");
    let cantidadTxt = recuperarTexto("txtCantidad");
    let precioTxt = recuperarTexto("txtPrecio");

    // 2) Validación de campos obligatorios
    if (productoTxt.trim() === "" || cantidadTxt.trim() === "" || precioTxt.trim() === "") {
        mostrarTexto("idResumen", "CAMPO OBLIGATORIO");
        return;
    }

    // 3) Validaciones específicas
    if (!esProductoValido(productoTxt)) {
        mostrarTexto("idResumen", "Producto inválido: máximo 10 caracteres");
        return;
    }

    if (!esCantidadValida(cantidadTxt)) {
        mostrarTexto("idResumen", "Cantidad inválida: entero entre 0 y 100");
        return;
    }

    if (!esPrecioValido(precioTxt)) {
        mostrarTexto("idResumen", "Precio inválido: número entre 0 y 50");
        return;
    }

    // 4) Convertir a tipos numéricos (ya validados)
    let producto = productoTxt.trim();
    let cantidad = parseInt(cantidadTxt.trim(), 10);
    let precio = parseFloat(precioTxt.trim());

    // 5) Calcular subtotal
    let subtotal = cantidad * precio;

    // 6) Calcular descuento por volumen
    let descuento = calcularDescuentoPorVolumen(subtotal, cantidad);

    // 7) Calcular IVA 12% sobre el neto
    let iva = (subtotal - descuento) * 0.12;

    // 8) Total
    let total = subtotal - descuento + iva;

    // 9) Mostrar resultados
    mostrarTexto("lblSubtotal", subtotal.toFixed(2));
    mostrarTexto("lblDescuento", descuento.toFixed(2));
    mostrarTexto("lblValorIVA", iva.toFixed(2));
    mostrarTexto("lblTotal", total.toFixed(2));

    mostrarTexto(
        "idResumen",
        "Resumen: Producto " + producto +
        " | Cantidad: " + cantidad +
        " | Total: $" + total.toFixed(2)
    );
};

limpiar = function () {

    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtPrecio", "");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");

    mostrarTexto("idResumen", "Resumen:");
};
