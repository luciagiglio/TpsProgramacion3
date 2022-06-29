import { questionActive } from "./start-game.js";
import { totalQuestions } from "./info.js";
import { stateSound } from "../index.js";

const $starContainer = document.getElementById("star-container");
const $starPoints = document.getElementById("star-points");
export var audioCorrect = new Audio('sounds/audio_correct.mp3');
export var audioIncorrect = new Audio('sounds/audio_incorrect.mp3');
export let resultAnswersUser = [];

export function createStarts() {
    
    for (let i = 0; i < totalQuestions; i++) {
      const indicador = document.createElement("img");
      indicador.src = "images/game/estrella.svg";
      indicador.classList.add("imgStartsGame");
      $starContainer.appendChild(indicador);
      
      
    }
  }

  export function correctStar() {
    let actual = questionActive-1;
    resultAnswersUser.push(1);
    $starContainer.children[actual].src =
    "images/game/star_correct.png";
     $starContainer.children[actual].classList.add("rotate");
     if(stateSound){
     audioCorrect.play();
     }
     else{
       audioCorrect.pause();
     }
  }

  export function incorrectStar() {
    let actual = questionActive-1;
    resultAnswersUser.push(0);
    $starContainer.children[actual].src =
        "images/game/star_incorrect.png";
      $starContainer.children[actual].classList.add("rotate");
      if(stateSound){
      audioIncorrect.play();
      }else{
        audioIncorrect.pause();
      }
  }

  export async function result() {
   // console.log(resultAnswersUser);
        resultAnswersUser.forEach((element) => {
        if (element === 1) {
            const indicador = document.createElement("img");
            indicador.src = "./images/game/star_correct.png";
            $starPoints.appendChild(indicador);
            indicador.classList.add("rotate");
            //console.log("correcto");

        } else {
            const indicador = document.createElement("img");
            indicador.src = "./images/game/star_incorrect.png";
            $starPoints.appendChild(indicador);
        }
      });


  }
