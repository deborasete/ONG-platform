document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expanded);
        document.body.classList.toggle('menu-open');
    });

    dropdowns.forEach(dropdown => {
        const toggleLink = dropdown.querySelector('a');
        toggleLink.addEventListener('click', e => {
            e.preventDefault();
            const expanded = dropdown.getAttribute('aria-expanded') === 'true';
            dropdown.setAttribute('aria-expanded', !expanded);
        });
    });

    const openModalBtn = document.querySelectorAll('[data-open-modal]');
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.modal .close');

    openModalBtn.forEach(btn => btn.addEventListener('click', () => modal?.classList.add('active')));
    closeModalBtn?.addEventListener('click', () => modal?.classList.remove('active'));
    modal?.addEventListener('click', e => e.target === modal && modal.classList.remove('active'));
});