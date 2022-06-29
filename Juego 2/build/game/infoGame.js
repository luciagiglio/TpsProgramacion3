export let answerValue = "";
export const $starBtn = document.getElementById("starBtn");
import { dataGame } from "./getData.js";
import { $containerStartGame, mixQuestion } from "./startGame.js";
import { createStarts } from "./stars.js";
import { soundAmbient } from "./sounds.js";

const $containerInfoGame = document.getElementById("container-info-game");
const $btnStart = document.getElementById("btn-start");

const $titulo = document.getElementById("titulo");
const $chapter = document.getElementById("chapter");
const $instructions = document.getElementById("instructions");
const $imgBook = document.getElementById("imgBook");
const $logoAces = document.getElementById("logo-aces");
const $imgLogoBook = document.getElementById("imgLogoBook");
const $soundImg = document.getElementById("sound-img");

export function infoGame() {
  $titulo.textContent = dataGame[0].titulo;
  $chapter.textContent = dataGame[0].chapter;
  $instructions.textContent = dataGame[0].instructions;
  $imgBook.src = dataGame[0].imgBook;
  answerValue = dataGame[0].answer + "c";
}

$btnStart.addEventListener("click", () => {
  soundAmbient.play();
  setTimeout(() => {
    hideInfoGame();
    $imgLogoBook.classList.remove("img-book--hide");
    $soundImg.classList.remove("sound-img--hide");
    document.documentElement.requestFullscreen().catch((e) => {
      console.log(e);
    });
  }, 500);
});

const hideInfoGame = async () => {
  $containerInfoGame.classList.add("container-info-game--hide");
  $containerStartGame.classList.remove("container-start-game--hide");
  await mixQuestion();
  createStarts();
};

$logoAces.addEventListener("click", () => {
  location.reload();
});
