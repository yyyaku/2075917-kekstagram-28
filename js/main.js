/*

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}
У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.

Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!
Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.
*/

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRIPTIONS = [
  'описание 1',
  'описание 2',
  'описание 3',
  'описание 4',
  'описание 5',
  'описание 6',
  'описание 7',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateId = createIdGenerator();
const generatePhotosId = createIdGenerator();
const generateCommentsId = createIdGenerator();

const AVATAR_ID_COUNT = 6;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENTS_MAX_COUNT = 6;

const createComments = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${ getRandomInteger(1, AVATAR_ID_COUNT) }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createObject = () => ({
  id: generateId(),
  url: `photos/${generatePhotosId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(1, COMMENTS_MAX_COUNT)}, createComments),
});

const similarWizards = Array.from({length: 25}, createObject);
console.log(similarWizards);
