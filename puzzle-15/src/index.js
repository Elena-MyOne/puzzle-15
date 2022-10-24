import "./styles/style.scss";
import {
  body,
  game,
  gameWinMessage,
  shuffle,
  stop,
  level,
  levelBtn3,
  levelBtn4,
  levelBtn5,
  levelBtn6,
  levelBtn7,
  levelBtn8,
} from "./models/body";
import {
  formatSeconds,
  countMoves,
  showWinMessage,
  levelBtns,
} from "./models/status";
import { audioWin, audioClick, audioStop, audioShuffle } from "./models/sound";

const gameBtns = Array.from(game.querySelectorAll(".game-btn"));
const countItem3x3 = 3 * 3;
const countItem4x4 = 4 * 4;
const countItem5x5 = 5 * 5;
const countItem6x6 = 6 * 6;
const countItem7x7 = 7 * 7;
const countItem8x8 = 8 * 8;

//positioning================================
function setDataMatrixNum() {
  let counter = 1;
  return gameBtns.forEach((item) => {
    item.setAttribute("data-matrix-num", `${counter}`);
    counter++;
  });
}
setDataMatrixNum();

function getMatrix(arr, row) {
  const matrix = [];
  let y = 0;
  let x = 0;

  for (let i = 0; i < row; i++) {
    matrix.push([]);
  }

  for (let j = 0; j < arr.length; j++) {
    if (x >= row) {
      y++;
      x = 0;
    }

    matrix[y][x] = arr[j];
    x++;
  }

  return matrix;
}

let arrDataMatrixNum = gameBtns.map((item) => Number(item.dataset.matrixNum));

let arrDataMatrixNum4 = arrDataMatrixNum.slice(0, 4 * 4);
gameBtns[countItem4x4 - 1].style.display = "none"; //убираем последний элемент
let matrix4x4 = getMatrix(arrDataMatrixNum4, 4);
console.log(matrix4x4);

//++++++++++++++++++++++++

let arrDataMatrixNum3 = arrDataMatrixNum.slice(0, 3 * 3);
let matrix3x3 = getMatrix(arrDataMatrixNum3, 3);
console.log(matrix3x3);

let arrDataMatrixNum5 = arrDataMatrixNum.slice(0, 5 * 5);
let matrix5x5 = getMatrix(arrDataMatrixNum5, 5);
console.log(matrix5x5);

let arrDataMatrixNum6 = arrDataMatrixNum.slice(0, 6 * 6);
let matrix6x6 = getMatrix(arrDataMatrixNum6, 6);
console.log(matrix6x6);

let arrDataMatrixNum7 = arrDataMatrixNum.slice(0, 7 * 7);
let matrix7x7 = getMatrix(arrDataMatrixNum7, 7);
console.log(matrix7x7);

let arrDataMatrixNum8 = arrDataMatrixNum.slice(0, 8 * 8);
let matrix8x8 = getMatrix(arrDataMatrixNum8, 8);
console.log(matrix8x8);

//+++++++++++++++++++++++++++

function positionGameBtns(matrix, percent) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const val = matrix[y][x];
      const btn = gameBtns[val - 1];
      setGameBtnsStyles(percent, btn, x, y);
    }
  }
}

function setGameBtnsStyles(percent = 100, btn, x, y) {
  //percent = 100;
  btn.style.transform = `translate3D(${x * percent}%, ${y * percent}%, 0)`;
}

positionGameBtns(matrix4x4, 100);

//change matrix size===========================================
//levelBtns - в status.js
let matrixSize = "4x4";

const blankBtn3 = gameBtns[countItem3x3 - 1];
const blankBtn4 = gameBtns[countItem4x4 - 1];
const blankBtn5 = gameBtns[countItem5x5 - 1];
const blankBtn6 = gameBtns[countItem6x6 - 1];
const blankBtn7 = gameBtns[countItem7x7 - 1];
const blankBtn8 = gameBtns[countItem8x8 - 1];

level.addEventListener("click", (e) => {
  const levelBtn = e.target.closest(".level-btn");
  levelBtns.forEach((item) => {
    item.classList.remove("active");
  });

  levelBtn.classList.add("active");

  matrixSize = levelBtn.innerHTML;
});

