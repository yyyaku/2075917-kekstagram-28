const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if(newValue < SCALE_MIN) {
    newValue = SCALE_MIN;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if(newValue > SCALE_MAX) {
    newValue = SCALE_MAX;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(SCALE_DEFAULT);

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export {resetScale};
