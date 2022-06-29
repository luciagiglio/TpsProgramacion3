import { incorrectStar } from "./add-stars.js";
import { nextQuestion, changeActiveOption } from "./start-game.js";
const $progress = document.getElementById("progress");

let tiempo = 150;
let width = 0;
let id = "";
let stop=true;
let active=false;


export function progress() {
    stop = true;
    id = setInterval(frame, tiempo);
    $progress.style.backgroundColor = "#37BE8D";
    function frame() {
        if(stop) {
      if (width >= 100) {

        
        clearInterval(id);
        width = 1;
        $progress.style.width = "0%";
        timeOut();
        
      } else {
        width++;
        $progress.style.width = width + "%";
        if (width >= 30 && width <= 70) {
          $progress.style.backgroundColor = "#FFC121";
          
        } else {
          if (width >= 71) {
            $progress.style.backgroundColor = "#FF5555";
          }
        }
        }
      }
    }
  }

  export const resetTime = () => {
    clearInterval(id);
    width = 0;
  };

  export const timeOut = () => {

       changeActiveOption();      
       incorrectStar();
       resetTime(); 
        setTimeout(() => {
          nextQuestion();
     }, 2000);
 
    
     
     
  }
  export const stopTime = () => {
      stop=false;
      return stop;
  }