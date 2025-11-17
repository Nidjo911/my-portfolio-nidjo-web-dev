document.addEventListener('DOMContentLoaded', function() {
    // Initialize side navigation
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // Initialize slider
    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        indicators: true,
        height: 500,
        interval: 5000
    });

    // Initialize material boxed (for gallery images)
    const materialboxed = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialboxed);

    // Initialize scrollspy for smooth scrolling
    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy, {
        scrollOffset: 60
    });

    // Add animation on scroll
    const campCards = document.querySelectorAll('.card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    campCards.forEach(card => {
        observer.observe(card);
    });
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});
