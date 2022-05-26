var datosPF=[];

function check() {
    var NumeroCuenta= document.getElementById("userInputNcuenta").value;
    var Importe = document.getElementById("userInputImporte").value;
    var Plazo = document.getElementById("userInputPlazo").value;
    if(NumeroCuenta>5){
        alert("ESTE USUARIO NO ES TITUTAR DE LA CUENTA NRO " + NumeroCuenta);
    }
    else if(Plazo<30){
        alert("EL PLAZO MINIMO ES DE 30 DIAS");
    }
    else if(Importe<=0){
        alert("SALDO INVALIDO");
    }
    else if(Importe>5000){
        alert("SALDO INSUFICIENTE");
    }
    else{
        return [1,NumeroCuenta,Importe,Plazo];
    }

}


function dataLOAD(){
    resul=check();
    if(resul[0]==1){
        datosPF+=[resul[1],resul[2],resul[3]];
        console.log(datosPF);
    }
    else{
        //se guardaria en intento fallido y no info del usuario
    }
}
