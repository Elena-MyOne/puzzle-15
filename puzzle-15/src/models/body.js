export const body = document.body;

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
body.append(wrapper);

const menu = document.createElement("div");
menu.classList.add("menu");
wrapper.append(menu);

export const shuffle = document.createElement("button");
shuffle.classList.add("shuffle");
shuffle.classList.add("menu-btn");
shuffle.innerHTML = "Shuffle and start";
menu.append(shuffle);

export const stop = document.createElement("button");
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

export const mute = document.createElement("button");
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

export const movesNum = document.createElement("span");
movesNum.classList.add("moves-num");
movesNum.innerHTML = "0";
moves.append(movesNum);

const time = document.createElement("div");
time.classList.add("time");
time.innerHTML = "Time: ";
statistic.append(time);

export const timeNum = document.createElement("span");
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

const gameBtn17 = document.createElement("button");
gameBtn17.classList.add("game-btn");
gameBtn17.innerHTML = "17";
gameBtn17.setAttribute("hidden", "");
game.append(gameBtn17);

const gameBtn18 = document.createElement("button");
gameBtn18.classList.add("game-btn");
gameBtn18.innerHTML = "18";
gameBtn18.setAttribute("hidden", "");
game.append(gameBtn18);

const gameBtn19 = document.createElement("button");
gameBtn19.classList.add("game-btn");
gameBtn19.innerHTML = "19";
gameBtn19.setAttribute("hidden", "");
game.append(gameBtn19);

const gameBtn20 = document.createElement("button");
gameBtn20.classList.add("game-btn");
gameBtn20.innerHTML = "20";
gameBtn20.setAttribute("hidden", "");
game.append(gameBtn20);

const gameBtn21 = document.createElement("button");
gameBtn21.classList.add("game-btn");
gameBtn21.innerHTML = "21";
gameBtn21.setAttribute("hidden", "");
game.append(gameBtn21);

const gameBtn22 = document.createElement("button");
gameBtn22.classList.add("game-btn");
gameBtn22.innerHTML = "22";
gameBtn22.setAttribute("hidden", "");
game.append(gameBtn22);

const gameBtn23 = document.createElement("button");
gameBtn23.classList.add("game-btn");
gameBtn23.innerHTML = "23";
gameBtn23.setAttribute("hidden", "");
game.append(gameBtn23);

const gameBtn24 = document.createElement("button");
gameBtn24.classList.add("game-btn");
gameBtn24.innerHTML = "24";
gameBtn24.setAttribute("hidden", "");
game.append(gameBtn24);

const gameBtn25 = document.createElement("button");
gameBtn25.classList.add("game-btn");
gameBtn25.innerHTML = "25";
gameBtn25.setAttribute("hidden", "");
game.append(gameBtn25);

const gameBtn26 = document.createElement("button");
gameBtn26.classList.add("game-btn");
gameBtn26.innerHTML = "26";
gameBtn26.setAttribute("hidden", "");
game.append(gameBtn26);

const gameBtn27 = document.createElement("button");
gameBtn27.classList.add("game-btn");
gameBtn27.innerHTML = "27";
gameBtn27.setAttribute("hidden", "");
game.append(gameBtn27);

const gameBtn28 = document.createElement("button");
gameBtn28.classList.add("game-btn");
gameBtn28.innerHTML = "28";
gameBtn28.setAttribute("hidden", "");
game.append(gameBtn28);

const gameBtn29 = document.createElement("button");
gameBtn29.classList.add("game-btn");
gameBtn29.innerHTML = "29";
gameBtn29.setAttribute("hidden", "");
game.append(gameBtn29);

const gameBtn30 = document.createElement("button");
gameBtn30.classList.add("game-btn");
gameBtn30.innerHTML = "30";
gameBtn30.setAttribute("hidden", "");
game.append(gameBtn30);

const gameBtn31 = document.createElement("button");
gameBtn31.classList.add("game-btn");
gameBtn31.innerHTML = "31";
gameBtn31.setAttribute("hidden", "");
game.append(gameBtn31);

