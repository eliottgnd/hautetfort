document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
    let isMenuOpen = false;

    // Fonction pour fermer le menu
    const closeMenu = () => {
        navMenu.classList.remove('active');
        burger.classList.remove('active');
        isMenuOpen = false;
        document.body.style.overflow = '';
    };

    // Fonction pour ouvrir le menu
    const openMenu = () => {
        navMenu.classList.add('active');
        burger.classList.add('active');
        isMenuOpen = true;
        document.body.style.overflow = 'hidden';
    };

    // Toggle menu burger
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    // Fermer le menu en cliquant sur un lien
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fermer le menu en cliquant en dehors
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !navMenu.contains(e.target) && !burger.contains(e.target)) {
            closeMenu();
        }
    });

    // Gérer le redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            closeMenu();
        }
    });
});

// Scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
