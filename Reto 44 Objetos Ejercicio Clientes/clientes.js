
let clientes=[
    {cedula:"11111", nombre:"Juan", edad:20},
    {cedula:"22222", nombre:"Mario", edad:50},
    {cedula:"33333", nombre:"Pepe", edad:22}
];

guardarCambios=function(){
    let valorCedula=recuperarTexto("texCedula");
    let valorNombre=recuperarTexto("texNombre");
    let valorEdad=recuperarFloat("texEdad");

    let datosCliente={};

    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;

    modificarCliente(datosCliente);

    mostrarClientes();
}

modificarCliente=function(cliente){
    let clienteEncontrado=buscarClientes(cliente.cedula);
    if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;

    }
}

ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("texCedulaBusqueda");
    let cliente=buscarClientes(valorCedula);
    if(cliente==null){
        alert("Cliente no encontrado");
    }else{
        mostrarTextoEnCaja("texCedula",cliente.cedula);
        mostrarTextoEnCaja("texNombre",cliente.nombre);
        mostrarTextoEnCaja("texEdad",cliente.edad);
}
}

crearCliente=function(){
    let valorCedula=recuperarTexto("texCedula");
    let valorNombre=recuperarTexto("texNombre");
    let valorEdad=recuperarFloat("texEdad");

    let nuevoCliente={};

    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;

    agregarCliente(nuevoCliente);
}

agregarCliente=function(cliente){
    let resultado;
    resultado=buscarClientes(cliente.cedula);
    if(resultado==null){
        clientes.push(cliente);
        alert("Cliente agregado");
        mostrarClientes();
    }else{
        alert("Ya existe cliente con la cédula"+cliente.cedula);
    }
}

buscarClientes=function(cedula){
    let elementoCliente;
    let clienteEncontrado=null;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if(elementoCliente.cedula==cedula){
            clienteEncontrado=elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>"
    let elementoCliente;
    for(let i=0; i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+=
        "<tr><td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
