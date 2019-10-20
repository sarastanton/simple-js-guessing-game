let guess;
let number;
let counter = 10;
let activeGame = false;

newGame = () => {
  activeGame = true;
  number = Math.round(Math.random() * 100);
  counter = 10;
  document.getElementById("guess").disabled = false;
  document.getElementById("guess-button").disabled = false;
  document.getElementById("feedback").innerText = "";
  document.getElementById("counter").innerText = `Enter your guess above. You have ${counter} tries left!`;
}

checkGuess = () => {
  if (activeGame) {
    guess = parseInt(document.getElementById("guess").value);
    console.log('guess: ' + guess);
    if (guess == number) {
      wonGameMessage();
    } else if (counter > 1)  {
      giveFeedback();
      updateCounter();
    } else {
        lostGameMessage();
      }
  }
}

giveFeedback = () => {
  const direction = guess > number ? "high" : "low"
  document.getElementById("feedback").innerText = `Try again -- too ${direction}!`
}

updateCounter = () => {
  counter -= 1;
  document.getElementById("counter").innerText = counter == 1 ? `${counter} try left` : `${counter} tries left`;
}

lostGameMessage = () => {
  activeGame = false;
  document.getElementById("counter").innerText = "";
  document.getElementById("guess").disabled = true;
  document.getElementById("guess-button").disabled = true;
  document.getElementById("feedback").innerText = `Sorry, you're out of tries! My number was #{number}. Click 'New Game' to play again!`
}

wonGameMessage = () => {
  activeGame = false;
  const textVar = counter == 1 ? "try" : "tries"
  document.getElementById("guess").disabled = true;
  document.getElementById("guess-button").disabled = true;
  document.getElementById("feedback").style.color = 'green';
  document.getElementById("feedback").innerText = `Congrats, you guessed my number! Click 'New Game' to play again! `
  document.getElementById("counter").innerText = `You still had ${counter - 1} ${textVar} to spare!`
}

const guessInput = document.getElementById("guess");

guessInput.addEventListener("keyup", function(event) {
  if (guessInput == document.activeElement && event.key === "Enter") {
    checkGuess();
  }
});
