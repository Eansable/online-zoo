const galeryCard = document.querySelectorAll('.galery__img');
const galery = document.querySelector('.first-screen__galery__card');
const galeryCardText = document.querySelectorAll('.galery__card__inf');
const galeryRange = document.querySelector('.first-screen__pagination__range');
const galeryText = document.querySelector('.first-screen__pagination__text');

const pets = document.querySelector('.pets__slider__cards');
const petsCards = document.querySelectorAll('.pets__slider__item');
const petsCardsText = document.querySelectorAll('.pets__galery__card__inf');
const petsArrowLeft = document.querySelector('.pets__slider__btn-left');
const petsArrowRight = document.querySelector('.pets__slider__btn-right');
const petsRange = document.querySelector('.pets__pagination__range');
const petsRangeText = document.querySelector('.pets__pagination__text');

let petsCounter = 0;
let activeCard = 0;


const setImagePosition = (elem) => {
  const index = elem.path[0].dataset.number || elem.path[0].value;
  galery.style.setProperty('right', `${index * 186 - 372}px`);
  clearClass();
  galeryCard[index - 1].classList.add('galery__active');
  galeryCardText[index - 1].classList.add('galery__card__inf-active');
  galeryText.innerHTML = `<span>0${index}/</span>08`
}

const clearClass = () => {
  galeryCard.forEach(e => {
    e.classList.remove('galery__active');
  });

  galeryCardText.forEach(e => {
    e.classList.remove('galery__card__inf-active');
  });
}

const petsMoveRight = () => {
  petsCounter++;
  if (activeCard < 3) {
    activeCard++;
  }
  let position = petsCounter % 8;
  if (position < 0) {
    position = 8 - Math.abs(petsCounter % 8);
  }
  clearPetsClass();
  setPetsActive(position);
  if (position > 2 && activeCard === 3) {
    pets.style.setProperty('right', `${(position - 3) * 308}px`)
  } else if (position === 0) {
    pets.style.setProperty('right', `0px`)
  }
}

const petsMoveLeft = () => {
  petsCounter--;
  if (activeCard > 0) {
    activeCard--;
  }
  let position = petsCounter % 8;
  if (position < 0) {
    position = 8 - Math.abs(petsCounter % 8);
  }
  clearPetsClass();
  setPetsActive(position);
  if (position < 5 && activeCard === 0  ) {
    pets.style.setProperty('right', `${(position) * 308}px`)
  } else if (position === 7) {
    pets.style.setProperty('right', `${(position - 3) * 308}px`)
  }
}

const petsMove = (elem) => {
  const position = elem.path[0].value - 1;
  petsCounter = position;
  if (petsCounter < 3) {
    activeCard = position;
  } else {
    activeCard = 3
  }
  console.log(position);
  clearPetsClass();
  setPetsActive(position);
  if (position > 2) {
    pets.style.setProperty('right', `${(position - 3) * 308}px`)
  } else if (position === 0) {
    pets.style.setProperty('right', `0px`)
  }
}

const clearPetsClass = () => {
  petsCards.forEach(e => {
    e.classList.remove('pets__slider__item-active');
  })
  petsCardsText.forEach(e => {
    e.classList.remove('pets__galery__card__inf-active');
  })
}

const setPetsActive = (position) => {
  petsCards[position].classList.add('pets__slider__item-active');
  petsCardsText[position].classList.add('pets__galery__card__inf-active');
  petsRange.value = position + 1;
  petsRangeText.innerHTML = `<span>0${position + 1}/</span>08`;
}

galeryCard.forEach(elem => {
  elem.addEventListener('click', setImagePosition);
})

galeryRange.addEventListener('change', setImagePosition);
galeryRange.addEventListener('mousemove', setImagePosition);

petsArrowRight.addEventListener('click', petsMoveRight);
petsArrowLeft.addEventListener('click', petsMoveLeft);
petsRange.addEventListener('change', petsMove);
petsRange.addEventListener('mousemove', petsMove);