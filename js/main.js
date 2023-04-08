import {createGallery} from './gallery.js';
import {getData, sendData} from './api.js';
import {showAlert} from './alert.js';
import {setOnFormSubmit, closeModal} from './form.js';
import {showSuccessMessage} from './message-ok.js';
import {showErrorMessage} from './message-error.js';
import {showSorting, reGenerateMiniatures, setBtnClick} from './sort.js';
import {debounce} from './util.js';

const TYME_OUT_OF_DELAY = 500;

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
  showSorting();
  setBtnClick(debounce((btn) => {
    reGenerateMiniatures(data, btn);
  }, TYME_OUT_OF_DELAY));
} catch (err) {
  showAlert(err.message);
}
