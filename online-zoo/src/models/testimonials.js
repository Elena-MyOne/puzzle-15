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
const slidesToScroll = 1;
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.testimonials__item');

sliderbarInput.addEventListener('input', (e) => {
  const itemWidth = parseInt(getComputedStyle(items[0]).getPropertyValue("width"));
  const itemGap = parseInt(getComputedStyle(track).getPropertyValue('gap'));

  const movePosition = slidesToScroll * (itemWidth + itemGap);

  let value = +sliderbarInput.value;

  if(value === 0) {
    track.style.transform = `translateX(${position}px)`;
  }
  if(value === 1) {
    track.style.transform = `translateX(-${movePosition}px)`;
  }
  if(value === 2) {
    track.style.transform = `translateX(-${movePosition * 2}px)`;
  }
  if(value === 3) {
    track.style.transform = `translateX(-${movePosition * 3}px)`;
  }
  if(value === 4) {
    track.style.transform = `translateX(-${movePosition * 4}px)`;
  }
  if(value === 5) {
    track.style.transform = `translateX(-${movePosition * 5}px)`;
  }
  if(value === 6) {
    track.style.transform = `translateX(-${movePosition * 6}px)`;
  }
  if(value === 7) {
    track.style.transform = `translateX(-${movePosition * 7}px)`;
  }
  if(value === 8) {
    track.style.transform = `translateX(-${movePosition * 8}px)`;
  }
})

const testimonials = document.querySelector('.testimonials');
const testimonialsBack = document.querySelector('.testimonials__back');
const testimonialsCardView = document.querySelector('.testimonials__card-view');
const testimonialsCardClose = document.querySelector('.testimonials__card-close');

testimonials.addEventListener('click', (e) => {
  let target = e.target.closest('.testimonials__item')
  if(target) {
    testimonialsBack.classList.toggle('active');
    testimonialsCardView.classList.toggle('active');

    let copy = target.innerHTML;
    testimonialsCardView.innerHTML = copy;
    testimonialsCardView.prepend(closeCard)
  }
})

function removeCard() {
  testimonialsBack.classList.remove('active');
  testimonialsCardView.classList.remove('active');
  testimonialsCardView.classList.remove('active');
  testimonialsCardView.innerHTML = '';
}

testimonials.addEventListener('click', (e) => {
  if(e.target === testimonialsBack) {
    removeCard();
  }
})

testimonialsCardClose.addEventListener('click', removeCard)
document.querySelector('.testimonials__card').addEventListener('click', removeCard)
document.querySelector('.pick').addEventListener('click', removeCard)
document.querySelector('.footer').addEventListener('click', removeCard)


export {sliderbarInput, fillSliderbarInput, testimonials}