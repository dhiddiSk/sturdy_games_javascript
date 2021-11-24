'use strict';
let playersScoresArray = [];
let activePlayer = 0;
let activePlayerCurrentScore = 0;
let gameStarted = false;

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');


buttonNew.addEventListener('click', function () {
    playersScoresArray[0] = 0;
    playersScoresArray[1] = 0;
    document.querySelector('.dice').classList.add('hidden');
    document.querySelector(`#current--0`).textContent = 0;
    document.querySelector(`#current--1`).textContent = 0;
    document.querySelector(`#score--0`).textContent = 0;
    document.querySelector(`#score--1`).textContent = 0;
    activePlayer = 0;
    activePlayerCurrentScore = 0;
    gameStarted = true;
});

buttonHold.addEventListener('click', function () {
    playersScoresArray[activePlayer] = playersScoresArray[activePlayer] + activePlayerCurrentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = playersScoresArray[activePlayer];
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayerCurrentScore = 0;
});

function switchUser() {
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    activePlayerCurrentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = activePlayerCurrentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
}



buttonRoll.addEventListener('click', function () {

    document.querySelector('.dice').classList.remove('hidden');

    // The diceRollOutput variable holds the random value generated between 1(inclusive) and 7(exclusive)
    const diceRollOutput = Math.floor(Math.random() * (Math.floor(7) - Math.ceil(1)) + Math.ceil(1));

    if (gameStarted) {

        document.querySelector('.dice').src = `dice-${diceRollOutput}.png`;

        if (diceRollOutput !== 1) {
            activePlayerCurrentScore += diceRollOutput;
            document.querySelector(`#current--${activePlayer}`).textContent = activePlayerCurrentScore;
        } else {
            switchUser();
        }
    }
});
