// Handle URL parameters for pre-filling form
function handleURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    const inquiry = urlParams.get('inquiry');

    const collectionSelect = document.getElementById('collection');

    if (service === 'bespoke-couture' || service === 'appointment') {
        // Auto-select based on service parameter
        if (service === 'bespoke-couture') {
            collectionSelect.value = 'bespoke';
        }
    }

    if (service === 'bridal-appointment') {
        collectionSelect.value = 'bridal';
    }

    if (inquiry === 'product') {
        const message = document.getElementById('message');
        message.value = 'I would like to inquire about a specific product I viewed on your website.';
    }
}

// Form submission handling
const contactForm = document.getElementById('mainContactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            location: document.getElementById('location').value,
            collection: document.getElementById('collection').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            message: document.getElementById('message').value,
            newsletter: document.getElementById('newsletter').checked
        };

        // Show loading state
        const submitButton = contactForm.querySelector('.form-submit-btn');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';

        // Simulate form submission
        setTimeout(() => {
            // Success state
            submitButton.textContent = 'Appointment Request Sent!';
            submitButton.style.background = 'var(--secondary-color)';
            submitButton.style.color = 'var(--primary-color)';
            submitButton.style.borderColor = 'var(--secondary-color)';

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success-message';
            successMessage.innerHTML = `
                <h3>Thank You, ${formData.firstName}!</h3>
                <p>Your appointment request has been received. Our team will contact you within 24 hours to confirm your consultation.</p>
                <p>We look forward to welcoming you to Maison Élégance.</p>
            `;
            contactForm.insertAdjacentElement('beforebegin', successMessage);

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset form
            contactForm.reset();

            // Reset button after delay
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.opacity = '1';
                submitButton.style.background = '';
                submitButton.style.color = '';
                submitButton.style.borderColor = '';
                submitButton.disabled = false;

                // Remove success message after reading
                setTimeout(() => {
                    successMessage.style.transition = 'opacity 0.5s ease';
                    successMessage.style.opacity = '0';
                    setTimeout(() => successMessage.remove(), 500);
                }, 5000);
            }, 3000);

        }, 2000);
    });
}

// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close other open items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    handleURLParameters();

    // Set minimum date to today for date picker
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});
