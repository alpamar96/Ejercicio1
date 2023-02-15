var topping = ['Sin topping','oreo', 'kitkat','brownie', 'lacasitos'];
var añadir = prompt ("¿Que topping desea añadir?");

if (añadir == topping[0]){
    alert ("El helado sin topping cuesta 1.9$");

}else if (añadir == topping[1]){
     alert ("El topping de oreo cuesta 1$");

}else if (añadir == topping[2]){
    alert ("El topping de kikat cuesta 1.5$");

}else if (añadir == topping[3]){
    alert ("El topping de brownie cuesta 0.75$");

}else if (añadir != topping[4]){
    alert ("El topping de lacasitos cuesta 0.95$");

} 
