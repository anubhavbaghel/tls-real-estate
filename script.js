document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('nav-active');

            // Toggle Burger Animation
            mobileMenuToggle.classList.toggle('toggle');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('nav-active') &&
            !navLinks.contains(e.target) &&
            !mobileMenuToggle.contains(e.target)) {
            navLinks.classList.remove('nav-active');
            mobileMenuToggle.classList.remove('toggle');
        }
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                mobileMenuToggle.classList.remove('toggle');
            }
        });
    });
    // Sticky Header
    const header = document.querySelector('.site-header');
    const heroSection = document.querySelector('.hero') || document.querySelector('.page-header');

    window.addEventListener('scroll', () => {
        const triggerHeight = 50;

        if (window.scrollY > triggerHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
