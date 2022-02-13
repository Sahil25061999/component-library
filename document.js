/* Snackbar js */
const snackbarLeftBtn = document.querySelector('.snackbar-left-btn');

const snackbarRightBtn = document.querySelector('.snackbar-right-btn');

const snackbarCenterBtn = document.querySelector('.snackbar-center-btn');

const snackbar = document.querySelector('.snackbar-demo');

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
