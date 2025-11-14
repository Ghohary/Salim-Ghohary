// ==================== //
// Product Management System
// ==================== //

class ProductManager {
    constructor() {
        this.wishlist = JSON.parse(localStorage.getItem('ghohary-wishlist')) || [];
        this.cart = JSON.parse(localStorage.getItem('ghohary-cart')) || [];
        this.init();
    }

    init() {
        this.addProductButtons();
        this.updateAllBadges();
    }

    // Add Buy and Wishlist buttons to all product cards
    addProductButtons() {
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach((card, index) => {
            const productDetails = card.querySelector('.product-details');
            const title = card.querySelector('h3')?.textContent || `Product ${index + 1}`;
            const category = card.querySelector('.product-category')?.textContent || 'Fashion';
            const price = card.querySelector('.product-price')?.textContent || 'Price upon request';
            const description = card.querySelector('.product-description')?.textContent || '';
            const existingButton = card.querySelector('.product-button');
            const productId = this.generateId(title);

            // Store product data
            card.setAttribute('data-product-id', productId);
            card.setAttribute('data-product-title', title);
            card.setAttribute('data-product-price', price);
            card.setAttribute('data-product-category', category);

            // Check if product is already in wishlist or cart
            const inWishlist = this.wishlist.some(item => item.id === productId);
            const inCart = this.cart.some(item => item.id === productId);

            // Create button container if it doesn't exist
            let buttonContainer = card.querySelector('.product-actions');
            if (!buttonContainer) {
                buttonContainer = document.createElement('div');
                buttonContainer.className = 'product-actions';
                buttonContainer.style.cssText = `
                    display: flex;
                    gap: 0.5rem;
                    margin-top: 1rem;
                `;

                // Insert before or after existing button
                if (existingButton) {
                    existingButton.parentNode.insertBefore(buttonContainer, existingButton);
                } else if (productDetails) {
                    productDetails.appendChild(buttonContainer);
                }
            }

            // Clear existing buttons
            buttonContainer.innerHTML = '';

            // Add to Cart Button
            const cartButton = document.createElement('button');
            cartButton.className = 'add-to-cart-btn';
            cartButton.innerHTML = inCart ? '✓ In Cart' : '🛍️ Add to Cart';
            cartButton.style.cssText = `
                flex: 1;
                padding: 0.8rem 1.5rem;
                background: ${inCart ? 'var(--accent-color)' : 'var(--secondary-color)'};
                color: var(--primary-color);
                border: none;
                font-family: 'Montserrat', sans-serif;
                font-size: 0.85rem;
                font-weight: 500;
                letter-spacing: 1px;
                text-transform: uppercase;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            `;

            if (!inCart) {
                cartButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.addToCart(productId, title, price, category, description);
                    cartButton.innerHTML = '✓ In Cart';
                    cartButton.style.background = 'var(--accent-color)';
                    this.showProductNotification(`${title} added to cart!`, 'success');
                });

                cartButton.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 5px 15px rgba(212, 175, 55, 0.4)';
                });

                cartButton.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
            }

            // Add to Wishlist Button
            const wishlistButton = document.createElement('button');
            wishlistButton.className = 'add-to-wishlist-btn';
            wishlistButton.innerHTML = inWishlist ? '❤️' : '🤍';
            wishlistButton.title = inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist';
            wishlistButton.style.cssText = `
                width: 45px;
                height: 45px;
                padding: 0;
                background: var(--background-nude);
                border: 2px solid ${inWishlist ? 'var(--secondary-color)' : '#ddd'};
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                justify-content: center;
            `;

            wishlistButton.addEventListener('click', (e) => {
                e.preventDefault();
                if (inWishlist) {
                    this.removeFromWishlist(productId);
                    wishlistButton.innerHTML = '🤍';
                    wishlistButton.style.borderColor = '#ddd';
                    this.showProductNotification(`${title} removed from wishlist`, 'info');
                } else {
                    this.addToWishlist(productId, title, price, category, description);
                    wishlistButton.innerHTML = '❤️';
                    wishlistButton.style.borderColor = 'var(--secondary-color)';
                    this.showProductNotification(`${title} added to wishlist!`, 'success');
                }
            });

            wishlistButton.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });

            wishlistButton.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });

            // Add buttons to container
            buttonContainer.appendChild(cartButton);
            buttonContainer.appendChild(wishlistButton);

            // Keep the View Details button if it exists
            if (existingButton) {
                existingButton.style.marginTop = '0.5rem';
                existingButton.style.display = 'inline-block';
                existingButton.style.width = '100%';
            }
        });
    }

    generateId(title) {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    addToCart(id, title, price, category, description) {
        const product = { id, title, price, category, description, addedAt: new Date().toISOString() };

        if (!this.cart.some(item => item.id === id)) {
            this.cart.push(product);
            localStorage.setItem('ghohary-cart', JSON.stringify(this.cart));
            this.updateAllBadges();
            this.triggerCartAnimation();
        }
    }

    addToWishlist(id, title, price, category, description) {
        const product = { id, title, price, category, description, addedAt: new Date().toISOString() };

        if (!this.wishlist.some(item => item.id === id)) {
            this.wishlist.push(product);
            localStorage.setItem('ghohary-wishlist', JSON.stringify(this.wishlist));
            this.updateAllBadges();
        }
    }

    removeFromWishlist(id) {
        this.wishlist = this.wishlist.filter(item => item.id !== id);
        localStorage.setItem('ghohary-wishlist', JSON.stringify(this.wishlist));
        this.updateAllBadges();
    }

    updateAllBadges() {
        const wishlistBadge = document.getElementById('wishlistBadge');
        const cartBadge = document.getElementById('cartBadge');

        if (wishlistBadge) {
            wishlistBadge.textContent = this.wishlist.length;
            if (this.wishlist.length > 0) {
                wishlistBadge.classList.add('active');
            } else {
                wishlistBadge.classList.remove('active');
            }
        }

        if (cartBadge) {
            cartBadge.textContent = this.cart.length;
            if (this.cart.length > 0) {
                cartBadge.classList.add('active');
            } else {
                cartBadge.classList.remove('active');
            }
        }

        // Update shared.js if the function exists
        if (window.updateIconBadges) {
            window.updateIconBadges();
        }
    }

    triggerCartAnimation() {
        const cartIcon = document.getElementById('cartIcon');
        if (cartIcon) {
            cartIcon.style.animation = 'none';
            setTimeout(() => {
                cartIcon.style.animation = 'pulse 0.6s ease';
            }, 10);
        }
    }

    showProductNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `product-notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            padding: 1.2rem 1.8rem;
            background: ${type === 'success' ? 'var(--secondary-color)' : type === 'info' ? 'var(--accent-color)' : '#e74c3c'};
            color: var(--primary-color);
            border-radius: 5px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            z-index: 10002;
            font-size: 0.95rem;
            letter-spacing: 0.5px;
            max-width: 350px;
            animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            font-weight: 500;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1) reverse';
            setTimeout(() => {
                notification.remove();
            }, 400);
        }, 3000);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.productManager = new ProductManager();
    });
} else {
    window.productManager = new ProductManager();
}
