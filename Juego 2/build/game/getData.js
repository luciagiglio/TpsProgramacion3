import { $starBtn, infoGame } from "./infoGame.js";

export let dataGame = "";

export async function showData() {
  try {
    $starBtn.textContent = "loading...";
    dataGame = await getData();
    infoGame();
    $starBtn.textContent = "START";
  } catch (error) {
    console.log("Error al obtener datos de la API " + error);
  }
}

function getData() {
  return fetch("./json/infoOda.json")
    .then((response) => response.json())
    .then((json) => json);
}

// let listQuestions = [];
// let optionQuestion = [];
// let compareAnswer = "";
// let correctAnswer = "";
// let optionsAnswer = [];
// import { progress } from "./timeQuestion.js";
// import { soundOnClick } from "./sounds.js";

// const $optionUno = document.getElementById("optionUno");
// const $optionDos = document.getElementById("optionDos");
// const $optionTres = document.getElementById("optionTres");
// export const totalNumberQuestion = document.getElementById("total-question");

// let questionNumber = 1;
// const $numberCounter = document.getElementById("number-counter");

// //Para iniciar el juego se mesclan las preguntas y se asignan los valores correspondientes
// export async function radomQuestion() {
//   try {
//     optionQuestion = listQuestions[0].results.slice();
//     totalNumberQuestion.textContent = optionQuestion.length;

//     await optionQuestion.sort(() => Math.random() - 0.5);
//     seeQuestion();
//   } catch (error) {}
// }

// // de acuerdo a la pregunta se alterna las respuestas
// export async function seeQuestion() {
//   try {
//     $numberCounter.textContent = questionNumber;
//     document.getElementById("question").textContent = await optionQuestion[
//       questionNumber
//     ].question;
//     optionsAnswer = optionQuestion[questionNumber].answers;
//     optionsAnswer = await Object.entries(optionsAnswer);
//     await optionsAnswer.sort(() => Math.random() - 0.5);

//     $optionUno.textContent = optionsAnswer[0][1];
//     $optionDos.textContent = optionsAnswer[1][1];
//     $optionTres.textContent = optionsAnswer[2][1];
//     progress();
//   } catch (error) {
//     console.log("Error: no se cargo el question" + error);
//   }
// }

// export function nextQuestion() {
//   if (questionNumber < optionQuestion.length) {
//     questionNumber++;
//     seeQuestion();
//   } else {
//     alert("Se acabo el juego");
//   }
// }

// // Evento click en las respuestas
// const $optionsAnswer = document.getElementById("options-answer");

// $optionsAnswer.addEventListener("click", (e) => {
//   soundOnClick.play();
//   try {
//     dataAnswer();
//     if (e.target.textContent === correctAnswer) {
//       alert("Correcto");
//     } else {
//       alert("Incorrecto");
//     }
//   } catch (error) {
//     console.log("Error: " + error);
//   }
// });

// function dataAnswer() {
//   optionsAnswer.forEach((e) => {
//     if (e[0] === compareAnswer + "C") {
//       correctAnswer = e[1];
//     } else {
//     }
//   });
// }
