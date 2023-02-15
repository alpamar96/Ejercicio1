document.getElementById("Guardar").addEventListener("click", function(){
    alert("Guardado");
  });
  

  // Cambiar color
    document.getElementById("Nombre").addEventListener("focus", function(){
    document.getElementById("Nombre").style.backgroundColor = "yellow";
  });

  
//   // Vocal - Consonante
document.getElementById("letra").addEventListener("input", function(){
let valor = document.getElementById("letra").value;
   if (valor.length === 1) {
     let vocales = "aeiouAEIOU";
     if (vocales.includes(valor)) 
          document.getElementById("letra").style.backgroundColor = "blue";
     } else {
          document.getElementById("letra").style.backgroundColor = "red";
            }
});

