"use strict";

//Función para hacer que aparezcan los guiones en la pantalla
String.prototype.replaceAt = function (index, character) {
  return (
    this.substring(0, index) +
    character +
    this.substring(index + character.length)
  );
};

let palabras = [
  "ola",
  "casa",
  "perro",
  "jaula",
  "playa",
  "toalla",
  "embarcacion",
  "naranja",
  "tomate",
  "sarcofago",
  "palomitas",
  "hipopotamo",
  "candelabro",
  "onomatopeya",
  "neurocirujano",
];

const palabra = palabras[Math.floor(Math.random() * palabras.length)];
let mayusculas = palabra.toUpperCase();
console.log(mayusculas);

//Remplaza el guion por la letra
let palabraConGuiones = mayusculas.replace(/./g, "_ ");

let contadorFallos = 0;

document.querySelector("#output").innerHTML = palabraConGuiones;

document.querySelector("form.escoger").addEventListener("submit", async (e) => {
  e.preventDefault();
  const letra = document.querySelector("#letra").value.toUpperCase();

  let haFallado = true;
  for (const i in mayusculas) {
    if (letra === mayusculas[i]) {
      palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
      haFallado = false;
    }
  }

  if (haFallado) {
    contadorFallos++;
    document.querySelector("#img").src = `/parte${contadorFallos}png.png`;

    if (contadorFallos == 6) {
      alert("¡Has perdido!");
    }
  } else {
    if (palabraConGuiones.indexOf("_") < 0) {
      document.querySelector("#ganador"); //style.display = "flex";
      alert("has ganado");
    }
  }

  document.querySelector("#output").innerHTML = palabraConGuiones;

  //Hacer que no tengas que borrar cada vez
  document.querySelector("#letra").value = "";

  //Para no necesitar usar el ratón
  document.querySelector("#letra").focus();
});
