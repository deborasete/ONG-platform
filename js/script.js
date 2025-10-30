document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const header = document.querySelector('header');

    // 1. Lógica do Menu Principal (Abrir/Fechar Menu Hamburguer)
    if (toggleButton && header) {
        toggleButton.addEventListener('click', () => {
            // Adiciona/Remove a classe 'menu-open' no <header>
            header.classList.toggle('menu-open');
            const isExpanded = header.classList.contains('menu-open');
            toggleButton.setAttribute('aria-expanded', isExpanded);
        });
    }

    // 2. Lógica do Dropdown (Sub-menu "Projetos Sociais")
    const dropdownToggle = document.querySelector('.dropdown > a');
    const dropdownItem = document.querySelector('.dropdown');

    if (dropdownToggle && dropdownItem) {
        dropdownToggle.addEventListener('click', (event) => {
            const isDesktop = window.matchMedia('(min-width: 768px)').matches;

            if (isDesktop) {
                // Comportamento Desktop: Abre/Fecha o dropdown no clique
                dropdownItem.classList.toggle('active');
            } else {
                // Comportamento Mobile: Usa o link apenas para TOGGLE (mostrar/esconder) o sub-menu
                event.preventDefault(); // CRÍTICO: Previne a navegação para que o usuário veja as opções
                dropdownItem.classList.toggle('active');
                
                // Garante que o menu principal esteja aberto para o dropdown aparecer
                header.classList.add('menu-open'); 
            }
        });

        // Fechar o dropdown ao clicar fora (Apenas Desktop)
        document.addEventListener('click', (event) => {
            const isDesktop = window.matchMedia('(min-width: 768px)').matches;

            if (isDesktop && 
                !dropdownItem.contains(event.target) && 
                dropdownItem.classList.contains('active')) {
                
                dropdownItem.classList.remove('active');
            }
        });
    }
    
    // Fechar o dropdown ao redimensionar (Mobile -> Desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && dropdownItem) {
            // Garante que a classe 'active' não esteja ativa no desktop quando a tela é redimensionada
            dropdownItem.classList.remove('active');
        }
    });
});