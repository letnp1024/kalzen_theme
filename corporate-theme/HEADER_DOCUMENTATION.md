# Header Component Documentation

## 📋 Overview

The header component has been successfully implemented with all requested features. It consists of three main parts with smooth animations and professional styling.

## 🎨 Color Palette

The theme uses the following color scheme:

- **Primary**: `#1A73E8` - Modern blue
- **Secondary Navy**: `#0F4C81` - Deep navy blue
- **Light Blue**: `#E8EEF5` - Light gray-blue
- **White Blue**: `#F4F7FA` - White-blue tint
- **Gray**: `#D1D9E6` - Neutral gray

## 🏗️ Header Structure

### Part 1: Top Info Bar

Located at the top of the header:
- **Left side**: Contact information
  - Phone number with icon
  - Address with icon
  - Working hours with icon
- **Right side**: Company logo
- **Styling**: 
  - Blur backdrop effect (backdrop-filter)
  - Semi-transparent white background
  - Responsive design (stacks vertically on mobile)

### Part 2: Navigation Menu

Positioned below the top bar:
- **Container**: Rounded pill shape with blur effect
- **Menu Items**:
  - Home
  - About Us
  - Services
  - Testimonial
  - Blog
- **Features**:
  - Rounded pill navigation container
  - Backdrop blur effect (15px)
  - Low opacity background (70%)
  - Smooth hover animations
  - Active state styling
  - Responsive hamburger menu for mobile
  - Sticky positioning on scroll

### Part 3: Hero Section

The main hero area with:
- **Hero Slideshow**:
  - Multiple background images (hero.jpg, hero1.jpg)
  - Fade in/out transitions (1.5s duration)
  - Primary color overlay (50% opacity)
  - Automatic slideshow (5 seconds per slide)
  - Pause on hover functionality

- **Content**:
  - Slogan headline (large, bold)
  - Subtitle/description text
  - Call-to-action button (rounded pill)
  
- **Animations**:
  - Slide in from bottom on initial load
  - Slide out/in animation on each slide change
  - Staggered animation delays for elements

## 🎬 Animation Details

### Slideshow Animations

1. **Fade Transition**: Images fade in/out smoothly (1.5s)
2. **Content Animation**: Text slides in from bottom (1s)
3. **Slide Change**: Content slides out before new content slides in

### Animation Timing

- **Slide Duration**: 5 seconds per slide
- **Fade Duration**: 1.5 seconds
- **Content Slide**: 1 second
- **Transition Delay**: 100-600ms between elements

## 📁 File Structure

```
src/
├── components/
│   ├── Header.ts           # Header component logic
│   └── Header.html         # HTML template (reference)
├── scss/
│   ├── _variables.scss     # Color variables & settings
│   ├── _bootstrap-override.scss  # Bootstrap customizations
│   ├── main.scss           # Main stylesheet
│   └── components/
│       └── _header.scss    # Header-specific styles
└── main.ts                 # Main entry point with header HTML
```

## 🔧 Customization

### Changing Colors

Edit `src/scss/_variables.scss`:

```scss
$primary: #1A73E8;           // Primary color
$secondary-navy: #0F4C81;    // Secondary color
$hero-overlay-opacity: 0.5;  // Overlay opacity
```

### Modifying Slide Duration

Edit `src/components/Header.ts`:

```typescript
private readonly slideDuration: number = 5000; // Change to desired milliseconds
```

### Adding More Slides

Edit `src/main.ts` - Add more slide divs:

```typescript
<div class="header__slideshow-slide" style="background-image: url('/images/hero/hero2.jpg');"></div>
```

### Changing Slogan

Edit `src/main.ts` - Update the hero content:

```typescript
<h1 class="header__hero-slogan">
  Your Custom Slogan Here
</h1>
```

## 📱 Responsive Behavior

### Desktop (> 991px)
- Full horizontal layout
- All menu items visible
- Full hero section visible

### Tablet (576px - 991px)
- Info items stack vertically
- Hamburger menu for navigation
- Adjusted font sizes

### Mobile (< 576px)
- Compact layout
- Stacked info items
- Mobile-optimized navigation
- Smaller fonts and spacing

## ✨ Features Implemented

✅ Three-part header structure
✅ Hero slideshow with fade transitions
✅ Primary color overlay (50% opacity)
✅ Rounded pill navigation with blur
✅ Smooth animations on slide changes
✅ Responsive design
✅ Mobile-friendly navigation
✅ Pause slideshow on hover
✅ Sticky navigation menu
✅ Professional color scheme
✅ Bootstrap 5 integration
✅ SASS/SCSS architecture
✅ TypeScript implementation

## 🚀 Next Steps

To enhance the header further, consider:

1. Adding more slide images
2. Implementing smooth scroll to sections
3. Adding scroll-triggered animations
4. Creating sticky header on scroll
5. Adding breadcrumb navigation
6. Implementing search functionality
7. Adding language switcher
8. Creating mega menu for Services

## 📝 Notes

- All animations use CSS transitions for smooth performance
- Backdrop filter requires browser support (modern browsers)
- Bootstrap JS is loaded via CDN for navbar collapse
- Font Awesome icons are loaded via CDN
- Google Fonts (Inter) is used for typography

