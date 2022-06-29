export let resultAnswersUser = [];
let correctAnswersTotal = 0;
const $containerEndGame = document.getElementById("container-end-game");
const $starsResult = document.getElementById("stars-resut");
const $score = document.getElementById("score");
const $btnEnd = document.getElementById("btn-end");
const $imgTotalScore = document.getElementById("imgTotalScore");

import { soundEnd } from "./sounds.js";
import { $containerStartGame } from "./startGame.js";

export function seeContentEndGame() {
  try {
    soundEnd.play();
    $imgTotalScore.classList.add("rotateStarEnd");
    $containerStartGame.classList.add("container-start-game--hide");
    $containerEndGame.classList.remove("container-end-game--hide");
    mostrarResult();
  } catch (error) {
    console.log(error);
  }
}

// function createStartsEnd() {
//   // const totalQuestion = numbersQuestions;
//   const indicador = document.createElement("img");
//   indicador.src = "img/estrella.svg";
//   indicador.classList.add("imgStartsGame");
//   indicador.classList.toggle(markTypeEnd);
//   $starContainerEnd.appendChild(indicador);
// }

async function mostrarResult() {
  //   resultEnd();
  //   document.getElementById("score").textContent = correctAnswersTotal;
  await resultAnswersUser.forEach((element) => {
    if (element === 1) {
      const indicador = document.createElement("img");
      indicador.src = "./images/imgGame/star_correct.png";
      $starsResult.appendChild(indicador);
      indicador.classList.add("rotate");
      correctAnswersTotal = correctAnswersTotal + 1;

      //   createStartsEnd();
    } else {
      const indicador = document.createElement("img");
      indicador.src = "./images/imgGame/star_incorrect.png";
      $starsResult.appendChild(indicador);
      //   createStartsEnd();
    }
  });

  $score.textContent = correctAnswersTotal;
}

$btnEnd.addEventListener("click", () => {
  location.reload();
});
