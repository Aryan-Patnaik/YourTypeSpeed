const inputField = document.getElementById('input-field');
const timer = document.getElementById('time');
const wpmDisplay = document.getElementById('wpm');
const charCountDisplay = document.getElementById('charCount');
const restartButton = document.getElementById('restart-button');

let timeLeft = 30;
let timeElapsed = 0;
let isTimerRunning = false;
let intervalId = null;

function updateTimer() {
    timeLeft--;
    timeElapsed++;
    timer.textContent = timeLeft;

    if (timeLeft === 0) {
        finishGame();
    }
}

function calculateWPM() {
    const text = inputField.value;
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = timeElapsed / 60;
    const wpm = Math.round(wordCount / minutes);
    wpmDisplay.textContent = wpm;
    charCountDisplay.textContent = text.length;
}

function finishGame() {
    clearInterval(intervalId);
    inputField.disabled = true;
    calculateWPM();
}

function startGame() {
    inputField.value = '';
    inputField.disabled = false;
    timeLeft = 30;
    timeElapsed = 0;
    timer.textContent = timeLeft;
    wpmDisplay.textContent = '0';
    charCountDisplay.textContent = '0';
    
    if (intervalId) {
        clearInterval(intervalId);
    }
    
    isTimerRunning = false;
    inputField.focus();
}

inputField.addEventListener('input', () => {
    if (!isTimerRunning) {
        isTimerRunning = true;
        intervalId = setInterval(updateTimer, 1000);
    }
    calculateWPM();
});

restartButton.addEventListener('click', () => {
    const specificWord = "Shrujan_3.0_CTF"; // Replace with your specific word or phrase
    const inputText = inputField.value.trim();
    
    if (inputText.includes(specificWord)) {
        alert(`sh3ctf{${specificWord}}`);
    }
    else {
        startGame();
    }
    
});

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U')) {
        event.preventDefault(); // Disable "View Source"
    }
    if (event.ctrlKey && event.shiftKey && (event.key === 'i' || event.key === 'I')) {
        event.preventDefault(); // Disable DevTools
    }
    if (event.ctrlKey && event.shiftKey && (event.key === 'j' || event.key === 'J')) {
        event.preventDefault(); // Disable DevTools Console
    }
    if (event.key === 'F12') {
        event.preventDefault(); // Disable F12
    }
});

console.log('%cStop!', 'color: red; font-size: 40px; font-weight: bold;');
console.log('%cInspecting this page is discouraged.', 'color: gray; font-size: 16px;');
console.log('%cTry writing (Shrujan_3.0_CTF) in the text field (without the brackets) and click restart button.', 'color: yellow; font-size: 16px;  font-weight: bold;');

function findFlag() {
    alert('Check the warning');
    console.warn('Flag not found.');
}

startGame();