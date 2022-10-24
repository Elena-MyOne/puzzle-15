import 'swiper/css';
import 'swiper/css/navigation';
import Swiper, { Navigation } from 'swiper';

import './styles/style.scss';

import {headerBurger, headerList, headerBody} from './models/header.js'

import { donate } from './models/donate';

import { Item } from './models/Items';
import {changeOrder, getRandomSlides, createSlide3} from './models/pets'

import {sliderbarInput, fillSliderbarInput, testimonials} from './models/testimonials.js';

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
});

//testimonials============================================
fillSliderbarInput();

//=================================================
//dynamic import lodash
// import('lodash').then(({default: lodash}) => {  
//   console.log('lodash: ', lodash.random(0, 100, true))
// }) 
