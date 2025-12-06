# Kế Hoạch Phát Triển Theme Doanh Nghiệp - Trello Cards

## 📋 Hướng Dẫn Sử Dụng
File này chứa danh sách các cards để tạo trên Trello. Mỗi card được đánh dấu với cột tương ứng:
- 🔵 **need information** - Cần thông tin/bàn bạc
- 🟡 **to do** - Chưa bắt đầu
- 🟠 **doing** - Đang làm
- 🟢 **ready to test** - Sẵn sàng test
- ✅ **done** - Hoàn thành

## 🎯 CẤU TRÚC DỰ ÁN
Dự án bao gồm **2 phiên bản chính**, mỗi phiên bản có **2 loại**:
1. **One Page Version** (Trang đơn)
   - HTML/CSS/JS (Static)
   - WordPress Theme
2. **Multiple Pages Version** (Nhiều trang)
   - HTML/CSS/JS (Static)
   - WordPress Theme

---

## 📦 GIAI ĐOẠN 0: THIẾT LẬP CHUNG (Shared Setup)

### 0.1. Thiết lập Cấu trúc Dự án

#### ✅ **Card: Thiết lập cấu trúc thư mục cơ bản** - **done**
- Tạo thư mục css/, js/, images/, fonts/
- Thiết lập môi trường build (Vite + TypeScript)
- Cấu hình SCSS compilation
- **Checklist:**
  - [x] Cấu trúc thư mục
  - [x] Vite config
  - [x] TypeScript config
  - [x] SCSS setup

#### ✅ **Card: Thiết lập thư viện JS cần thiết** - **done**
- Cài đặt jQuery, Bootstrap
- Cài đặt các thư viện hỗ trợ (GSAP, Swiper, AOS, etc.)
- **Checklist:**
  - [x] jQuery
  - [x] Bootstrap 5
  - [x] GSAP
  - [x] Swiper
  - [x] AOS
  - [x] Animate.css
  - [x] Font Awesome

#### 🟡 **Card: Thiết lập cấu trúc cho 2 phiên bản** - **to do**
- Tạo thư mục one-page/ và multiple-pages/
- Tổ chức code sharing giữa 2 phiên bản
- Setup build process cho cả 2 phiên bản
- **Checklist:**
  - [ ] one-page/ directory structure
  - [ ] multiple-pages/ directory structure
  - [ ] Shared components folder
  - [ ] Build config cho cả 2 phiên bản

---

## 🎯 GIAI ĐOẠN 1: ONE PAGE - HTML/CSS/JS VERSION

### 1.1. Phát triển One Page HTML/CSS/JS

#### 🟡 **Card: One Page - Header Component** - **to do**
- Header với logo và navigation
- Smooth scroll navigation cho anchor links
- Sticky header khi scroll
- Mobile hamburger menu
- **Checklist:**
  - [x] Header HTML structure (đã có)
  - [x] Header TypeScript (đã có)
  - [ ] Smooth scroll cho anchor links
  - [ ] Sticky header functionality
  - [ ] Active menu item highlighting

#### 🟡 **Card: One Page - Hero Section** - **to do**
- Hero section với slider/carousel
- Background video hoặc image slider
- Call-to-action buttons
- Scroll down indicator
- **Checklist:**
  - [ ] Hero HTML structure
  - [ ] Swiper slider integration
  - [ ] Background video option
  - [ ] CTA buttons
  - [ ] Scroll indicator animation

#### 🟡 **Card: One Page - About Us Section** - **to do**
- Section Về chúng tôi
- Animation khi scroll vào view
- **Checklist:**
  - [x] About Us HTML (đã có)
  - [x] About Us TypeScript (đã có)
  - [ ] Scroll animations (AOS/GSAP)
  - [ ] Parallax effects (nếu cần)

#### 🟡 **Card: One Page - Services Section** - **to do**
- Section Dịch vụ với carousel hoặc grid
- Hover effects
- **Checklist:**
  - [x] Services HTML (đã có)
  - [x] Services TypeScript (đã có)
  - [ ] Enhanced hover effects
  - [ ] Animation improvements

#### 🟡 **Card: One Page - Portfolio Section** - **to do**
- Section Dự án/Portfolio
- Grid layout với filter
- Lightbox cho images
- Isotope layout
- **Checklist:**
  - [ ] Portfolio HTML structure
  - [ ] Portfolio TypeScript
  - [ ] Filter functionality
  - [ ] Lightbox integration
  - [ ] Isotope layout

#### 🟡 **Card: One Page - Testimonials Section** - **to do**
- Section Lời chứng thực
- Carousel slider
- **Checklist:**
  - [x] Testimonial HTML (đã có)
  - [x] Testimonial TypeScript (đã có)
  - [ ] Enhanced carousel options

#### 🟡 **Card: One Page - Team Section** - **to do**
- Section Đội ngũ (Team Members)
- Grid layout
- Hover effects với social links
- **Checklist:**
  - [ ] Team HTML structure
  - [ ] Team TypeScript
  - [ ] Team member cards
  - [ ] Social links hover

