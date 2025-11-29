/**
 * Corporate Theme - Main Entry Point
 */

// Import Main Styles (SCSS)
import './scss/main.scss'

// Import Header Component
import { Header } from './components/Header'

// Import Services Component
import { Services } from './components/services/Services'

// Import About Us Component
import { AboutUs } from './components/about-us/AboutUs'

// Import Testimonial Component
import { Testimonial } from './components/testimonial/Testimonial'

// Import HTML Templates
import { headerHTML } from './components/header/headerTemplate'
import { servicesHTML } from './components/services/servicesTemplate'
import { aboutUsHTML } from './components/about-us/aboutUsTemplate'
import { testimonialHTML } from './components/testimonial/testimonialTemplate'

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  // Insert header HTML
  app.innerHTML = headerHTML;
  
  // Initialize Header Component
  const header = new Header();
  
  // Pause slideshow on hover
  header.pauseOnHover();
  
  // Insert Services HTML after header
  app.insertAdjacentHTML('beforeend', servicesHTML);
  
  // Initialize Services Component (Carousel)
  const services = new Services();
  
  // Insert About Us HTML after services
  app.insertAdjacentHTML('beforeend', aboutUsHTML);
  
  // Initialize About Us Component
  const aboutUs = new AboutUs();
  
  // Insert Testimonial HTML after about us
  app.insertAdjacentHTML('beforeend', testimonialHTML);
  
  // Initialize Testimonial Component (Carousel)
  const testimonial = new Testimonial();
  
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        // Smooth scroll implementation will be added later
        console.log('Navigate to:', href);
      }
    });
  });
  
  console.log('✅ Corporate Theme initialized successfully!');
});
