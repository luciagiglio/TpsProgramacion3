import { result } from "./add-stars.js";
import { stateSound } from "../index.js";

export const $replay = document.getElementById('replay');
const $gameOver = document.getElementById('game-over');
const $startGame = document.getElementById('start-game');
export var audioEnd = new Audio('sounds/audio_end.mp3');

export function contentEndGame(){
    try{
    $startGame.classList.replace('start-game','start-game-hidden');
    $gameOver.classList.replace('game-over-hidden','game-over');
    if(stateSound){
    audioEnd.play();
    }
    else{
        audioEnd.pause();
    }
    result();
    }catch(error){
        console.error(error);
    }
    $replay.addEventListener('click', () => {
        location.reload();
    })
}


