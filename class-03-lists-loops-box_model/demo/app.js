'use strict';

// var guessesLeft = 4;
// var secretNumber = 8;
//
// while(guessesLeft > 0) {
//   var answer = parseInt(prompt('What is the secret number? Hint: It is in the range of 1 and 10'));
//   if (answer === secretNumber) {
//     alert('YOU GOT IT!');
//     guessesLeft = -1;
//   } else if (answer < secretNumber) {
//     guessesLeft--;
//     alert('Too low. You have ' + guessesLeft + ' guesses left.');
//   } else if (answer > secretNumber) {
//     guessesLeft--;
//     alert('Too high. You have ' + guessesLeft + ' guesses left.');
//   }
//   if (guessesLeft === 0) {
//     alert('You suck at guessing. The correct number is 8');
//   }
// }

var states = ['Tennessee', 'New York', 'Louisiana', 'Montana'];
var stateGuesses = 6;

while(stateGuesses > 0) {
  stateGuesses--;
  var stateAnswer = prompt('Name a state that I have lived in besides Washington, Montana, Alabama, or Florida).');

  for(var i = 0; i < states.length; i++) {
    if(stateAnswer === states[i]){
      alert('Nice! You got one!');
      stateGuesses = -1;
      break;
    }
  }

  if(stateGuesses > 0){
    alert('Nope. You have ' + stateGuesses + ' guesses left.');
  }

  if (stateGuesses === 0) {
    alert('You are the worst guesser in the world. FAIL. No more tries. YOU LOSE!');
  }
}
