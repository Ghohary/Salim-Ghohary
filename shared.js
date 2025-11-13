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

    // Initialize icon functionality
    initializeHeaderIcons();
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

// ==================== //
// Header Icons Functionality
// ==================== //

function initializeHeaderIcons() {
    // Initialize wishlist and cart from localStorage
    let wishlist = JSON.parse(localStorage.getItem('ghohary-wishlist')) || [];
    let cart = JSON.parse(localStorage.getItem('ghohary-cart')) || [];

    // Update badge counts
    updateBadges();

    // Search Icon - Open search modal
    const searchIcon = document.getElementById('searchIcon');
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            openSearchModal();
        });
    }

    // Wishlist Icon - Navigate to wishlist or show count
    const wishlistIcon = document.getElementById('wishlistIcon');
    if (wishlistIcon) {
        wishlistIcon.addEventListener('click', (e) => {
            e.preventDefault();
            // For now, just show a notification
            showIconNotification(`You have ${wishlist.length} item${wishlist.length !== 1 ? 's' : ''} in your wishlist`);
        });
    }

    // Cart Icon - Navigate to cart or show count
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            // For now, just show a notification
            showIconNotification(`You have ${cart.length} item${cart.length !== 1 ? 's' : ''} in your cart`);
        });
    }

    // Account Icon - Navigate to account
    const accountIcon = document.getElementById('accountIcon');
    if (accountIcon) {
        accountIcon.addEventListener('click', (e) => {
            e.preventDefault();
            showIconNotification('Account features coming soon');
        });
    }

    // Update badge display
    function updateBadges() {
        const wishlistBadge = document.getElementById('wishlistBadge');
        const cartBadge = document.getElementById('cartBadge');

        if (wishlistBadge) {
            wishlistBadge.textContent = wishlist.length;
            if (wishlist.length > 0) {
                wishlistBadge.classList.add('active');
            } else {
                wishlistBadge.classList.remove('active');
            }
        }

        if (cartBadge) {
            cartBadge.textContent = cart.length;
            if (cart.length > 0) {
                cartBadge.classList.add('active');
            } else {
                cartBadge.classList.remove('active');
            }
        }
    }
}

// ==================== //
// Search Modal
// ==================== //

function openSearchModal() {
    // Create search modal if it doesn't exist
    if (document.getElementById('searchModal')) {
        document.getElementById('searchModal').style.display = 'flex';
        document.getElementById('searchInput').focus();
        return;
    }

    const modal = document.createElement('div');
    modal.id = 'searchModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(107, 68, 35, 0.95);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        animation: fadeIn 0.3s ease;
    `;

    modal.innerHTML = `
        <div style="width: 90%; max-width: 600px; position: relative;">
            <button id="closeSearch" style="
                position: absolute;
                top: -50px;
                right: 0;
                background: transparent;
                border: none;
                color: var(--secondary-color);
                font-size: 2rem;
                cursor: pointer;
                padding: 10px;
                transition: all 0.3s ease;
            ">&times;</button>
            <input
                type="text"
                id="searchInput"
                placeholder="Search for haute couture, bridal, ready-to-wear..."
                style="
                    width: 100%;
                    padding: 1.5rem 2rem;
                    font-size: 1.2rem;
                    border: 2px solid var(--secondary-color);
                    background: var(--background-nude);
                    color: var(--primary-color);
                    font-family: 'Montserrat', sans-serif;
                    letter-spacing: 1px;
                    transition: all 0.3s ease;
                "
            />
            <p style="
                color: var(--secondary-color);
                text-align: center;
                margin-top: 2rem;
                font-size: 0.9rem;
                letter-spacing: 1px;
            ">Press ESC to close</p>
        </div>
    `;

    document.body.appendChild(modal);

    // Focus on input
    setTimeout(() => {
        document.getElementById('searchInput').focus();
    }, 100);

    // Close button
    document.getElementById('closeSearch').addEventListener('click', closeSearchModal);

    // Close on ESC key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeSearchModal();
            document.removeEventListener('keydown', escHandler);
        }
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeSearchModal();
        }
    });

    // Handle search input
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        // Search functionality can be implemented here
        if (query.length > 2) {
            console.log('Searching for:', query);
            // Add search results display here
        }
    });
}

function closeSearchModal() {
    const modal = document.getElementById('searchModal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// ==================== //
// Icon Notification
// ==================== //

function showIconNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 1rem 1.5rem;
        background: var(--secondary-color);
        color: var(--primary-color);
        border-radius: 5px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10002;
        font-size: 0.95rem;
        letter-spacing: 0.5px;
        animation: slideInRight 0.4s ease;
        pointer-events: none;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.4s ease';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 2500);
}