#### 🟡 **Card: One Page - CTA Section** - **to do**
- Section Kêu gọi hành động
- Multiple CTA variations
- **Checklist:**
  - [ ] CTA HTML structure
  - [ ] CTA styling
  - [ ] Button animations
  - [ ] Background options

#### 🟡 **Card: One Page - Contact Section** - **to do**
- Section Liên hệ
- Contact form với validation
- Google Maps integration
- **Checklist:**
  - [x] Contact HTML (đã có)
  - [x] Contact TypeScript (đã có)
  - [ ] Form validation enhancement
  - [ ] Google Maps integration
  - [ ] Form submission handling

#### 🟡 **Card: One Page - Footer** - **to do**
- Footer với thông tin công ty
- Social media links
- Copyright
- **Checklist:**
  - [x] Footer HTML (đã có)
  - [ ] Footer enhancements
  - [ ] Social media integration
  - [ ] Newsletter form (optional)

#### 🟡 **Card: One Page - Smooth Scroll & Navigation** - **to do**
- Smooth scroll cho anchor links
- Active menu highlighting khi scroll
- Scroll spy functionality
- **Checklist:**
  - [ ] Smooth scroll implementation
  - [ ] Scroll spy
  - [ ] Active menu item update
  - [ ] Mobile menu close on click

#### 🟡 **Card: One Page - Responsive Design** - **to do**
- Mobile responsive (< 768px)
- Tablet responsive (768px - 1024px)
- Desktop responsive (> 1024px)
- **Checklist:**
  - [ ] Mobile breakpoints
  - [ ] Tablet breakpoints
  - [ ] Desktop breakpoints
  - [ ] Mobile menu
  - [ ] Touch-friendly interactions

#### 🟡 **Card: One Page - Animations & Effects** - **to do**
- Scroll animations (AOS/GSAP)
- Hover effects
- Parallax effects
- Loading animations
- **Checklist:**
  - [ ] AOS initialization
  - [ ] GSAP scroll triggers
  - [ ] Button hover effects
  - [ ] Card hover animations
  - [ ] Parallax effects

#### 🟡 **Card: One Page - Cross-browser Testing** - **to do**
- Test trên Chrome, Firefox, Safari, Edge
- Fix compatibility issues
- **Checklist:**
  - [ ] Chrome testing
  - [ ] Firefox testing
  - [ ] Safari testing
  - [ ] Edge testing
  - [ ] Fix CSS prefixes
  - [ ] Fix JS compatibility

#### 🟡 **Card: One Page - Performance Optimization** - **to do**
- Optimize images
- Minify CSS/JS
- Lazy loading
- Code splitting
- **Checklist:**
  - [ ] Image optimization (WebP)
  - [ ] CSS minification
  - [ ] JS minification
  - [ ] Lazy loading
  - [ ] Code splitting

---

## 🔄 GIAI ĐOẠN 2: ONE PAGE - WORDPRESS VERSION

### 2.1. Thiết lập Cấu trúc Theme WordPress (One Page)

#### 🟡 **Card: One Page WP - Tạo file cơ bản Theme** - **to do**
- Tạo style.css với theme header
- Tạo index.php (one page template)
- Tạo header.php
- Tạo footer.php
- Tạo functions.php
- **Checklist:**
  - [ ] style.css với theme info
  - [ ] index.php (one page)
  - [ ] header.php
  - [ ] footer.php
  - [ ] functions.php

#### 🟡 **Card: One Page WP - Cấu trúc thư mục Theme** - **to do**
- Tạo thư mục inc/ (chức năng theme)
- Tạo thư mục assets/ (CSS/JS/Images)
- Tổ chức file structure
- **Checklist:**
  - [ ] inc/ directory
  - [ ] assets/css/
  - [ ] assets/js/
  - [ ] assets/images/
  - [ ] assets/fonts/

### 2.2. Tích hợp One Page vào WordPress

#### 🟡 **Card: One Page WP - Tích hợp Header & Footer** - **to do**
- Cắt HTML header vào header.php
- Cắt HTML footer vào footer.php
- Sử dụng $wp_head(), $wp_footer()
- Sử dụng $bloginfo('name'), $bloginfo('description')
- **Checklist:**
  - [ ] Header template
  - [ ] Footer template
  - [ ] WordPress hooks
  - [ ] Dynamic site info

#### 🟡 **Card: One Page WP - Enqueue Styles & Scripts** - **to do**
- Đăng ký CSS trong functions.php
- Đăng ký JS trong functions.php
- Sử dụng wp_enqueue_style()
- Sử dụng wp_enqueue_script()
- **Checklist:**
  - [ ] Enqueue main CSS
  - [ ] Enqueue Bootstrap CSS
  - [ ] Enqueue jQuery
  - [ ] Enqueue custom JS
  - [ ] Conditional scripts

