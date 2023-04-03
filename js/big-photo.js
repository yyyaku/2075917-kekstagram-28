const COMMENTS_PORTION = 5;

const body = document.querySelector('body');
const bigPhoto = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');
const cancelButton = document.querySelector('.big-picture__cancel');

let comments = [];
let commentsShown = 0;

const createComment = (data) => {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return (comment);
};

const createComments = () => {
  commentsShown += COMMENTS_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const commentFragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    commentFragment.append(commentElement);
  }

  commentsList.innerHTML = '';
  commentsList.append(commentFragment);
  commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const closeBigPhoto = () => {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPhotoKeydown);
  commentsShown = 0;
};

function onPhotoKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPhoto();
  }
}

const createBigPhoto = ({url, likes, description}) => {
  bigPhoto.querySelector('.big-picture__img img').src = url;
  bigPhoto.querySelector('.big-picture__img img').alt = description;
  bigPhoto.querySelector('.likes-count').textContent = likes;
  bigPhoto.querySelector('.social__caption').textContent = description;
};

const showBigPhoto = (data) => {
  bigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPhotoKeydown);

  createBigPhoto(data);
  comments = data.comments;
  if (comments.length > 0) {
    createComments(comments);
  }
};

const onCancelButtonClick = () => {
  closeBigPhoto();
};

const onCommentsLoaderClick = () => {
  createComments();
};

cancelButton.addEventListener('click', onCancelButtonClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export {showBigPhoto};
