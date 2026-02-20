function crearProducto() {

    // 1. Crear producto1 como objeto
    let producto1 = {
        nombre: "Laptop",
        precio: 850.50,
        stock: 10
    };

    // 2. Crear producto2 como objeto
    let producto2 = {
        nombre: "Mouse",
        precio: 25.99,
        stock: 15
    };

    // 3. Imprimir el nombre del producto1
    console.log(producto1.nombre);

    // 4. Imprimir el precio del producto2
    console.log(producto2.precio);

    // 5. Comparar el stock
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto2.stock > producto1.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}

probarAtributos=function(){
    let persona = {
        nombre: "Juan",
        apellido: "MOrales",
        edad:24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.apellido);
    if(persona.estaVivo==false){
        console.log("NO esta vivo..");
    }else{
        console.log("ESta vivo...");
    }
}

modificarAtributos=function(){
    let cuenta={
        numero: "1111111111",
        saldo: 0.0
        }
        cuenta.saldo=100;
        cuenta.saldo+=10;
        console.log(cuenta.saldo);
}

crearCliente=function(){
    let cliente={
        cedula: "2222222222",
        nombre: "Juan"
    }
    let cliente1={}
    cliente1.nombre="Juanito";
    cliente1.apellido="Castro";
    
}

probarIncrementarSaldo=function(){


    incrementarSaldo();
}

incrementarSaldo=function(cuenta, monto){
    cuenta.saldo+=monto;
}