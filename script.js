document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const viewResumeButton = document.getElementById('view-resume-button');
    const cvModalBackdrop = document.getElementById('cv-modal-backdrop');
    const cvModalCloseButton = document.getElementById('cv-modal-close');
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeToggleIcon = themeToggleButton.querySelector('i');

    // --- Theme Switching ---
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeToggleIcon.classList.remove('fa-sun');
            themeToggleIcon.classList.add('fa-moon');
        } else {
            document.documentElement.classList.remove('dark');
            themeToggleIcon.classList.remove('fa-moon');
            themeToggleIcon.classList.add('fa-sun');
        }
    };

    themeToggleButton.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        if (isDarkMode) {
            localStorage.setItem('theme', 'light');
            applyTheme('light');
        } else {
            localStorage.setItem('theme', 'dark');
            applyTheme('dark');
        }
    });

    // --- On Page Load ---
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    
    // --- Mobile Menu ---
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- Smooth Scrolling & Close Mobile Menu ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // --- CV Modal Logic ---
    const openCvModal = () => {
        cvModalBackdrop.classList.remove('hidden');
        setTimeout(() => cvModalBackdrop.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeCvModal = () => {
        cvModalBackdrop.classList.add('opacity-0');
        setTimeout(() => cvModalBackdrop.classList.add('hidden'), 300);
        document.body.style.overflow = ''; // Restore background scrolling
    };

    viewResumeButton.addEventListener('click', openCvModal);
    cvModalCloseButton.addEventListener('click', closeCvModal);
    cvModalBackdrop.addEventListener('click', (e) => {
        if (e.target === cvModalBackdrop) {
            closeCvModal();
        }
    });

    // --- AOS Initialization ---
    AOS.init({
        duration: 1000,
        once: true,
    });
});