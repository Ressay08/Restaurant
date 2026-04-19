// Smooth Scrolling
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
        const navHeight = document.getElementById('nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Mobile Nav Toggle
document.getElementById('mobile-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    const icon = this.querySelector('svg');
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
    }
});

// Testimonials Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonials > div');
const container = document.getElementById('slider');

function showSlide(index) {
    const translateX = -index * 100;
    container.querySelector('.testimonials').style.transform = `translateX(${translateX}%)`;
}

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Auto slide every 5s
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Booking Modal
document.getElementById('book-btn').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
    document.body.style.overflow = '';
});

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        document.getElementById('modal').classList.add('hidden');
        document.body.style.overflow = '';
    }
});

// Form Handlings
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Simple validation
    const formData = new FormData(e.target);
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email.');
        return;
    }
    alert('Thank you! Your reservation request has been sent. We\'ll confirm soon.');
    e.target.reset();
});

document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Reservation confirmed! See you soon.');
    document.getElementById('modal').classList.add('hidden');
    document.body.style.overflow = '';
});

// Nav Links Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Order Buttons (demo)
document.querySelectorAll('.card-hover button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Added to order! Order feature coming soon.');
    });
});

