

// 1) Arreglo global con 3 empleados 
let empleados = [
  { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
  { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
  { cedula: "1104689123", nombre: "Henry", apellido: "Montalvan", sueldo: 1200.0 },
];

// 2) Variable global  
let esNuevo = false;

//  MENÚ 

mostrarOpcionEmpleado = function () {
  mostrarComponente("divEmpleado");
  ocultarComponente("divRol");
  ocultarComponente("divResumen");

  // Requerimiento: al cargar la página de empleados, deshabilitar cajas y botón guardar
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");

  // también limpiamos errores y cajas
  limpiarPantallaEmpleado();

  // Requerimiento reto anterior: mostrar tabla al entrar
  mostrarEmpleados();
};

mostrarOpcionRol = function () {
  ocultarComponente("divEmpleado");
  mostrarComponente("divRol");
  ocultarComponente("divResumen");
};

mostrarOpcionResumen = function () {
  ocultarComponente("divEmpleado");
  ocultarComponente("divRol");
  mostrarComponente("divResumen");
};

//  PARTE EMPLEADOS 

limpiarPantallaEmpleado = function () {
  // cajas
  limpiarCajaTexto("txtBusquedaCedula");
  limpiarCajaTexto("txtCedula");
  limpiarCajaTexto("txtNombre");
  limpiarCajaTexto("txtApellido");
  limpiarCajaTexto("txtSueldo");

  // errores
  limpiarTexto("lblErrorBusqueda");
  limpiarTexto("lblErrorCedula");
  limpiarTexto("lblErrorNombre");
  limpiarTexto("lblErrorApellido");
  limpiarTexto("lblErrorSueldo");
};

// 3) ejecutarNuevo(): 
ejecutarNuevo = function () {
  esNuevo = true;

  // habilitar cajas y guardar
  habilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar");

  // limpiar cajas y errores
  limpiarTexto("lblErrorCedula");
  limpiarTexto("lblErrorNombre");
  limpiarTexto("lblErrorApellido");
  limpiarTexto("lblErrorSueldo");

  limpiarCajaTexto("txtCedula");
  limpiarCajaTexto("txtNombre");
  limpiarCajaTexto("txtApellido");
  limpiarCajaTexto("txtSueldo");
};

// botón LIMPIAR
/*
ejecutarLimpiar = function () {
  limpiarPantallaEmpleado();

  // volvemos a dejar como al entrar: deshabilitado todo
  esNuevo = false;
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");
};*/

/*
limpiar = function () {
  // Limpia las 4 cajas
  mostrarTextoEnCaja("txtCedula", "");
  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtApellido", "");
  mostrarTextoEnCaja("txtSueldo", "");

  // Coloca esNuevo en false
  esNuevo = false;

  // Deshabilita las 4 cajas y el botón GUARDAR
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");
};
*/

//-----

limpiar = function () {
  // Limpia búsqueda y errores
  mostrarTextoEnCaja("txtBusquedaCedula", "");
  limpiarTexto("lblErrorBusqueda");
  limpiarTexto("lblErrorCedula");
  limpiarTexto("lblErrorNombre");
  limpiarTexto("lblErrorApellido");
  limpiarTexto("lblErrorSueldo");

  // Limpia las 4 cajas
  mostrarTextoEnCaja("txtCedula", "");
  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtApellido", "");
  mostrarTextoEnCaja("txtSueldo", "");

  // Coloca esNuevo en false
  esNuevo = false;

  // Deshabilita las 4 cajas y el botón GUARDAR
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");
};

//-----


// buscarEmpleado(cedula): retorna objeto empleado o null
buscarEmpleado = function (cedula) {
  let empleadoEncontrado = null;

  for (let i = 0; i < empleados.length; i++) {
    let emp = empleados[i];
    if (emp.cedula === cedula) {
      empleadoEncontrado = emp;
      break;
    }
  }

  return empleadoEncontrado;
};

// (para el botón BUSCAR en empleados)
/*
ejecutarBusquedaEmpleado = function () {
  limpiarTexto("lblErrorBusqueda");

  let cedulaBusqueda = recuperarTexto("txtBusquedaCedula");

  if (cedulaBusqueda === "") {
    mostrarTexto("lblErrorBusqueda", "Ingrese la cédula");
    return;
  }

  let emp = buscarEmpleado(cedulaBusqueda);

  if (emp === null) {
    mostrarTexto("lblErrorBusqueda", "No existe empleado con esa cédula");
    return;
  }

  esNuevo = false;

  // mostramos en cajas
  mostrarTextoEnCaja("txtCedula", emp.cedula);
  mostrarTextoEnCaja("txtNombre", emp.nombre);
  mostrarTextoEnCaja("txtApellido", emp.apellido);
  mostrarTextoEnCaja("txtSueldo", emp.sueldo);

  // habilitar edición
  // (normalmente NO se cambia cédula, por eso se deshabilita)
  deshabilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar");
};
*/

/*
ejecutarBusqueda = function () {
  limpiarTexto("lblErrorBusqueda");

  let cedulaBusqueda = recuperarTexto("txtBusquedaCedula");

  // Validar vacío (principiante)
  if (cedulaBusqueda === "") {
    mostrarTexto("lblErrorBusqueda", "Ingrese la cédula");
    return;
  }

  let emp = buscarEmpleado(cedulaBusqueda);

  if (emp === null) {
    // el reto pide alert cuando no existe
    alert("EMPLEADO NO EXISTE");
    return;
  }

  // Si existe: llenar cajas
  mostrarTextoEnCaja("txtCedula", emp.cedula);
  mostrarTextoEnCaja("txtNombre", emp.nombre);
  mostrarTextoEnCaja("txtApellido", emp.apellido);
  mostrarTextoEnCaja("txtSueldo", emp.sueldo);

  // Habilitar edición (cédula no se edita)
  deshabilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar");

  // Como ya existe, no es nuevo
  esNuevo = false;
};
*/


// agregarEmpleado(empleado): retorna true si agregó, false si ya existe
agregarEmpleado = function (empleado) {
  let existente = buscarEmpleado(empleado.cedula);

  if (existente !== null) {
    return false;
  }

  empleados.push(empleado);
  return true;
};

// guardar
/*
guardar = function () {
  // limpiar errores
  limpiarTexto("lblErrorCedula");
  limpiarTexto("lblErrorNombre");
  limpiarTexto("lblErrorApellido");
  limpiarTexto("lblErrorSueldo");

  // tomar datos
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let sueldoTxt = recuperarTexto("txtSueldo");
  let sueldo = parseFloat(sueldoTxt);

  let hayErrores = false;

  // validaciones simples
  if (cedula === "") {
    mostrarTexto("lblErrorCedula", "Ingrese cédula");
    hayErrores = true;
  }

  if (nombre === "") {
    mostrarTexto("lblErrorNombre", "Ingrese nombre");
    hayErrores = true;
  }

  if (apellido === "") {
    mostrarTexto("lblErrorApellido", "Ingrese apellido");
    hayErrores = true;
  }

  if (sueldoTxt === "" || isNaN(sueldo)) {
    mostrarTexto("lblErrorSueldo", "Ingrese sueldo válido");
    hayErrores = true;
  } else if (sueldo <= 0) {
    mostrarTexto("lblErrorSueldo", "El sueldo debe ser mayor a 0");
    hayErrores = true;
  }

  if (hayErrores) {
    return;
  }

  // objeto empleado
  let empleado = {
    cedula: cedula,
    nombre: nombre,
    apellido: apellido,
    sueldo: sueldo,
  };

  // si esNuevo => agregar
  if (esNuevo === true) {
    let ok = agregarEmpleado(empleado);

    if (ok) {
      alert("Empleado agregado");
      esNuevo = false;
      mostrarEmpleados();
      ejecutarLimpiar();
    } else {
      alert("Ya existe un empleado con esa cédula");
    }
    return;
  }

  // si NO es nuevo => modificar
  let empExistente = buscarEmpleado(cedula);

  if (empExistente === null) {
    alert("No existe el empleado para modificar");
    return;
  }

  empExistente.nombre = nombre;
  empExistente.apellido = apellido;
  empExistente.sueldo = sueldo;

  alert("Empleado modificado");
  mostrarEmpleados();
  ejecutarLimpiar();
};
*/

//--------
guardar = function () {
  // Limpiar mensajes de error
  limpiarTexto("lblErrorCedula");
  limpiarTexto("lblErrorNombre");
  limpiarTexto("lblErrorApellido");
  limpiarTexto("lblErrorSueldo");

  // Tomar datos de las cajas
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let sueldoTexto = recuperarTexto("txtSueldo");
  let sueldo = parseFloat(sueldoTexto);

  let hayError = false;

  // Validaciones básicas (principiante)
  if (cedula === "") {
    mostrarTexto("lblErrorCedula", "Ingrese cédula");
    hayError = true;
  }

  if (nombre === "") {
    mostrarTexto("lblErrorNombre", "Ingrese nombre");
    hayError = true;
  }

  if (apellido === "") {
    mostrarTexto("lblErrorApellido", "Ingrese apellido");
    hayError = true;
  }

  if (sueldoTexto === "" || isNaN(sueldo)) {
    mostrarTexto("lblErrorSueldo", "Ingrese un sueldo válido");
    hayError = true;
  } else if (sueldo <= 0) {
    mostrarTexto("lblErrorSueldo", "El sueldo debe ser mayor a 0");
    hayError = true;
  }

  if (hayError) {
    return;
  }

  // Crear objeto empleado con los datos
  let empleado = {
    cedula: cedula,
    nombre: nombre,
    apellido: apellido,
    sueldo: sueldo
  };

  // Si esNuevo: agregar
  if (esNuevo === true) {
    let ok = agregarEmpleado(empleado);

    if (ok === false) {
      alert("Ya existe un empleado con esa cédula");
      return;
    }

    alert("Empleado agregado");
    mostrarEmpleados();
    limpiar();
    return;
  }

  // Si NO es nuevo: modificar
  let empExistente = buscarEmpleado(cedula);

  if (empExistente === null) {
    alert("No existe el empleado para modificar");
    return;
  }

  empExistente.nombre = nombre;
  empExistente.apellido = apellido;
  empExistente.sueldo = sueldo;

  alert("Empleado modificado");
  mostrarEmpleados();
  limpiar();
};
//---------


//------------------
ejecutarBusqueda = function () {
  limpiarTexto("lblErrorBusqueda");

  let cedulaBusqueda = recuperarTexto("txtBusquedaCedula");

  if (cedulaBusqueda === "") {
    mostrarTexto("lblErrorBusqueda", "Ingrese la cédula");
    return;
  }

  let emp = buscarEmpleado(cedulaBusqueda);

  if (emp === null) {
    alert("EMPLEADO NO EXISTE");
    return;
  }

  mostrarTextoEnCaja("txtCedula", emp.cedula);
  mostrarTextoEnCaja("txtNombre", emp.nombre);
  mostrarTextoEnCaja("txtApellido", emp.apellido);
  mostrarTextoEnCaja("txtSueldo", emp.sueldo);

  deshabilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar");

  esNuevo = false;
};
//-------------

// tabla en div tablaEmpleados
mostrarEmpleados = function () {
  let div = document.getElementById("tablaEmpleados");

  let html = "<table border='1'>";
  html += "<thead>";
  html += "<tr>";
  html += "<th>CEDULA</th>";
  html += "<th>NOMBRE</th>";
  html += "<th>APELLIDO</th>";
  html += "<th>SUELDO</th>";
  html += "</tr>";
  html += "</thead>";

  html += "<tbody>";

  for (let i = 0; i < empleados.length; i++) {
    let emp = empleados[i];
    html += "<tr>";
    html += "<td>" + emp.cedula + "</td>";
    html += "<td>" + emp.nombre + "</td>";
    html += "<td>" + emp.apellido + "</td>";
    html += "<td>" + emp.sueldo + "</td>";
    html += "</tr>";
  }

  html += "</tbody>";
  html += "</table>";

  div.innerHTML = html;
};


// NUEVAS FUNCIONES POR EL RETO 49

// PARTE 5 - ROL DE PAGOS

// 2) buscarPorRol(): no recibe parámetros
buscarPorRol = function () {
  // tomar la cédula del input de búsqueda en ROL
  let cedula = recuperarTexto("txtBusquedaCedulaRol");

  // buscar el empleado en el arreglo 
  let emp = buscarEmpleado(cedula);

  if (emp == null) {
    alert("Empleado no existe");
    return;
  }

  // mostrar datos en los DIVs
  mostrarTexto("infoCedula", emp.cedula);
  mostrarTexto("infoNombre", emp.nombre + " " + emp.apellido);
  mostrarTexto("infoSueldo", emp.sueldo);

  // limpiar descuentos/errores y resultados anteriores
  mostrarTexto("lblErrorDescuentos", "");
  mostrarTextoEnCaja("txtDescuentos", "");
  mostrarTexto("infoIESS", "0.0");
  mostrarTexto("infoPago", "0.0");
};

// 5) calcularAporteEmpleado(sueldo)
// Calcula 9.45% del sueldo
calcularAporteEmpleado = function (sueldo) {
  let aporte = sueldo * 0.0945;
  return aporte;
};

// 5) calcularValorAPagar(sueldo, aporteIess, descuento)
// sueldo - aporteEmpleado - descuento
calcularValorAPagar = function (sueldo, aporteIess, descuento) {
  let valorPagar = sueldo - aporteIess - descuento;
  return valorPagar;
};

// 5) calcularRol(): no recibe parámetros
calcularRol = function () {
  // limpiar error
  mostrarTexto("lblErrorDescuentos", "");

  // sueldo está en un DIV -> se usa recuperarFloatDiv
  let sueldo = recuperarFloatDiv("infoSueldo");

  // descuento está en un input -> usar recuperarFloat
  let descuentoTexto = recuperarTexto("txtDescuentos");
  let descuento = parseFloat(descuentoTexto);

  // Validar descuento: flotante, mínimo 0, máximo sueldo
  if (descuentoTexto === "" || isNaN(descuento)) {
    mostrarTexto("lblErrorDescuentos", "Ingrese un descuento válido");
    return;
  }

  if (descuento < 0) {
    mostrarTexto("lblErrorDescuentos", "El descuento no puede ser menor a 0");
    return;
  }

  if (descuento > sueldo) {
    mostrarTexto("lblErrorDescuentos", "El descuento no puede ser mayor al sueldo");
    return;
  }

  // Calcular aporte IESS (aporte empleado)
  let aporte = calcularAporteEmpleado(sueldo);
  mostrarTexto("infoIESS", aporte.toFixed(2));

  // Calcular total a pagar
  let pago = calcularValorAPagar(sueldo, aporte, descuento);
  mostrarTexto("infoPago", pago.toFixed(2));
};