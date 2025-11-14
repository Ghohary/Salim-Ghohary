// Product Database
const products = {
    // Haute Couture Products
    'starlight-gown': {
        title: 'The Starlight Gown',
        category: 'Evening Wear',
        collection: 'Haute Couture',
        collectionLink: 'haute-couture.html',
        price: 'Price upon request',
        description: 'An exquisite hand-embroidered silk evening gown that captures the essence of starlit elegance. Adorned with over 5,000 hand-placed Swarovski crystals, this masterpiece takes over 500 hours to create.',
        materials: 'Premium Italian silk, Swarovski crystals, hand-embroidered details',
        details: [
            'Hand-crafted in our Parisian atelier',
            'Over 500 hours of expert craftsmanship',
            '5,000+ hand-placed Swarovski crystals',
            'Made-to-measure service included',
            'Personal fitting sessions'
        ],
        gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
    },
    'midnight-elegance': {
        title: 'The Midnight Elegance',
        category: 'Evening Wear',
        collection: 'Haute Couture',
        collectionLink: 'haute-couture.html',
        price: 'Price upon request',
        description: 'A sculptural masterpiece in luxurious velvet and satin. The hand-draped silhouette creates a stunning architectural form that celebrates the female figure.',
        materials: 'Italian velvet, silk satin, architectural boning',
        details: [
            'Sculptural hand-draped design',
            'Premium Italian velvet',
            'Architectural internal structure',
            'Made-to-measure service included',
            'Multiple fitting sessions'
        ],
        gradient: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)'
    },
    'royal-opera-coat': {
        title: 'The Royal Opera Coat',
        category: 'Outerwear',
        collection: 'Haute Couture',
        collectionLink: 'haute-couture.html',
        price: 'Price upon request',
        description: 'A statement piece featuring the finest wool and cashmere blend with luxurious mink fur trim. Perfect for grand occasions and opera evenings.',
        materials: 'Wool and cashmere blend, genuine mink fur trim, silk lining',
        details: [
            'Luxurious wool-cashmere blend',
            'Genuine mink fur trim',
            'Hand-stitched interior',
            'Full silk lining',
            'Made-to-measure available'
        ],
        gradient: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)'
    },

    // Bridal Products
    'enchanted-dream': {
        title: 'The Enchanted Dream',
        category: 'Ballgown',
        collection: 'Bridal',
        collectionLink: 'bridal.html',
        price: 'Price upon request',
        description: 'A romantic ballgown that brings fairy tales to life. Featuring delicate Alençon lace and hand-sewn pearl embellishments, this gown is the epitome of bridal elegance.',
        materials: 'French Alençon lace, silk organza, hand-sewn pearls',
        details: [
            'Hand-applied Alençon lace',
            'Over 2,000 hand-sewn pearls',
            'Silk organza ballgown skirt',
            'Cathedral-length train available',
            'Includes multiple fittings',
            'Complimentary veil selection'
        ],
        gradient: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)'
    },
    'contemporary-bride': {
        title: 'The Contemporary Bride',
        category: 'Modern',
        collection: 'Bridal',
        collectionLink: 'bridal.html',
        price: 'Price upon request',
        description: 'For the modern bride who appreciates clean lines and architectural details. This sleek crepe gown features minimal embellishment and maximum impact.',
        materials: 'Italian crepe, architectural seaming, silk buttons',
        details: [
            'Sleek modern silhouette',
            'Italian stretch crepe',
            'Architectural neckline',
            'Minimal embellishment',
            'Contemporary elegance',
            'Made-to-measure service'
        ],
        gradient: 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)'
    },
    'timeless-romance': {
        title: 'The Timeless Romance',
        category: 'Vintage',
        collection: 'Bridal',
        collectionLink: 'bridal.html',
        price: 'Price upon request',
        description: 'Inspired by vintage couture elegance, this classic A-line silhouette features exquisite Chantilly lace that has been carefully selected for its delicate beauty.',
        materials: 'French Chantilly lace, silk taffeta, vintage-inspired details',
        details: [
            'Vintage-inspired design',
            'French Chantilly lace',
            'Classic A-line silhouette',
            'Silk taffeta underlining',
            'Hand-finished details',
            'Includes alterations'
        ],
        gradient: 'linear-gradient(135deg, #f5f5f5 0%, #d5d5d5 100%)'
    },

    // Ready-to-Wear Products
    'cashmere-wrap-coat': {
        title: 'Cashmere Wrap Coat',
        category: 'Outerwear',
        collection: 'Ready-to-Wear',
        collectionLink: 'ready-to-wear.html',
        price: '$3,850',
        description: 'Luxurious 100% pure cashmere coat with an elegant wrap design and belt detail. The perfect investment piece for your wardrobe.',
        materials: '100% pure cashmere, leather belt detail, silk lining',
        details: [
            '100% pure cashmere',
            'Wrap design with belt',
            'Full silk lining',
            'Available in multiple colors',
            'Sizes XS-XL',
            'Dry clean only'
        ],
        gradient: 'linear-gradient(135deg, #8b7355 0%, #6b5644 100%)'
    },
    'midnight-silk-gown': {
        title: 'Midnight Silk Gown',
        category: 'Evening Wear',
        collection: 'Ready-to-Wear',
        collectionLink: 'ready-to-wear.html',
        price: '$2,450',
        description: 'Fluid silk charmeuse evening dress that drapes beautifully. Perfect for galas and formal events.',
        materials: 'Silk charmeuse, bias-cut construction',
        details: [
            'Pure silk charmeuse',
            'Bias-cut for perfect drape',
            'Adjustable straps',
            'Sizes 0-14',
            'Available in navy and black',
            'Professional dry clean'
        ],
        gradient: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
    },
    'golden-hour-dress': {
        title: 'Golden Hour Dress',
        category: 'Cocktail',
        collection: 'Ready-to-Wear',
        collectionLink: 'ready-to-wear.html',
        price: '$1,895',
        description: 'Stunning metallic jacquard cocktail dress that catches the light beautifully. Perfect for cocktail parties and special occasions.',
        materials: 'Metallic jacquard, structured fit, concealed zipper',
        details: [
            'Metallic jacquard fabric',
            'Structured silhouette',
            'Concealed back zipper',
            'Sizes 0-16',
            'Lined interior',
            'Dry clean recommended'
        ],
        gradient: 'linear-gradient(135deg, #c9a87c 0%, #b89968 100%)'
    }
};