#### 🟡 **Card: One Page WP - Tích hợp Menu Navigation** - **to do**
- Đăng ký menu locations (register_nav_menus)
- Hiển thị menu bằng wp_nav_menu()
- Smooth scroll cho anchor links
- Active menu highlighting
- **Checklist:**
  - [ ] Register menu locations
  - [ ] Primary menu
  - [ ] Smooth scroll integration
  - [ ] Scroll spy functionality

#### 🟡 **Card: One Page WP - Tích hợp Sections** - **to do**
- Tích hợp tất cả sections vào index.php
- Sử dụng Customizer hoặc ACF để quản lý nội dung
- Dynamic content cho mỗi section
- **Checklist:**
  - [ ] Hero section integration
  - [ ] About Us section
  - [ ] Services section
  - [ ] Portfolio section
  - [ ] Testimonials section
  - [ ] Team section
  - [ ] CTA section
  - [ ] Contact section

#### 🟡 **Card: One Page WP - Customizer Integration** - **to do**
- Tùy chỉnh màu sắc
- Tùy chỉnh Logo
- Tùy chỉnh nội dung sections
- Social media links
- **Checklist:**
  - [ ] Color options
  - [ ] Logo upload
  - [ ] Section content options
  - [ ] Social media links
  - [ ] Typography settings

#### 🟡 **Card: One Page WP - ACF Integration** - **to do**
- Tạo ACF fields cho các sections
- Repeater fields cho Services, Portfolio, Team, Testimonials
- **Checklist:**
  - [ ] ACF fields - Hero
  - [ ] ACF fields - About Us
  - [ ] ACF fields - Services (repeater)
  - [ ] ACF fields - Portfolio (repeater)
  - [ ] ACF fields - Team (repeater)
  - [ ] ACF fields - Testimonials (repeater)
  - [ ] ACF fields - Contact

---

## 📄 GIAI ĐOẠN 3: MULTIPLE PAGES - HTML/CSS/JS VERSION

### 3.1. Phát triển Multiple Pages HTML/CSS/JS

#### 🟡 **Card: Multiple Pages - Cấu trúc thư mục** - **to do**
- Tạo cấu trúc thư mục cho multiple pages
- Tổ chức các file HTML riêng biệt
- Shared components
- **Checklist:**
  - [ ] pages/ directory
  - [ ] index.html (homepage)
  - [ ] about.html
  - [ ] services.html
  - [ ] portfolio.html
  - [ ] blog.html
  - [ ] contact.html
  - [ ] 404.html

#### 🟡 **Card: Multiple Pages - Homepage** - **to do**
- Trang chủ với các sections
- Navigation giữa các trang
- **Checklist:**
  - [ ] Homepage HTML
  - [ ] Hero section
  - [ ] About Us preview
  - [ ] Services preview
  - [ ] Portfolio preview
  - [ ] Testimonials preview
  - [ ] CTA section
  - [ ] Footer

#### 🟡 **Card: Multiple Pages - About Us Page** - **to do**
- Trang About Us đầy đủ
- Lịch sử công ty
- Tầm nhìn/Sứ mệnh
- Team Members grid
- Awards/Achievements
- **Checklist:**
  - [ ] About Us page HTML
  - [ ] History/Timeline section
  - [ ] Vision/Mission section
  - [ ] Team Members grid
  - [ ] Awards section
  - [ ] Breadcrumb navigation

#### 🟡 **Card: Multiple Pages - Services Pages** - **to do**
- Trang Services (tổng quan)
- Trang Single Service (chi tiết)
- **Checklist:**
  - [ ] Services page HTML
  - [ ] Services grid layout
  - [ ] Filter functionality
  - [ ] Single service template
  - [ ] Related services
  - [ ] Breadcrumb

#### 🟡 **Card: Multiple Pages - Portfolio Pages** - **to do**
- Trang Portfolio (grid 2/3/4 columns)
- Trang Single Portfolio (case study)
- **Checklist:**
  - [ ] Portfolio page HTML
  - [ ] Portfolio grid component
  - [ ] Filter functionality
  - [ ] Single portfolio template
  - [ ] Image gallery
  - [ ] Related projects
  - [ ] Breadcrumb

#### 🟡 **Card: Multiple Pages - Blog Pages** - **to do**
- Trang Blog (grid/list view)
- Trang Single Post
- **Checklist:**
  - [ ] Blog page HTML
  - [ ] Blog grid/list layout
  - [ ] View toggle
  - [ ] Category filter
  - [ ] Single post template
  - [ ] Sidebar component
  - [ ] Comment section HTML
  - [ ] Related posts
  - [ ] Social sharing

#### 🟡 **Card: Multiple Pages - Contact Page** - **to do**
- Trang Contact đầy đủ
- Contact form với validation
- Google Maps
- **Checklist:**
  - [ ] Contact page HTML
  - [ ] Contact information layout
  - [ ] Contact form với validation
  - [ ] Google Maps integration
  - [ ] Form submission handling

