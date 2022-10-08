import 'swiper/css';
import 'swiper/css/navigation';
import Swiper, { Navigation } from 'swiper';

import './styles/style.scss';

import {sliderbarInput, fillSliderbarInput} from './models/testimonials.js';
import {headerBurger, headerList, headerBody} from './models/header.js'

import { Item } from './models/Items';
import {changeOrder, getRandomSlides, createSlide3} from './models/pets'


//pets=====================================
createSlide3();

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.slider-pets__button-next',
    prevEl: '.slider-pets__button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  speed: 500,
  observer: true,
  observeSlideChildren: true,
  observeParents: true,

  // virtual: {
  //   slides: [
  //     `Slide-${slidesNum[0]}`,
  //     `Slide-${slidesNum[1]}`,
  //     `Slide-${slidesNum[2]}`,
  //     `Slide-${slidesNum[3]}`,
  //     `Slide-${slidesNum[4]}`,
  //     `Slide-${slidesNum[5]}`
  //   ]
  // }

  // virtual: {
  //   slides: (()=> {
  //     let slide = []
  //     for (let i = 0; i < 5; i++) {
  //       slide.push(`pets-slide-${i}`)
  //     }
  //   })
  // }
});

//testimonials============================================
fillSliderbarInput();

//=================================================
//dynamic import lodash
// import('lodash').then(({default: lodash}) => {  
//   console.log('lodash: ', lodash.random(0, 100, true))
// }) 
