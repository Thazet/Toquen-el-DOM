function moverCarrusel() {
  const carouselContainer = document.querySelector("#carousel-container");
  const numImagenes = carouselContainer.querySelectorAll("img").length;  // contamos con lenght la cantidad de imágenes del carrusel

  
  const imagenActual = carouselContainer.querySelector("img.imagen-actual"); // Obtenemos la imagen actual
  const siguienteImagen = imagenActual.nextElementSibling; // Obtenemos la siguiente imagen

  if (siguienteImagen) {
    carouselContainer.insertBefore(siguienteImagen, imagenActual); // con una condicion modifico que si la siguiente imagen existe, la mueva al frente y asi una trs otra
    imagenActual.classList.remove("imagen-actual");
    siguienteImagen.classList.add("imagen-actual");
  }
}

function iniciarCarrusel() {
  setInterval(moverCarrusel, 5000); //temporissador de 5s
}


