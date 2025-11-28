# Danh Sách Thư Viện jQuery cho Corporate Theme

## 📦 Thư Viện Animation & Hiệu Ứng

### 1. **jQuery** (v3.7.1)
- **Mục đích**: Thư viện JavaScript cơ bản, foundation cho tất cả các plugin
- **Sử dụng**: Core library, cần thiết cho hầu hết các plugin khác

### 2. **GSAP (GreenSock Animation Platform)** (v3.12.5)
- **Mục đích**: Animation engine mạnh nhất và mượt mà nhất
- **Sử dụng**: 
  - Animations phức tạp, timeline animations
  - Scroll animations
  - SVG animations
  - Physics-based animations
- **Ưu điểm**: Performance cao, hỗ trợ tốt nhất cho corporate theme

### 3. **AOS (Animate On Scroll)** (v2.3.4)
- **Mục đích**: Scroll-triggered animations đơn giản
- **Sử dụng**: 
  - Fade in khi scroll
  - Slide in từ các hướng
  - Zoom in/out effects
- **Ưu điểm**: Dễ sử dụng, nhiều hiệu ứng có sẵn

### 4. **WOW.js** (v1.2.2)
- **Mục đích**: Scroll reveal animations (alternative cho AOS)
- **Sử dụng**: Tương tự AOS, tương thích với Animate.css

### 5. **Animate.css** (v4.1.1)
- **Mục đích**: CSS animation classes có sẵn
- **Sử dụng**: Thêm class để có animation ngay lập tức
- **Ưu điểm**: Không cần JavaScript, chỉ cần CSS

---

## 🎠 Thư Viện Slider & Carousel

### 6. **Swiper.js** (v11.1.14)
- **Mục đích**: Slider/carousel hiện đại và responsive
- **Sử dụng**: 
  - Image sliders
  - Testimonial carousels
  - Product galleries
  - Touch-friendly cho mobile
- **Ưu điểm**: Hỗ trợ touch, nhiều hiệu ứng chuyển đổi

---

## 🎨 Thư Viện UI Components

### 7. **Isotope** (v3.0.6)
- **Mục đích**: Filtering và sorting cho grid layouts
- **Sử dụng**: 
  - Portfolio filtering
  - Product filtering
  - Masonry grid layouts
- **Ưu điểm**: Hiệu năng cao với nhiều items

---

## 📸 Thư Viện Lightbox & Gallery

### 8. **Magnific Popup** (v1.1.0)
- **Mục đích**: Lightbox cho images, videos, iframes
- **Sử dụng**: 
  - Image galleries
  - Video popups
  - Modal dialogs
- **Ưu điểm**: Nhẹ, dễ customize

---

## 🎯 Thư Viện Scroll Effects

### 9. **Waypoints.js** (v4.0.1)
- **Mục đích**: Trigger functions khi scroll đến một điểm
- **Sử dụng**: 
  - Counter animations
  - Progress bars
  - Fixed headers
  - Parallax effects

### 10. **Smooth Scrollbar** (v8.8.1)
- **Mục đích**: Custom scrollbar mượt mà
- **Sử dụng**: 
  - Custom scrollbar styling
  - Smooth scrolling
  - Scroll animations

---

## ✨ Thư Viện Background Effects

### 11. **Particles.js** (v2.0.0)
- **Mục đích**: Particle background effects
- **Sử dụng**: 
  - Hero section backgrounds
  - Animated backgrounds
  - Interactive particle effects

---

## 📋 Thư Viện Đã Có

### 12. **Bootstrap** (v5.3.8)
- **Mục đích**: CSS framework
- **Sử dụng**: Grid system, components, utilities

---

## 🚀 Hướng Dẫn Sử Dụng

### Cài Đặt:
```bash
npm install
```

### Import trong TypeScript/JavaScript:

```typescript
// jQuery (cần import trước các plugin)
import $ from 'jquery';
window.$ = window.jQuery = $;

// GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// Swiper
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Animate.css
import 'animate.css';

// WOW.js
import { WOW } from 'wow.js';
import 'wow.js/css/libs/animate.css';

// Isotope
import Isotope from 'isotope-layout';

// Magnific Popup
import 'magnific-popup/dist/jquery.magnific-popup.js';
import 'magnific-popup/dist/magnific-popup.css';

// Particles.js
import Particles from 'particles.js';

// Waypoints
import Waypoint from 'waypoints/lib/noframework.waypoints.js';
```

---

## 💡 Lưu Ý Quan Trọng cho ThemeForest

1. **Performance**: Tối ưu hóa các thư viện, chỉ load khi cần
2. **License**: Đảm bảo tất cả thư viện có license phù hợp
3. **Documentation**: Viết tài liệu đầy đủ cho người mua
4. **Customization**: Cho phép người dùng dễ dàng tắt/bật animations
5. **Responsive**: Đảm bảo tất cả hoạt động tốt trên mobile

---

## 🎯 Các Thư Viện Bổ Sung Có Thể Cần

### Optional (chưa cài):
- **CountUp.js**: Counter animations
- **Typed.js**: Typing animations
- **LazyLoad**: Lazy loading images
- **Sticky.js**: Sticky elements
- **Form validation libraries**: jQuery Validate

### Thư Viện Không Cần jQuery:
- **Framer Motion**: React animations (nếu dùng React)
- **Lottie**: JSON animations
- **Three.js**: 3D effects

