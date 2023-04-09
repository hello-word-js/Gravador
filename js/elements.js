import { startGravacao, pauseGravacao, resumeGravacao, stopGravacao } from "./gravador.js";

const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $stop = document.querySelector('#stop')

const $tempo = document.querySelector('#tempo')
const $status = document.querySelector('#status')

$play.addEventListener('click', startGravacao);
$stop.addEventListener('click', stopGravacao);