const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')// Script for navigation bar

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        console.log('Menu closed'); // Debugging
        nav.classList.remove('active');
    });
}










