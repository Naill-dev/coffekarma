// =========================================
// 1. HAMBURGER MENU TOGGLE
// =========================================

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function () {
    // Toggle active class on menu
    menu.classList.toggle('active');

    // Toggle open class on button (for X animation)
    this.classList.toggle('open');

    // Update ARIA attribute for accessibility
    const isOpen = menu.classList.contains('active');
    this.setAttribute('aria-expanded', isOpen);
    this.setAttribute('aria-label', isOpen ? 'Menyunu bağla' : 'Menyunu aç');
});

// Close menu when a link is clicked (on mobile)
document.querySelectorAll('.header__menu a').forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Menyunu aç');
    });
});

// Close menu when clicking outside (optional)
document.addEventListener('click', (e) => {
    const isClickInside = menu.contains(e.target) || menuToggle.contains(e.target);
    if (!isClickInside && menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Menyunu aç');
    }
});

// =========================================
// 2. CONTACT FORM VALIDATION
// =========================================

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

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Validate name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Ad daxil edin';
        valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Düzgün email daxil edin';
        valid = false;
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Mesaj boş ola bilməz';
        valid = false;
    }

    if (valid) {
        alert('✅ Mesaj uğurla göndərildi.');
        form.reset();
    }
});
