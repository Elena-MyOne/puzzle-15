function initGameArr(row, col) {
  return new Array(row * col).fill(0).map((item, index) => index + 1);
}

const arr4x4 = initGameArr(4, 4);
console.log(arr4x4);
