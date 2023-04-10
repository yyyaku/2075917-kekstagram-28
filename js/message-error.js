const submitMessagePlaceError = document.querySelector('body');
const submitErrorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const messageErrElement = submitErrorMessageTemplate.cloneNode(true);
submitMessagePlaceError.append(messageErrElement);
messageErrElement.classList.add('hidden');

const submitErrorMessageContainer = document.querySelector('.error');
const closeModalSubmitError = document.querySelector('.error__button');

const closeErrorMessage = () => {
  submitErrorMessageContainer.classList.add('hidden');
  submitMessagePlaceError.classList.remove('modal-open');
};

const onModalKeydownError = (evt) => {
  if (evt.key === 'Escape'(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('error')) {
    closeErrorMessage();
  }
});

const showErrorMessage = () => {
  submitErrorMessageContainer.classList.remove('hidden');
  submitMessagePlaceError.classList.add('modal-open');

  document.addEventListener('keydown', onModalKeydownError);
};

closeModalSubmitError.addEventListener('click', () => {
  closeErrorMessage();
});

export {showErrorMessage};
