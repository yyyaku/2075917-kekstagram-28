const similarListElement = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarListFragment = document.createDocumentFragment();

const createPopup = (similarObjects) => {
  similarObjects.forEach(({url, likes, comments}) => {
    const pictureElement = similarPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    similarListElement.appendChild(pictureElement);
  });
};

similarListElement.appendChild(similarListFragment);

export {createPopup};
