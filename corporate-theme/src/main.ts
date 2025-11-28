/**
 * Corporate Theme - Main Entry Point
 */

// Import Main Styles (SCSS)
import './scss/main.scss'

// Import Header Component
import { Header } from './components/Header'

// Import Services Component
import { Services } from './components/services/Services'

// Import HTML Templates
import { headerHTML } from './components/header/headerTemplate'
import { servicesHTML } from './components/services/servicesTemplate'

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
