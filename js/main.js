import {createObjects, OBJECT_COUNT} from './data.js';
import {createThumbnail} from './thumbnail.js';
import {createGallery} from './gallery.js';

const similarObjects = createObjects(OBJECT_COUNT);

createGallery(createThumbnail(similarObjects));
