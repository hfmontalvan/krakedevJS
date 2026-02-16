//Variable global
let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerAreglo=function(){
    let notaRecuperada;
    for(let indice=0;indice<notas.length;indice++){
        notaRecuperada=notas[indice];
        console.log(notaRecuperada);
    }
}

probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota=function(nota){
    notas.push(nota);

}