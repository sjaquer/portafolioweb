document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Duración de la animación en milisegundos
        easing: 'ease-in-out', // Tipo de easing
        once: true // Si la animación debe ocurrir solo una vez
    });

    const backToTop = document.getElementById('back-to-top');
    const sections = document.querySelectorAll('.section');
    const images = document.querySelectorAll('.photo-gallery img');

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

    images.forEach(image => {
        observer.observe(image);
    });

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 25000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});