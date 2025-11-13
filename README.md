# MAISON ÉLÉGANCE - Luxury Fashion Website

A sophisticated, modern luxury fashion website inspired by high-end brands like Graff, Harry Winston, and Bulgari. This website showcases haute couture, bridal, and ready-to-wear collections with an elegant and premium design.

## Features

### Design & Aesthetics
- **Luxury Brand Aesthetic**: Elegant design inspired by premium jewelry and fashion houses
- **Sophisticated Color Palette**: Black, gold, and neutral tones for timeless elegance
- **Premium Typography**: Combination of Cormorant Garamond (serif) and Montserrat (sans-serif)
- **Smooth Animations**: Fade-in effects, parallax scrolling, and hover transitions

### Sections
1. **Hero Section**: Full-screen landing with dramatic presentation
2. **Haute Couture**: Showcase of high-fashion evening wear and couture pieces
3. **Bridal Collection**: Elegant wedding dress collections
4. **Ready-to-Wear**: Luxury fashion for everyday elegance
5. **About**: Brand heritage and craftsmanship story
6. **Contact**: Boutique locations and consultation booking form

### Interactive Features
- Responsive navigation with mobile hamburger menu
- Smooth scroll animations
- Parallax effects on hero section
- Hover effects on collection items
- Form validation and submission handling
- Custom cursor effect (desktop only)
- Scroll-based navigation highlighting

## File Structure

```
Salim-Ghohary/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
└── README.md           # Documentation (this file)
```

## How to Use in Visual Studio Code

### Method 1: Open with Live Server (Recommended)

1. **Install Live Server Extension**:
   - Open Visual Studio Code
   - Click on Extensions icon (or press `Ctrl+Shift+X`)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

2. **Open the Project**:
   - In VS Code, go to File > Open Folder
   - Navigate to the `Salim-Ghohary` folder and open it

3. **Launch the Website**:
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your default browser will open with the website
   - Any changes you make will auto-reload!

### Method 2: Direct Browser Opening

1. **Open the Folder**:
   - In VS Code, go to File > Open Folder
   - Navigate to the `Salim-Ghohary` folder

2. **Open in Browser**:
   - Right-click on `index.html` in the Explorer panel
   - Select "Reveal in File Explorer" (Windows) or "Reveal in Finder" (Mac)
   - Double-click `index.html` to open in your default browser

### Method 3: Using VS Code's Built-in Browser

1. **Install Browser Preview Extension** (optional):
   - Search for "Browser Preview" in Extensions
   - Install it

2. **Preview**:
   - Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
   - Type "Browser Preview: Open Preview"
   - Navigate to your `index.html` file

## Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css` (lines 15-22):

```css
:root {
    --primary-color: #1a1a1a;        /* Main dark color */
    --secondary-color: #c9a87c;      /* Gold accent */
    --accent-color: #8b7355;         /* Brown accent */
    --text-light: #ffffff;           /* Light text */
    --text-dark: #1a1a1a;            /* Dark text */
    --background-light: #f5f5f5;     /* Light backgrounds */
}
```

### Changing Brand Name

Replace "MAISON ÉLÉGANCE" in:
- `index.html`: Line 6 (title), Line 18 (logo), Line 171 (footer)
- Update the hero title on line 35

### Adding Real Images

Replace the placeholder sections in `index.html`:

```html
<!-- Current placeholder -->
<div class="collection-image" style="background: linear-gradient(...);">
    <div class="image-placeholder">
        <span>EVENING GOWN</span>
    </div>
</div>

<!-- Replace with -->
<div class="collection-image">
    <img src="path/to/your/image.jpg" alt="Description" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### Changing Fonts

In `index.html` (lines 8-9), replace the Google Fonts link with your preferred fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update the font families in `styles.css`.

### Modifying Content

All text content is in `index.html`. Key sections:
- **Collections**: Lines 45-150 (Haute Couture, Bridal, Ready-to-Wear)
- **About**: Lines 154-169
- **Contact**: Lines 173-224

## Responsive Design

The website is fully responsive and tested for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Browser Compatibility

Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Custom Properties, Animations
- **JavaScript (ES6+)**: Vanilla JS (no frameworks required)
- **Google Fonts**: Cormorant Garamond & Montserrat

### Performance Features
- Smooth scroll behavior
- Intersection Observer API for animations
- Efficient CSS transitions
- Optimized animations

## Customization Tips

### Adding New Sections

1. Create a new section in `index.html`:
```html
<section id="new-section" class="collection-section">
    <!-- Your content -->
</section>
```

2. Add navigation link:
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

### Connecting a Backend

To make the contact form functional:

1. Add a form action in `index.html`:
```html
<form class="contact-form" action="your-backend-url" method="POST">
```

2. Or modify `script.js` (lines 135-165) to send data to your API:
```javascript
fetch('your-api-endpoint', {
    method: 'POST',
    body: formData
})
```

## Support

For issues or questions:
1. Check the code comments in each file
2. Refer to this README
3. Review the inline documentation in `styles.css` and `script.js`

## License

This is a custom-built website template. Feel free to modify and use it for your projects.

## Credits

Design inspired by luxury fashion houses:
- Graff
- Harry Winston
- Bulgari
- Dior
- Chanel

---

**Built with elegance and precision for luxury fashion brands**

*Last Updated: 2024*
