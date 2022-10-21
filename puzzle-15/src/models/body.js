export const body = document.body;

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
body.append(wrapper);

const menu = document.createElement("div");
menu.classList.add("menu");
wrapper.append(menu);

const shuffle = document.createElement("button");
shuffle.classList.add("shuffle");
shuffle.classList.add("menu-btn");
shuffle.innerHTML = "Shuffle and start";
menu.append(shuffle);

const stop = document.createElement("button");
stop.classList.add("stop");
stop.classList.add("menu-btn");
stop.innerHTML = "Stop";
menu.append(stop);

const save = document.createElement("button");
save.classList.add("save");
save.classList.add("menu-btn");
save.innerHTML = "Save";
menu.append(save);

const results = document.createElement("button");
results.classList.add("save");
results.classList.add("menu-btn");
results.innerHTML = "Results";
menu.append(results);

const mute = document.createElement("button");
mute.classList.add("mute");
mute.classList.add("menu-btn");
menu.append(mute);
//==================================
const statistic = document.createElement("div");
statistic.classList.add("statistic");
wrapper.append(statistic);

const moves = document.createElement("div");
moves.classList.add("moves");
moves.innerHTML = "Moves: ";
statistic.append(moves);

const movesNum = document.createElement("span");
movesNum.classList.add("moves-num");
movesNum.innerHTML = "0";
moves.append(movesNum);

const time = document.createElement("div");
time.classList.add("time");
time.innerHTML = "Time: ";
statistic.append(time);

const timeNum = document.createElement("span");
timeNum.classList.add("time-num");
timeNum.innerHTML = "00:00:00";
time.append(timeNum);
//=====================================
export const game = document.createElement("div");
game.classList.add("game");
wrapper.append(game);

const gameBtn1 = document.createElement("button");
gameBtn1.classList.add("game-btn");
gameBtn1.innerHTML = "1";
game.append(gameBtn1);

const gameBtn2 = document.createElement("button");
gameBtn2.classList.add("game-btn");
gameBtn2.innerHTML = "2";
game.append(gameBtn2);

const gameBtn3 = document.createElement("button");
gameBtn3.classList.add("game-btn");
gameBtn3.innerHTML = "3";
game.append(gameBtn3);

const gameBtn4 = document.createElement("button");
gameBtn4.classList.add("game-btn");
gameBtn4.innerHTML = "4";
game.append(gameBtn4);

const gameBtn5 = document.createElement("button");
gameBtn5.classList.add("game-btn");
gameBtn5.innerHTML = "5";
game.append(gameBtn5);

const gameBtn6 = document.createElement("button");
gameBtn6.classList.add("game-btn");
gameBtn6.innerHTML = "6";
game.append(gameBtn6);

const gameBtn7 = document.createElement("button");
gameBtn7.classList.add("game-btn");
gameBtn7.innerHTML = "7";
game.append(gameBtn7);

const gameBtn8 = document.createElement("button");
gameBtn8.classList.add("game-btn");
gameBtn8.innerHTML = "8";
game.append(gameBtn8);

const gameBtn9 = document.createElement("button");
gameBtn9.classList.add("game-btn");
gameBtn9.innerHTML = "9";
game.append(gameBtn9);

const gameBtn10 = document.createElement("button");
gameBtn10.classList.add("game-btn");
gameBtn10.innerHTML = "10";
game.append(gameBtn10);

const gameBtn11 = document.createElement("button");
gameBtn11.classList.add("game-btn");
gameBtn11.innerHTML = "11";
game.append(gameBtn11);

const gameBtn12 = document.createElement("button");
gameBtn12.classList.add("game-btn");
gameBtn12.innerHTML = "12";
game.append(gameBtn12);

const gameBtn13 = document.createElement("button");
gameBtn13.classList.add("game-btn");
gameBtn13.innerHTML = "13";
game.append(gameBtn13);

const gameBtn14 = document.createElement("button");
gameBtn14.classList.add("game-btn");
gameBtn14.innerHTML = "14";
game.append(gameBtn14);

const gameBtn15 = document.createElement("button");
gameBtn15.classList.add("game-btn");
gameBtn15.innerHTML = "15";
game.append(gameBtn15);

const gameBtn16 = document.createElement("button");
gameBtn16.classList.add("game-btn");
gameBtn16.innerHTML = "16";
game.append(gameBtn16);
//========================================================
const level = document.createElement("div");
level.classList.add("level");
wrapper.append(level);

const levelBtn3 = document.createElement("button");
levelBtn3.classList.add("level-btn");
levelBtn3.innerHTML = "3x3";
level.append(levelBtn3);

const levelBtn4 = document.createElement("button");
levelBtn4.classList.add("level-btn");
levelBtn4.innerHTML = "4x4";
level.append(levelBtn4);

const levelBtn5 = document.createElement("button");
levelBtn5.classList.add("level-btn");
levelBtn5.innerHTML = "5x5";
level.append(levelBtn5);

const levelBtn6 = document.createElement("button");
levelBtn6.classList.add("level-btn");
levelBtn6.innerHTML = "6x6";
level.append(levelBtn6);

const levelBtn7 = document.createElement("button");
levelBtn7.classList.add("level-btn");
levelBtn7.innerHTML = "7x7";
level.append(levelBtn7);

const levelBtn8 = document.createElement("button");
levelBtn8.classList.add("level-btn");
levelBtn8.innerHTML = "8x8";
level.append(levelBtn8);

//=========================================================
/*
<div class="wrapper">

    <div class="menu">
      <button class="shuffle menu-btn" id="shuffle">Shuffle and start</button>
      <button class="stop menu-btn" id="stop">Stop</button>
      <button class="save menu-btn" id="save">save</button>
      <button class="results menu-btn" id="results">Results</button>
      <button class="mute menu-btn" id="results"></button>
    </div>

    <div class="statistic">
      <div class="moves">Moves: <span class="moves-num">0</span></div>
      <div class="time">Time: <span class="time-num">00:00:00</span></div>
    </div>

    <div class="game">
      <button class="game-btn">1</button>
      <button class="game-btn">2</button>
      <button class="game-btn">3</button>
      <button class="game-btn">4</button>
      <button class="game-btn">5</button>
      <button class="game-btn">6</button>
      <button class="game-btn">7</button>
      <button class="game-btn">8</button>
      <button class="game-btn">9</button>
      <button class="game-btn">10</button>
      <button class="game-btn">11</button>
      <button class="game-btn">12</button>
      <button class="game-btn">13</button>
      <button class="game-btn">14</button>
      <button class="game-btn">15</button>
      <button class="game-btn">16</button>
    </div>

    <div class="level">
      <button class="level-btn">3x3</button>
      <button class="level-btn">4x4</button>
      <button class="level-btn">5x5</button>
      <button class="level-btn">6x6</button>
      <button class="level-btn">7x7</button>
      <button class="level-btn">8x8</button>
    </div>

  </div>*/
