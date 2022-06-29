import { dataGame } from "./getData.js";
import { answerValue } from "./infoGame.js";
import { soundCorrect, soundIncorrect, soundEnd } from "./sounds.js";
import { updateAnswerStarts } from "./stars.js";
import { seeContentEndGame, resultAnswersUser } from "./endGame.js";
import { activeQuestionUser } from "./dragDrop.js";
// import { audioControl } from "./play.js";
let listQuestion = [];
let listAnswer = [];
export let totalQuestion = 0;
let questionActive = 0;
let questionCorrect = "";
let answerUser = "";
export let activeClick = 0;

export const $question = document.getElementById("question");
export const $optionsAnswer = document.getElementById("options-answer");
const $totalQuestion = document.getElementById("total-question");
const $numberCounter = document.getElementById("number-counter");
const $optionOne = document.getElementById("option-one");
const $optionTwo = document.getElementById("option-two");
const $optionThree = document.getElementById("option-three");
//const $imgResultImage = document.getElementById("img-result-image");
const $listOptionsAnswer = document.querySelectorAll(".group-answer");

const $emptys = document.getElementById("emptys");

export const $containerStartGame = document.getElementById(
  "container-start-game"
);

export async function mixQuestion() {
  listQuestion = dataGame[0].results.slice();
  //await listQuestion.sort(() => Math.random() - 0.5);
  totalQuestion = listQuestion.length;
  $totalQuestion.textContent = totalQuestion;
  await seeQuestion();
  //cargarEventos();
}

//esta funcion tiene que ser llamada cuando el contador
// se reinicie y tambien cuando se selecciona un posible respuesta
export async function seeQuestion() {
  if (questionActive === totalQuestion) {
    seeContentEndGame();
  } else {
    try {
      await resetValues();
      $question.textContent = listQuestion[questionActive].question;
      if ($question.textContent.length > 40) {
        $question.style.width = "220px";
      }

      $question.classList.add("text-question--active");
      await mixOptionsAnswer();
      $optionsAnswer.classList.add("content-question--active");
      //actualizamos el contador de preguntas
      questionActive = questionActive + 1;
      $numberCounter.textContent = questionActive;
    } catch (error) {
      seeContentEndGame();
    }
  }
}
// audioControl();
async function mixOptionsAnswer() {
  listAnswer = await Object.entries(listQuestion[questionActive].answers);
  listAnswer.sort(() => Math.random() - 0.5);
  $optionOne.textContent = listAnswer[0][1];
  $optionTwo.textContent = listAnswer[1][1];
  $optionThree.textContent = listAnswer[2][1];
}

function compareAnswer() {
  listAnswer.forEach((element) => {
    if (element[0] === answerValue) {
      questionCorrect = element[1];
    } else {
    }

    // if (answerValue === answerSelect) {
    //   console.log("encontre" + element[0]);
    // }
  });
}

function resetValues() {
  const $answer = document.querySelectorAll(".answer");
  //$imgResultImage.src = "";
  $answer.forEach((element) => {
    element.classList.remove("correctAnswer");
    element.classList.remove("incorrectAnswer");
    element.classList.remove("moveAnswer");
  });
}

async function answerCorrect(event) {
  soundCorrect.play();
  updateAnswerStarts("correct");
  event.target.classList.add("correctAnswer");
  $emptys.classList.add("textCorrect");
  resultAnswersUser.push(1);
}

export async function incorrectAnswer(event) {
  soundIncorrect.play();
  updateAnswerStarts("wrong");
  event.target.classList.add("incorrectAnswer");
  $emptys.classList.add("textIncorrect");
  resultAnswersUser.push(0);
}

// eventos touch
const $answer = document.querySelectorAll(".answer");
const $empty = document.getElementById("emptys");

let el;
let touchLocation;
export let textChoose = "";

$answer.forEach(function (item) {
  item.addEventListener("touchstart", function (e) {
    if (activeClick === 0) {
      e.preventDefault();
      [...e.changedTouches].forEach((touch) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.textContent = this.textContent;
        textChoose = this.textContent;
        dot.style.top = `${touch.pageY}px`;
        dot.style.left = `${touch.pageX}px`;
        dot.id = touch.identifier;
        document.body.append(dot);
      });
    }
  });

  item.addEventListener("touchmove", function (e) {
    e.preventDefault();
    touchLocation = e.targetTouches[0];
    [...e.changedTouches].forEach((touch) => {
      const dot = document.querySelector(`[id="${touch.identifier}"]`);
      dot.style.top = `${touch.pageY}px`;
      dot.style.left = `${touch.pageX}px`;
      dot.style.cursor = "move";
      this.classList.add("textSelection");
    });
  });

  item.addEventListener("touchend", async (e) => {
    [...e.changedTouches].forEach((touch) => {
      const dot = document.getElementById(touch.identifier);
      dot.remove();

      try {
        el = document.elementFromPoint(
          touchLocation.pageX,
          touchLocation.pageY
        );
        if (el.id === "emptys") {
          activeClick = 1;
          $question.classList.remove("text-question--active");
          $optionsAnswer.classList.remove("content-question--active");
          el.textContent = textChoose;
          el.classList.add("emptysActive");
          checkAnswer(e, textChoose);
        } else {
          this.classList.remove("textSelection");
        }
      } catch (error) {
        const $textSelection = document.querySelectorAll(".textSelection");
        $textSelection.forEach((element) => {
          element.classList.remove("textSelection");
        });
      }
    });
  });
});

export const checkAnswer = async (e, textChoose) => {
  await compareAnswer();
  if (questionCorrect == textChoose) {
    answerCorrect(e);
    nextQuestion();
  } else {
    incorrectAnswer(e);
    nextQuestion();
  }
};
//EVENTOS PLAY

function nextQuestion() {
  setTimeout(() => {
    seeQuestion();
    $answer.forEach((element) => {
      element.classList.remove("textSelection");
    });
    $empty.classList.remove("emptysActive");
    $empty.classList.remove("textCorrect");
    $emptys.classList.remove("textIncorrect");
    $empty.textContent = "";
    activeClick = 0;
    activeQuestionUser();
  }, 2500);
}

// ******* audio ******* //
