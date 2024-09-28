let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
  const guess = parseInt(document.getElementById("guessInput").value);
  attempts++;
  if (isNaN(guess)) {
    showFeedback("Enter a valid number.");
    return;
  }

  document.getElementById("attempts").textContent = "Attempts: " + attempts;

  if (guess === randomNumber) {
    showFeedback(
      "Winner! You guessed the number in " + attempts + " attempts."
    );
  } else if (guess < randomNumber) {
    showFeedback("Too low, try again.");
  } else {
    showFeedback("Too high. Try again.");
  }
}

function showFeedback(message) {
  document.getElementById("feedback").textContent = message;
}