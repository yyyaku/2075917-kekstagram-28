import {createGallery} from './gallery.js';
import {getData, sendData} from './api.js';
import {showAlert} from './util.js';
import {setOnFormSubmit, closeModal} from './form.js';
import {showOkMessage, showErrMessage} from './message.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeModal();
    showOkMessage();
  } catch {
    showErrMessage();
  }
});

try {
  const data = await getData();
  createGallery(data);
} catch (err) {
  showAlert(err.message);
}
