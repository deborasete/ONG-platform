document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuToggle.addEventListener('click', () => {
        header.classList.toggle('menu-open');
    });

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', e => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            const isDropdownLink = link.parentElement.classList.contains('dropdown');
            if (window.innerWidth < 768 && !isDropdownLink) {
                header.classList.remove('menu-open');
            }
        });
    });

    document.addEventListener('click', e => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
});