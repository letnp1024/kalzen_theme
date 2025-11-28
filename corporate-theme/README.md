# Corporate Theme - Modern Business Theme

A professional, modern corporate theme built with TypeScript, Vite, SASS, and Bootstrap 5.

## 🎨 Features

- **Modern Design**: Clean, professional corporate design
- **Responsive**: Fully responsive and mobile-friendly
- **Smooth Animations**: Fade in/out slideshow with animated content
- **Custom Color Palette**: Professional blue color scheme
- **Bootstrap 5**: Built on Bootstrap 5 framework
- **SASS/SCSS**: Modular SCSS architecture
- **TypeScript**: Type-safe development

## 🎨 Color Palette

### Primary Colors
- **Primary**: `#1A73E8` - Modern blue
- **Secondary Navy**: `#0F4C81` - Deep navy blue

### Secondary Colors
- **Light Blue**: `#E8EEF5` - Light gray-blue
- **White Blue**: `#F4F7FA` - White-blue tint
- **Gray**: `#D1D9E6` - Neutral gray

## 📁 Project Structure

```
corporate-theme/
├── public/
│   └── images/
│       └── hero/
│           ├── hero.jpg
│           └── hero1.jpg
├── src/
│   ├── components/
│   │   ├── Header.ts          # Header component logic
│   │   └── Header.html        # Header HTML template
│   ├── scss/
│   │   ├── _variables.scss    # Color variables & settings
│   │   ├── _bootstrap-override.scss  # Bootstrap overrides
│   │   ├── main.scss          # Main stylesheet
│   │   └── components/
│   │       └── _header.scss   # Header styles
│   ├── main.ts                # Main entry point
│   └── style.css              # Legacy CSS (deprecated)
├── index.html
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📋 Header Structure

The header consists of three main parts:

### Part 1: Top Info Bar
- Left side: Contact information (phone, address, working hours)
- Right side: Company logo
- Styled with blur backdrop effect

### Part 2: Navigation Menu
- Responsive navigation with Bootstrap navbar
- Rounded pill container with blur effect
- Menu items: Home, About Us, Services, Testimonial, Blog
- Smooth hover animations
- Mobile-friendly hamburger menu

### Part 3: Hero Section
- Hero slideshow with fade in/out transitions
- Primary color overlay (50% opacity)
- Slogan text with slide-in animation
- Call-to-action button (rounded pill)
- Content animates on each slide change

## 🎬 Hero Slideshow

The hero section features an automatic slideshow with:
- **Fade transitions** between images
- **5-second intervals** per slide
- **Pause on hover** functionality
- **Animated content** that slides in/out with each transition
- **Primary color overlay** (50% opacity) on images

### Adding More Slides

To add more slides, update `src/main.ts`:

```typescript
<div class="header__slideshow-slide" style="background-image: url('/images/hero/hero2.jpg');"></div>
```

And update the `Header.ts` component initialization.

## 🎨 Customization

### Changing Colors

Edit `src/scss/_variables.scss`:

```scss
$primary: #1A73E8; // Change primary color
$secondary-navy: #0F4C81; // Change secondary color
```

### Modifying Header Content

Edit the `headerHTML` template in `src/main.ts`:

```typescript
const headerHTML = `
  <!-- Your custom HTML here -->
`;
```

### Adjusting Animations

Edit `src/scss/components/_header.scss`:

```scss
// Change slide duration
$slide-duration: 5000; // 5 seconds

// Modify animation speeds
transition: opacity 1.5s ease-in-out; // Fade speed
```

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: > 991px

## 🛠️ Technologies Used

- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Bootstrap 5** - CSS framework
- **SASS/SCSS** - CSS preprocessor
- **Font Awesome** - Icons
- **Google Fonts (Inter)** - Typography

## 📝 License

This theme is ready for ThemeForest submission. Please ensure all licenses are compatible.

## 🎯 Next Steps

1. Add remaining sections (About, Services, Testimonials, Blog)
2. Implement smooth scrolling
3. Add contact form
4. Add more animations and interactions
5. Optimize for performance
6. Add SEO optimization
7. Create documentation for end users

## 🤝 Contributing

This is a corporate theme project. Follow the existing code structure and conventions.

## 📧 Support

For issues or questions, please refer to the documentation or contact the development team.

