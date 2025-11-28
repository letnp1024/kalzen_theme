/**
 * File này hướng dẫn cách import và khởi tạo các thư viện jQuery/Animation
 * cho Corporate Theme
 */

// ============================================
// 1. JQUERY - Core Library
// ============================================
import $ from 'jquery';
// Đảm bảo jQuery có sẵn globally
(window as any).$ = (window as any).jQuery = $;

// ============================================
// 2. GSAP - Animation Engine Mạnh Mẽ Nhất
// ============================================
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
// Đăng ký plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Ví dụ sử dụng GSAP:
// gsap.to('.element', { duration: 1, x: 100, opacity: 0.5 });
// gsap.from('.element', { duration: 1, y: 50, opacity: 0 });

// ============================================
// 3. AOS - Animate On Scroll
// ============================================
import AOS from 'aos';
import 'aos/dist/aos.css';

// Khởi tạo AOS
AOS.init({
  duration: 800,        // Thời gian animation (ms)
  easing: 'ease-in-out', // Easing function
  once: true,           // Chỉ animate một lần
  offset: 100,          // Offset khi scroll
});

// Sử dụng: Thêm data-aos="fade-up" vào HTML element

// ============================================
// 4. SWIPER - Slider/Carousel
// ============================================
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Đăng ký modules
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

// Khởi tạo Swiper example:
// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Pagination, Autoplay],
//   slidesPerView: 1,
//   spaceBetween: 30,
//   navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
//   pagination: { el: '.swiper-pagination', clickable: true },
//   autoplay: { delay: 3000 },
// });

// Export để sử dụng trong các components khác
export const initSwiper = (selector: string, options?: any) => {
  return new Swiper(selector, {
    modules: [Navigation, Pagination, Autoplay],
    ...options,
  });
};

// ============================================
// 5. ANIMATE.CSS - CSS Animations
// ============================================
import 'animate.css';

// Sử dụng: Thêm class "animate__animated animate__fadeInUp" vào HTML

// ============================================
// 6. WOW.JS - Scroll Reveal Animations
// ============================================
import { WOW } from 'wow.js';

// Khởi tạo WOW.js (nếu muốn dùng thay vì AOS)
const wow = new WOW({
  boxClass: 'wow',        // class để trigger animation
  animateClass: 'animated', // class animation
  offset: 0,              // distance to trigger
  mobile: true,           // enable on mobile
  live: true,             // reload trên dynamic content
});

// wow.init(); // Uncomment để sử dụng

// ============================================
// 7. ISOTOPE - Filtering & Sorting Grid
// ============================================
import Isotope from 'isotope-layout';

// Ví dụ sử dụng:
// const iso = new Isotope('.grid', {
//   itemSelector: '.grid-item',
//   layoutMode: 'fitRows'
// });
// 
// // Filtering
// $('.filter-button').on('click', function() {
//   const filterValue = $(this).attr('data-filter');
//   iso.arrange({ filter: filterValue });
// });

// ============================================
// 8. MAGNIFIC POPUP - Lightbox
// ============================================
// Note: Magnific Popup cần jQuery, import sau khi jQuery đã load
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

// Sử dụng với jQuery:
// $('.image-popup').magnificPopup({
//   type: 'image',
//   gallery: { enabled: true }
// });

// ============================================
// 9. WAYPOINTS - Scroll Triggers
// ============================================
import Waypoint from 'waypoints/lib/noframework.waypoints.js';

// Ví dụ sử dụng:
// const waypoint = new Waypoint({
//   element: document.querySelector('.element'),
//   handler: function(direction) {
//     if (direction === 'down') {
//       // Do something
//     }
//   }
// });

// ============================================
// 10. PARTICLES.JS - Particle Background
// ============================================
import Particles from 'particles.js';

// Ví dụ sử dụng:
// Particles('particles-js', {
//   particles: { /* config */ },
//   interactivity: { /* config */ }
// });

// ============================================
// 11. SMOOTH SCROLLBAR - Custom Scrollbar
// ============================================
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

// Ví dụ sử dụng:
// SmoothScrollbar.use(OverscrollPlugin);
// const scrollbar = SmoothScrollbar.init(document.querySelector('#my-scrollbar')!);

// ============================================
// EXPORT TẤT CẢ ĐỂ SỬ DỤNG
// ============================================
export {
  $,
  gsap,
  AOS,
  Swiper,
  Isotope,
  Particles,
  SmoothScrollbar,
  Waypoint,
};

// ============================================
// INITIALIZATION FUNCTION
// ============================================
export const initializeLibraries = () => {
  // Khởi tạo AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
  });

  // Khởi tạo GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Khởi tạo WOW (nếu cần)
  // wow.init();

  console.log('✅ All libraries initialized successfully!');
};

