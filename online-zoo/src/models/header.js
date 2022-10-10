const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const headerList = document.querySelector(".header__list");
const headerBody = document.querySelector(".header__body");
const headerLinks = document.querySelectorAll(".header__link");
const headerBack = document.querySelector(".header__back");
const headerLogoImg = document.querySelector(".header__logo-img");

headerBurger.addEventListener('click', toggleActive);
headerBack.addEventListener('click', toggleActive);
headerLogoImg.addEventListener('click', toggleActive);

function toggleActive() {
  headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	headerBack.classList.toggle('active');
	document.body.classList.toggle('lock');
  headerLinks[0].classList.remove('_active-link')
}

headerList.addEventListener("click", function(event) {
  if( event.target.closest(".header__link")) {
    headerBurger.classList.remove('active');
    headerMenu.classList.remove('active');
    headerBack.classList.remove('active');
    document.body.classList.remove('lock');
    headerLinks[0].classList.add('_active-link')
  }
});

headerBody.insertAdjacentHTML(
  'afterbegin',
  `<a href="./index.html" class="header__logo-burger">
    <img src="./assets/images/header/logo-640.png" alt="logo">
  </a>`
)

headerList.insertAdjacentHTML(
  'beforeend',
  `<li>
    <a class="header__link header__link-designed" href="https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online?node-id=0%3A1" target="_blank">Designed by &copy;</a>
  </li>`
)

export {headerBurger, headerList, headerBody}