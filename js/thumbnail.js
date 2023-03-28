const container = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createThumbnail = (similarObjects) => {
  const similarListFragment = document.createDocumentFragment();

  similarObjects.forEach(({url, likes, comments, description, id}) => {
    const pictureElement = thumbnailTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.dataset.thumbnailId = id;

    container.appendChild(pictureElement);
  });

  container.appendChild(similarListFragment);
};

export {createThumbnail};
