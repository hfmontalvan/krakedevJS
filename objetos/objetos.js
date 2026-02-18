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
