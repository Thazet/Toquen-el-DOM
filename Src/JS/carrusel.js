export function moverCarrusel() {
    const carouselContainer = document.querySelector("#carousel-container");
    const imagenes = carouselContainer.querySelectorAll("img");
    const imagenActual = carouselContainer.querySelector("img.imagen-actual");
    const siguienteImagen = imagenActual.nextElementSibling || imagenes[0];
    carouselContainer.appendChild(imagenActual); 
  
    imagenActual.classList.remove("imagen-actual");
    siguienteImagen.classList.add("imagen-actual");
  }
  
  function iniciarCarrusel() {
    setInterval(moverCarrusel, 1000);
  }
  
  /*document.addEventListener("DOMContentLoaded", iniciarCarrusel);*/