import {compareRandom} from './util.js';
import {createThumbnail} from './thumbnail.js';

const MAX_RANDOM_MINIATURES = 10;

const sortContainer = document.querySelector('.img-filters');
const sortButton = document.querySelector('.img-filters__form');
const buttons = sortButton.children;

const activeSortClass = 'img-filters__button--active';

const showSorting = () => {
  sortContainer.classList.remove('img-filters--inactive');
};

const deleteThumbnail = () => {
  const personalThumbnail = document.querySelectorAll('.picture');
  if (personalThumbnail) {
    personalThumbnail.forEach((personalMiniature) => {
      personalMiniature.remove();
    });
  }
};

const sortRandomThumbnail = (arr) => {
  const newRandomThumbnail = arr.sort(compareRandom);

  return newRandomThumbnail.slice(0, MAX_RANDOM_MINIATURES);
};

const sortDiscussThumbnail = (arr) => arr.slice().sort((arrItemA, arrItemB) => arrItemB.comments.length - arrItemA.comments.length);

const generateDefaultThumbnail = (arr) => {
  deleteThumbnail();
  createThumbnail(arr);
};

const generateRandomThumbnail = (arr) => {
  deleteThumbnail();
  createThumbnail(sortRandomThumbnail(arr));
};

const generateDiscussThumbnail = (arr) => {
  deleteThumbnail();
  createThumbnail(sortDiscussThumbnail(arr));
};

const setButtonClick = (cb) => {
  for (const button of buttons) {
    button.addEventListener('click', () => {
      cb(button);
    });
  }
};

const setActiveSortClass = (btn) => {
  document.querySelector(`.${activeSortClass}`).classList.remove(activeSortClass);
  btn.classList.add(activeSortClass);
};

const reGenerateThumbnail = (arr, btn) => {
  switch (btn.id) {
    case 'filter-random': {
      generateRandomThumbnail(arr);
    } break;
    case 'filter-discussed': {
      generateDiscussThumbnail(arr);
    } break;
    case 'filter-default': {
      generateDefaultThumbnail(arr);
    } break;
  }
  setActiveSortClass(btn);
};

export {showSorting, reGenerateThumbnail, setButtonClick};
