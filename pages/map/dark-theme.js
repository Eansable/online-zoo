const switchTheme = document.querySelector('.header__switch');
const switchThemeBounce = document.querySelector('.switch__btn');
const map = document.querySelector('.map__choose');
const logo = document.getElementById('logo');
const leftArrow = document.querySelectorAll('.slider__arrow-left');
const rightArrow = document.querySelectorAll('.slider__arrow-right');
let isDarkTheme = false;
console.log(map);

switchTheme.addEventListener('click', () => {
  switchTheme.classList.toggle('header__switch-dark');
  switchThemeBounce.classList.toggle('switch__btn-dark');
  if (isDarkTheme) {
    document.documentElement.style.setProperty('--base', '#fefefe');
    document.documentElement.style.setProperty('--font-gray', '#333333');
    document.documentElement.style.setProperty('--gray-6', '#4f4f4f');
    document.documentElement.style.setProperty('--gray-2', '#f2f2f2');
    map.style.setProperty('background-image', 'url(../../assets/images/map.png)');
    leftArrow.forEach(e => {
      e.style.setProperty('background-image', 'url(../../assets/icons/left-arrow.svg)');
    });
    rightArrow.forEach(e => {
      e.style.setProperty('background-image', 'url(../../assets/icons/right-arrow.svg)');
    });
    logo.src = '../../assets/icons/Logo.svg';

    isDarkTheme = !isDarkTheme;
  } else {
    document.documentElement.style.setProperty('--base', '#333333');
    document.documentElement.style.setProperty('--font-gray', '#fefefe');
    document.documentElement.style.setProperty('--gray-6', '#f2f2f2');
    document.documentElement.style.setProperty('--gray-2', '#4f4f4f');
    map.style.setProperty('background-image', 'url(../../assets/images/map-dark.png)');
    leftArrow.forEach(e => {
      e.style.setProperty('background-image', 'url(../../assets/icons/left-arrow-light.svg)');
    });
    rightArrow.forEach(e => {
      e.style.setProperty('background-image', 'url(../../assets/icons/right-arrow-light.svg)');
    });
    logo.src = '../../assets/icons/Logo-light.svg';

    isDarkTheme = !isDarkTheme;
  }
});