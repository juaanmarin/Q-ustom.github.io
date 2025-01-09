// Selecciona el botón y el menú
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

// Agrega un evento para alternar el menú
menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuToggle.textContent = navigation.classList.contains('active') ? '✖' : '☰';
});