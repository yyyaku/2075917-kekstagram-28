const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const EFFECT_DEFAULT = EFFECTS[0];
let effectActual = EFFECT_DEFAULT;

const imageElement = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');
const slider = document.querySelector('.effect-level__slider');
const sliderСontainer = document.querySelector('.img-upload__effect-level');
const effectLevel = document.querySelector('.effect-level__value');

const isDefault = () => effectActual === EFFECT_DEFAULT;

const showSlider = () => {
  sliderСontainer.classList.remove('hidden');
};

const closeSlider = () => {
  sliderСontainer.classList.add('hidden');
};

const updateSlider = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: effectActual.min,
      max: effectActual.max,
    },
    start: effectActual.max,
    step: effectActual.step,
  });

  if(isDefault()) {
    closeSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if(!evt.target.classList.contains('.effects__radio')) {
    return;
  }
  effectActual = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageElement.className = `effects__preview--${effectActual.name}%`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = slider.noUiSlider.get();
  imageElement.style.filter = isDefault()
    ? EFFECT_DEFAULT.style
    : `${effectActual.style}(${sliderValue}${effectActual.unit})`;
  effectLevel.value = sliderValue;
};

const resetEffects = () => {
  effectActual = EFFECT_DEFAULT;
  updateSlider();
};

noUiSlider.create(slider, {
  range: {
    min: EFFECT_DEFAULT.min,
    max: EFFECT_DEFAULT.max,
  },
  start: EFFECT_DEFAULT.max,
  step: EFFECT_DEFAULT.step,
  connect: 'lower',
});
closeSlider();

effects.addEventListener('change', onEffectsChange);
slider.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
