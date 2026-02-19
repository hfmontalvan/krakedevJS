let frutas=["pera", "coco", "banana"];

probarBusqueda=function(){
    let frutaIngresada=recuperarTexto("txtFruta");
    let resultado=buscar(frutaIngresada);
    if(resultado==null){
        alert("Fruta NO encontrada..");

    }else{
        alert(frutaIngresada + "SI existe..");
    }
}


buscar=function(fruta){
    let elemento;
    let frutaEncontrada=null;
    for(let i=0;i<fruta.lenght;i++){
        elemento=frutas[i];
        if(fruta==elemento){
            frutaEncontrada=elemento;
            break;
        }
    }
    return frutaEncontrada;
}