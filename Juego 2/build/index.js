// import { $btnStart, hideInfoGame } from "./game/infoGame.js";
// import { createStarts } from "./game/stars.js";
// import { getData, radomQuestion } from "./game/getData.js";
// import { soundAmbient } from "./game/sounds.js";

// const $starBtn = document.getElementById("starBtn");
// let counter = 3;
// // Click button start game
// $btnStart.addEventListener("click", () => {
//   $starBtn.textContent = 3;
//   setInterval(() => {
//     $starBtn.textContent = counter;
//     counter--;
//     console.log(counter);
//     clearInterval();
//   }, 600);
//   soundAmbient.play();
//   setTimeout(() => {
//     hideInfoGame();
//     radomQuestion();
//   }, 2000);
// });

// // Se crean la estrellas de acuerdo a las preguntas
// createStarts();

import { showData } from "./game/getData.js";

async function init() {
  try {
    await showData();
  } catch (error) {
    console.error(error + "errrrroooorrrr");
  }
}

init().then(() => {
  console.log(".");
});
