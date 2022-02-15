const body = document.querySelector('body');

/* Snackbar js */
const snackbarLeftBtn = document.querySelector('.snackbar-left-btn');

const snackbarRightBtn = document.querySelector('.snackbar-right-btn');

const snackbarCenterBtn = document.querySelector('.snackbar-center-btn');

const snackbar = document.querySelector('.snackbar-container');

snackbarCenterBtn.addEventListener('click', () => {
  displaySnackbar('snackbar-center');
});

snackbarLeftBtn.addEventListener('click', () => {
  displaySnackbar('snackbar-left');
});

snackbarRightBtn.addEventListener('click', () => {
  displaySnackbar('snackbar-right');
});

function displaySnackbar(snackpos) {
  snackbar.style.display = 'block';
  snackbar.classList.add(snackpos);
  setTimeout(() => {
    snackbar.style.display = 'none';
    snackbar.classList.remove(snackpos);
  }, 3000);
}

/* Modal */
//const modalImageBtn = document.querySelector('');
const modalBtn = document.querySelector('.modal-btn');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.modal-container');

modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  body.classList.remove('modal-open');
});

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  body.classList.add('modal-open');
});
