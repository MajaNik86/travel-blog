const burgerBtnElement = document.getElementById('burger-btn');
const mobileNavElement = document.getElementById('mobile-nav');

function toggleBurger() {
    mobileNavElement.classList.toggle('open')
}
burgerBtnElement.addEventListener('click', toggleBurger)