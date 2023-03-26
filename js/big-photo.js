const bigPhoto = document.querySelector('.big-picture');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
// const commentsShown = document.querySelector('.social__comments');
const cancelButton = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const closeBigPhoto = () => {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPhoto();
  }
}

const onCancelButtonClick = () => {
  closeBigPhoto();
};

const createBigPhoto = ({url, likes, description}) => {
  bigPhoto.querySelector('.big-picture__img img').src = url;
  bigPhoto.querySelector('.big-picture__img img').alt = description;
  bigPhoto.querySelector('.likes-count').textContent = likes;
  bigPhoto.querySelector('.social__caption').textContent = description;
};

const showBigPhoto = (data) => {
  bigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentsCount.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  createBigPhoto(data);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export {showBigPhoto};