#### 🟡 **Card: Multiple Pages - Additional Pages** - **to do**
- Trang Testimonials
- Trang FAQ
- Trang 404 Error
- **Checklist:**
  - [ ] Testimonials page
  - [ ] FAQ page với Accordion
  - [ ] 404 error page
  - [ ] Search results page

#### 🟡 **Card: Multiple Pages - Shared Components** - **to do**
- Header component (shared)
- Footer component (shared)
- Navigation system
- Breadcrumb component
- **Checklist:**
  - [ ] Shared header
  - [ ] Shared footer
  - [ ] Navigation system
  - [ ] Breadcrumb component
  - [ ] Page transitions (optional)

#### 🟡 **Card: Multiple Pages - Responsive Design** - **to do**
- Responsive cho tất cả pages
- Mobile navigation
- **Checklist:**
  - [ ] Mobile responsive
  - [ ] Tablet responsive
  - [ ] Desktop responsive
  - [ ] Mobile menu

#### 🟡 **Card: Multiple Pages - Cross-browser Testing** - **to do**
- Test tất cả pages trên các trình duyệt
- Fix compatibility issues
- **Checklist:**
  - [ ] Chrome testing
  - [ ] Firefox testing
  - [ ] Safari testing
  - [ ] Edge testing
  - [ ] Fix issues

#### 🟡 **Card: Multiple Pages - Performance Optimization** - **to do**
- Optimize images
- Minify CSS/JS
- Lazy loading
- **Checklist:**
  - [ ] Image optimization
  - [ ] CSS/JS minification
  - [ ] Lazy loading
  - [ ] Code optimization

---

## 🔄 GIAI ĐOẠN 4: MULTIPLE PAGES - WORDPRESS VERSION

### 4.1. Thiết lập Cấu trúc Theme WordPress (Multiple Pages)

#### 🟡 **Card: Multiple Pages WP - Tạo file cơ bản Theme** - **to do**
- Tạo style.css với theme header
- Tạo các template files
- Tạo functions.php
- **Checklist:**
  - [ ] style.css với theme info
  - [ ] index.php
  - [ ] header.php
  - [ ] footer.php
  - [ ] sidebar.php
  - [ ] functions.php

#### 🟡 **Card: Multiple Pages WP - Cấu trúc thư mục Theme** - **to do**
- Tạo thư mục inc/ (chức năng theme)
- Tạo thư mục assets/ (CSS/JS/Images)
- Tổ chức file structure
- **Checklist:**
  - [ ] inc/ directory
  - [ ] assets/css/
  - [ ] assets/js/
  - [ ] assets/images/
  - [ ] assets/fonts/

### 4.2. Tích hợp Multiple Pages vào WordPress

#### 🟡 **Card: Multiple Pages WP - Tích hợp Header & Footer** - **to do**
- Cắt HTML header vào header.php
- Cắt HTML footer vào footer.php
- Sử dụng WordPress hooks
- **Checklist:**
  - [ ] Header template
  - [ ] Footer template
  - [ ] WordPress hooks
  - [ ] Dynamic site info

#### 🟡 **Card: Multiple Pages WP - Enqueue Styles & Scripts** - **to do**
- Đăng ký CSS trong functions.php
- Đăng ký JS trong functions.php
- Conditional loading
- **Checklist:**
  - [ ] Enqueue main CSS
  - [ ] Enqueue Bootstrap CSS
  - [ ] Enqueue jQuery
  - [ ] Enqueue custom JS
  - [ ] Conditional scripts

#### 🟡 **Card: Multiple Pages WP - Tích hợp Menu Navigation** - **to do**
- Đăng ký menu locations
- Hiển thị menu bằng wp_nav_menu()
- Responsive mobile menu
- **Checklist:**
  - [ ] Register menu locations
  - [ ] Primary menu
  - [ ] Footer menu
  - [ ] Mobile menu

#### 🟡 **Card: Multiple Pages WP - Tích hợp The Loop** - **to do**
- Áp dụng The Loop cho index.php
- Áp dụng The Loop cho archive.php
- Áp dụng The Loop cho single.php
- **Checklist:**
  - [ ] Loop trong index.php
  - [ ] Loop trong archive.php
  - [ ] Loop trong single.php
  - [ ] Pagination

#### 🟡 **Card: Multiple Pages WP - Tích hợp Sidebar & Widgets** - **to do**
- Đăng ký Sidebar
- Hiển thị bằng dynamic_sidebar()
- Tạo widget areas
- **Checklist:**
  - [ ] Register sidebar
  - [ ] Main sidebar
  - [ ] Footer widgets
  - [ ] Widget areas

#### 🟡 **Card: Multiple Pages WP - Template Files** - **to do**
- page.php (trang tĩnh)
- single.php (bài viết)
- archive.php (danh mục)
- 404.php (lỗi)
- search.php (tìm kiếm)
- **Checklist:**
  - [ ] page.php
  - [ ] single.php
  - [ ] archive.php
  - [ ] 404.php
  - [ ] search.php

### 4.3. Custom Post Types (CPTs)

