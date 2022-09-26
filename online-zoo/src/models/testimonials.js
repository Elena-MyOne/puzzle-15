const sliderbarInput = document.getElementById('sliderbarInput');
const sliderbarFill = document.querySelector('.sliderbar__fill');

function fillSliderbarInput() {
  sliderbarInput.oninput = function() {
    let fillProgress = +this.value;
    if (fillProgress === 2) {sliderbarFill.style.width = '40.4%'};
    if (fillProgress === 3) {sliderbarFill.style.width = '60.4%'};
    if (fillProgress === 4) {sliderbarFill.style.width = '80.4%'};
    if (fillProgress === 5) {sliderbarFill.style.width = '100%'};
    if (fillProgress === 1) {sliderbarFill.style.width = '20.4%'};
  }
}



export {sliderbarInput, fillSliderbarInput}