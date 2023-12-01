function moverCarrusel() {
  const carouselContainer = document.querySelector("#carousel-container");
  const imagenes = carouselContainer.querySelectorAll("img");
  const imagenActual = carouselContainer.querySelector("img.imagen-actual");
  const siguienteImagen = imagenActual.nextElementSibling || imagenes[0];
  carouselContainer.appendChild(imagenActual); 

  imagenActual.classList.remove("imagen-actual");
  siguienteImagen.classList.add("imagen-actual");
}

function iniciarCarrusel() {
  setInterval(moverCarrusel, 5000);
}

document.addEventListener("DOMContentLoaded", iniciarCarrusel);

document.addEventListener("DOMContentLoaded", function () {
  var keys = document.querySelectorAll('.key span');

  keys.forEach(function (key) {
      key.addEventListener('click', function () {
          var soundFolder = '../Assets/keysound/'; 
          var soundFile = soundFolder + key.getAttribute('data-sound');
          playSound(soundFile);
      });
  });

  function playSound(soundFile) {
      var audio = new Audio(soundFile);
      audio.play();
  }
});

window.addEventListener('keydown', function(event) {
  var key = document.querySelector('[data-key="' + event.key + '"]');
  if (key) {
    var soundFolder = '../Assets/keysound/'; 
    var soundFile = soundFolder + key.getAttribute('data-sound');
      playSound(soundFile);
  }
});

function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}