#### 🟡 **Card: Multiple Pages WP - CPT Services** - **to do**
- Đăng ký Services CPT
- Tạo archive-service.php
- Tạo single-service.php
- **Checklist:**
  - [ ] Register Services CPT
  - [ ] archive-service.php
  - [ ] single-service.php
  - [ ] Custom taxonomies

#### 🟡 **Card: Multiple Pages WP - CPT Portfolio** - **to do**
- Đăng ký Portfolio CPT
- Tạo archive-portfolio.php
- Tạo single-portfolio.php
- **Checklist:**
  - [ ] Register Portfolio CPT
  - [ ] archive-portfolio.php
  - [ ] single-portfolio.php
  - [ ] Portfolio categories

#### 🟡 **Card: Multiple Pages WP - CPT Team Members** - **to do**
- Đăng ký Team Members CPT
- Tạo archive-team.php
- Tạo single-team.php
- **Checklist:**
  - [ ] Register Team CPT
  - [ ] archive-team.php
  - [ ] single-team.php

#### 🟡 **Card: Multiple Pages WP - CPT Testimonials** - **to do**
- Đăng ký Testimonials CPT
- Tạo archive-testimonial.php
- Tạo single-testimonial.php
- **Checklist:**
  - [ ] Register Testimonials CPT
  - [ ] archive-testimonial.php
  - [ ] single-testimonial.php

### 4.4. Tùy chọn Theme

#### 🟡 **Card: Multiple Pages WP - WordPress Customizer** - **to do**
- Tùy chỉnh màu sắc
- Tùy chỉnh Logo
- Tùy chỉnh Layout
- Typography options
- **Checklist:**
  - [ ] Color options
  - [ ] Logo upload
  - [ ] Layout options
  - [ ] Typography settings
  - [ ] Social media links

#### 🟡 **Card: Multiple Pages WP - ACF Integration** - **to do**
- Tạo ACF fields cho Services
- Tạo ACF fields cho Portfolio
- Tạo ACF fields cho Team Members
- Tạo ACF fields cho Testimonials
- **Checklist:**
  - [ ] ACF fields - Services
  - [ ] ACF fields - Portfolio
  - [ ] ACF fields - Team
  - [ ] ACF fields - Testimonials

#### 🟡 **Card: Multiple Pages WP - TGM Plugin Activation** - **to do**
- Cài đặt TGM Plugin Activation library
- Đăng ký các plugin khuyến nghị
- Đăng ký các plugin bắt buộc
- **Checklist:**
  - [ ] Install TGM library
  - [ ] Register recommended plugins
  - [ ] Register required plugins
  - [ ] Plugin list: ACF, Contact Form 7, Page Builder

#### 🟡 **Card: Multiple Pages WP - Page Builder Integration** - **to do**
- Tạo widgets/modules cho Elementor
- Tạo shortcodes cho WPBakery
- **Checklist:**
  - [ ] Elementor widgets
  - [ ] WPBakery shortcodes

---

## 🚀 GIAI ĐOẠN 5: HOÀN THIỆN & CHUẨN BỊ BÁN HÀNG

### 5.1. Demo Content

#### 🟡 **Card: Tạo Demo Content XML - One Page** - **to do**
- Export demo content cho One Page version
- **Checklist:**
  - [ ] Demo pages XML
  - [ ] Demo ACF data
  - [ ] Demo widgets

#### 🟡 **Card: Tạo Demo Content XML - Multiple Pages** - **to do**
- Export demo content cho Multiple Pages version
- **Checklist:**
  - [ ] Demo posts XML
  - [ ] Demo pages XML
  - [ ] Demo Services
  - [ ] Demo Portfolio
  - [ ] Demo Team
  - [ ] Demo Testimonials
  - [ ] Demo widgets

#### 🟡 **Card: Tích hợp One Click Demo Import** - **to do**
- Cài đặt plugin
- Cấu hình import files cho cả 2 phiên bản
- Test import process
- **Checklist:**
  - [ ] Install plugin
  - [ ] Configure import - One Page
  - [ ] Configure import - Multiple Pages
  - [ ] Test import
  - [ ] Fix import issues

### 5.2. Kiểm tra & Tuân thủ

#### 🟡 **Card: Chạy Theme Check Plugin - One Page** - **to do**
- Cài đặt Theme Check
- Chạy kiểm tra cho One Page theme
- Fix các lỗi phát hiện
- **Checklist:**
  - [ ] Install Theme Check
  - [ ] Run checks - One Page
  - [ ] Fix errors
  - [ ] Fix warnings
  - [ ] Re-check

#### 🟡 **Card: Chạy Theme Check Plugin - Multiple Pages** - **to do**
- Chạy kiểm tra cho Multiple Pages theme
- Fix các lỗi phát hiện
- **Checklist:**
  - [ ] Run checks - Multiple Pages
  - [ ] Fix errors
  - [ ] Fix warnings
  - [ ] Re-check

