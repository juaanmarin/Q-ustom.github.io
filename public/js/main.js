// Selecciona el botón y el menú
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

// Agrega un evento para alternar el menú
menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuToggle.textContent = navigation.classList.contains('active') ? '✖' : '☰';
});

// Selecciona los elementos del menú con submenú
const submenuToggle = document.querySelector('.menu-item-with-submenu');

// Agrega un evento para alternar el submenú
submenuToggle.addEventListener('click', (event) => {
     
    // event.preventDefault(); // Previene la navegación si el clic no es en un enlace
    submenuToggle.classList.toggle('active');

    // if (event.target.classList.contains('menuitem')) {
    //     console.log('holii');
    //     // event.preventDefault(); // Solo para el menú principal
    //     // Si el clic fue en un enlace, no bloquear la acción predeterminada
    //     // return;
    // }

});