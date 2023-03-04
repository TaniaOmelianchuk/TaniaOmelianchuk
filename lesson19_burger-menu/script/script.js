let header = document.getElementById('header');
let burgerButton = header.querySelector('#burger-button');

burgerButton.addEventListener('click', () => {
    header.classList.toggle('open');
});