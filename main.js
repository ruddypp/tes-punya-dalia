const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('.menu');
const body = document.body;

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('menu-active'); // Tambahkan ini
});