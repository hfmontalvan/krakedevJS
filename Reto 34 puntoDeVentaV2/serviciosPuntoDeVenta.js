
// Calcula el valor del descuento a partir de un % 
calcularValorDescuento = function (monto, descuento) {
    let valor_Descuento = (monto * descuento) / 100;
    return valor_Descuento;
};


calcularDescuentoPorVolumen = function (subtotal, cantidad) {

    let porcentaje = 0;

    if (cantidad < 3) {
        porcentaje = 0;
    } else if (cantidad <= 5) {
        porcentaje = 0.03;
    } else if (cantidad <= 11) {
        porcentaje = 0.04;
    } else {
        porcentaje = 0.05;
    }

    let descuentoMonto = subtotal * porcentaje;
    return descuentoMonto;
};

calcularIva = function (subtotal, valorDescuento) {
    let valor = subtotal - valorDescuento;
    valor = valor * 0.12;
    return valor;
};

calcularSubtotal = function (precio, cantidad) {
    let subtotal = precio * cantidad;
    return subtotal;
};

calcularTotal = function (subtotal, descuento, iva) {
    let total = (subtotal - descuento) + iva;
    let totalFloat = parseFloat(total);
    return totalFloat;
};
