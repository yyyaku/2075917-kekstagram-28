import {compareRandom} from './functions.js';
import {createThumbnail} from './thumbnail.js';

const MAX_RANDOM_MINIATURES = 10;

const sortContainer = document.querySelector('.img-filters');
const defaultSort = document.querySelector('#filter-default');
const btnSortForm = document.querySelector('.img-filters__form');
const buttons = btnSortForm.children;
const randomtSort = document.querySelector('#filter-random');
const discussSort = document.querySelector('#filter-discussed');

const activeSortClass = 'img-filters__button--active';

const showSorting = () => {
  sortContainer.classList.remove('img-filters--inactive');
};

const deletMiniatures = () => {
  const personalMiniatures = document.querySelectorAll('.picture');
  if (personalMiniatures) {
    personalMiniatures.forEach((personalMiniature) => {
      personalMiniature.remove();
    });
  }
};

const sortRandomMiniatures = (arr) => {
  const newRandomMiniatures = arr.sort(compareRandom);

  return newRandomMiniatures.slice(0, MAX_RANDOM_MINIATURES);
};

const sortDiscussMiniatures = (arr) => {
  const discussMiniatures = arr.slice().sort((arrItemA, arrItemB) => arrItemB.comments.length - arrItemA.comments.length);

  return discussMiniatures;
};

const generateDefaultMiniatures = (arr) => {
  deletMiniatures();
  createThumbnail(arr);
};

const generateRandomMiniatures = (arr) => {
  deletMiniatures();
  createThumbnail(sortRandomMiniatures(arr));
};

const generateDiscussMiniatures = (arr) => {
  deletMiniatures();
  createThumbnail(sortDiscussMiniatures(arr));
};

const setBtnClick = (cb) => {
  for (const btn of buttons) {
    btn.addEventListener('click', () => {
      cb(btn);
    });
  }
};

const reGenerateMiniatures = (arr, btn) => {
  if (btn.id === 'filter-random') {
    generateRandomMiniatures(arr);
    randomtSort.classList.add(activeSortClass);
    defaultSort.classList.remove(activeSortClass);
    discussSort.classList.remove(activeSortClass);
  }

  if (btn.id === 'filter-discussed') {
    generateDiscussMiniatures(arr);
    discussSort.classList.add(activeSortClass);
    defaultSort.classList.remove(activeSortClass);
    randomtSort.classList.remove(activeSortClass);
  }

  if (btn.id === 'filter-default') {
    generateDefaultMiniatures(arr);
    defaultSort.classList.add(activeSortClass);
    discussSort.classList.remove(activeSortClass);
    randomtSort.classList.remove(activeSortClass);
  }
};

export {showSorting, reGenerateMiniatures, setBtnClick};
