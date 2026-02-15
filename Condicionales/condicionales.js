
// 1. calcularTasaInteres

function calcularTasaInteres(ingresoAnual) {

    if (ingresoAnual < 300000) {
        return 0.16;

    } else if (ingresoAnual < 500000) {
        return 0.15;

    } else if (ingresoAnual < 1000000) {
        return 0.14;

    } else if (ingresoAnual < 2000000) {
        return 0.13;

    } else {
        return 0.12;
    }
}


// 2. calcularCapacidadPago

function calcularCapacidadPago(edad, ingresos, egresos) {

    let valorCuotaMensual = ingresos - egresos;

    if (edad > 50) {
        return valorCuotaMensual * 0.30;
    } else {
        return valorCuotaMensual * 0.40;
    }
}


// 3. calcularDescuento por la compra de un producto

function calcularDescuento(precioFloat, cantidadInt) {

    let descuento = 0;

    if (cantidadInt < 3) {
        descuento = 0;

    } else if (cantidadInt <= 5) {
        descuento = 0.02;

    } else if (cantidadInt <= 11) {
        descuento = 0.03;

    } else {
        descuento = 0.04;
    }

    let total = precioFloat * cantidadInt;
    return total - (total * descuento);
}


// 4. determinarColesterolLDL

function determinarColesterolLDL(nivelColesterol) {

    if (nivelColesterol < 100) {
        return "Óptimo";

    } else if (nivelColesterol < 130) {
        return "Casi óptimo";

    } else if (nivelColesterol < 160) {
        return "Límite alto";

    } else if (nivelColesterol < 190) {
        return "Alto";

    } else {
        return "Muy alto";
    }
}


// 5. validarClave

function validarClave(clave) {

    return clave.length >= 8 && clave.length <= 16;
}


// 6. esMayuscula

function esMayuscula(caracter) {

    let codigo = caracter.charCodeAt(0);
    return codigo >= 65 && codigo <= 90;
}


// 7. esMinuscula: Determina si el carácter recibido es una letra minúscula.

function esMinuscula(caracter) {

    let codigo = caracter.charCodeAt(0);
    //rango de la a - z y el otro rango letras minúsculas con tilde
    return ( (codigo >= 97 && codigo <= 122) || (codigo >= 224 && codigo <= 252) );
}
//Prueba esMinuscula("a")

// 8. esDigito

function esDigito(caracter) {

    let codigo = caracter.charCodeAt(0);
    return codigo >= 48 && codigo <= 57; // rango Del 0 al 9
}


// 9. darPermiso

function darPermiso(notaMatematica, notaFisica, notaGeometria) {

    return (
        notaMatematica > 90 ||
        notaFisica > 90 ||
        notaGeometria > 90
    );
}


// 10. otorgarPermiso

function otorgarPermiso(notaMatematica, notaFisica, notaGeometria) {

    return (
        (notaMatematica > 90 || notaFisica > 90) &&
        notaGeometria > 80
    );
}


// 11. dejarSalir

function dejarSalir(notaMatematica, notaFisica, notaGeometria) {

    return (
        (notaMatematica > 90 ||
         notaFisica > 90 ||
         notaGeometria > 90) &&
        notaFisica > notaMatematica
    );
}



