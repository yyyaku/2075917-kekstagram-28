const submitMessagePlaceErr = document.querySelector('body');
const submitErrMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const messageErrElement = submitErrMessageTemplate.cloneNode(true);
submitMessagePlaceErr.append(messageErrElement);
messageErrElement.classList.add('hidden');

const submitErrMessageContainer = document.querySelector('.error');
const closeModalSubmitErr = document.querySelector('.error__button');
const submitOkMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');

const closeErrMessage = () => {
  submitErrMessageContainer.classList.add('hidden');
  body.classList.remove('modal-open');
};

const onModalKeydownErr = (evt) => {
  if (evt.key === 'Escape'(evt)) {
    evt.preventDefault();
    closeErrMessage();
  }
};

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('error')) {
    closeErrMessage();
  }
});

const showErrMessage = () => {
  submitErrMessageContainer.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onModalKeydownErr);
};

closeModalSubmitErr.addEventListener('click', () => {
  closeErrMessage();
});

const messageOkElement = submitOkMessageTemplate.cloneNode(true);
body.append(messageOkElement);
messageOkElement.classList.add('hidden');

const submitOkMessageContainer = document.querySelector('.success');
const closeModalSubmitOk = document.querySelector('.success__button');

const closeOkMessage = () => {
  submitOkMessageContainer.classList.add('hidden');
  body.classList.remove('modal-open');
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

const showOkMessage = () => {
  submitOkMessageContainer.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onModalKeydownOk);
};

closeModalSubmitOk.addEventListener('click', () => {
  closeOkMessage();
});

export {showOkMessage, showErrMessage};