#### 🟡 **Card: Security Audit - Cả 2 phiên bản** - **to do**
- Sanitize inputs
- Escape outputs
- Nonce verification
- **Checklist:**
  - [ ] Input sanitization
  - [ ] Output escaping
  - [ ] Nonce checks
  - [ ] SQL injection prevention

### 5.3. Tài liệu (Documentation)

#### 🟡 **Card: Viết Tài liệu Hướng dẫn Cài đặt** - **to do**
- Hướng dẫn cài đặt theme (cả 2 phiên bản)
- Hướng dẫn import demo
- Requirements
- **Checklist:**
  - [ ] Installation guide - One Page
  - [ ] Installation guide - Multiple Pages
  - [ ] Demo import guide
  - [ ] System requirements
  - [ ] Screenshots

#### 🟡 **Card: Viết Tài liệu Hướng dẫn Sử dụng** - **to do**
- Hướng dẫn tùy chỉnh Customizer
- Hướng dẫn sử dụng CPTs (Multiple Pages)
- Hướng dẫn sử dụng ACF
- Hướng dẫn Page Builder
- **Checklist:**
  - [ ] Customizer guide
  - [ ] CPTs guide (Multiple Pages)
  - [ ] ACF guide
  - [ ] Page Builder guide
  - [ ] One Page specific guide

#### 🟡 **Card: Viết Tài liệu Tùy chỉnh Nâng cao** - **to do**
- Child theme guide
- Custom hooks
- Filter documentation
- **Checklist:**
  - [ ] Child theme guide
  - [ ] Hooks documentation
  - [ ] Filters documentation

### 5.4. Tối ưu hóa Tốc độ

#### 🟡 **Card: Tối ưu hóa CSS/JS - Cả 2 phiên bản** - **to do**
- Minify CSS
- Minify JS
- Combine files
- **Checklist:**
  - [ ] CSS minification - One Page
  - [ ] CSS minification - Multiple Pages
  - [ ] JS minification - One Page
  - [ ] JS minification - Multiple Pages
  - [ ] File combination
  - [ ] Remove unused code

#### 🟡 **Card: Tối ưu hóa Images** - **to do**
- Compress demo images
- Convert to WebP
- Lazy loading
- **Checklist:**
  - [ ] Image compression
  - [ ] WebP conversion
  - [ ] Lazy loading setup
  - [ ] Responsive images

---

## 📊 TỔNG KẾT

### Trạng thái hiện tại:
- ✅ **Giai đoạn 0**: Hoàn thành (Thiết lập chung)
- 🟠 **Giai đoạn 1**: Đang làm (One Page HTML/CSS/JS - một phần)
- 🟡 **Giai đoạn 2**: Chưa bắt đầu (One Page WordPress)
- 🟡 **Giai đoạn 3**: Chưa bắt đầu (Multiple Pages HTML/CSS/JS)
- 🟡 **Giai đoạn 4**: Chưa bắt đầu (Multiple Pages WordPress)
- 🟡 **Giai đoạn 5**: Chưa bắt đầu (Hoàn thiện & Bán hàng)

### Ưu tiên tiếp theo:
1. Hoàn thành One Page HTML/CSS/JS (Hero, Portfolio, CTA, Team)
2. Responsive Design cho One Page
3. Bắt đầu One Page WordPress
4. Sau đó chuyển sang Multiple Pages

### Cấu trúc sản phẩm cuối cùng:
```
corporate-theme/
├── one-page/
│   ├── html-css-js/          # Static version
│   └── wordpress/            # WordPress theme
└── multiple-pages/
    ├── html-css-js/          # Static version
    └── wordpress/            # WordPress theme
```

---

---

## 📐 TIÊU CHUẨN & YÊU CẦU KỸ THUẬT

### Browser Support
- **Desktop:** Chrome (latest 2 versions), Firefox (latest 2 versions), Safari (latest 2 versions), Edge (latest 2 versions)
- **Mobile:** iOS Safari (latest 2 versions), Chrome Mobile (latest 2 versions)
- **Fallback:** Graceful degradation cho IE11 (nếu cần)

### Performance Benchmarks
- **PageSpeed Insights:** Score ≥ 90 (Desktop), ≥ 85 (Mobile)
- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.8s
- **Total Blocking Time (TBT):** < 200ms
- **Cumulative Layout Shift (CLS):** < 0.1
- **File Sizes:** CSS < 200KB, JS < 300KB (minified)

### Accessibility Requirements (WCAG 2.1 Level AA)
- **Keyboard Navigation:** Tất cả interactive elements có thể truy cập bằng keyboard
- **Screen Reader:** Semantic HTML, ARIA labels khi cần
- **Color Contrast:** Tỷ lệ contrast ≥ 4.5:1 cho text, ≥ 3:1 cho large text
- **Focus Indicators:** Visible focus states cho tất cả interactive elements
- **Alt Text:** Tất cả images có alt text mô tả
- **Form Labels:** Tất cả form inputs có labels rõ ràng

