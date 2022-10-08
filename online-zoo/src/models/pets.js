import {getRandomArbitrary} from './functions';
import { Item } from './Items';

// const petsSlide3 = document.querySelector('.pets-slide-3');

const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');
const item5 = document.querySelector('.item5');
const item6 = document.querySelector('.item6');

const item8 = document.querySelector('.item8');
const item9 = document.querySelector('.item9');
const item10 = document.querySelector('.item10');
const item11 = document.querySelector('.item11');
const item12 = document.querySelector('.item12');
const item13 = document.querySelector('.item13');

const prev = document.querySelector('.slider-pets__button-prev');
const next = document.querySelector('.slider-pets__button-next');
const petsSlide1 = document.querySelector('.pets-slide-1');
const petsSlide2 = document.querySelector('.pets-slide-2');
const petsSlide3 = document.querySelector('.pets-slide-3');

// const item7 = document.querySelector('.item7');

function getRandomSlides(min = 0, max = 6, num = 6) {
  const result = [];
  while(result.length !== num) {
    let random = getRandomArbitrary(min, max)
    if(!result.includes(random)) {
      result.push(random)
    }
  }
  return result
}

const item14 = new Item(14, 'rhinoceros', 'Rhinoceros', 'Native to Africa', 'banan_icon', 'herbivore');
const item15 = new Item(15, 'white bear', 'White bear', 'Native to Arctica', 'meet-fish_icon', 'predators');
const item16 = new Item(16, 'lemurs', 'Lemurs', 'Native to Madagascar', 'banan_icon', 'herbivore');
const item17 = new Item(17, 'zebra', 'Zebra', 'Native to Africa', 'banan_icon', 'herbivore');
const item18 = new Item(18, 'lion', 'Lion', 'Native to Africa', 'meet-fish_icon', 'predators');
const item19 = new Item(19, 'parrots', 'Parrots', 'Native to South America', 'banan_icon', 'herbivore');

function createSlide3() {
  let slidesNum = getRandomSlides(1, 7, 6);
  petsSlide3.innerHTML = '';
  petsSlide3.insertAdjacentHTML(
    'beforeend', 
    `
    <div class="pets-slide__body pets-slide__body-3">
      ${item14.makeItem(slidesNum[0])}
      ${item15.makeItem(slidesNum[1])}
      ${item16.makeItem(slidesNum[2])}
      ${item17.makeItem(slidesNum[3])}
      ${item18.makeItem(slidesNum[4])}
      ${item19.makeItem(slidesNum[5])}
    </div>
    `)
}

// function createSlide3() {
//   petsSlide3.insertAdjacentHTML(
//     'beforeend', 
//     `
//     <div class="pets-slide__body pets-slide__body-3">
//       ${item14.makeItem()}
//       ${item15.makeItem()}
//       ${item16.makeItem()}
//       ${item17.makeItem()}
//       ${item18.makeItem()}
//       ${item19.makeItem()}
//     </div>
//     `)
// }

function changeOrder() {
  let slidesNum = getRandomSlides(1, 7, 6);

    item1.style.order = `${slidesNum[0]}`;
    item2.style.order = `${slidesNum[1]}`;
    item3.style.order = `${slidesNum[2]}`;
    item4.style.order = `${slidesNum[3]}`;
    item5.style.order = `${slidesNum[4]}`;
    item6.style.order = `${slidesNum[5]}`;

    item8.style.order = `${slidesNum[0]}`;
    item9.style.order = `${slidesNum[1]}`;
    item10.style.order = `${slidesNum[2]}`;
    item11.style.order = `${slidesNum[3]}`;
    item12.style.order = `${slidesNum[4]}`;
    item13.style.order = `${slidesNum[5]}`;
}

prev.addEventListener('click', changeOrder);
next.addEventListener('click', changeOrder);

prev.addEventListener('click', createSlide3);
next.addEventListener('click', createSlide3);

export {changeOrder, getRandomSlides, createSlide3}