// Get product from URL parameter
function getProductFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('item');
}

// Load product details
function loadProductDetails() {
    const productId = getProductFromURL();

    if (!productId || !products[productId]) {
        // If product not found, show default message
        document.getElementById('productTitle').textContent = 'Product Not Found';
        document.getElementById('productDescription').textContent = 'We apologize, but this product is currently unavailable. Please explore our collections for similar items.';
        return;
    }

    const product = products[productId];

    // Update page title
    document.title = `${product.title} - MAISON ÉLÉGANCE`;

    // Update breadcrumb
    document.getElementById('breadcrumbCategory').textContent = product.collection;
    document.getElementById('breadcrumbCategory').href = product.collectionLink;
    document.getElementById('breadcrumbProduct').textContent = product.title;

    // Update product information
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productCategory').textContent = product.category;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productMaterials').textContent = product.materials;

    // Update main image
    const mainImage = document.getElementById('mainImage');
    mainImage.style.background = product.gradient;
    document.getElementById('imagePlaceholderText').textContent = product.title.toUpperCase();

    // Update details list
    const detailsList = document.getElementById('productDetailsList');
    detailsList.innerHTML = '';
    product.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });

    // Update thumbnails with the same gradient
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.style.background = product.gradient;
    });
}

// Thumbnail click functionality
document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        // Remove active class from all thumbnails
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        // Add active class to clicked thumbnail
        thumbnail.classList.add('active');

        // Here you would normally change the main image
        // For now, we'll just add a visual effect
        const mainImage = document.getElementById('mainImage');
        mainImage.style.opacity = '0.5';
        setTimeout(() => {
            mainImage.style.opacity = '1';
        }, 200);
    });
});

