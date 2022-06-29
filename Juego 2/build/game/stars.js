"use strict";
let currentQuestion = 0;
import { totalQuestion } from "./startGame.js";

const $starContainer = document.getElementById("star-container");
// const $scoreContent = document.getElementById("scoreContent")!;

export function createStarts() {
  // const totalQuestion = numbersQuestions;
  for (let i = 0; i < totalQuestion; i++) {
    const indicador = document.createElement("img");
    indicador.src = "images/imgGame/estrella.svg";
    indicador.classList.add("imgStartsGame");
    $starContainer.appendChild(indicador);
  }
}

//08 esta funcion pinta de color la estrella sea correcta o no

export function updateAnswerStarts(markType) {
  if (markType === "correct") {
    $starContainer.children[currentQuestion].src =
      "images/imgGame/star_correct.png";
    $starContainer.children[currentQuestion].classList.add("rotate");
    currentQuestion = currentQuestion + 1;
  }
  if (markType === "wrong") {
    $starContainer.children[currentQuestion].src =
      "images/imgGame/star_incorrect.png";
    $starContainer.children[currentQuestion].classList.add("rotate");
    currentQuestion = currentQuestion + 1;
  }
}
