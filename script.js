function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionName).classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carSlides = document.querySelectorAll('.car-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let counter = 0;
    let slideWidth;

    function updateSlideWidth() {
        if (carSlides.length > 0) {
            slideWidth = carSlides[0].offsetWidth;
            carouselContainer.style.transform = `translateX(-${slideWidth * counter}px)`;
        }
    }

    // Initial calculation of slide width
    updateSlideWidth();

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            if (counter > 0) {
                counter--;
                carouselContainer.style.transform = `translateX(-${slideWidth * counter}px)`;
            }
        });

        nextButton.addEventListener('click', () => {
            if (carouselContainer && carSlides && counter < carSlides.length - 1) {
                counter++;
                carouselContainer.style.transform = `translateX(-${slideWidth * counter}px)`;
            }
        });
    }


    // Make the carousel responsive on resize
    window.addEventListener('resize', () => {
        updateSlideWidth();
    });

    // Add hover effects to car cards (keeping for now, may need adjustment)
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// FAQ Toggle
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');

    answer.classList.toggle('active');
    icon.style.transform = answer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
}
