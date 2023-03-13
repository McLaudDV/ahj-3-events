/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/paint.js
function paint() {
  for (let i = 0; i < 16; i += 1) {
    const field = document.querySelector('.field');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'square');
    field.append(newDiv);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable no-loop-func */


paint();
function play() {
  let playing = true;
  let activeSquare = 1;
  const dead = document.querySelector('.count_dead');
  const lost = document.querySelector('.count_lost');
  const square = document.querySelectorAll('.square');
  const getSquare = index => square[index];
  const deactivateSquare = index => getSquare(index).className = 'square';
  const activateSquare = index => getSquare(index).className = 'square square_active';
  const next = () => setTimeout(() => {
    if (playing === false) {
      lost.textContent++;
    }
    deactivateSquare(activeSquare);
    activeSquare = Math.floor(1 + Math.random() * 15);
    activateSquare(activeSquare);
    next();
    playing = false;
    if (lost.textContent >= 5) {
      alert('Вы проиграли');
      dead.textContent = 0;
      lost.textContent = 0;
    }
    for (let index = 1; index <= 16; index++) {
      getSquare(index).onclick = () => {
        playing = true;
        if (getSquare(index).className.includes('square_active')) {
          dead.textContent++;
          getSquare(index).classList.remove('square_active');
        } else {
          lost.textContent++;
        }
        function clear() {
          dead.textContent = 0;
          lost.textContent = 0;
        }
        if (dead.textContent >= 10) {
          alert('Вы победили');
          clear();
        }
      };
    }
  }, 1000);
  next();
}
play();
;// CONCATENATED MODULE: ./src/index.js
/* eslint-disable no-unused-vars */


/******/ })()
;