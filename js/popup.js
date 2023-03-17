import {createObjects} from './data.js';

const similarListElement = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarObjects = createObjects(25);

const similarListFragment = document.createDocumentFragment();

similarObjects.forEach(({url, likes, comments}) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  similarListElement.appendChild(pictureElement);
});

similarListElement.appendChild(similarListFragment);

export {similarListElement};
