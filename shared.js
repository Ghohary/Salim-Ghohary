// ==================== //
// Load Header and Footer
// ==================== //

// Function to load external HTML
async function loadHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}`);
        }
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    // Load header and footer
    await loadHTML('header-placeholder', 'header.html');
    await loadHTML('footer-placeholder', 'footer.html');

    // After loading header, initialize navigation functionality
    initializeNavigation();
});

// Initialize navigation functionality (hamburger menu, etc.)
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        // Toggle mobile menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Highlight active page
    highlightActivePage();
}

// Highlight the current page in navigation
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
