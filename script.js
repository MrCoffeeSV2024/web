// Función para mostrar/ocultar el carrito
function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'none' || cart.style.display === '' ? 'block' : 'none';
}

// Función para mostrar/ocultar el menú hamburguesa
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'none' || navLinks.style.display === '' ? 'flex' : 'none';
}

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