levelBtn3.addEventListener("click", (e) => {
  gameBtns.forEach((item) => {
    if (+item.dataset.matrixNum > 9) {
      item.setAttribute("hidden", "");
    }
    item.style.width = "33.333%";
    item.style.height = "33.333%";
  });
  blankBtn3.style.display = "none";

  const shuffledArrFromMatrix3x3 = shuffleMatrix(matrix3x3);
  matrix3x3 = getMatrix(shuffledArrFromMatrix3x3, 3);

  positionGameBtns(matrix3x3, 100);

  audioShuffle.play();
});

levelBtn4.addEventListener("click", (e) => {
  gameBtns.forEach((item) => {
    if (+item.dataset.matrixNum < 16) {
      item.removeAttribute("hidden");
    }
    if (+item.dataset.matrixNum > 16) {
      item.setAttribute("hidden", "");
    }
    item.style.width = "25%";
    item.style.height = "25%";
  });

  blankBtn3.style.display = "block";
  blankBtn4.style.display = "none";

  const shuffledArrFromMatrix4x4 = shuffleMatrix(matrix4x4);
  matrix4x4 = getMatrix(shuffledArrFromMatrix4x4, 4);

  positionGameBtns(matrix4x4, 100);

  audioShuffle.play();
});

levelBtn5.addEventListener("click", (e) => {
  gameBtns.forEach((item) => {
    if (+item.dataset.matrixNum <= 25) {
      item.removeAttribute("hidden");
    }
    if (+item.dataset.matrixNum > 25) {
      item.setAttribute("hidden", "");
    }
    item.style.width = "20%";
    item.style.height = "20%";
  });

  blankBtn3.style.display = "block";
  blankBtn4.style.display = "block";
  blankBtn5.style.display = "none";

  const shuffledArrFromMatrix5x5 = shuffleMatrix(matrix5x5);
  matrix5x5 = getMatrix(shuffledArrFromMatrix5x5, 5);

  positionGameBtns(matrix5x5, 100);

  audioShuffle.play();
});

levelBtn6.addEventListener("click", (e) => {
  gameBtns.forEach((item) => {
    if (+item.dataset.matrixNum <= 36) {
      item.removeAttribute("hidden");
    }
    if (+item.dataset.matrixNum > 36) {
      item.setAttribute("hidden", "");
    }
    item.style.width = "16.666%";
    item.style.height = "16.666%";
  });

  blankBtn3.style.display = "block";
  blankBtn4.style.display = "block";
  blankBtn5.style.display = "block";
  blankBtn6.style.display = "none";

  const shuffledArrFromMatrix6x6 = shuffleMatrix(matrix6x6);
  matrix6x6 = getMatrix(shuffledArrFromMatrix6x6, 6);

  positionGameBtns(matrix6x6, 100);

  audioShuffle.play();
});

levelBtn7.addEventListener("click", (e) => {
  gameBtns.forEach((item) => {
    if (+item.dataset.matrixNum <= 49) {
      item.removeAttribute("hidden");
    }
    if (+item.dataset.matrixNum > 49) {
      item.setAttribute("hidden", "");
    }
    item.style.width = "14.285%";
    item.style.height = "14.285%";
  });

  blankBtn3.style.display = "block";
  blankBtn4.style.display = "block";
  blankBtn5.style.display = "block";
  blankBtn6.style.display = "block";
  blankBtn7.style.display = "none";

  const shuffledArrFromMatrix7x7 = shuffleMatrix(matrix7x7);
  matrix7x7 = getMatrix(shuffledArrFromMatrix7x7, 7);

  positionGameBtns(matrix7x7, 100);

  audioShuffle.play();
});

