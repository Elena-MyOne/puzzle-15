import 'swiper/css';
import 'swiper/css/navigation';
import Swiper, { Navigation } from 'swiper';

import './styles/style.scss';

import {sliderbarInput, fillSliderbarInput} from './models/testimonials.js'

fillSliderbarInput();
// import json from './assets/json.json'  //for json files import
// import xml from './assets/data.xml'  //for xml files import

// import Post from "@models/Post"; //js file example
// import WebpackLogo from './assets/webpack-logo' //js image example

// const post = new Post('Webpack Post Title', WebpackLogo)


//dynamic import lodash
// import('lodash').then(({default: lodash}) => {  
//   console.log('lodash: ', lodash.random(0, 100, true))
// }) 


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
});

