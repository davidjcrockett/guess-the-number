// Generate a random number and store it in a variable
let randomNumber = Math.floor(Math.random() * 100 +1);

// Guesses left available (span class = guessesLeft)
let guessesLeft = 5;

// "Your Score" AKA tracking how many guesses it took to get the correct number
let yourScore = 0;

// addEventListener/querySelector for Check button and link to guessesLeft
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
document.querySelector('.guessesLeft').textContent = guessesLeft;    

// Section for losing the game (change background to red) and messaging for if the user inputs a value that's not a number
if (!guess) {
    document.querySelector('.message').textContent = 'Please insert a number';
  } else if (guessesLeft < 1) {
    document.querySelector('.message').textContent = 'You lost';
    document.querySelector('body').style.backgroundColor = '#d7263d';
  }

// If the guess is correct
else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'You Won!!';
    document.querySelector('body').style.backgroundColor = '#9bc53d';
    document.querySelector('.yourScore').textContent = yourScore;
  }
 // If the guess is higher than the secret number
 else if (guess > randomNumber) {
    document.querySelector('.message').textContent = 'Too High!';
    guessesLeft--;
  }

  // If the guess is lower than the secret number
  else if (guess < randomNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    guessesLeft--;
  }

});