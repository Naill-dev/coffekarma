const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

/* Mobile Menu Toggle */
menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
    this.classList.toggle('open');

    const isOpen = menu.classList.contains('active');

    this.setAttribute('aria-expanded', isOpen);
    this.setAttribute(
        'aria-label',
        isOpen ? 'Menyunu bağla' : 'Menyunu aç'
    );
});

/* Menu link click */
document.querySelectorAll('.header__menu a').forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.classList.remove('open');

        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Menyunu aç');
    });
});

/* Click outside menu */
document.addEventListener('click', (e) => {
    const isClickInside =
        menu.contains(e.target) ||
        menuToggle.contains(e.target);

    if (!isClickInside && menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuToggle.classList.remove('open');

        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Menyunu aç');
    }
});

/* Smooth Scroll with Vanilla JS */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* Form Validation */
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