const gameBtn32 = document.createElement("button");
gameBtn32.classList.add("game-btn");
gameBtn32.innerHTML = "32";
gameBtn32.setAttribute("hidden", "");
game.append(gameBtn32);

const gameBtn33 = document.createElement("button");
gameBtn33.classList.add("game-btn");
gameBtn33.innerHTML = "33";
gameBtn33.setAttribute("hidden", "");
game.append(gameBtn33);

const gameBtn34 = document.createElement("button");
gameBtn34.classList.add("game-btn");
gameBtn34.innerHTML = "34";
gameBtn34.setAttribute("hidden", "");
game.append(gameBtn34);

const gameBtn35 = document.createElement("button");
gameBtn35.classList.add("game-btn");
gameBtn35.innerHTML = "35";
gameBtn35.setAttribute("hidden", "");
game.append(gameBtn35);

const gameBtn36 = document.createElement("button");
gameBtn36.classList.add("game-btn");
gameBtn36.innerHTML = "36";
gameBtn36.setAttribute("hidden", "");
game.append(gameBtn36);

const gameBtn37 = document.createElement("button");
gameBtn37.classList.add("game-btn");
gameBtn37.innerHTML = "37";
gameBtn37.setAttribute("hidden", "");
game.append(gameBtn37);

const gameBtn38 = document.createElement("button");
gameBtn38.classList.add("game-btn");
gameBtn38.innerHTML = "38";
gameBtn38.setAttribute("hidden", "");
game.append(gameBtn38);

const gameBtn39 = document.createElement("button");
gameBtn39.classList.add("game-btn");
gameBtn39.innerHTML = "39";
gameBtn39.setAttribute("hidden", "");
game.append(gameBtn39);

const gameBtn40 = document.createElement("button");
gameBtn40.classList.add("game-btn");
gameBtn40.innerHTML = "40";
gameBtn40.setAttribute("hidden", "");
game.append(gameBtn40);

const gameBtn41 = document.createElement("button");
gameBtn41.classList.add("game-btn");
gameBtn41.innerHTML = "41";
gameBtn41.setAttribute("hidden", "");
game.append(gameBtn41);

const gameBtn42 = document.createElement("button");
gameBtn42.classList.add("game-btn");
gameBtn42.innerHTML = "42";
gameBtn42.setAttribute("hidden", "");
game.append(gameBtn42);

const gameBtn43 = document.createElement("button");
gameBtn43.classList.add("game-btn");
gameBtn43.innerHTML = "43";
gameBtn43.setAttribute("hidden", "");
game.append(gameBtn43);

const gameBtn44 = document.createElement("button");
gameBtn44.classList.add("game-btn");
gameBtn44.innerHTML = "44";
gameBtn44.setAttribute("hidden", "");
game.append(gameBtn44);

const gameBtn45 = document.createElement("button");
gameBtn45.classList.add("game-btn");
gameBtn45.innerHTML = "45";
gameBtn45.setAttribute("hidden", "");
game.append(gameBtn45);

const gameBtn46 = document.createElement("button");
gameBtn46.classList.add("game-btn");
gameBtn46.innerHTML = "46";
gameBtn46.setAttribute("hidden", "");
game.append(gameBtn46);

const gameBtn47 = document.createElement("button");
gameBtn47.classList.add("game-btn");
gameBtn47.innerHTML = "47";
gameBtn47.setAttribute("hidden", "");
game.append(gameBtn47);

const gameBtn48 = document.createElement("button");
gameBtn48.classList.add("game-btn");
gameBtn48.innerHTML = "48";
gameBtn48.setAttribute("hidden", "");
game.append(gameBtn48);

const gameBtn49 = document.createElement("button");
gameBtn49.classList.add("game-btn");
gameBtn49.innerHTML = "49";
gameBtn49.setAttribute("hidden", "");
game.append(gameBtn49);

const gameBtn50 = document.createElement("button");
gameBtn50.classList.add("game-btn");
gameBtn50.innerHTML = "50";
gameBtn50.setAttribute("hidden", "");
game.append(gameBtn50);

const gameBtn51 = document.createElement("button");
gameBtn51.classList.add("game-btn");
gameBtn51.innerHTML = "51";
gameBtn51.setAttribute("hidden", "");
game.append(gameBtn51);

