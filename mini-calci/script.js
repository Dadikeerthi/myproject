let counterValue = 0;

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;
}

incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounterDisplay();
});

decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounterDisplay();
});

resetButton.addEventListener('click', () => {
    counterValue = 0;
    updateCounterDisplay();
});