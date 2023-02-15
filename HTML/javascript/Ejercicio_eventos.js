var boton = document.getElementById('btn')

boton.addEventListener('click', comprobarnumero);

function comprobarnumero(){
    var valor = document.getElementsByTagName('input')[0].value;
    if(valor%2 ==0){
        document.getElementById('resultado').innerHTML = 'Es un numero par';

    }else{
        document.getElementById('resultado').innerHTML = 'Es un numero impar';

    }
}