const gameBtn52 = document.createElement("button");
gameBtn52.classList.add("game-btn");
gameBtn52.innerHTML = "52";
gameBtn52.setAttribute("hidden", "");
game.append(gameBtn52);

const gameBtn53 = document.createElement("button");
gameBtn53.classList.add("game-btn");
gameBtn53.innerHTML = "53";
gameBtn53.setAttribute("hidden", "");
game.append(gameBtn53);

const gameBtn54 = document.createElement("button");
gameBtn54.classList.add("game-btn");
gameBtn54.innerHTML = "54";
gameBtn54.setAttribute("hidden", "");
game.append(gameBtn54);

const gameBtn55 = document.createElement("button");
gameBtn55.classList.add("game-btn");
gameBtn55.innerHTML = "55";
gameBtn55.setAttribute("hidden", "");
game.append(gameBtn55);

const gameBtn56 = document.createElement("button");
gameBtn56.classList.add("game-btn");
gameBtn56.innerHTML = "56";
gameBtn56.setAttribute("hidden", "");
game.append(gameBtn56);

const gameBtn57 = document.createElement("button");
gameBtn57.classList.add("game-btn");
gameBtn57.innerHTML = "57";
gameBtn57.setAttribute("hidden", "");
game.append(gameBtn57);

const gameBtn58 = document.createElement("button");
gameBtn58.classList.add("game-btn");
gameBtn58.innerHTML = "58";
gameBtn58.setAttribute("hidden", "");
game.append(gameBtn58);

const gameBtn59 = document.createElement("button");
gameBtn59.classList.add("game-btn");
gameBtn59.innerHTML = "59";
gameBtn59.setAttribute("hidden", "");
game.append(gameBtn59);

const gameBtn60 = document.createElement("button");
gameBtn60.classList.add("game-btn");
gameBtn60.innerHTML = "60";
gameBtn60.setAttribute("hidden", "");
game.append(gameBtn60);

const gameBtn61 = document.createElement("button");
gameBtn61.classList.add("game-btn");
gameBtn61.innerHTML = "61";
gameBtn61.setAttribute("hidden", "");
game.append(gameBtn61);

const gameBtn62 = document.createElement("button");
gameBtn62.classList.add("game-btn");
gameBtn62.innerHTML = "62";
gameBtn62.setAttribute("hidden", "");
game.append(gameBtn62);

const gameBtn63 = document.createElement("button");
gameBtn63.classList.add("game-btn");
gameBtn63.innerHTML = "63";
gameBtn63.setAttribute("hidden", "");
game.append(gameBtn63);

const gameBtn64 = document.createElement("button");
gameBtn64.classList.add("game-btn");
gameBtn64.innerHTML = "64";
gameBtn64.setAttribute("hidden", "");
game.append(gameBtn64);
//========================================================
export const gameWin = document.createElement("div");
gameWin.classList.add("game-win");
game.append(gameWin);

export const gameWinMessage = document.createElement("div");
gameWinMessage.classList.add("game-win-message");
gameWin.append(gameWinMessage);
//========================================================
export const level = document.createElement("div");
level.classList.add("level");
wrapper.append(level);

export const levelBtn3 = document.createElement("button");
levelBtn3.classList.add("level-btn");
levelBtn3.innerHTML = "3x3";
level.append(levelBtn3);

export const levelBtn4 = document.createElement("button");
levelBtn4.classList.add("level-btn");
levelBtn4.classList.add("active");
levelBtn4.innerHTML = "4x4";
level.append(levelBtn4);

export const levelBtn5 = document.createElement("button");
levelBtn5.classList.add("level-btn");
levelBtn5.innerHTML = "5x5";
level.append(levelBtn5);

export const levelBtn6 = document.createElement("button");
levelBtn6.classList.add("level-btn");
levelBtn6.innerHTML = "6x6";
level.append(levelBtn6);

export const levelBtn7 = document.createElement("button");
levelBtn7.classList.add("level-btn");
levelBtn7.innerHTML = "7x7";
level.append(levelBtn7);

export const levelBtn8 = document.createElement("button");
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
