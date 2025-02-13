document.addEventListener('DOMContentLoaded', (event) => {
    const typewriterElements = document.querySelectorAll('.typewriter');

    function typeWriter(element, text) {
        let i = 0;
        const cursorSpan = document.createElement('span');
        cursorSpan.classList.add('cursor');
        cursorSpan.textContent = '|';
        element.appendChild(cursorSpan);

        function type() {
            if (i < text.length) {
                element.textContent = text.substring(0, i + 1);
                element.appendChild(cursorSpan);
                i++;
                setTimeout(type, 120); // Reduce el tiempo de escritura
            } else {
                cursorSpan.remove();
            }
        }
        type();
    }

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.getAttribute('data-text');
                element.textContent = '';
                typeWriter(element, text);
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.1 });

    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.setAttribute('data-text', text);
        element.textContent = '';
        observer.observe(element);
    });
});