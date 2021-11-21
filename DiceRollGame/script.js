// 1) The active player get's the background color with white light
// 2) When user roles the dice, 
// the output of the dice is filled in the current box and it get's summed up with the previous value: done
// 3) If the user press the hold button then the score from the current box get's summed up to the players score: done
// 4) If the user roles the dice and hits the count as 1, 
//then the current score turns to zero and the another player get's the chance to play: done
// 5) If the player who crosses the score more than hundered then that particular player wins the game.


let playerOneCurrent = 0;
let playerTwoCurrent = 0;
let playerOneTotal = 0;
let playerTwoTotal = 0;

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const playerOneScore = document.querySelector('#score--0');
const playerTwoScore = document.querySelector('#score--1');
const playerOneCurrentScore = document.querySelector('#current--0');
const playerTwoCurrentScore = document.querySelector('#current--1');

let playerOneActive = true;
let playerTwoActive = false;


btnNew.addEventListener('click', function () {
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    playerOneCurrentScore.textContent = 0;
    playerTwoCurrentScore.textContent = 0;
    playerOneCurrent = 0;
    playerTwoCurrent = 0;
    playerOneTotal = 0;
    playerTwoTotal = 0;
    playerOneActive = true;
    playerTwoActive = false;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.dice').classList.add('hidden');
});

const updateScore = function(){
    playerOneTotal += playerOneCurrent;
    if(playerOneTotal >= 100){
        playerOneScore.textContent = playerOneTotal + "won the game";
    }
    else{
    playerOneScore.textContent = playerOneTotal;
    playerOneCurrent = 0;
    playerOneCurrentScore.textContent = 0;
    }
}


// diceOutPut -> If it's one / other -> shifted players using the class name of the elements -> changed everything 
// class="player player--0 player--active
// id="score--0"
// id="current--0"
// Use array to save the score values based on the id numbers.


btnHold.addEventListener('click', function () {

    if (playerOneActive) {
        playerOneTotal += playerOneCurrent;
        if(playerOneTotal >= 100){
            playerOneScore.textContent = playerOneTotal + "won the game";
        }
        else{
        playerOneScore.textContent = playerOneTotal;
        playerOneCurrent = 0;
        playerOneCurrentScore.textContent = 0;
        }
    } else if (playerTwoActive) {
        playerTwoTotal += playerTwoCurrent;
        if(playerTwoTotal >= 100){
            playerTwoScore.textContent = playerTwoTotal + "won the game";
        }
        else{
            playerTwoScore.textContent = playerTwoTotal;
            playerTwoCurrent = 0;
            playerTwoCurrentScore.textContent = 0;
        }       
    }
});

btnRoll.addEventListener('click', function () {

   document.querySelector('.dice').classList.remove('hidden');

    // The diceRollOutput variable holds the random value generated between 1(inclusive) and 7(exclusive)
   const diceRollOutput = Math.floor(Math.random() * (Math.floor(7) - Math.ceil(1)) + Math.ceil(1));
    console.log(diceRollOutput);
    document.querySelector('.dice').src = `dice-${diceRollOutput}.png`;

    if (playerOneActive) {
        document.querySelector('.player--0').classList.add('player--active');
        document.querySelector('.player--1').classList.remove('player--active');

        if (diceRollOutput === 1) {
            playerOneCurrent = 0;
            playerOneCurrentScore.textContent = playerOneCurrent;
            playerOneActive = false;
            playerTwoActive = true;
        } else {
            playerOneCurrent += diceRollOutput;
            playerOneCurrentScore.textContent = playerOneCurrent;
        }
    }

    else if (playerTwoActive) {

        document.querySelector('.player--1').classList.add('player--active');
        document.querySelector('.player--0').classList.remove('player--active');
 
        if (diceRollOutput === 1) {
            playerTwoCurrent = 0;
            playerTwoCurrentScore.textContent = playerTwoCurrent;
            playerOneActive = true;
            playerTwoActive = false;
        } else {
            playerTwoCurrent += diceRollOutput;
            playerTwoCurrentScore.textContent = playerTwoCurrent;
        }
    }

})

btnHold.addEventListener('click', function () {

    playerOneTotal += playerOneCurrent;
    playerOneScore.textContent = playerOneTotal;

})