levelBtn8.addEventListener("click", (e) => {
  gameBtns.forEach((item) => {
    if (+item.dataset.matrixNum <= 64) {
      item.removeAttribute("hidden");
    }
    if (+item.dataset.matrixNum > 64) {
      item.setAttribute("hidden", "");
    }
    item.style.width = "12.5%";
    item.style.height = "12.5%";
  });

  blankBtn3.style.display = "block";
  blankBtn4.style.display = "block";
  blankBtn5.style.display = "block";
  blankBtn6.style.display = "block";
  blankBtn7.style.display = "block";
  blankBtn8.style.display = "none";

  const shuffledArrFromMatrix8x8 = shuffleMatrix(matrix8x8);
  matrix8x8 = getMatrix(shuffledArrFromMatrix8x8, 8);

  positionGameBtns(matrix8x8, 100);

  audioShuffle.play();
});
//shuffle========================================================================
function shuffleArr(arr) {
  return arr
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function shuffleMatrix(matrix) {
  const flatMatrix = matrix.flat();
  return shuffleArr(flatMatrix);
}

shuffle.addEventListener("click", (e) => {
  if (matrixSize === "3x3") {
    const shuffledArrFromMatrix3x3 = shuffleMatrix(matrix3x3);
    matrix3x3 = getMatrix(shuffledArrFromMatrix3x3, 3);
    positionGameBtns(matrix3x3, 100);
  }

  if (matrixSize === "4x4") {
    const shuffledArrFromMatrix4x4 = shuffleMatrix(matrix4x4);
    matrix4x4 = getMatrix(shuffledArrFromMatrix4x4, 4);
    positionGameBtns(matrix4x4, 100);
  }

  if (matrixSize === "5x5") {
    const shuffledArrFromMatrix5x5 = shuffleMatrix(matrix5x5);
    matrix5x5 = getMatrix(shuffledArrFromMatrix5x5, 5);
    positionGameBtns(matrix5x5, 100);
  }

  if (matrixSize === "6x6") {
    const shuffledArrFromMatrix6x6 = shuffleMatrix(matrix6x6);
    matrix6x6 = getMatrix(shuffledArrFromMatrix6x6, 6);
    positionGameBtns(matrix6x6, 100);
  }

  if (matrixSize === "7x7") {
    const shuffledArrFromMatrix7x7 = shuffleMatrix(matrix7x7);
    matrix7x7 = getMatrix(shuffledArrFromMatrix7x7, 7);
    positionGameBtns(matrix7x7, 100);
  }

  if (matrixSize === "8x8") {
    const shuffledArrFromMatrix8x8 = shuffleMatrix(matrix8x8);
    matrix8x8 = getMatrix(shuffledArrFromMatrix8x8, 8);
    positionGameBtns(matrix8x8, 100);
  }

  audioShuffle.play();
});

window.addEventListener("load", (e) => {
  const shuffledArrFromMatrix4x4 = shuffleMatrix(matrix4x4);
  matrix4x4 = getMatrix(shuffledArrFromMatrix4x4, 4);
  positionGameBtns(matrix4x4, 100);
});

//change btns position on click===================================================
const blankBtn3x3 = 9;
const blankBtn4x4 = 16;
const blankBtn5x5 = 25;
const blankBtn6x6 = 36;
const blankBtn7x7 = 49;
const blankBtn8x8 = 64;

function findBtnCoordinates(num, matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === num) {
        return { x, y };
      }
    }
  }
  return null;
}

function isValidForSwap(btn1, btn2) {
  const subtractionX = Math.abs(btn1.x - btn2.x);
  const subtractionY = Math.abs(btn1.y - btn2.y);

  return (
    (subtractionX === 1 || subtractionY === 1) &&
    (btn1.x === btn2.x || btn1.y === btn2.y)
  );
}

function initWinArr(row, col) {
  return new Array(row * col).fill(0).map((item, index) => index + 1);
}

function isWon(matrix, dimension) {
  const winArr = initWinArr(dimension, dimension);

  const flatMatrix = matrix.flat();
  for (let i = 0; i < winArr.length; i++) {
    if (flatMatrix[i] !== winArr[i]) {
      return false;
    }
  }
  return true;
}

