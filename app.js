// title: Definición de la variable para nombrar al juego
// containerTitle: Es el contenedor del texto que se obtiene buscando la etiqueta h1
let title = "Juego del número secreto";
let containerTitle = document.querySelector("h1");
let numeroMaximo = 10;
// Se asigna el título al contenedor
containerTitle.innerText = title;

// Buscamos etiqueta p para asiganrle un texto con innerText
let parrafo = document.querySelector("p.texto__parrafo");
parrafo.innerText = "Escribe un número entre 1 y 10";
//Asiganmos la variable numeroSec
let numeroSec = numeroSecreto();
// Creación de la funcionalidad del botón de intentar
function playGame() {
  // Obtenemos el elemento del unput por si Id
  let cajaDeNumero = document.getElementById("numero").value;
  //Validadmo que el campo no esté vacío
  if (cajaDeNumero == "" || cajaDeNumero == null || cajaDeNumero == undefined) {
    alert("No puedes dejar el campo vacío");
    return;
  } else {
    console.log(numeroSec);
    validateResponse(cajaDeNumero, numeroSec);
  }
}
function numeroSecreto() {
  return Math.floor(Math.random() * numeroMaximo) + 1;
}

function validateResponse(cajaDeNumero, numeroSec) {
  if (cajaDeNumero == numeroSec) {
    Swal.fire({
      title: "¡Felicidades, has adivinado el número secreto!",
      text: "¡Buen trabajo!",
      icon: "success",

      timer: 3000,
      timerProgressBar: true,
      focusConfirm: false,
      cancelButtonAriaLabel: "Thumbs down",
    });
    document.getElementById("numero").value = ""; // Limpiar el campo de entrada

  } else {
    Swal.fire({
      title: "Inténtalo de nuevo",
      text: "Número incorrecto",
      icon: "error",

      timer: 2000,
      timerProgressBar: true,
      focusConfirm: false,
      cancelButtonAriaLabel: "Thumbs down",
    });
    document.getElementById("numero").value = ""; // Limpiar el campo de entrada
  }
}
