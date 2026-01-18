jugar = function(){
    let aleatorio;
    aleatorio=lanzarDado();   
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        //console.log("ES MAYOR A 3");
        //console.log("GANASTE");
        cambiarTexto("lblResultado", "ES MAYOR A 3 --- GANASTE");
    }else{
        //console.log("ES MENOR A 3");
        //console.log("ESTAS DE MALAS");
        cambiarTexto("lblResultado", "ES MENOR A 3 --- ESTAS DE MALAS");
    }
}

//Crear una función llamada lanzarDado
//No recibe parámetros
//Retorna un número aleatorio entre 1 y 6
lanzarDado = function(){
    let aleatorio=Math.random(); //entre 0 y 1
    let numeroMultiplicado=aleatorio*6;
    //console.log(numeroMultiplicado);
    let numeroEntero=parseInt(numeroMultiplicado);
    //console.log("--- "+numeroEntero);
    let valorDado=numeroEntero+1; //entre 0 y 6
    //console.log("------ "+valorDado);
    return valorDado;
}