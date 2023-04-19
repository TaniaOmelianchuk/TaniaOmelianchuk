const openButton = document.querySelector('.button__open');
const modalWindow = document.querySelector('.modal-window');
const closeButton = document.querySelector('.button__close');

openButton.addEventListener('click', () => {
    modalWindow.style.display = 'block';
})

closeButton.addEventListener('click', () => {
    modalWindow.style.display = 'none';
});