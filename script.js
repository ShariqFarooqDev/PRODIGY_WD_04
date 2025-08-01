document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const navLinks = mobileMenu.querySelectorAll('a');

            const toggleMenu = () => {
                mobileMenu.classList.toggle('is-open');
            };

            menuToggle.addEventListener('click', toggleMenu);

            // Close mobile menu when a link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (mobileMenu.classList.contains('is-open')) {
                        toggleMenu();
                    }
                });
            });
        });