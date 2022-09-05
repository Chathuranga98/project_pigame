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

// score0el.textContent = 0;
// score1el.textContent = 0;
// diceel.classList.add('hidden');

let scores,currentscore,activeplayer,playing;


const init =function(){

    

    scores = [0, 0];
    currentscore = 0;
     activeplayer = 0;
     playing = true;
    

    score0el.textContent = 0;
    score1el.textContent = 0;
    current0el.textContent=0;
    current1el.textContent=0;

    diceel.classList.add('hidden');
    player0el.classList.remove('player--winner');
    player1el.classList.remove('player--winner');
    player0el.classList.add('player--active');
    player1el.classList.remove('player--active');

};
init();


const switchPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    diceel.classList.remove('hidden');
    diceel.src = `dice-${dice}.png`;

    if (dice != 1) {
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--active');

      diceel.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click',init);