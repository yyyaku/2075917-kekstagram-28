import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';

const HASHTAG_MAX_COUNT = 5;
const VALID_SYMBOL = /^#[a-za-яё0-9]{1,19}$/i;

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const cancelButton = document.querySelector('.img-upload__cancel');
const overlay = document.querySelector('.img-upload__overlay');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const coomentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalKeydown);
};

const closeModal = () => {
  form.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === coomentField;

function onModalKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
}

const onFileFieldChange = () => {
  showModal();
};

const onCancelButtonClick = () => {
  closeModal();
};

const isValidTag = (tag) => VALID_SYMBOL.test(tag);

const hasValidCount = (tags) => tags.length <= HASHTAG_MAX_COUNT;

const tagUnique = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateCountTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags);
};

const validateUniqueTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return tagUnique(tags);
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateCountTags,
  'Количество хэштегов не должно быть больше пяти'
);

pristine.addValidator(
  hashtagField,
  validateUniqueTags,
  'Хэштеги не должны повторяться'
);

pristine.addValidator(
  hashtagField,
  validateTags,
  'Хэштег должен начинаться с "#"'
);

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};


const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(form));
      unblockSubmitButton();
    }
  });
};

fileField.addEventListener('input', onFileFieldChange);
cancelButton.addEventListener('click', onCancelButtonClick);

export {setOnFormSubmit, closeModal};
