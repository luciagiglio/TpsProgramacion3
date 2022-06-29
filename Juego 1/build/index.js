import { loadApi } from "./game/getData.js";

import { audioStart } from "./game/start-game.js";
import { audioEnd } from "./game/end-game.js";
import { audioCorrect } from "./game/add-stars.js";
import { audioIncorrect } from "./game/add-stars.js";

const $iconSoundOn = document.getElementById('soundOn'); 
const $iconSoundOff = document.getElementById('soundOff'); 
export let stateSound=true;

//sonido inactivo
$iconSoundOn.addEventListener('click', () => {
        $iconSoundOn.classList.replace('nav-sound-on','nav-sound-on-hidden');
        $iconSoundOff.classList.replace('nav-sound-off-hidden','nav-sound-off');
        stateSound = false;
        audioStart.pause();
        audioEnd.pause();
        audioCorrect.pause();
        audioIncorrect.pause();
        
})
//sonido activo
$iconSoundOff.addEventListener('click', () => {
    $iconSoundOff.classList.replace('nav-sound-off','nav-sound-off-hidden');
    $iconSoundOn.classList.replace('nav-sound-on-hidden','nav-sound-on');
    stateSound = true;
        

})
loadApi();



