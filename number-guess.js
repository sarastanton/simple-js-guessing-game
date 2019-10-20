let guess;
let number;
let counter = 10;
let activeGame = false;

newGame = () => {
  activeGame = true;
  document.getElementById("counter").innerText = `Enter your guess above. You have ${counter} tries left!`
  // alert("Click!");
  number = Math.round(Math.random() * 100);
  counter = 10;
  console.log('number: ' + number)
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
  let direction;
  guess > number ? direction = "high" : direction = "low"
  document.getElementById("feedback").innerText = `Try again -- too ${direction}!`
}

updateCounter = () => {
  counter -= 1;
  document.getElementById("counter").innerText = `${counter} tries left`;
}

lostGameMessage = () => {
  activeGame = false;
  document.getElementById("feedback").innerText = `Sorry, you're out of tries! My number was #{number}. Click 'New Game' to play again!`
}

wonGameMessage = () => {
  activeGame = false;
  document.getElementById("feedback").innerText = `Congrats, you guessed my number!!! Click 'New Game' to play again! `
}
