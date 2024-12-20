// Seleccionar el botón del dropdown y el contenido del dropdown
const dropdownButton = document.querySelector('.dropdown-toggle')
const dropdownContent = document.querySelector('.navegacion__lista')
const salirButton = document.querySelector('#salir')



// Función que alterna la visibilidad del contenido del dropdown
function toggleDropdown() {
    const estaExpandido =dropdownContent.classList.toggle('show');
    dropdownButton.setAttribute('aria-expanded', estaExpandido);
}

// Función para cerrar el dropdown
function closeDropdown() {
    dropdownContent.classList.remove('show');
    // cierra aria-expanded cuando sea  falso 
    dropdownButton.setAttribute('aria-expanded', 'false');
}


// Añadir el evento de click al botón del dropdown
dropdownButton.addEventListener('click',toggleDropdown);

// Añadir el evento de click al botón "Salir"
salirButton.addEventListener('click', closeDropdown);

// Selecciona todos los enlaces dentro del menú de navegación
const menuLinks = document.querySelectorAll('.navegacion__elemento a');

// Añadir un evento de clic a cada enlace
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Cerrar el menú cuando se haga clic en un enlace
        closeDropdown();
    });
});


// Selecciona todos los elementos de la lista de navegación (enlaces y botones)
const items = document.querySelectorAll('.navegacion__elemento a, .navegacion__elemento button');

// Añade un evento de clic a cada elemento (enlace o botón)
items.forEach((item) => {
    item.addEventListener('click', (event) => {
        // Primero, quita el aria-current de todos los elementos
        items.forEach((otherItem) => {
            otherItem.removeAttribute('aria-current');
        });

        // Añade aria-current al elemento que se hizo clic
        item.setAttribute('aria-current', 'page');
    });
});