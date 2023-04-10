import {compareRandom} from './util.js';
import {createThumbnail} from './thumbnail.js';

const MAX_RANDOM_MINIATURES = 10;

const sortContainer = document.querySelector('.img-filters');
const defaultSort = document.querySelector('#filter-default');
const sortButton = document.querySelector('.img-filters__form');
const buttons = sortButton.children;
const randomSort = document.querySelector('#filter-random');
const discussSort = document.querySelector('#filter-discussed');

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
  for (const btn of buttons) {
    btn.addEventListener('click', () => {
      cb(btn);
    });
  }
};

const reGenerateThumbnail = (arr, btn) => {
  switch (btn.id) {
    case 'filter-random': {
      generateRandomThumbnail(arr);
      randomSort.classList.add(activeSortClass);
      defaultSort.classList.remove(activeSortClass);
      discussSort.classList.remove(activeSortClass);
    } break;
    case 'filter-discussed': {
      generateDiscussThumbnail(arr);
      discussSort.classList.add(activeSortClass);
      defaultSort.classList.remove(activeSortClass);
      randomSort.classList.remove(activeSortClass);
    } break;
    case 'filter-default': {
      generateDefaultThumbnail(arr);
      defaultSort.classList.add(activeSortClass);
      discussSort.classList.remove(activeSortClass);
      randomSort.classList.remove(activeSortClass);
    } break;
  }
};

export {showSorting, reGenerateThumbnail, setButtonClick};