function swapBtns(btn1, btn2, matrix) {
  const coords1 = matrix[btn1.y][btn1.x];
  matrix[btn1.y][btn1.x] = matrix[btn2.y][btn2.x];
  matrix[btn2.y][btn2.x] = coords1;
  //change
  if (matrixSize === "3x3" && isWon(matrix3x3, 3)) {
    showWinMessage();
    audioWin.play();
  } else if (matrixSize === "4x4" && isWon(matrix4x4, 4)) {
    showWinMessage();
    audioWin.play();
  } else if (matrixSize === "5x5" && isWon(matrix5x5, 5)) {
    showWinMessage();
    audioWin.play();
  } else if (matrixSize === "6x6" && isWon(matrix6x6, 6)) {
    showWinMessage();
    audioWin.play();
  } else if (matrixSize === "7x7" && isWon(matrix7x7, 7)) {
    showWinMessage();
    audioWin.play();
  } else if (matrixSize === "8x8" && isWon(matrix8x8, 8)) {
    showWinMessage();
    audioWin.play();
  }
}

game.addEventListener("click", (e) => {
  const btn = e.target.closest(".game-btn");

  if (!btn) {
    return;
  }

  if (matrixSize === "3x3") {
    switchBtnsOnClick(btn, matrix3x3, blankBtn3x3);
  } else if (matrixSize === "4x4") {
    switchBtnsOnClick(btn, matrix4x4, blankBtn4x4);
  } else if (matrixSize === "5x5") {
    switchBtnsOnClick(btn, matrix5x5, blankBtn5x5);
  } else if (matrixSize === "6x6") {
    switchBtnsOnClick(btn, matrix6x6, blankBtn6x6);
  } else if (matrixSize === "7x7") {
    switchBtnsOnClick(btn, matrix7x7, blankBtn7x7);
  } else if (matrixSize === "8x8") {
    switchBtnsOnClick(btn, matrix8x8, blankBtn8x8);
  }
});

function switchBtnsOnClick(btn, matrix, blankBtn) {
  const btnNum = Number(btn.dataset.matrixNum);
  const btnCoord = findBtnCoordinates(btnNum, matrix);
  const blankBtnCoord = findBtnCoordinates(blankBtn, matrix);

  const isSwapValid = isValidForSwap(btnCoord, blankBtnCoord);

  if (isSwapValid) {
    swapBtns(blankBtnCoord, btnCoord, matrix);
    positionGameBtns(matrix);
    countMoves();
    audioClick.play();
  }
}

//change btns position on arrow===================================================
window.addEventListener("keydown", (e) => {
  if (!e.key.includes("Arrow")) {
    return;
  }

  const matrixLength3x3 = matrix3x3.length;
  const matrixLength4x4 = matrix4x4.length;
  const matrixLength5x5 = matrix5x5.length;
  const matrixLength6x6 = matrix6x6.length;
  const matrixLength7x7 = matrix7x7.length;
  const matrixLength8x8 = matrix8x8.length;

  const direction = e.key.split("Arrow")[1].toLowerCase();

  if (matrixSize === "3x3") {
    switchBtnsOnArrow(blankBtn3x3, matrix3x3, matrixLength3x3, direction);
  } else if (matrixSize === "4x4") {
    switchBtnsOnArrow(blankBtn4x4, matrix4x4, matrixLength4x4, direction);
  } else if (matrixSize === "5x5") {
    switchBtnsOnArrow(blankBtn5x5, matrix5x5, matrixLength5x5, direction);
  } else if (matrixSize === "6x6") {
    switchBtnsOnArrow(blankBtn6x6, matrix6x6, matrixLength6x6, direction);
  } else if (matrixSize === "7x7") {
    switchBtnsOnArrow(blankBtn7x7, matrix7x7, matrixLength7x7, direction);
  } else if (matrixSize === "8x8") {
    switchBtnsOnArrow(blankBtn8x8, matrix8x8, matrixLength8x8, direction);
  }
});

