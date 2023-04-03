import {createThumbnail} from './thumbnail.js';
import {showBigPhoto} from './big-photo.js';

const container = document.querySelector('.pictures');

const createGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if(!thumbnail) {
      return;
    }
    evt.preventDefault();

    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );

    showBigPhoto(picture);
  });

  createThumbnail(pictures);
};

export {createGallery};
