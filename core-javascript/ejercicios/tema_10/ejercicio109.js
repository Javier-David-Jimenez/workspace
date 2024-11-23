let timer;
let seconds = 0;
let isRunning = false;

function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`; // Formato MM:SS
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds += 1;
      updateTimerDisplay();
    }, 1000);
  } else {
    isRunning = false;
    clearInterval(timer);
  }
}

document.getElementById('startButton').addEventListener('click', startTimer);
