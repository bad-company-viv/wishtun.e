# 🎨 Wishtune Design System - Quick Reference

## Color Palette

### Primary Colors
```css
/* Dark Backgrounds */
--brand-dark: #05010d          /* Main background */
--brand-dark-light: #0a0215    /* Lighter sections */

/* Purple Accents */
--brand-plum: #2d0f36          /* Deep purple */
--brand-plum-light: #3d1f46    /* Lighter purple */

/* Gold Highlights */
--brand-gold: #e0c097          /* Primary gold */
--brand-gold-light: #f4e4c1    /* Light gold */
--brand-gold-dark: #c9a962     /* Dark gold */

/* Text */
--brand-text: #f2f0f5          /* Primary text */
--brand-text-muted: #a8a4b0    /* Muted text */
```

### Accent Colors
```css
--accent-purple: #8b5cf6
--accent-pink: #ec4899
--accent-cyan: #06b6d4
--accent-emerald: #10b981
```

---

## Typography

### Font Families
```css
font-sans: 'Outfit', 'Inter', sans-serif
font-serif: 'Cormorant Garamond', serif
font-mono: ui-monospace, monospace
```

### Display Sizes
```css
text-display-xl: 5rem (80px)    /* Hero headlines */
text-display-lg: 4rem (64px)    /* Section headlines */
text-display-md: 3rem (48px)    /* Sub-headlines */
```

---

## Components

### Buttons

#### Primary Button
```jsx
<button className="btn-primary">
  Click Me
</button>
```
**Style:** Gold background, dark text, hover scale + glow

#### Secondary Button
```jsx
<button className="btn-secondary">
  Learn More
</button>
```
**Style:** Transparent with border, hover fill

#### Ghost Button
```jsx
<button className="btn-ghost">
  Cancel
</button>
```
**Style:** Minimal, text-only with hover background

---

### Cards

#### Premium Card
```jsx
<div className="card-premium">
  Content here
</div>
```
**Features:**
- Glassmorphism background
- Border glow on hover
- Lift animation
- Backdrop blur

#### Product Card
```jsx
<div className="card-product">
  Product content
</div>
```
**Features:**
- Image overlay
- Hover scale
- Shadow glow
- Smooth transitions

---

### Glass Effects

#### Standard Glass
```jsx
<div className="glass-panel">
  Content
</div>
```

#### Dark Glass
```jsx
<div className="glass-dark">
  Content
</div>
```

#### Gold Glass
```jsx
<div className="glass-gold">
  Content
</div>
```

---

## Gradients

### Text Gradients
```jsx
<h1 className="gradient-text-gold">
  Gradient Text
</h1>
```

### Background Gradients
```jsx
<div className="gradient-cosmic">
  Cosmic gradient background
</div>

<div className="gradient-gold">
  Gold gradient background
</div>

<div className="gradient-radial-gold">
  Radial gold gradient
</div>
```

---

## Animations

### Built-in Animations
```jsx
animate-float          /* Floating effect */
animate-pulse-slow     /* Slow pulse */
animate-shimmer        /* Shimmer effect */
animate-gradient       /* Gradient animation */
animate-spin-slow      /* Slow spin */
animate-bounce-slow    /* Slow bounce */
animate-fade-in        /* Fade in */
animate-fade-in-up     /* Fade in from bottom */
animate-scale-in       /* Scale in */
```

### Hover Effects
```jsx
hover-lift    /* Lift on hover */
hover-glow    /* Glow on hover */
```

---

## Shadows

```jsx
shadow-glow       /* Gold glow */
shadow-glow-lg    /* Large gold glow */
shadow-glow-sm    /* Small gold glow */
shadow-dark       /* Dark shadow */
shadow-premium    /* Premium shadow */
shadow-inner-glow /* Inner glow */
```

---

## Layout

### Container
```jsx
<div className="container-custom">
  Max-width 7xl, centered
</div>
```

### Section Padding
```jsx
<section className="section-padding">
  Consistent vertical padding
</section>
```

---

## Input Fields

### Premium Input
```jsx
<input 
  type="text" 
  className="input-premium"
  placeholder="Enter text..."
/>
```

