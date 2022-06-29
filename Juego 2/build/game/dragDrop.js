//export let nombreYo = "ldsd";
let activeQuestion = 0;
import { checkAnswer, textChoose, $question } from "./startGame.js";
let textUserSelect = "";
let textUserSelectId = "";
const $answera = document.querySelectorAll(".answer");
const $optionsAnswer = document.getElementById("options-answer");
const $emptyDragOver = document.getElementById("emptys");

$optionsAnswer.addEventListener("dragstart", (e) => {
  textUserSelect = e.target.textContent;
  textUserSelectId = e.target.id;
  console.log(textUserSelectId);
  e.dataTransfer.setData("Text", e.target.id);
});

$optionsAnswer.addEventListener("dragend", (e) => {
  e.preventDefault();
});

$optionsAnswer.addEventListener("dragover", (e) => {});
$emptyDragOver.addEventListener("dragenter", (e) => {
  //console.log("ingresa");
  if (activeQuestion == 0) {
    e.target.classList.add("textOn");
  }
});

$emptyDragOver.addEventListener("dragleave", (e) => {
  e.target.classList.remove("textOn");
});

$emptyDragOver.addEventListener("dragover", (e) => {
  e.preventDefault();
});

$emptyDragOver.addEventListener("drop", async (e) => {
  e.preventDefault();
  if (activeQuestion == 0) {
    activeQuestion = 1;

    e.target.classList.remove("textOn");
    e.target.textContent = textUserSelect;
    $question.classList.remove("text-question--active");
    $optionsAnswer.classList.remove("content-question--active");
    e.target.classList.add("emptysActive");
    await checkAnswer(e, textUserSelect);
    const $encontrado = document.getElementById(textUserSelectId);
    $encontrado.classList.add("moveAnswer");
  }
});

export const activeQuestionUser = () => {
  activeQuestion = 0;
};
