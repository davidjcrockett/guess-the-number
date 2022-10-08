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
    document.querySelector('.message').textContent = 'You lost 😭 Better luck next time!';
    document.querySelector('body').style.backgroundColor = '#c44536';
  }

// If the guess is correct
else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'You Won!! Here is your prize: 🏆';
    document.querySelector('body').style.backgroundColor = '#52b788';
    document.querySelector('.yourScore').textContent = yourScore;
  }
 // If the guess is higher than the secret number
 else if (guess > randomNumber) {
    document.querySelector('.message').textContent = 'Too High! Think Smaller! ⬇️';
    guessesLeft--;
    document.querySelector('body').style.backgroundColor = '#c44536';
  }

  // If the guess is lower than the secret number
  else if (guess < randomNumber) {
    document.querySelector('.message').textContent = 'Too Low! Think Bigger! ⬆️';
    guessesLeft--;
    document.querySelector('body').style.backgroundColor = '#c44536';
  }

});

//Reset the page
document.querySelector('.reset').addEventListener('click', function () {
  guessesLeft = 5;
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector('.message').textContent = 'Current Status: Thinking of a Number Between 1 and 100... 🤔';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#2e294e';
});