const sliderbarInput = document.getElementById('sliderbarInput');
const sliderbarFill = document.querySelector('.sliderbar__fill');

function fillSliderbarInput() {
  sliderbarInput.oninput = function() {
    let valNum = 8;
    let valFill = 100 / valNum;
    let fillProgress = +this.value;
    if (fillProgress === 0) {sliderbarFill.style.width = `0%`};
    if (fillProgress === 1) {sliderbarFill.style.width = `${valFill}%`};
    if (fillProgress === 2) {sliderbarFill.style.width = `${valFill * 2}%`};
    if (fillProgress === 3) {sliderbarFill.style.width = `${valFill * 3}%`};
    if (fillProgress === 4) {sliderbarFill.style.width = `${valFill * 4}%`};
    if (fillProgress === 5) {sliderbarFill.style.width = `${valFill * 5}%`};
    if (fillProgress === 6) {sliderbarFill.style.width = `${valFill * 6}%`};
    if (fillProgress === 7) {sliderbarFill.style.width = `${valFill * 7}%`};
    if (fillProgress === 8) {sliderbarFill.style.width = `${valFill * 8}%`};
    
  }
}

let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.testimonials__item');

sliderbarInput.addEventListener('input', (e) => {
  const itemWidth = parseInt(getComputedStyle(items[0]).getPropertyValue("width"));
  const itemGap = parseInt(getComputedStyle(track).getPropertyValue('gap'));

  const movePosition = slidesToScroll * (itemWidth + itemGap);
  console.log(itemWidth);
  console.log(itemGap);
  console.log(movePosition);

  let value = +sliderbarInput.value;
  console.log(value);

  if(value === 0) {
    track.style.transform = `translateX(${position}px)`;
    console.log(position);
  }
  if(value === 1) {
    track.style.transform = `translateX(-${movePosition}px)`;
    console.log(-movePosition);
  }
  if(value === 2) {
    track.style.transform = `translateX(-${movePosition * 2}px)`;
    console.log(-movePosition * 2);
  }
  if(value === 3) {
    track.style.transform = `translateX(-${movePosition * 3}px)`;
    console.log(-movePosition * 3);
  }
  if(value === 4) {
    track.style.transform = `translateX(-${movePosition * 4}px)`;
    console.log(-movePosition * 4);
  }
  if(value === 5) {
    track.style.transform = `translateX(-${movePosition * 5}px)`;
    console.log(-movePosition * 5);
  }
  if(value === 6) {
    track.style.transform = `translateX(-${movePosition * 6}px)`;
    console.log(-movePosition * 6);
  }
  if(value === 7) {
    track.style.transform = `translateX(-${movePosition * 7}px)`;
    console.log(-movePosition * 7);
  }
  if(value === 8) {
    track.style.transform = `translateX(-${movePosition * 8}px)`;
    console.log(-movePosition * 8);
  }
})



export {sliderbarInput, fillSliderbarInput}