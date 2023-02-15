var numeros = [-1, -150, -200, -481, -2971, -5, -87];
var maximo = 0;
for (var i= 0; i <numeros.length; i++){
    if(maximo <numeros[i]){
        maximo = numeros[i];
    }
}
alert("El valor maximo es:" + maximo);
