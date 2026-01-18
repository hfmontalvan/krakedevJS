calcularValorDescuento=function(monto,descuento){
   let valor_Descuento=(monto*descuento)/100;
    return valor_Descuento;
}
calcularIva=function(subtotal,valorDescuento){
    let valor=subtotal-valorDescuento;
    valor=valor*.12;
    return valor
}
calcularSubtotal=function(precio,cantidad){
    let subtotal=precio*cantidad;
    return subtotal;
}
calcularTotal=function(subtotal,descuento,iva){
    let total=(subtotal-descuento)+iva;
    totalFloat=parseFloat(total);
    return totalFloat;
}