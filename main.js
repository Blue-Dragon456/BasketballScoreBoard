let team1Score = 0;
let team2Score = 0;

let team1ScoreEl = document.getElementById("team1-el");
let team2ScoreEl = document.getElementById("team2-el");

function incrementByOne() {
  team1Score++;
  team1ScoreEl.textContent = team1Score;
}
function incrementByTwo() {
  team1Score += 2;
  team1ScoreEl.textContent = team1Score;
}
function incrementByThree() {
  team1Score += 3;
  team1ScoreEl.textContent = team1Score;
}

function incrementByOneTeam2() {
  team2Score++;
  team2ScoreEl.textContent = team2Score;
}
function incrementByTwoTeam2() {
  team2Score += 2;
  team2ScoreEl.textContent = team2Score;
}
function incrementByThreeTeam2() {
  team2Score += 3;
  team2ScoreEl.textContent = team2Score;
}

let timeLeft = 48 * 60;
let timer;
let timerEl = document.getElementById("timer-el");

function countdown() {
  timeLeft--;

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("timer-el").textContent = minutes + ":" + seconds;
}

document.getElementById("start-btn").addEventListener("click", function () {
  timer = setInterval(countdown, 1000);
});
document.getElementById("stop-btn").addEventListener("click", function () {
  clearInterval(timer);
});

function newGame() {
  team1Score = 0;
  team2Score = 0;
  team1ScoreEl.textContent = team1Score;
  team2ScoreEl.textContent = team2Score;
  clearInterval(timer);
  timeLeft =  48 * 60;
  timerEl.textContent = "48:00";
}
