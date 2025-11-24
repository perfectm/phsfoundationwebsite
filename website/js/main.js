// Pioneer High School Education Foundation - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Mobile dropdown toggles
    const dropdowns = document.querySelectorAll('.dropdown > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    });
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');

function showSlide(n) {
    if (slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove('active'));

    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Auto-advance slides every 5 seconds
if (slides.length > 0) {
    showSlide(0);
    setInterval(nextSlide, 5000);
}

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showTestimonial(n) {
    if (testimonials.length === 0) return;

    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentTestimonial = (n + testimonials.length) % testimonials.length;

    if (testimonials[currentTestimonial]) {
        testimonials[currentTestimonial].classList.add('active');
    }
    if (dots[currentTestimonial]) {
        dots[currentTestimonial].classList.add('active');
    }
}

// Set up dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
});

// Auto-advance testimonials every 7 seconds
if (testimonials.length > 0) {
    showTestimonial(0);
    setInterval(() => {
        showTestimonial(currentTestimonial + 1);
    }, 7000);
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // In production, this would send to a backend
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
}

// Newsletter Form Submission
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = this.querySelector('input[type="email"]').value;

        // In production, this would send to a backend
        console.log('Newsletter signup:', email);

        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
});

// Scroll Animation (fade in elements when they come into view)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Donation Amount Selection
const donationAmounts = document.querySelectorAll('.donation-amount');
donationAmounts.forEach(amount => {
    amount.addEventListener('click', function() {
        donationAmounts.forEach(a => a.classList.remove('selected'));
        this.classList.add('selected');

        const customAmount = document.getElementById('customAmount');
        if (customAmount) {
            customAmount.value = '';
        }
    });
});

// Custom Donation Amount
const customAmount = document.getElementById('customAmount');
if (customAmount) {
    customAmount.addEventListener('input', function() {
        donationAmounts.forEach(a => a.classList.remove('selected'));
    });
}

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerHTML = '↑';
backToTop.className = 'back-to-top';
backToTop.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--primary-blue);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
`;

document.body.appendChild(backToTop);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Event Calendar Filter (if on events page)
const eventFilters = document.querySelectorAll('.event-filter');
eventFilters.forEach(filter => {
    filter.addEventListener('click', function() {
        const filterType = this.getAttribute('data-filter');
        const events = document.querySelectorAll('.event-card');

        eventFilters.forEach(f => f.classList.remove('active'));
        this.classList.add('active');

        events.forEach(event => {
            if (filterType === 'all' || event.getAttribute('data-category') === filterType) {
                event.style.display = 'block';
            } else {
                event.style.display = 'none';
            }
        });
    });
});

// Add animation to metrics on scroll
const metricNumbers = document.querySelectorAll('.metric-number');
const animateMetrics = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.getAttribute('data-value');
            const duration = 2000; // 2 seconds
            const increment = finalValue / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    current = finalValue;
                    clearInterval(timer);
                }
                target.textContent = Math.floor(current).toLocaleString();
            }, 16);

            observer.unobserve(target);
        }
    });
};

const metricsObserver = new IntersectionObserver(animateMetrics, {
    threshold: 0.5
});

metricNumbers.forEach(metric => {
    metricsObserver.observe(metric);
});
