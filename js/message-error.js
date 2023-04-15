import {onModalKeydown} from './form.js';

const submitMessagePlaceError = document.querySelector('body');
const submitErrorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const messageErrorElement = submitErrorMessageTemplate.cloneNode(true);
submitMessagePlaceError.append(messageErrorElement);
messageErrorElement.classList.add('hidden');

const submitErrorMessageContainer = document.querySelector('.error');
const closeModalSubmitError = document.querySelector('.error__button');

const closeErrorMessage = () => {
  submitErrorMessageContainer.classList.add('hidden');
  submitMessagePlaceError.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalKeydownError);
  document.addEventListener('keydown', onModalKeydown);
};

function onModalKeydownError (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorMessage();
  }
}

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('error')) {
    closeErrorMessage();
  }
});

const showErrorMessage = () => {
  submitErrorMessageContainer.classList.remove('hidden');
  submitMessagePlaceError.classList.add('modal-open');
  document.addEventListener('keydown', onModalKeydownError);
  document.removeEventListener('keydown', onModalKeydown);
};

closeModalSubmitError.addEventListener('click', () => {
  closeErrorMessage();
});

export {showErrorMessage};
