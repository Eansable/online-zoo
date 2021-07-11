const switchTheme = document.querySelector('.header__switch');
const switchThemeBounce = document.querySelector('.switch__btn');
const logo = document.getElementById('logo');
let isDarkTheme = false;

switchTheme.addEventListener('click', () => {
  switchTheme.classList.toggle('header__switch-dark');
  switchThemeBounce.classList.toggle('switch__btn-dark');
  if (isDarkTheme) {
    document.documentElement.style.setProperty('--base', '#fefefe');
    document.documentElement.style.setProperty('--font-gray', '#333333');
    document.documentElement.style.setProperty('--gray-6', '#4f4f4f');
    document.documentElement.style.setProperty('--gray-2', '#f2f2f2');
    logo.src = '../../../assets/icons/Logo.svg';

    isDarkTheme = !isDarkTheme;
  } else {
    document.documentElement.style.setProperty('--base', '#333333');
    document.documentElement.style.setProperty('--font-gray', '#fefefe');
    document.documentElement.style.setProperty('--gray-6', '#f2f2f2');
    document.documentElement.style.setProperty('--gray-2', '#4f4f4f');
    logo.src = '../../../assets/icons/Logo-light.svg';

    isDarkTheme = !isDarkTheme;
  }
});