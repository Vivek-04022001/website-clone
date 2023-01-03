const btn = document.getElementById('menu-btn');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-main-menu');
btn.addEventListener('click', navToggle);

function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    mobileMenu.classList.toggle('show-menu');

}