// Timer
let timerInterval;
let timerDisplay = document.getElementById('timer-display');
let timerInput = document.getElementById('timer-input');
let startTimerBtn = document.getElementById('start-timer-btn');

startTimerBtn.addEventListener('click', startTimer);

function startTimer() {
  clearInterval(timerInterval);

  let time = parseInt(timerInput.value);
  if (isNaN(time) || time <= 0) {
    alert('Please enter a valid time in seconds.');
    return;
  }

  let hours, minutes, seconds;
  timerInterval = setInterval(() => {
    hours = Math.floor(time / 3600);
    minutes = Math.floor((time % 3600) / 60);
    seconds = Math.floor(time % 60);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    if (time <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = 'Time up!';
    }

    time--;
  }, 1000);
}

// Stopwatch
let stopwatchInterval;
let stopwatchDisplay = document.getElementById('stopwatch-display');
let startStopwatchBtn = document.getElementById('start-stopwatch-btn');
let stopStopwatchBtn = document.getElementById('stop-stopwatch-btn');

startStopwatchBtn.addEventListener('click', startStopwatch);
stopStopwatchBtn.addEventListener('click', stopStopwatch);

function startStopwatch() {
  clearInterval(stopwatchInterval);

  let seconds = 0, minutes = 0, hours = 0;

  stopwatchInterval = setInterval(() => {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }

    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    stopwatchDisplay.textContent = formattedTime;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}
