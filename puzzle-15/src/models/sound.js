import { mute } from "./body";

export const audioWin = new Audio();
audioWin.src = "../assets/audio/end.mp3";

export const audioClick = new Audio();
audioClick.src = "../assets/audio/click.mp3";

export const audioStop = new Audio();
audioStop.src = "../assets/audio/stop.mp3";

export const audioShuffle = new Audio();
audioShuffle.src = "../assets/audio/shuffle.mp3";

mute.addEventListener("click", (e) => {
  mute.classList.toggle("sound-off");

  if (mute.classList.contains("sound-off")) {
    audioClick.muted = true;
    audioWin.muted = true;
    audioStop.muted = true;
    audioShuffle.muted = true;
  } else {
    audioClick.muted = false;
    audioWin.muted = false;
    audioStop.muted = false;
    audioShuffle.muted = false;
  }
});