// Load product details when page loads
document.addEventListener('DOMContentLoaded', loadProductDetails);

// ==================== //
// Cart and Wishlist Functionality for Product Detail Page
// ==================== //

function initializeProductButtons() {
    const productId = getProductFromURL();

    if (!productId || !products[productId]) {
        return;
    }

    const product = products[productId];
    const wishlist = JSON.parse(localStorage.getItem('ghohary-wishlist')) || [];
    const cart = JSON.parse(localStorage.getItem('ghohary-cart')) || [];

    const addToCartBtn = document.getElementById('addToCartBtn');
    const addToWishlistBtn = document.getElementById('addToWishlistBtn');

    // Check if product is already in cart or wishlist
    const inCart = cart.some(item => item.id === productId);
    const inWishlist = wishlist.some(item => item.id === productId);

    // Update button states
    if (inCart && addToCartBtn) {
        addToCartBtn.innerHTML = '✓ In Cart';
        addToCartBtn.style.background = 'var(--accent-color)';
    }

    if (inWishlist && addToWishlistBtn) {
        addToWishlistBtn.innerHTML = '❤️';
        addToWishlistBtn.style.borderColor = 'var(--secondary-color)';
    }

    // Add to Cart button
    if (addToCartBtn && !inCart) {
        addToCartBtn.addEventListener('click', () => {
            const productData = {
                id: productId,
                title: product.title,
                price: product.price,
                category: product.category,
                description: product.description,
                addedAt: new Date().toISOString()
            };

            const currentCart = JSON.parse(localStorage.getItem('ghohary-cart')) || [];
            if (!currentCart.some(item => item.id === productId)) {
                currentCart.push(productData);
                localStorage.setItem('ghohary-cart', JSON.stringify(currentCart));

                // Update button
                addToCartBtn.innerHTML = '✓ In Cart';
                addToCartBtn.style.background = 'var(--accent-color)';

                // Update badges
                updateBadges();

                // Trigger cart animation
                const cartIcon = document.getElementById('cartIcon');
                if (cartIcon) {
                    cartIcon.style.animation = 'none';
                    setTimeout(() => {
                        cartIcon.style.animation = 'pulse 0.6s ease';
                    }, 10);
                }

                // Show notification
                showProductNotification(`${product.title} added to cart!`, 'success');
            }
        });
    }

    // Add to Wishlist button
    if (addToWishlistBtn) {
        addToWishlistBtn.addEventListener('click', () => {
            const productData = {
                id: productId,
                title: product.title,
                price: product.price,
                category: product.category,
                description: product.description,
                addedAt: new Date().toISOString()
            };

            const currentWishlist = JSON.parse(localStorage.getItem('ghohary-wishlist')) || [];
            const itemIndex = currentWishlist.findIndex(item => item.id === productId);

            if (itemIndex === -1) {
                // Add to wishlist
                currentWishlist.push(productData);
                localStorage.setItem('ghohary-wishlist', JSON.stringify(currentWishlist));

                addToWishlistBtn.innerHTML = '❤️';
                addToWishlistBtn.style.borderColor = 'var(--secondary-color)';

                showProductNotification(`${product.title} added to wishlist!`, 'success');
            } else {
                // Remove from wishlist
                currentWishlist.splice(itemIndex, 1);
                localStorage.setItem('ghohary-wishlist', JSON.stringify(currentWishlist));

                addToWishlistBtn.innerHTML = '🤍';
                addToWishlistBtn.style.borderColor = '#ddd';

                showProductNotification(`${product.title} removed from wishlist`, 'info');
            }

            updateBadges();
        });

        // Hover effects
        addToWishlistBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        addToWishlistBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

function updateBadges() {
    const wishlist = JSON.parse(localStorage.getItem('ghohary-wishlist')) || [];
    const cart = JSON.parse(localStorage.getItem('ghohary-cart')) || [];

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

    // Update shared.js if the function exists
    if (window.updateIconBadges) {
        window.updateIconBadges();
    }
}

function showProductNotification(message, type = 'success') {
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

// Initialize buttons after product details are loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeProductButtons();
    }, 100);
});
