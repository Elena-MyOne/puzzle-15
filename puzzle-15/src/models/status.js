import {
  shuffle,
  timeNum,
  movesNum,
  gameWinMessage,
  gameWin,
  stop,
} from "./body";

export const levelBtns = Array.from(document.querySelectorAll(".level-btn"));

let timeCounter = 0;
let movesCounter = 0;
let timeResult = null;
let movesResult = null;
let gameTime;

export function formatSeconds(seconds) {
  const date = new Date(1970, 0, 1);
  date.setSeconds(seconds);
  return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}

function initGameTime() {
  setInterval(() => {
    timeNum.innerHTML = `${formatSeconds(++timeCounter)}`;
  }, 1000);
}

function resetStatistic() {
  timeCounter = -1;
  clearInterval(gameTime);
  resetCountMoves();
}

window.addEventListener("load", () => {
  gameTime = initGameTime();
});

shuffle.addEventListener("click", () => {
  resetStatistic();
  hideWinMessage();
});

export function countMoves() {
  return (movesNum.innerHTML = `${(movesCounter += 1)}`);
}

function resetCountMoves() {
  movesCounter = 0;
  return (movesNum.innerHTML = `${movesCounter}`);
}

export function showWinMessage() {
  timeResult = formatSeconds(timeCounter);
  movesResult = movesCounter;

  gameWinMessage.innerHTML = `Hooray! You solved the puzzle in ${formatSeconds(
    timeCounter
  )} and ${movesCounter} moves!`;

  gameWin.style.display = "flex";
}

function hideWinMessage() {
  gameWinMessage.innerHTML = "";
  gameWin.style.display = "none";
}

stop.addEventListener("click", () => {
  resetStatistic();
});

levelBtns.forEach((item) => {
  item.addEventListener("click", () => {
    resetStatistic();
  });
});
