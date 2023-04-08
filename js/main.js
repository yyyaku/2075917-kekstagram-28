import {createGallery} from './gallery.js';
import {getData, sendData} from './api.js';
import {showAlert} from './alert.js';
import {setOnFormSubmit, closeModal} from './form.js';
import {showSuccessMessage} from './message-ok.js';
import {showErrorMessage} from './message-error.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    showSuccessMessage();
    closeModal();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  createGallery(data);
} catch (err) {
  showAlert(err.message);
}
