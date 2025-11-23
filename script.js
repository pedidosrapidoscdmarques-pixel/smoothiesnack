document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle para mostrar/ocultar el menú
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú si se hace click en un enlace (útil en móviles)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});