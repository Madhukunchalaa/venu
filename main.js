// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initial Load Animations
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    })
    .from('.hero-label', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
    }, '-=0.6')
    .from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.hero-ctas', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-image-wrapper', {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: 'power2.out'
    }, '-=1.5');
});

// Component Reveal Animations
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    const content = section.querySelectorAll('.manifesto-text, .manifesto-quote-box, .hero-image, .comparison-table, .work-card, .book-showcase .manifesto-text');
    
    if (content.length > 0) {
        gsap.from(content, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }
});

// Special Animation for Shift Cards
gsap.from('.shift-card', {
    scrollTrigger: {
        trigger: '.shifts-grid',
        start: 'top 85%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out'
});

// Parallax Effect for Hero Image
gsap.to('.hero-image', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 100,
    ease: 'none'
});

// Stats Number Count Up
const stats = document.querySelectorAll('.stat-box .number');
stats.forEach(stat => {
    const value = stat.innerText;
    if (value.includes('+') || value.includes('M')) return;
    
    gsap.from(stat, {
        scrollTrigger: {
            trigger: stat,
            start: 'top 90%'
        },
        innerHTML: 0,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: 'power1.inOut'
    });
});
