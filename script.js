const botonHamburguesa = document.querySelector("#btnHamburguesa");
const menuMovil = document.querySelector("#menu-movil");
const botonAudio = document.querySelector("#boton-audio");
const audioInstitucional = document.querySelector("#audio-institucional");
const enlacesMenu = document.querySelectorAll(".enlace-menu");

botonHamburguesa.addEventListener("click", function () {
  menuMovil.classList.toggle("menu-activo");
});

botonAudio.addEventListener("click", function () {
  if (audioInstitucional.paused) {
    audioInstitucional.play();
    botonAudio.textContent = "Pausar";
  } else {
    audioInstitucional.pause();
    botonAudio.textContent = "Reproducir";
  }
});

enlacesMenu.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menuMovil.classList.remove("menu-activo");
  });
});