function switchBtnsOnArrow(blankBtn, matrix, matrixLength, direction) {
  const blankBtnCoord = findBtnCoordinates(blankBtn, matrix);
  const btnCoord = {
    x: blankBtnCoord.x,
    y: blankBtnCoord.y,
  };

  if (direction === "up") btnCoord.y += 1;
  if (direction === "down") btnCoord.y -= 1;
  if (direction === "left") btnCoord.x += 1;
  if (direction === "right") btnCoord.x -= 1;

  if (
    btnCoord.y >= matrixLength ||
    btnCoord.x >= matrixLength ||
    btnCoord.x < 0 ||
    btnCoord.y < 0
  ) {
    return;
  }

  swapBtns(blankBtnCoord, btnCoord, matrix);
  positionGameBtns(matrix);
  countMoves();
  audioClick.play();
}

//change btns position on drag-end-drop=======================
let swapDone = false;

gameBtns.forEach((item) => {
  item.setAttribute("draggable", "true");
});

game.addEventListener("dragstart", (e) => {
  e.preventDefault();

  const btn = e.target.closest(".game-btn");

  if (!btn) {
    return;
  }

  if (matrixSize === "3x3") {
    switchBtnsOnDrag(btn, matrix3x3, blankBtn3x3);
  } else if (matrixSize === "4x4") {
    switchBtnsOnDrag(btn, matrix4x4, blankBtn4x4);
  } else if (matrixSize === "5x5") {
    switchBtnsOnDrag(btn, matrix5x5, blankBtn5x5);
  } else if (matrixSize === "6x6") {
    switchBtnsOnDrag(btn, matrix6x6, blankBtn6x6);
  } else if (matrixSize === "7x7") {
    switchBtnsOnDrag(btn, matrix7x7, blankBtn7x7);
  } else if (matrixSize === "8x8") {
    switchBtnsOnDrag(btn, matrix8x8, blankBtn8x8);
  }
});

function switchBtnsOnDrag(btn, matrix, blankBtn) {
  const btnNum = Number(btn.dataset.matrixNum);
  const btnCoord = findBtnCoordinates(btnNum, matrix);
  const blankBtnCoord = findBtnCoordinates(blankBtn, matrix);

  const isSwapValid = isValidForSwap(btnCoord, blankBtnCoord);

  if (isSwapValid) {
    swapBtns(blankBtnCoord, btnCoord, matrix);
    positionGameBtns(matrix);
    swapDone = true;
  }

  if (swapDone) {
    countMoves();
    audioClick.play();
  }

  swapDone = false;
}
//stop===================================================
function animateGameOnStop() {
  game.style.opacity = "0.5";

  setTimeout(() => {
    game.style.opacity = "1";
  }, 500);
}

stop.addEventListener("click", () => {
  if (matrixSize === "3x3") {
    const shuffledArrFromMatrix3x3 = shuffleMatrix(matrix3x3);
    matrix3x3 = getMatrix(shuffledArrFromMatrix3x3, 3);
    positionGameBtns(matrix3x3, 100);
  }

  if (matrixSize === "4x4") {
    const shuffledArrFromMatrix4x4 = shuffleMatrix(matrix4x4);
    matrix4x4 = getMatrix(shuffledArrFromMatrix4x4, 4);
    positionGameBtns(matrix4x4, 100);
  }

  if (matrixSize === "5x5") {
    const shuffledArrFromMatrix5x5 = shuffleMatrix(matrix5x5);
    matrix5x5 = getMatrix(shuffledArrFromMatrix5x5, 5);
    positionGameBtns(matrix5x5, 100);
  }

  if (matrixSize === "6x6") {
    const shuffledArrFromMatrix6x6 = shuffleMatrix(matrix6x6);
    matrix6x6 = getMatrix(shuffledArrFromMatrix6x6, 6);
    positionGameBtns(matrix6x6, 100);
  }

  if (matrixSize === "7x7") {
    const shuffledArrFromMatrix7x7 = shuffleMatrix(matrix7x7);
    matrix7x7 = getMatrix(shuffledArrFromMatrix7x7, 7);
    positionGameBtns(matrix7x7, 100);
  }

  if (matrixSize === "8x8") {
    const shuffledArrFromMatrix8x8 = shuffleMatrix(matrix8x8);
    matrix8x8 = getMatrix(shuffledArrFromMatrix8x8, 8);
    positionGameBtns(matrix8x8, 100);
  }

  animateGameOnStop();

  audioStop.play();
});
