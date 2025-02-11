document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Duración de la animación en milisegundos
        easing: 'ease-in-out', // Tipo de easing
        once: true // Si la animación debe ocurrir solo una vez
    });

    const themeToggle = document.getElementById('theme-toggle');
    const backToTop = document.getElementById('back-to-top');
    const sections = document.querySelectorAll('.section');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        themeToggle.classList.toggle('light-mode');
        themeToggle.textContent = document.body.classList.contains('light-mode') ? 'Modo Oscuro' : 'Modo Claro';
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});