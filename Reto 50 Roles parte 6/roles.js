
// 1) Arreglo global con 3 empleados
let empleados = [
  { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
  { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
  { cedula: "1104689123", nombre: "Henry", apellido: "Montalvan", sueldo: 1200.0 },
];

// Arreglo global de roles (Reto 50)
let roles = [];

// Bandera para EMPLEADOS
let esNuevo = false;

// ====================== UTILITARIOS BÁSICOS ======================
mostrarComponente = function (id) {
  document.getElementById(id).style.display = "block";
};

ocultarComponente = function (id) {
  document.getElementById(id).style.display = "none";
};

habilitarComponente = function (id) {
  document.getElementById(id).disabled = false;
};

deshabilitarComponente = function (id) {
  document.getElementById(id).disabled = true;
};

limpiarTexto = function (id) {
  document.getElementById(id).innerText = "";
};

limpiarCajaTexto = function (id) {
  document.getElementById(id).value = "";
};

recuperarFloatDiv = function (id) {
  let txt = document.getElementById(id).innerText;
  return parseFloat(txt);
};

// ====================== MENÚ ======================
mostrarOpcionEmpleado = function () {
  mostrarComponente("divEmpleado");
  ocultarComponente("divRol");
  ocultarComponente("divResumen");

  //  deshabilitado todo al inicio
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");

  limpiarPantallaEmpleado();
  mostrarEmpleados();
};

mostrarOpcionRol = function () {
  ocultarComponente("divEmpleado");
  mostrarComponente("divRol");
  ocultarComponente("divResumen");

  // limpiar pantalla del rol
  limpiarPantallaRol();
};

mostrarOpcionResumen = function () {
  ocultarComponente("divEmpleado");
  ocultarComponente("divRol");
  mostrarComponente("divResumen");

  // cada vez que se entra, recalcula totales
  mostrarResumen();
  mostrarTotales();
};

// ====================== EMPLEADOS ======================
limpiarPantallaEmpleado = function () {
  limpiarCajaTexto("txtBusquedaCedula");
  limpiarCajaTexto("txtCedula");
  limpiarCajaTexto("txtNombre");
  limpiarCajaTexto("txtApellido");
  limpiarCajaTexto("txtSueldo");

  limpiarTexto("lblErrorBusqueda");
  limpiarTexto("lblErrorCedula");
  limpiarTexto("lblErrorNombre");
  limpiarTexto("lblErrorApellido");
  limpiarTexto("lblErrorSueldo");
};

ejecutarNuevo = function () {
  esNuevo = true;

  habilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar");

  limpiarCajaTexto("txtCedula");
  limpiarCajaTexto("txtNombre");
  limpiarCajaTexto("txtApellido");
  limpiarCajaTexto("txtSueldo");

  limpiarTexto("lblErrorCedula");
  limpiarTexto("lblErrorNombre");
  limpiarTexto("lblErrorApellido");
  limpiarTexto("lblErrorSueldo");
};

limpiar = function () {
  limpiarPantallaEmpleado();

  esNuevo = false;

  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");
};

buscarEmpleado = function (cedula) {
  let encontrado = null;

  for (let i = 0; i < empleados.length; i++) {
    let emp = empleados[i];
    if (emp.cedula === cedula) {
      encontrado = emp;
      break;
    }
  }

  return encontrado;
};

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

  // habilitar edición (cédula no)
  deshabilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar");

  esNuevo = false;
};

agregarEmpleado = function (empleado) {
  let existente = buscarEmpleado(empleado.cedula);
  if (existente !== null) {
    return false;
  }
  empleados.push(empleado);
  return true;
};

// Guardar empleado (nuevo o modificar)
guardarEmpleado = function () {
  limpiarTexto("lblErrorCedula");
  limpiarTexto("lblErrorNombre");
  limpiarTexto("lblErrorApellido");
  limpiarTexto("lblErrorSueldo");

  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let sueldoTxt = recuperarTexto("txtSueldo");
  let sueldo = parseFloat(sueldoTxt);

  let hayErrores = false;

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
  if (sueldoTxt === "" || isNaN(sueldo) || sueldo <= 0) {
    mostrarTexto("lblErrorSueldo", "Ingrese sueldo válido");
    hayErrores = true;
  }

  if (hayErrores) {
    return;
  }

  let obj = { cedula: cedula, nombre: nombre, apellido: apellido, sueldo: sueldo };

  if (esNuevo === true) {
    let ok = agregarEmpleado(obj);
    if (ok) {
      alert("Empleado agregado");
      mostrarEmpleados();
      limpiar();
    } else {
      alert("Ya existe un empleado con esa cédula");
    }
    return;
  }

  let empExistente = buscarEmpleado(cedula);
  if (empExistente === null) {
    alert("EMPLEADO NO EXISTE");
    return;
  }

  empExistente.nombre = nombre;
  empExistente.apellido = apellido;
  empExistente.sueldo = sueldo;

  alert("Empleado modificado");
  mostrarEmpleados();
  limpiar();
};

mostrarEmpleados = function () {
  let div = document.getElementById("tablaEmpleados");

  let html = "<table border='1'>";
  html += "<tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";

  for (let i = 0; i < empleados.length; i++) {
    let emp = empleados[i];
    html +=
      "<tr><td>" +
      emp.cedula +
      "</td><td>" +
      emp.nombre +
      "</td><td>" +
      emp.apellido +
      "</td><td>" +
      emp.sueldo +
      "</td></tr>";
  }

  html += "</table>";
  div.innerHTML = html;
};

// ====================== ROL ======================

limpiarPantallaRol = function () {
  limpiarCajaTexto("txtCedulaRol");
  limpiarCajaTexto("txtDescuentos");
  limpiarTexto("lblErrorDescuentos");

  mostrarTexto("infoCedula", "-");
  mostrarTexto("infoNombre", "-");
  mostrarTexto("infoSueldo", "0.0");
  mostrarTexto("infoIESS", "0.0");
  mostrarTexto("infoPago", "0.0");
};

// Reto 50
buscarRol = function () {
  let cedula = recuperarTexto("txtCedulaRol");
  let emp = buscarEmpleado(cedula);

  if (emp === null) {
    alert("EMPLEADO NO EXISTE");
    return;
  }

  // Mostrar info del empleado
  mostrarTexto("infoCedula", emp.cedula);
  mostrarTexto("infoNombre", emp.nombre + " " + emp.apellido);
  mostrarTexto("infoSueldo", emp.sueldo);

  // Limpiar valores anteriores
  limpiarCajaTexto("txtDescuentos");
  limpiarTexto("lblErrorDescuentos");
  mostrarTexto("infoIESS", "0.0");
  mostrarTexto("infoPago", "0.0");
};

// (Reto 49) Aporte empleado 9.45%
calcularAporteEmpleado = function (sueldo) {
  let aporte = sueldo * 0.0945;
  return aporte;
};

// (Reto 50) calcularAporteEmpleador(sueldo) 11.15%
calcularAporteEmpleador = function (sueldo) {
  let aporte = sueldo * 0.1115;
  return aporte;
};

// (Reto 49) 
calcularValorAPagar = function (sueldo, aporteEmpleado, descuento) {
  let total = sueldo - aporteEmpleado - descuento;
  return total;
};

// (Reto 50) funcion que recibe un rol y lo agrega si NO existe cédula repetida
agregarRol = function (rol) {
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].cedula === rol.cedula) {
      return false;
    }
  }
  roles.push(rol);
  return true;
};

