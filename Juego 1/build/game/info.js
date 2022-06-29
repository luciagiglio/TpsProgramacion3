import { data } from "./getData.js";
import { startGame } from "./start-game.js";
import { contentEndGame } from "./end-game.js";

export const $play = document.getElementById('play');
export const $play2 = document.getElementById('play2');
const $info = document.getElementById('info');
const $start = document.getElementById('start-game');
const $imgBook = document.getElementById('imgBook');
const $title = document.getElementById('title');
const $chapter = document.getElementById('chapter');
const $instructions = document.getElementById('instructions');
const $points = document.getElementById('points');
const $gameOver = document.getElementById('game-over');

export let totalQuestions=0;


export const loadInfo=()=>{
    totalQuestions=data[0].results.length;
    $title.textContent = data[0].title;
    $chapter.textContent = data[0].chapter;
    $instructions.textContent = data[0].instructions;
    $imgBook.src = data[0].imgBook;
}


$play.addEventListener('click', async() => {
    $info.classList.replace('info','info-hidden');
    $start.classList.replace('start-game-hidden', 'start-game');
    startGame();

    
})
$play2.addEventListener('click', async() => {
    $info.classList.replace('info','info-hidden');
    $start.classList.replace('start-game-hidden', 'start-game');
    startGame();

    
})

/* Para visualizar la pantalla final
$play.addEventListener('click', async() => {
    $info.classList.replace('info','info-hidden');
    $gameOver.classList.replace('game-over-hidden', 'game-over');
    contentEndGame();

    
})
$play2.addEventListener('click', async() => {
    $info.classList.replace('info','info-hidden');
    $gameOver.classList.replace('game-over-hidden', 'game-over');
    contentEndGame();

    
})
*/

