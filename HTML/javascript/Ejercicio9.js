const number = [253,8575,1,20,562,1233,25,27,258,254,7485,2683];
var par = number.filter(function(numero){
    if(numero% 2== 0) {
        return numero
    }
});
console.log('pares',par);