**Features:**
- Dark background with blur
- Gold focus ring
- Smooth transitions
- Rounded corners

---

## Spacing Scale

```css
18  → 4.5rem  (72px)
88  → 22rem   (352px)
100 → 25rem   (400px)
112 → 28rem   (448px)
128 → 32rem   (512px)
```

---

## Border Radius

```css
rounded-4xl → 2rem    (32px)
rounded-5xl → 2.5rem  (40px)
```

---

## Usage Examples

### Hero Section
```jsx
<section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-brand-dark">
  <div className="container-custom relative z-10 text-center">
    <h1 className="text-display-lg font-serif font-bold gradient-text-gold mb-6">
      Your Headline
    </h1>
    <p className="text-xl text-white/70 mb-12">
      Your subheadline
    </p>
    <button className="btn-primary">
      Get Started
    </button>
  </div>
</section>
```

### Feature Card
```jsx
<div className="card-premium">
  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-plum/20 flex items-center justify-center mb-6">
    <Icon className="w-8 h-8 text-brand-gold" />
  </div>
  <h3 className="text-2xl font-serif font-bold mb-3 text-white">
    Feature Title
  </h3>
  <p className="text-white/60">
    Feature description
  </p>
</div>
```

### Product Card
```jsx
<div className="card-product">
  <div className="relative h-80 overflow-hidden">
    <img src="..." className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
  </div>
  <div className="p-8 bg-gradient-to-b from-black/60 to-black/90">
    <h3 className="text-2xl font-serif font-bold mb-2 text-white">
      Product Name
    </h3>
    <p className="text-white/60 text-sm mb-4">
      Description
    </p>
    <div className="flex items-center justify-between mb-6">
      <span className="text-3xl font-bold gradient-text-gold">
        ₹2,499
      </span>
    </div>
    <button className="btn-primary w-full">
      Add to Cart
    </button>
  </div>
</div>
```

### CTA Section
```jsx
<section className="section-padding bg-gradient-to-br from-brand-plum via-brand-dark to-brand-dark relative overflow-hidden">
  <div className="container-custom relative z-10 text-center">
    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
      Ready to <span className="gradient-text-gold">Start?</span>
    </h2>
    <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
      Join thousands of satisfied customers
    </p>
    <div className="flex gap-4 justify-center">
      <button className="btn-primary">
        Get Started
      </button>
      <button className="btn-secondary">
        Learn More
      </button>
    </div>
  </div>
</section>
```

---

## Accessibility

### Focus States
All interactive elements have visible focus states:
```css
focus:outline-none 
focus:ring-2 
focus:ring-brand-gold/20
```

### Color Contrast
- Text on dark: AAA compliant
- Gold on dark: AA compliant
- White on gold: AAA compliant

### Motion
Respects `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Performance Tips

1. **Use transforms for animations** (GPU accelerated)
   ```jsx
   transform hover:scale-105
   ```

2. **Lazy load images**
   ```jsx
   <img loading="lazy" src="..." />
   ```

3. **Optimize backdrop blur**
   ```jsx
   backdrop-blur-xl  /* Use sparingly */
   ```

4. **Minimize re-renders**
   ```jsx
   Use React.memo() for heavy components
   ```

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE11 (not supported)

---

## Common Patterns

### Loading State
```jsx
{isLoading ? (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity }}
    className="w-6 h-6 border-2 border-brand-gold/30 border-t-brand-gold rounded-full"
  />
) : (
  'Content'
)}
```

### Success State
```jsx
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center"
>
  <Check className="w-6 h-6 text-emerald-500" />
</motion.div>
```

### Error State
```jsx
<div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
  <p className="text-red-300">Error message</p>
</div>
```

---

## Responsive Breakpoints

```css
sm:  640px   /* Small devices */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large screens */
```

### Mobile-First Example
```jsx
<div className="text-2xl md:text-4xl lg:text-6xl">
  Responsive text
</div>
```

---

## Z-Index Scale

```css
z-0   → Background elements
z-10  → Content
z-20  → Floating elements
z-30  → Dropdowns
z-40  → Overlays
z-50  → Modals/Navigation
```

---

**Pro Tip:** Always test your designs on real devices, not just in browser dev tools!
