// ==================== //
// Premium Page Loader
// ==================== //

window.addEventListener('load', () => {
    // Create and show page loader
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">GHOHARY</div>
            <div class="loader-spinner"></div>
        </div>
    `;

    // Only add if not already present
    if (!document.querySelector('.page-loader')) {
        document.body.prepend(loader);
    }

    // Hide loader after brief delay
    setTimeout(() => {
        const pageLoader = document.querySelector('.page-loader');
        if (pageLoader) {
            pageLoader.classList.add('hidden');
            setTimeout(() => pageLoader.remove(), 500);
        }
    }, 800);
});

// ==================== //
// Scroll Progress Indicator
// ==================== //

const scrollIndicator = document.createElement('div');
scrollIndicator.className = 'scroll-indicator';
document.body.appendChild(scrollIndicator);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollIndicator.style.width = scrolled + '%';
});

// ==================== //
// Enhanced Smooth Scrolling
// ==================== //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== //
// Enhanced Navbar on Scroll
// ==================== //

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for premium effects
    if (currentScroll > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }

    // Add shadow when scrolled
    if (currentScroll > 100) {
        if (navbar) navbar.style.boxShadow = '0 4px 30px rgba(107, 68, 35, 0.2)';
    } else {
        if (navbar) navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ==================== //
// Enhanced Scroll Reveal Animations
// ==================== //

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Unobserve after revealing for better performance
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all collection items with staggered animation
const collectionItems = document.querySelectorAll('.collection-item');
collectionItems.forEach((item, index) => {
    item.classList.add('reveal');
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`;
    revealObserver.observe(item);
});

// Observe section headers
const sectionHeaders = document.querySelectorAll('.section-header');
sectionHeaders.forEach(header => {
    header.classList.add('reveal');
    header.style.opacity = '0';
    header.style.transform = 'translateY(40px)';
    header.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(header);
});

// Observe product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, index) => {
    card.classList.add('reveal');
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    revealObserver.observe(card);
});

// Observe about stats, value cards, benefit cards, etc.
const animatedElements = document.querySelectorAll('.stat-item, .value-card, .benefit-card, .service-item, .location-card, .service-info-card');
animatedElements.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    revealObserver.observe(element);
});

// ==================== //
// Enhanced Form Handling with Validation
// ==================== //

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    // Add real-time validation
    const formInputs = contactForm.querySelectorAll('input, select, textarea');

    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });

        input.addEventListener('input', () => {
            if (input.classList.contains('invalid')) {
                validateInput(input);
            }
        });
    });

    function validateInput(input) {
        const value = input.value.trim();
        const type = input.type;

        let isValid = true;

        if (input.hasAttribute('required') && !value) {
            isValid = false;
        } else if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
        } else if (type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            isValid = phoneRegex.test(value) && value.length >= 10;
        }

        if (isValid) {
            input.style.borderColor = 'var(--secondary-color)';
            input.classList.remove('invalid');
        } else {
            input.style.borderColor = '#e74c3c';
            input.classList.add('invalid');
        }

        return isValid;
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all inputs
        let formIsValid = true;
        formInputs.forEach(input => {
            if (!validateInput(input)) {
                formIsValid = false;
            }
        });

        if (!formIsValid) {
            // Show error message
            showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }

        // Get form values
        const formData = new FormData(contactForm);

        // Simulate form submission
        const button = contactForm.querySelector('button');
        const originalText = button.textContent;

        button.textContent = 'Sending...';
        button.style.opacity = '0.7';
        button.disabled = true;
        button.style.cursor = 'not-allowed';

        // Simulate API call
        setTimeout(() => {
            button.textContent = '✓ Appointment Requested';
            button.style.background = 'var(--secondary-color)';
            button.style.color = 'var(--primary-color)';

            // Reset form
            contactForm.reset();
            formInputs.forEach(input => {
                input.style.borderColor = '';
                input.classList.remove('invalid');
            });

            // Show success notification
            showNotification('Thank you! We will contact you shortly to schedule your private consultation.', 'success');

            // Reset button after 3 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.opacity = '1';
                button.style.background = '';
                button.style.color = '';
                button.style.cursor = '';
                button.disabled = false;
            }, 3000);
        }, 2000);
    });
}

// ==================== //
// Premium Notification System
// ==================== //

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 1.5rem 2rem;
        background: ${type === 'success' ? 'var(--secondary-color)' : '#e74c3c'};
        color: ${type === 'success' ? 'var(--primary-color)' : 'white'};
        border-radius: 5px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-size: 1rem;
        letter-spacing: 0.5px;
        max-width: 400px;
        animation: slideInRight 0.5s ease, fadeOut 0.5s ease 4.5s;
        pointer-events: none;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// ==================== //
// Parallax Effect for Hero
// ==================== //

const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;

    if (scrolled < heroHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / heroHeight);
    }
});

// ==================== //
// Premium Image Hover Effects with 3D Tilt
// ==================== //

const collectionImages = document.querySelectorAll('.collection-image');

collectionImages.forEach(image => {
    image.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08)';
        this.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    image.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // Add subtle 3D tilt effect on mouse move
    image.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `scale(1.08) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});

// Add premium image zoom for product images
const productImages = document.querySelectorAll('.product-image');

productImages.forEach(image => {
    image.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    image.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ==================== //
// Active Navigation Link
// ==================== //

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ==================== //
// Loading Animation
// ==================== //

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== //
// Cursor Effect (Optional Enhancement)
// ==================== //

const createCursorEffect = () => {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--secondary-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;

        cursorX += distX * 0.1;
        cursorY += distY * 0.1;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }

    // Only show custom cursor on desktop
    if (window.innerWidth > 768) {
        cursor.style.display = 'block';
        animateCursor();
    }

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .collection-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = 'var(--accent-color)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'var(--secondary-color)';
        });
    });
};

// Initialize cursor effect
createCursorEffect();

// ==================== //
// Premium Back to Top Button
// ==================== //

const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--secondary-color);
    color: var(--primary-color);
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    box-shadow: 0 5px 20px rgba(107, 68, 35, 0.3);
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopButton.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1)';
    this.style.boxShadow = '0 10px 30px rgba(107, 68, 35, 0.5)';
});

backToTopButton.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 5px 20px rgba(107, 68, 35, 0.3)';
});

// ==================== //
// Keyboard Navigation Enhancement
// ==================== //

document.addEventListener('keydown', (e) => {
    // Enable ESC to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        if (hamburger?.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    }
});

// ==================== //
// Console Message
// ==================== //

console.log('%c GHOHARY ', 'background: var(--primary-color); color: var(--secondary-color); font-size: 24px; padding: 15px; font-family: serif; letter-spacing: 5px; font-weight: bold;');
console.log('%c Luxury Fashion Experience ', 'background: var(--secondary-color); color: var(--primary-color); font-size: 14px; padding: 8px; letter-spacing: 2px;');
console.log('%c Website crafted with premium features and luxury design ', 'color: var(--accent-color); font-size: 12px; font-style: italic; padding: 5px;');

// ==================== //
// Filter Functionality for Ready-to-Wear
// ==================== //

const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card[data-category]');

if (filterButtons.length > 0 && productCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get the category to filter
            const category = button.getAttribute('data-category');

            // Filter products
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    // Add animation
                    card.style.animation = 'fadeInUp 0.6s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
