import {createObjects, OBJECT_COUNT} from './data.js';
import {createPopup} from './popup.js';

const similarObjects = createObjects(OBJECT_COUNT);

createPopup(similarObjects);
