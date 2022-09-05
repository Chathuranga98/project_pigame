'use strict';

const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');

const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');

const diceel = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0el.textContent = 0;
score1el.textContent = 0;
diceel.classList.add('hidden');

const scores = [0,0];
let currentscore =0;
let activeplayer =0;


btnRoll.addEventListener('click',function(){

    const dice =Math.trunc(Math.random()*6)+1;
    console.log(dice);

    diceel.classList.remove('hidden');
    diceel.src = `dice-${dice}.png`;

    if(dice!=1){

        currentscore+=dice;
        document.getElementById(`current--${activeplayer}`).textContent=currentscore;

    }
    else{
        document.getElementById(`current--${activeplayer}`).textContent=0;
        currentscore=0;
        activeplayer=activeplayer === 0 ? 1 : 0;
        player0el.classList.toggle('player--active');
        player1el.classList.toggle('player--active');
        

    }



})