### SEO Requirements
- **Meta Tags:** Title, description, keywords, Open Graph, Twitter Cards
- **Structured Data:** Schema.org markup (Organization, BreadcrumbList, Article, etc.)
- **Sitemap:** XML sitemap cho WordPress themes
- **Robots.txt:** Proper robots.txt configuration
- **Canonical URLs:** Canonical tags để tránh duplicate content
- **Heading Structure:** Proper H1-H6 hierarchy
- **URL Structure:** Clean, SEO-friendly URLs

### Code Quality Standards
- **HTML:** Valid HTML5, semantic markup
- **CSS:** BEM methodology hoặc tương tự, no inline styles
- **JavaScript:** ES6+, TypeScript, no console.logs in production
- **WordPress:** Follow WordPress Coding Standards
- **Security:** Sanitize inputs, escape outputs, nonce verification
- **Documentation:** Inline comments cho complex logic

---

## ✅ DEFINITION OF DONE (Tiêu chí Hoàn thành)

Một card được coi là **Done** khi:

1. **Code Complete:**
   - [ ] Tất cả checklist items đã hoàn thành
   - [ ] Code đã được review và approved
   - [ ] Không có lỗi linter/compiler
   - [ ] Code tuân thủ coding standards

2. **Testing Complete:**
   - [ ] Unit tests (nếu có) đã pass
   - [ ] Manual testing đã hoàn thành
   - [ ] Cross-browser testing đã pass
   - [ ] Responsive testing đã pass
   - [ ] Accessibility testing đã pass (nếu áp dụng)

3. **Documentation:**
   - [ ] Code comments đã được thêm (nếu cần)
   - [ ] README/Changelog đã được cập nhật (nếu cần)

4. **Integration:**
   - [ ] Code đã được merge vào main branch
   - [ ] Build process thành công
   - [ ] Không có conflicts với code hiện tại

---

## 🔗 DEPENDENCIES (Mối quan hệ Phụ thuộc)

### Giai đoạn 1 (One Page HTML/CSS/JS)
- **Header Component** → Cần trước: Thiết lập cấu trúc
- **Hero Section** → Cần trước: Header Component
- **Smooth Scroll** → Cần trước: Header Component
- **All Sections** → Cần trước: Shared components setup
- **Responsive Design** → Cần trước: Tất cả sections hoàn thành
- **Animations** → Cần trước: Tất cả sections hoàn thành
- **Performance Optimization** → Cần trước: Responsive Design

### Giai đoạn 2 (One Page WordPress)
- **Tất cả tasks** → Cần trước: Giai đoạn 1 hoàn thành
- **ACF Integration** → Cần trước: Tích hợp Sections
- **Customizer** → Cần trước: Tích hợp Sections

### Giai đoạn 3 (Multiple Pages HTML/CSS/JS)
- **Shared Components** → Có thể tái sử dụng từ Giai đoạn 1
- **All Pages** → Cần trước: Shared Components
- **Responsive Design** → Cần trước: Tất cả pages hoàn thành

### Giai đoạn 4 (Multiple Pages WordPress)
- **Tất cả tasks** → Cần trước: Giai đoạn 3 hoàn thành
- **CPTs** → Cần trước: Template Files
- **ACF Integration** → Cần trước: CPTs

### Giai đoạn 5 (Hoàn thiện)
- **Demo Content** → Cần trước: Cả 2 WordPress themes hoàn thành
- **Theme Check** → Cần trước: Demo Content
- **Documentation** → Cần trước: Theme Check pass

---

## 🧪 TESTING CHECKLIST (Chi tiết)

### Functional Testing
- [ ] Tất cả links hoạt động đúng
- [ ] Forms submit và validate đúng
- [ ] Navigation menu hoạt động trên tất cả pages
- [ ] Search functionality hoạt động (nếu có)
- [ ] Filter/Sort hoạt động đúng
- [ ] Modal/Lightbox hoạt động đúng
- [ ] Slider/Carousel hoạt động đúng
- [ ] Smooth scroll hoạt động mượt mà
- [ ] Contact form gửi email thành công

### Responsive Testing
- [ ] Mobile (< 768px): Layout không bị vỡ
- [ ] Tablet (768px - 1024px): Layout hiển thị đúng
- [ ] Desktop (> 1024px): Layout hiển thị đúng
- [ ] Mobile menu hoạt động đúng
- [ ] Touch interactions hoạt động tốt
- [ ] Images responsive và không bị overflow
- [ ] Text readable trên mọi kích thước

### Cross-browser Testing
- [ ] Chrome (latest): Tất cả features hoạt động
- [ ] Firefox (latest): Tất cả features hoạt động
- [ ] Safari (latest): Tất cả features hoạt động
- [ ] Edge (latest): Tất cả features hoạt động
- [ ] Mobile Safari (iOS): Tất cả features hoạt động
- [ ] Chrome Mobile (Android): Tất cả features hoạt động

### Performance Testing
- [ ] PageSpeed Insights score đạt mục tiêu
- [ ] Images optimized và lazy loaded
- [ ] CSS/JS minified
- [ ] No render-blocking resources
- [ ] Fast loading time (< 3s trên 3G)

