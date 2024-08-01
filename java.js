// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };




    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);




    sections.forEach(section => {
        observer.observe(section);
    });
});




// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        let activeIndex = 0;
        const images = carousel.querySelectorAll('img');
        const dots = carousel.querySelectorAll('.dot');
        const totalImages = images.length;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
                dots[i].classList.toggle('active', i === index);
            });
        }

        function nextImage() {
            activeIndex = (activeIndex + 1) % totalImages;
            showImage(activeIndex);
        }

        setInterval(nextImage, 4000); // Cambia la imagen cada 4 segundos

        // Botones de navegación (opcional)
        const prevBtn = carousel.querySelector('#prevBtn');
        const nextBtn = carousel.querySelector('#nextBtn');

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                activeIndex = (activeIndex - 1 + totalImages) % totalImages;
                showImage(activeIndex);
            });

            nextBtn.addEventListener('click', () => {
                nextImage();
            });
        }
    });
});
