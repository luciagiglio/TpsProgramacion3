import {data} from "./getData.js";
import { contentEndGame } from "./end-game.js";
import { progress, resetTime, stopTime } from "./timeQuestion.js";
import { createStarts, correctStar, incorrectStar } from "./add-stars.js";
import { totalQuestions } from "./info.js";
import { stateSound } from "../index.js";


const $imgQuestion = document.getElementById('img-question');
const $options = document.getElementById('options');
const $idQuestion = document.getElementById('id-question');
const $logoLibro = document.getElementById('logo-libro');
const $points = document.getElementById('points');

export var audioStart= new Audio('sounds/music_ambient.mp3');


//pregunta activa en el momento de ejecutar
export let questionActive = 0;
//variable que guarda el objeto que contiene las preguntas 
let options;
//variable que guarda el objeto que contiene la respuesta correcta
let optionCorrect;
//variable que guarda el objeto que contiene la opcion correcta
let correcta=2;

//activar las opciones
export let activeOptions =false;
export let optCorrect = 0;
export let optIncorrect = 0;

export async function startGame(){
    await $logoLibro.classList.replace('nav-logo-libro-hidden','nav-logo-libro');
    if(stateSound){
        audioStart.play();
    }
    else{
        audioStart.pause();
    }
    
    await createStarts();
    await nextQuestion();
    
    

}

//cominezo del ciclo del juego
export async function nextQuestion() {
   
    if(questionActive == totalQuestions){
        $points.textContent=optCorrect;
        contentEndGame();
    }
    else{

        await limpiarContenido();
        await seeQuestion();
        progress(stop);
        questionActive++;
        }
    
}

//Con esta funcion cargamos los valores de el id de la pregunta y del total de preguntas junto con la imagen a la que coprresponde la pregunta
function datosPregunta(){
    $imgQuestion.src =  data[0].results[questionActive].question;
    const idFirstQuestion =  data[0].results[questionActive].id;
    $idQuestion.textContent = idFirstQuestion.concat(' ','/',' ',totalQuestions);
}

    
//Con esta funcion obtenemos del json las preguntas desordenadas para mostrarlas como opcione
const seeQuestion = async()=>{
        //esperamos a obtener los datos del json antes de continuar la ejecución
        await datosPregunta();
        ////antes de desordenar, guardamos en una variable el objeto que contiene las preguntas///////////////////
        options = await Object.entries(data[0].results[questionActive].options);
        optionCorrect = options;
        optionCorrect = optionCorrect[correcta][1];
        //console.log(optionCorrect);
        ////desordenamos las preguntas/////////////////
        const listQuestion =  options.slice();
        await listQuestion.sort(() => Math.random() - 0.5);
        /////mostramos las preguntas desordenadas en el html, recorriendo cada elemento del objeto/////////////////
        listQuestion.forEach(element => {
        //console.log(element[1]);
        const $option = document.createElement('li');
        $option.textContent = element[1];
        $option.classList.add('option');
        $options.appendChild($option);
        $option.addEventListener('click', detectarRespuesta);
        activeOptions=true;
        //escuchamos el evento click del usuario para hacer la validacion
    


        
        });
}

//funcion para almacenar el evento click del usuario
const detectarRespuesta =(e) => {
    stopTime();
    //guardamos en una variable el elemento para cambiar su clase en la validacion
    let elementListado = e.target;
    let respuesta = e.target.textContent;
    if(activeOptions){
        activeOptions = false;
        validarRespuesta(respuesta, elementListado);
    }
    
}
//validar click del usuario
function validarRespuesta(respuesta, elementListado){
    if(respuesta == optionCorrect ){
        optCorrect++;
        correctStar();
        elementListado.classList.toggle('correct');

        stopTime();
    
    }else{
        optIncorrect++;
        incorrectStar();
        elementListado.classList.toggle('incorrect');
        stopTime();
    }
    setTimeout(() => {
        nextQuestion();
        resetTime();
    }, 2000);
    
    
}

function limpiarContenido(){
    const $option = document.querySelectorAll('.option');
        $option.forEach(element => {
        $options.removeChild(element);
        
    });
}

export function changeActiveOption(){
    activeOptions = false;
}





