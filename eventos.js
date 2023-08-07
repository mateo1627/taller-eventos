document.addEventListener("DOMContentLoaded", function() {
    let divElement = document.getElementById("container");
    let boton = document.getElementById("ButtonFixed");
    
    divElement.addEventListener("click", function() {
        alert("Hola! Soy el div");
   
    });
    
    boton.addEventListener("click", function(event) {
       
        event.stopPropagation();
    });
});

