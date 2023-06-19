var counter = 0;

function increase() {
  counter++;
  updateDisplay(counter);
}

function decrease() {
  counter--;
  updateDisplay(counter);
}

function reset() {
  counter = 0;
  updateDisplay(counter);
}

function updateDisplay(result) {
  document.getElementById('display').innerText = counter;
}