### Accessibility Testing
- [ ] Keyboard navigation hoạt động
- [ ] Screen reader compatible
- [ ] Color contrast đạt chuẩn
- [ ] Focus indicators visible
- [ ] Alt text cho tất cả images
- [ ] Form labels rõ ràng

### WordPress Specific Testing
- [ ] Theme activation không có lỗi
- [ ] Menu locations hoạt động
- [ ] Widget areas hoạt động
- [ ] Customizer options lưu đúng
- [ ] ACF fields hiển thị đúng
- [ ] CPTs hiển thị đúng
- [ ] Demo import thành công
- [ ] No PHP errors/warnings

---

## 📋 ACCEPTANCE CRITERIA (Tiêu chí Chấp nhận)

### Ví dụ cho "One Page - Hero Section":
1. **Functional:**
   - Hero section hiển thị đúng trên tất cả devices
   - Slider tự động chuyển slide mỗi 5 giây
   - CTA buttons clickable và navigate đúng
   - Scroll indicator hoạt động mượt mà

2. **Design:**
   - Layout match với design mockup
   - Typography đúng font và size
   - Colors match với color palette
   - Spacing đúng với design system

3. **Technical:**
   - Code clean, no console errors
   - Swiper library integrated đúng cách
   - Responsive breakpoints hoạt động
   - Performance: LCP < 2.5s

4. **Browser:**
   - Hoạt động trên Chrome, Firefox, Safari, Edge
   - No visual bugs trên bất kỳ browser nào

---

## 🎨 DESIGN REQUIREMENTS

### Design Assets Cần có:
- [ ] **Figma/Sketch Files:** Design mockups cho tất cả pages
- [ ] **Color Palette:** Primary, secondary, accent colors với hex codes
- [ ] **Typography:** Font families, sizes, line heights, weights
- [ ] **Spacing System:** Grid system, margins, paddings
- [ ] **Icons:** Icon set (Font Awesome hoặc custom SVG)
- [ ] **Images:** Placeholder images với đúng dimensions
- [ ] **Logo:** Logo files (SVG, PNG các sizes)
- [ ] **Style Guide:** Complete style guide document

### Design Deliverables:
- [ ] Desktop mockups (1920px, 1440px, 1280px)
- [ ] Tablet mockups (1024px, 768px)
- [ ] Mobile mockups (375px, 414px)
- [ ] Component library/documentation
- [ ] Animation specifications

---

## 🔄 VERSION CONTROL & WORKFLOW

### Git Workflow:
- **Main Branch:** Production-ready code
- **Develop Branch:** Integration branch
- **Feature Branches:** `feature/one-page-hero`, `feature/multiple-pages-services`
- **Naming Convention:** `feature/`, `fix/`, `refactor/`, `docs/`

### Commit Messages:
- Format: `[Type]: [Description]`
- Types: `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`
- Example: `feat: Add hero section with slider for one page`

### Code Review Process:
1. Developer tạo Pull Request
2. Code review bởi team member
3. Fix comments nếu có
4. Approve và merge vào develop
5. Test trên staging
6. Merge vào main khi ready

---

## 🚨 RISK MANAGEMENT (Quản lý Rủi ro)

### Rủi ro Tiềm ẩn & Giải pháp:

1. **Rủi ro: Design changes giữa chừng**
   - **Giải pháp:** Lock design trước khi code, có approval process

2. **Rủi ro: Performance không đạt mục tiêu**
   - **Giải pháp:** Test performance sớm, optimize liên tục

3. **Rủi ro: Browser compatibility issues**
   - **Giải pháp:** Test cross-browser sớm, có fallbacks

4. **Rủi ro: WordPress version compatibility**
   - **Giải pháp:** Test trên nhiều WordPress versions, document requirements

5. **Rủi ro: Timeline delays**
   - **Giải pháp:** Buffer time trong planning, prioritize features

6. **Rủi ro: Code conflicts giữa 2 phiên bản**
   - **Giải pháp:** Shared components, clear separation, regular sync

---

## 📝 Ghi chú

### Trello Best Practices:
- Mỗi card nên có checklist chi tiết
- Thêm labels cho từng giai đoạn (Giai đoạn 1, Giai đoạn 2, etc.)
- Thêm labels cho loại công việc (Frontend, Backend, Documentation, etc.)
- Thêm labels cho phiên bản (One Page, Multiple Pages)
- Sử dụng due dates cho các milestone quan trọng
- Thêm attachments (designs, references) vào các cards
- Link related cards với nhau
- Add comments với progress updates

### Code Sharing Strategy:
- Tận dụng shared components giữa 2 phiên bản để tránh duplicate code
- Tạo shared folder cho common utilities
- Document shared components để dễ maintain
- Regular sync giữa 2 phiên bản để đảm bảo consistency

### Communication:
- Daily standup để sync progress
- Weekly review để đánh giá và adjust plan
- Document decisions và changes
- Share blockers early để có support
