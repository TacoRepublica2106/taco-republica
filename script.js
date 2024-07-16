document.addEventListener('click', function (e) {
    const confeti = document.createElement('div');
    confeti.classList.add('confeti');
    confeti.style.left = e.clientX + 'px';
    confeti.style.top = e.clientY + 'px';
    document.body.appendChild(confeti);

    setTimeout(() => {
        confeti.remove();
    }, 2000);
});



// Script para el carrusel de imágenes
let galeria = document.querySelector('.galeria');
let slides = document.querySelectorAll('.slide');

let intervalo = 4000; // Cambia la imagen cada 4 segundos
let indice = 1;

setInterval(() => {
    galeria.scrollLeft = galeria.scrollWidth / slides.length * indice;
    indice++;

    if (indice === slides.length) {
        indice = 0;
    }
}, intervalo);



document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('animate');
            } else {
                section.classList.remove('animate');
            }
        });
    }

    // Ejecutar la función al cargar la página y al hacer scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const elementsToAnimate = document.querySelectorAll('.change-color, .fade-in');

    function checkScroll() {
        // Cambiar color al hacer scroll
        elementsToAnimate.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('change-color');
            } else {
                element.classList.remove('change-color');
            }
        });

        // Mostrar elementos gradualmente al hacer scroll
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.querySelector('.fade-in').classList.add('show');
            } else {
                section.querySelector('.fade-in').classList.remove('show');
            }
        });
    }

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Ejecutar la función al cargar la página y al hacer scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});


document.addEventListener('DOMContentLoaded', function() {
    // Función para crear confeti
    function createConfetti() {
        const colors = ['#FF5733', '#FFDD00', '#33FF57', '#3357FF', '#5733FF'];
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }

    // Función para agregar animaciones y redireccionar al hacer clic
    function addClickAnimations() {
        const instagramLink = document.getElementById('instagram-link');
        const tiktokLink = document.getElementById('tiktok-link');

        instagramLink.addEventListener('click', function(event) {
            event.preventDefault();
            instagramLink.style.backgroundColor = '#FFDD00'; // Cambio de color
            createConfetti(); // Explosión de confeti

            // Redireccionar a Instagram después de 1 segundo
            setTimeout(() => {
                window.open(instagramLink.href, '_blank');
            }, 500);
        });

        tiktokLink.addEventListener('click', function(event) {
            event.preventDefault();
            tiktokLink.style.backgroundColor = '#FFDD00'; // Cambio de color
            createConfetti(); // Explosión de confeti

            // Redireccionar a TikTok después de 1 segundo
            setTimeout(() => {
                window.open(tiktokLink.href, '_blank');
            }, 500);
        });
    }

    // Ejecutar la función al cargar la página
    addClickAnimations();
});
