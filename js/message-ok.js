const submitMessagePlaceOk = document.querySelector('body');
const submitOkMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const messageOkElement = submitOkMessageTemplate.cloneNode(true);
submitMessagePlaceOk.append(messageOkElement);
messageOkElement.classList.add('hidden');

const submitOkMessageContainer = document.querySelector('.success');
const closeModalSubmitOk = document.querySelector('.success__button');

const closeOkMessage = () => {
  submitOkMessageContainer.classList.add('hidden');
  submitMessagePlaceOk.classList.remove('modal-open');
};

const onModalKeydownOk = (evt) => {
  if (evt.key === 'Escape'(evt)) {
    evt.preventDefault();
    closeOkMessage();
  }
};

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('success')) {
    closeOkMessage();
  }
});

const showSuccessMessage = () => {
  submitOkMessageContainer.classList.remove('hidden');
  submitMessagePlaceOk.classList.add('modal-open');

  document.addEventListener('keydown', onModalKeydownOk);
};

closeModalSubmitOk.addEventListener('click', () => {
  closeOkMessage();
});

export {showSuccessMessage};
