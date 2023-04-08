const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const body = document.querySelector('body');

const showSuccessMessage = () => {
  const templateSuccess = document.querySelector('#success').content;
  const sectionSuccess = templateSuccess.querySelector('section');
  const cloneSectionSuccess = sectionSuccess.cloneNode(true);
  body.appendChild(cloneSectionSuccess);
};


const showErrorMessage = () => {
  const templateError = document.querySelector('#error').content;
  const sectionError = templateError.querySelector('section');
  const cloneSectionError = sectionError.cloneNode(true);
  body.appendChild(cloneSectionError);
};

export { debounce, showSuccessMessage, showErrorMessage };
