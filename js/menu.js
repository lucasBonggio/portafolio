// CREAMOS VARIABLES NECESARIAS
const checkbox = document.getElementById("menu"); // Checkbox que controla el menú
const navList = document.querySelector(".lista_nav"); // El menú de navegación
const iconoMenu = document.getElementById("icono_menu"); // El icono del menú
const navLinks = document.querySelectorAll(".lista_link"); // Enlaces de la navegación
// Escuchar cambios en el checkbox para abrir/cerrar el menú
checkbox.addEventListener('change', () => {
    // Cuando el checkbox cambie, se activa o desactiva el menú
    if (checkbox.checked) {
        navList.classList.add('open');
        iconoMenu.classList.remove('menu');
        iconoMenu.classList.add('cruz');
    } else {
        navList.classList.remove('open');
        iconoMenu.classList.remove('cruz');
        iconoMenu.classList.add('menu');
    }
});

// Cerrar el menú cuando se haga clic en cualquier enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Desmarcar el checkbox y cerrar el menú
        checkbox.checked = false;
        navList.classList.remove('open');
    });
});