// (Reto 49) calcularRol(): NO recibe parámetros
calcularRol = function () {
  mostrarTexto("lblErrorDescuentos", "");

  let sueldo = recuperarFloatDiv("infoSueldo");

  let descuentoTxt = recuperarTexto("txtDescuentos");
  let descuento = parseFloat(descuentoTxt);

  if (descuentoTxt === "" || isNaN(descuento)) {
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

  let aporteEmpleado = calcularAporteEmpleado(sueldo);
  mostrarTexto("infoIESS", aporteEmpleado.toFixed(2));

  let pago = calcularValorAPagar(sueldo, aporteEmpleado, descuento);
  mostrarTexto("infoPago", pago.toFixed(2));
};

// Guardar rol + recalcula resumen
guardarRol = function () {
  let cedula = document.getElementById("infoCedula").innerText;

  if (cedula === "-" || cedula === "") {
    alert("Primero BUSQUE un empleado");
    return;
  }

  let sueldo = recuperarFloatDiv("infoSueldo");
  let descuento = parseFloat(recuperarTexto("txtDescuentos"));

  if (isNaN(descuento)) {
    alert("Primero ingrese descuentos válidos y calcule el rol");
    return;
  }

  let aporteEmpleado = calcularAporteEmpleado(sueldo);
  let aporteEmpleador = calcularAporteEmpleador(sueldo);
  let totalPagar = calcularValorAPagar(sueldo, aporteEmpleado, descuento);

  let rol = {
    cedula: cedula,
    sueldo: sueldo,
    descuento: descuento,
    aporteEmpleado: aporteEmpleado,
    aporteEmpleador: aporteEmpleador,
    totalPagar: totalPagar,
  };

  let ok = agregarRol(rol);
  if (ok === false) {
    alert("YA EXISTE ROL PARA ESA CEDULA");
    return;
  }

  alert("ROL GUARDADO");

  // actualizar resumen
  mostrarResumen();
  mostrarTotales();
};

// RESUMEN (Reto 50) 

// mostrarTotales(): NO recibe parámetros
mostrarTotales = function () {
  let totalEmpleado = 0;
  let totalEmpleador = 0;
  let totalAPagar = 0;

  for (let i = 0; i < roles.length; i++) {
    totalEmpleado = totalEmpleado + roles[i].aporteEmpleado;
    totalEmpleador = totalEmpleador + roles[i].aporteEmpleador;
    totalAPagar = totalAPagar + roles[i].totalPagar;
  }

  mostrarTexto("infoAporteEmpleado", totalEmpleado.toFixed(2));
  mostrarTexto("infoAporteEmpresa", totalEmpleador.toFixed(2));
  mostrarTexto("infoTotalPago", totalAPagar.toFixed(2));
};

// Tabla resumen 
mostrarResumen = function () {
  let div = document.getElementById("tablaResumen");

  let html = "<table border='1'>";
  html +=
    "<tr><th>CEDULA</th><th>SUELDO</th><th>DESC.</th><th>IESS EMP.</th><th>APORTE EMPRESA</th><th>TOTAL</th></tr>";

  for (let i = 0; i < roles.length; i++) {
    let r = roles[i];
    html +=
      "<tr><td>" +
      r.cedula +
      "</td><td>" +
      r.sueldo.toFixed(2) +
      "</td><td>" +
      r.descuento.toFixed(2) +
      "</td><td>" +
      r.aporteEmpleado.toFixed(2) +
      "</td><td>" +
      r.aporteEmpleador.toFixed(2) +
      "</td><td>" +
      r.totalPagar.toFixed(2) +
      "</td></tr>";
  }

  html += "</table>";
  div.innerHTML = html;
};