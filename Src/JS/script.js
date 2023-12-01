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
});

window.addEventListener('keydown', function(event) {
  var key = document.querySelector('[data-key="' + event.key + '"]');
  if (key) {
    var soundFolder = '../Assets/keysound/'; 
    var soundFile = soundFolder + key.getAttribute('data-sound');
      playSound(soundFile);
      key.classList.add('pressed')
  }
});

function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}


window.addEventListener('keyup', function(event) {
  var key = document.querySelector('[data-key="' + event.key + '"]');
  if (key) {
      key.classList.remove('pressed'); 
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var btnNotes = document.querySelectorAll('.btnNotes');
  btnNotes.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var notes = document.querySelectorAll('.notes');
      notes.forEach(function (note) {
        if (note.style.display === "none" || note.style.display === "") {
          note.style.display = "block";
        } else {
          note.style.display = "none";
        }
      });
    });
  });

  
  var btnLetters = document.querySelectorAll('.btnLetters');
  btnLetters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var letters = document.querySelectorAll('.letters');
      letters.forEach(function (letter) {
        if (letter.style.display === "none" || letter.style.display === "") {
          letter.style.display = "block";
        } else {
          letter.style.display = "none";
        }
      });
    });
  });
});