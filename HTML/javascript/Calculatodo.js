function Calcular(){
    var numeros =document.getElementById

var suma = 0;
    for (let i=0; i<numeros.length; i++) {
        suma += numeros[i];
    }
    document.getElementByI('resultadoSuma').innerHTML = 'El resultado de la suma es' + suma;
    console.log('suma', suma)


//MEDIA
var media = suma/numeros.length;
document.getElementById('resultadoMedia').innerHTML = 'El resultado de la media es' + media;

//MAXIMO
var max = numeros[0];

for(let i=0; i<numeros.length; i++){
    if(max < numeros[i]){
    max = numeros[i]
    }
}
document.getElementById('resultadoMaximo').innerHTML = 'El resultado del valor mayor es' + max;

//MINIMO
var min = numeros[0];

for(let i=0; i<numeros.length; i++){
    if(min > numeros[i]){
       min = numeros[i]
    }
}
document.getElementById('resultadoMinimo').innerHTML = 'El resultado del valor minimo es' + min;
}
function printHTML() {
    if (window.print) {
      window.print();
    }
  }


