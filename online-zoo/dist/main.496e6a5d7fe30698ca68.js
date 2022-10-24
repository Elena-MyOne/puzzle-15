(()=>{"use strict";var e,t={136:(e,t,s)=>{var r=s(886);const n=document.querySelector(".header__burger"),o=document.querySelector(".header__menu"),i=document.querySelector(".header__list"),c=document.querySelector(".header__body"),l=document.querySelectorAll(".header__link"),a=document.querySelector(".header__back"),d=document.querySelector(".header__logo-img");function u(){n.classList.toggle("active"),o.classList.toggle("active"),a.classList.toggle("active"),document.body.classList.toggle("lock"),l[0].classList.remove("_active-link")}n.addEventListener("click",u),a.addEventListener("click",u),d.addEventListener("click",u),i.addEventListener("click",(function(e){e.target.closest(".header__link")&&(n.classList.remove("active"),o.classList.remove("active"),a.classList.remove("active"),document.body.classList.remove("lock"),l[0].classList.add("_active-link"))})),c.insertAdjacentHTML("afterbegin",'<a href="./index.html" class="header__logo-burger">\n    <img src="./assets/images/header/logo-640.png" alt="logo">\n  </a>'),i.insertAdjacentHTML("beforeend",'<li>\n    <a class="header__link header__link-designed" href="https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online?node-id=0%3A1" target="_blank">Designed by &copy;</a>\n  </li>');const m=document.querySelector(".donate");function v(e,t,s){t.classList.contains(e)&&s.forEach((t=>{t.classList.contains(e)&&t.classList.add("_active")}))}function y(e,t){const s=document.forms.donateForm.elements.amount;t.classList.contains(e)&&(s.value=e)}function _(e,t){const s=document.querySelectorAll(".dotes");t.value===e&&s.forEach((t=>{t.classList.remove("_active"),t.classList.contains(e)&&t.classList.add("_active")}))}function h(e,t){const s=document.querySelectorAll(".money");t.value===e&&s.forEach((t=>{t.classList.remove("_active"),t.classList.contains(e)&&t.classList.add("_active")}))}function p(e,t){const s=Math.random()*(t-e)+e;return parseInt(s,10)}m.addEventListener("click",(e=>{let t=e.target.closest(".dotes");t&&(function(e){!function(e,t){e&&(t.forEach((e=>{e.classList.remove("_active")})),e.classList.add("_active"))}(e,document.querySelectorAll(".dotes"))}(t),function(e){const t=document.querySelectorAll(".money");t.forEach((e=>{e.classList.remove("_active")})),v(5e3,e,t),v(2e3,e,t),v(1e3,e,t),v(500,e,t),v(250,e,t),v(100,e,t),v(50,e,t),v(25,e,t)}(t),function(e){y("5000",e),y("2000",e),y("1000",e),y("500",e),y("250",e),y("100",e),y("50",e),y("25",e)}(t))})),m.addEventListener("input",(e=>{e.target.closest(".dotes");let t=e.target.closest(".donate-form__input");const s=document.querySelector(".donate-form__error");s.innerHTML="",t.style.borderColor="#929699";const r=+t.min,n=+t.max,o=+t.value;o>n?(t.value=100,s.innerHTML="The minimum amount is 1, the maximum is 9999. Please enter a sum in between.",t.style.borderColor="#D31414"):o<r&&(t.value=r),function(e){const t=document.querySelectorAll(".money"),s=document.querySelectorAll(".dotes");"100"!==e.value&&(s.forEach((e=>{e.classList.remove("_active")})),t.forEach((e=>{e.classList.remove("_active")})))}(t),function(e){_("5000",e),_("2000",e),_("1000",e),_("500",e),_("250",e),_("100",e),_("50",e),_("25",e)}(t),function(e){h("5000",e),h("2000",e),h("1000",e),h("500",e),h("250",e),h("100",e),h("50",e),h("25",e)}(t)}));class f{constructor(e,t,s,r,n,o){this.number=e,this.alt=t,this.title=s,this.text=r,this.iconImg=n,this.iconAlt=o}makeItem(e){return`\n    <div class="pets-slide__item item${this.number}" style="order:${e}">\n      <div class="pets-slide__image"><img src="assets/images/pets/${this.number}.jpg" alt="${this.alt}"></div>\n        <div class="pets-slide__content">\n          <div class="pets-slide__info">\n            <h5 class="pets-slide__title">${this.title}</h5>\n          <div class="pets-slide__text">${this.text}</div>\n        </div>\n      <div class="pets-slide__icon"><img src="assets/images/pets/${this.iconImg}.png" alt="${this.iconAlt}"></div>\n    </div>\n  </div>\n  `}}const g=document.querySelector(".item1"),L=document.querySelector(".item2"),b=document.querySelector(".item3"),S=document.querySelector(".item4"),q=document.querySelector(".item5"),k=document.querySelector(".item6"),$=document.querySelector(".item8"),w=document.querySelector(".item9"),E=document.querySelector(".item10"),x=document.querySelector(".item11"),A=document.querySelector(".item12"),I=document.querySelector(".item13"),M=document.querySelector(".slider-pets__button-prev"),O=document.querySelector(".slider-pets__button-next"),j=(document.querySelector(".pets-slide-1"),document.querySelector(".pets-slide-2"),document.querySelector(".pets-slide-3"));function H(e=0,t=6,s=6){const r=[];for(;r.length!==s;){let s=p(e,t);r.includes(s)||r.push(s)}return r}const T=new f(14,"rhinoceros","Rhinoceros","Native to Africa","banan_icon","herbivore"),X=new f(15,"white bear","White bear","Native to Arctica","meet-fish_icon","predators"),P=new f(16,"lemurs","Lemurs","Native to Madagascar","banan_icon","herbivore"),C=new f(17,"zebra","Zebra","Native to Africa","banan_icon","herbivore"),N=new f(18,"lion","Lion","Native to Africa","meet-fish_icon","predators"),D=new f(19,"parrots","Parrots","Native to South America","banan_icon","herbivore");function V(){let e=H(1,7,6);j.innerHTML="",j.insertAdjacentHTML("beforeend",`\n    <div class="pets-slide__body pets-slide__body-3">\n      ${T.makeItem(e[0])}\n      ${X.makeItem(e[1])}\n      ${P.makeItem(e[2])}\n      ${C.makeItem(e[3])}\n      ${N.makeItem(e[4])}\n      ${D.makeItem(e[5])}\n    </div>\n    `)}function W(){let e=H(1,7,6);g.style.order=`${e[0]}`,L.style.order=`${e[1]}`,b.style.order=`${e[2]}`,S.style.order=`${e[3]}`,q.style.order=`${e[4]}`,k.style.order=`${e[5]}`,$.style.order=`${e[0]}`,w.style.order=`${e[1]}`,E.style.order=`${e[2]}`,x.style.order=`${e[3]}`,A.style.order=`${e[4]}`,I.style.order=`${e[5]}`}M.addEventListener("click",W),O.addEventListener("click",W),M.addEventListener("click",V),O.addEventListener("click",V);const F=document.getElementById("sliderbarInput"),R=document.querySelector(".sliderbar__fill");const Z=document.querySelector(".slider-track"),z=document.querySelectorAll(".testimonials__item");F.addEventListener("input",(e=>{const t=1*(parseInt(getComputedStyle(z[0]).getPropertyValue("width"))+parseInt(getComputedStyle(Z).getPropertyValue("gap")));let s=+F.value;0===s&&(Z.style.transform="translateX(0px)"),1===s&&(Z.style.transform=`translateX(-${t}px)`),2===s&&(Z.style.transform=`translateX(-${2*t}px)`),3===s&&(Z.style.transform=`translateX(-${3*t}px)`),4===s&&(Z.style.transform=`translateX(-${4*t}px)`),5===s&&(Z.style.transform=`translateX(-${5*t}px)`),6===s&&(Z.style.transform=`translateX(-${6*t}px)`),7===s&&(Z.style.transform=`translateX(-${7*t}px)`),8===s&&(Z.style.transform=`translateX(-${8*t}px)`)}));const B=document.querySelector(".testimonials"),U=document.querySelector(".testimonials__back"),G=document.querySelector(".testimonials__card-view"),J=document.querySelector(".testimonials__card-close");function K(){U.classList.remove("active"),G.classList.remove("active"),G.classList.remove("active"),G.innerHTML=""}B.addEventListener("click",(e=>{let t=e.target.closest(".testimonials__item");if(t){U.classList.toggle("active"),G.classList.toggle("active");let e=t.innerHTML;G.innerHTML=e,G.prepend(closeCard)}})),B.addEventListener("click",(e=>{e.target===U&&K()})),J.addEventListener("click",K),document.querySelector(".testimonials__card").addEventListener("click",K),document.querySelector(".pick").addEventListener("click",K),document.querySelector(".footer").addEventListener("click",K),V();new r.ZP(".swiper",{modules:[r.W_],loop:!0,navigation:{nextEl:".slider-pets__button-next",prevEl:".slider-pets__button-prev"},scrollbar:{el:".swiper-scrollbar",draggable:!0},speed:500,observer:!0,observeSlideChildren:!0,observeParents:!0});F.oninput=function(){let e=+this.value;0===e&&(R.style.width="0%"),1===e&&(R.style.width="12.5%"),2===e&&(R.style.width="25%"),3===e&&(R.style.width="37.5%"),4===e&&(R.style.width="50%"),5===e&&(R.style.width="62.5%"),6===e&&(R.style.width="75%"),7===e&&(R.style.width="87.5%"),8===e&&(R.style.width="100%")}}},s={};function r(e){var n=s[e];if(void 0!==n)return n.exports;var o=s[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,s,n,o)=>{if(!s){var i=1/0;for(d=0;d<e.length;d++){for(var[s,n,o]=e[d],c=!0,l=0;l<s.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](s[l])))?s.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(d--,1);var a=n();void 0!==a&&(t=a)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,n,o]},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,s)=>{var n,o,[i,c,l]=s,a=0;if(i.some((t=>0!==e[t]))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(l)var d=l(r)}for(t&&t(s);a<i.length;a++)o=i[a],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},s=self.webpackChunk=self.webpackChunk||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var n=r.O(void 0,[886],(()=>r(136)));n=r.O(n)})();