const body = document.querySelector('body');
const bigPhoto = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');
const cancelButton = document.querySelector('.big-picture__cancel');

const createComment = (data) => {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return (comment);
};

const createComments = (comments) => {
  commentsList.textContent = '';
  const commentFragment = document.createDocumentFragment();

  for (let i = 0; i < comments.length; i++) {
    const commentElement = createComment(comments[i]);
    commentFragment.append(commentElement);
  }
  commentsList.append(commentFragment);
};

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
  commentCount.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  createBigPhoto(data);
  createComments(data.comments);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export {showBigPhoto};
