'use strict';

let guessNumber = Math.floor((Math.random()) * 20);

document.querySelector('.number').textContent = '?';

let score = 20;
let HighestScore = 0;


const textContentUpdater = function (element, textContent) {
    document.querySelector(`${element}`).textContent = textContent;
}

// Event listener for 'click' function on check button
document.querySelector('.check').addEventListener('click', function () {

    const enteredNumber = Number(document.querySelector('.guess').value);
    if ((enteredNumber !== guessNumber) && (enteredNumber > 0)) {
        if (score > 0) {
            enteredNumber > guessNumber ? textContentUpdater('.message', "Number is too high") : textContentUpdater('.message', "Number is too low");
            score--;
            textContentUpdater('.score', score);
        }
        else {
            textContentUpdater('.message', "You lost the game");
        }

    }

    else if (enteredNumber === guessNumber) {
        textContentUpdater('.message', "Number is correct");
        document.querySelector('body').style.backgroundColor = '#008000';
        document.querySelector('.number').style.width = "15rem";

        if (HighestScore > score) {
            HighestScore = HighestScore;
            textContentUpdater('.highscore', HighestScore);
        }
        else if (HighestScore < score) {
            HighestScore = score;
            textContentUpdater('.highscore', HighestScore);
        }
        else if (HighestScore === score) {
            HighestScore = HighestScore;
            textContentUpdater('.highscore', HighestScore);
        }
    }

    else if (enteredNumber === 0){
        textContentUpdater('.message', 'please enter number');
    }

})

// Event listener for 'click' function on again button
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "12rem";
    document.querySelector('.guess').value = '';
    guessNumber = Math.floor((Math.random()) * 20);
    textContentUpdater('.number', guessNumber);
    textContentUpdater('.message', "Guess the number");
    textContentUpdater('.score', 20);
    score = Number(document.querySelector('.score').textContent);
})
