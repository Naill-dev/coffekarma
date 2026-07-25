const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
    this.classList.toggle('open');
    const isOpen = menu.classList.contains('active');
    this.setAttribute('aria-expanded', isOpen);
    this.setAttribute('aria-label', isOpen ? 'Menyunu bağla' : 'Menyunu aç');
});

document.querySelectorAll('.header__menu a').forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Menyunu aç');
    });
});

document.addEventListener('click', (e) => {
    const isClickInside = menu.contains(e.target) || menuToggle.contains(e.target);
    if (!isClickInside && menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Menyunu aç');
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        e.preventDefault();
        const headerHeight = 70;
        const startY = window.pageYOffset;
        const targetY = targetElement.getBoundingClientRect().top + startY - headerHeight;
        const distance = targetY - startY;
        const duration = 700;
        let startTime = null;
        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
        function scrollAnimation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = easeInOutCubic(progress);
            window.scrollTo(0, startY + distance * easeProgress);
            if (elapsed < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }
        requestAnimationFrame(scrollAnimation);
    });
});

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Ad daxil edin';
        valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Düzgün email daxil edin';
        valid = false;
    }
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Mesaj boş ola bilməz';
        valid = false;
    }
    if (valid) {
        alert('✅ Mesaj uğurla göndərildi.');
        form.reset();
    }
});
