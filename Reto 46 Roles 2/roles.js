let empleados = [
    { cedula: "1714616123", nombre: "John",  apellido: "Cena",     sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    // NUEVO EMPLEADO (cédula diferente)
    { cedula: "1102457896", nombre: "Ana",   apellido: "Mora",     sueldo: 750.0 }
];

// PARTE 1 - MENU 

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");

// PARTE 2: mostrar tabla apenas se carga la página de empleados
    mostrarEmpleados();
}

mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}


// PARTE 2 - MOSTRAR EMPLEADOS

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");

    let contenido = "<table class='tabla'>";
    contenido += "<tr>";
    contenido += "<th>CEDULA</th>";
    contenido += "<th>NOMBRE</th>";
    contenido += "<th>APELLIDO</th>";
    contenido += "<th>SUELDO</th>";
    contenido += "</tr>";

    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];

        contenido += "<tr>";
        contenido += "<td>" + emp.cedula + "</td>";
        contenido += "<td>" + emp.nombre + "</td>";
        contenido += "<td>" + emp.apellido + "</td>";
        contenido += "<td>" + emp.sueldo + "</td>";
        contenido += "</tr>";
    }

    contenido += "</table>";

    cmpTabla.innerHTML = contenido;
}