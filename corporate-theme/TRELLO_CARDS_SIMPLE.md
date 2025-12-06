# Trello Cards - Format Đơn Giản để Copy

## 📋 CẤU TRÚC DỰ ÁN
Dự án bao gồm **2 phiên bản chính**, mỗi phiên bản có **2 loại**:
1. **One Page Version** (Trang đơn)
   - HTML/CSS/JS (Static)
   - WordPress Theme
2. **Multiple Pages Version** (Nhiều trang)
   - HTML/CSS/JS (Static)
   - WordPress Theme

---

## 🔵 NEED INFORMATION

### Card: Quyết định Design System & Color Palette
**Mô tả:** Cần quyết định color scheme, typography system, spacing system cho toàn bộ theme (dùng chung cho cả 2 phiên bản)
**Checklist:**
- [ ] Primary colors
- [ ] Secondary colors
- [ ] Typography scale
- [ ] Spacing system

### Card: Quyết định Cấu trúc Code Sharing
**Mô tả:** Cần quyết định cách tổ chức shared components giữa One Page và Multiple Pages
**Checklist:**
- [ ] Shared components structure
- [ ] Code sharing strategy
- [ ] Build process cho cả 2 phiên bản

---

## 📝 LƯU Ý
File này chứa các cards đơn giản để copy vào Trello. Để xem kế hoạch chi tiết đầy đủ với tất cả các cards được phân loại theo giai đoạn, vui lòng xem file **TRELLO_PLAN.md**.

Các cards dưới đây được tổ chức theo cột Trello. Mỗi card nên được thêm label để phân biệt:
- **One Page** hoặc **Multiple Pages**
- **HTML/CSS/JS** hoặc **WordPress**
- **Giai đoạn 0, 1, 2, 3, 4, 5**

### ⚠️ QUAN TRỌNG: Hiểu về Quy trình Dự án

**Trạng thái hiện tại:**
- ✅ **Giai đoạn 0 (DONE)**: Cấu trúc dự án cơ bản - Vite, TypeScript, SCSS, libraries setup
- 🟠 **Giai đoạn 1 (ĐANG LÀM)**: Xây dựng One Page trong codebase hiện tại (corporate-theme/)
  - Đang làm: Header, Services, About Us, Testimonials, Contact, Footer
  - Còn thiếu: Hero (tách riêng khỏi header), Portfolio, Team, CTA sections
- ⏸️ **Giai đoạn 2 (SAU ONE PAGE)**: Xây dựng Multiple Pages trong codebase hiện tại
  - Tạo các trang riêng: Home, About, Services, Portfolio, Blog, Contact
- ⏸️ **Giai đoạn 2.5 (SAU KHI HOÀN THÀNH CẢ 2)**: Tách code thành các phiên bản riêng
  - Trích xuất codebase hiện tại sang one-page/html-css-js/ và multiple-pages/html-css-js/
  - Setup build configs riêng
- ⏸️ **Giai đoạn 3-4 (SAU)**: WordPress themes

**Quy trình:**
1. **Hoàn thành One Page** trong codebase hiện tại (TypeScript + SCSS)
2. **Hoàn thành Multiple Pages** trong codebase hiện tại (TypeScript + SCSS)
3. **Sau đó tách** thành thư mục one-page/ và multiple-pages/
4. **Sau đó build** static HTML/CSS/JS từ TypeScript/SCSS
5. **Sau đó tạo** WordPress themes từ HTML/CSS/JS

**Vấn đề cần sửa:**
- ⚠️ **Cấu trúc Header**: Hiện tại top bar, nav bar, mobile menu, và hero section đều nằm trong cùng một Header component
- Cần **tách Header** (top bar + nav + mobile) ra khỏi **Hero Section** (slideshow + content)

---

## 🟡 TO DO

### GIAI ĐOẠN 1 - HOÀN THÀNH ONE PAGE (Codebase Hiện Tại)

**Lưu ý:** Các tasks này được làm trong codebase HIỆN TẠI (corporate-theme/) sử dụng TypeScript + SCSS. Sẽ tách thành các phiên bản riêng SAU KHI hoàn thành One Page.

### ONE PAGE - HTML/CSS/JS (GIAI ĐOẠN 1 - Codebase Hiện Tại)

### Card: Tách Header ra khỏi Hero Section (Ưu tiên sửa)
**Mô tả:** Hiện tại top bar, nav bar, mobile menu, và hero đều nằm trong Header component. Cần tách riêng.
**Checklist:**
- [ ] Tách top bar (logo + contact info) thành component riêng
- [ ] Tách navigation bar thành component riêng
- [ ] Tách mobile menu thành component riêng
- [ ] Giữ hero section (slideshow + content) riêng biệt
- [ ] Cập nhật Header.ts chỉ xử lý phần header
- [ ] Tạo Hero.ts component cho hero section
- [ ] Cập nhật headerTemplate.ts để tách cấu trúc
- [ ] Cập nhật SCSS để tách styles cho header và hero
- [ ] Test sticky navigation behavior
- [ ] Test mobile menu functionality

### Card: Thêm Animations Đồng Đều cho Các Components Đã Có
**Mô tả:** Thêm animations đồng đều cho tất cả các components đã có (Header, Hero, About Us, Services, Testimonials, Contact, Footer) để có trải nghiệm người dùng nhất quán

**Chiến lược Animation:**
- Sử dụng AOS (Animate On Scroll) hoặc GSAP cho scroll animations
- Timing và easing nhất quán trên tất cả components
- Fade-in, slide-up animations cho sections
- Hover effects cho các elements tương tác
- Smooth transitions

**Checklist:**
- [ ] **Setup Animation Library**
  - [x] AOS library đã cài đặt (package.json - ✅ đã có)
  - [x] GSAP library đã cài đặt (package.json - ✅ đã có)
  - [x] Code setup libraries đã có (libraries-setup.ts - ✅ đã có)
  - [ ] Import và gọi initializeLibraries() trong main.ts
  - [ ] Cấu hình AOS settings (duration, offset, easing) - điều chỉnh nếu cần
  - [ ] Cấu hình GSAP ScrollTrigger settings
  - [ ] Tạo animation utility functions (nếu cần)

- [ ] **Header Component Animations**
  - [ ] Sticky header fade-in animation
  - [ ] Mobile menu slide-in animation
  - [ ] Navigation links hover effects
  - [ ] Logo animation khi scroll
  - [ ] Top bar slide-down animation

- [ ] **Hero Section Animations**
  - [ ] Hero content fade-in khi load
  - [ ] Slideshow transition animations (đã có, enhance)
  - [ ] CTA buttons hover effects
  - [ ] Scroll indicator bounce animation
  - [ ] Text slide-up animation

- [ ] **About Us Section Animations**
  - [ ] Section fade-in khi scroll
  - [ ] Content cards slide-up animation
  - [ ] Image fade-in animation
  - [ ] Text reveal animation
  - [ ] Counter animations (nếu có)

- [ ] **Services Section Animations**
  - [ ] Section fade-in khi scroll
  - [ ] Service cards stagger animation
  - [ ] Card hover effects (lift, shadow)
  - [ ] Icon animations khi hover
  - [ ] Carousel/slider transition animations

- [ ] **Testimonials Section Animations**
  - [ ] Section fade-in khi scroll
  - [ ] Testimonial cards fade-in animation
  - [ ] Carousel transition animations
  - [ ] Avatar/image animations
  - [ ] Quote text reveal animation

- [ ] **Contact Section Animations**
  - [ ] Section fade-in khi scroll
  - [ ] Form fields focus animations
  - [ ] Button hover effects
  - [ ] Map fade-in animation
  - [ ] Parallax effect (nếu có)

- [ ] **Footer Component Animations**
  - [ ] Footer fade-in khi scroll
  - [ ] Social links hover effects
  - [ ] Footer links hover animations
  - [ ] Newsletter form animations

- [ ] **Cài Đặt Animation Nhất Quán**
  - [ ] Chuẩn hóa animation duration (ví dụ: 0.6s)
  - [ ] Chuẩn hóa easing function (ví dụ: ease-out)
  - [ ] Chuẩn hóa scroll offset (ví dụ: 100px)
  - [ ] Chuẩn hóa stagger delay (ví dụ: 0.1s)
  - [ ] Document animation standards

- [ ] **Tối Ưu Performance**
  - [ ] Sử dụng CSS transforms cho animations (GPU accelerated)
  - [ ] Debounce scroll events
  - [ ] Lazy load animations
  - [ ] Reduce motion cho accessibility (prefers-reduced-motion)
  - [ ] Test animation performance

- [ ] **Testing**
  - [ ] Test animations trên tất cả sections
  - [ ] Test với các tốc độ scroll khác nhau
  - [ ] Test trên mobile devices
  - [ ] Test với reduced motion preference
  - [ ] Đảm bảo animations không block content

---

## 🧩 TẠO CÁC SECTIONS CHƯA CÓ CHO HOMEPAGE (Làm Trước)

**Lưu ý:** Các sections đã có: Header, Hero, About Us, Services, Testimonials, Contact, Footer

**Quy trình:** Tạo tất cả các sections còn thiếu trước, sau đó mới tích hợp vào các phiên bản homepage.

Các sections dưới đây **CHƯA CÓ** và cần được tạo:

### Card: Section Portfolio/Dự án
**Mô tả:** Tạo section Portfolio/Dự án cho Homepage 1 và Homepage 2
**Checklist:**
- [ ] Portfolio section HTML structure
- [ ] Portfolio grid layout (tùy chọn 2/3/4 columns)
- [ ] Portfolio item card design
- [ ] Portfolio filter functionality (theo category)
- [ ] Lightbox integration cho portfolio images
- [ ] Hover effects trên portfolio items
- [ ] Portfolio item overlay với project info
- [ ] Button/link "View Project"
- [ ] Isotope/Masonry layout option
- [ ] Portfolio TypeScript component
- [ ] Portfolio SCSS styling
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Animation khi scroll (AOS/GSAP)
- [ ] Load more / Pagination (nếu cần)

### Card: Section Call-to-Action (CTA)
**Mô tả:** Tạo section CTA cho tất cả các phiên bản homepage
**Checklist:**
- [ ] CTA section HTML structure
- [ ] CTA heading và description
- [ ] Primary CTA button design
- [ ] Secondary CTA button (optional)
- [ ] CTA background options (solid color, gradient, image)
- [ ] CTA section TypeScript component
- [ ] CTA section SCSS styling
- [ ] Nhiều CTA variations (centered, split, full-width)
- [ ] Responsive design
- [ ] Animation khi scroll
- [ ] Button hover effects
- [ ] Icon integration (optional)

### Card: Section Đội ngũ (Team Members)
**Mô tả:** Tạo section Đội ngũ cho Homepage 2 (Agency)
**Checklist:**
- [ ] Team section HTML structure
- [ ] Team grid layout (2/3/4 columns)
- [ ] Team member card design
- [ ] Team member photo/avatar
- [ ] Team member name và title
- [ ] Team member bio/description
- [ ] Social media links (hover effect)
- [ ] Team section TypeScript component
- [ ] Team section SCSS styling
- [ ] Hover effects (card lift, image zoom)
- [ ] Responsive design
- [ ] Animation khi scroll
- [ ] Team member modal/popup (optional)

### Card: Section Quy trình Làm việc (Working Process)
**Mô tả:** Tạo section Quy trình Làm việc cho Homepage 2 (Agency)
**Checklist:**
- [ ] Working Process section HTML structure
- [ ] Process steps layout (horizontal timeline hoặc vertical)
- [ ] Step number/icon design
- [ ] Step title và description
- [ ] Process flow visualization
- [ ] Working Process TypeScript component
- [ ] Working Process SCSS styling
- [ ] Step-by-step animation
- [ ] Progress indicator (optional)
- [ ] Responsive design
- [ ] Animation khi scroll
- [ ] Icon integration cho mỗi step

### Card: Section Tính năng (Features)
**Mô tả:** Tạo section Tính năng cho Homepage 3 (Product/SaaS)
**Checklist:**
- [ ] Features section HTML structure
- [ ] Features grid layout (2/3/4 columns)
- [ ] Feature card design
- [ ] Feature icon/image
- [ ] Feature title và description
- [ ] Feature list/checklist (optional)
- [ ] Features section TypeScript component
- [ ] Features section SCSS styling
- [ ] Hover effects trên feature cards
- [ ] Icon animations
- [ ] Responsive design
- [ ] Animation khi scroll
- [ ] Feature comparison table (optional)

### Card: Section Bảng giá (Pricing Tables)
**Mô tả:** Tạo section Bảng giá cho Homepage 3 (Product/SaaS)
**Checklist:**
- [ ] Pricing section HTML structure
- [ ] Pricing table layout (3/4 columns)
- [ ] Pricing tier card design
- [ ] Pricing tier name (Basic, Pro, Enterprise, etc.)
- [ ] Price display (monthly/yearly toggle)
- [ ] Feature list per tier
- [ ] "Most Popular" badge (optional)
- [ ] CTA button per tier
- [ ] Pricing section TypeScript component
- [ ] Pricing section SCSS styling
- [ ] Hover effects trên pricing cards
- [ ] Responsive design (stack trên mobile)
- [ ] Animation khi scroll
- [ ] Pricing calculator integration (optional)
- [ ] Currency switcher (optional)

### Card: Section FAQ
**Mô tả:** Tạo section FAQ cho Homepage 3 (Product/SaaS)
**Checklist:**
- [ ] FAQ section HTML structure
- [ ] FAQ accordion component
- [ ] FAQ item design (question + answer)
- [ ] Expand/collapse functionality
- [ ] FAQ categories/tabs (optional)
- [ ] Search functionality (optional)
- [ ] FAQ section TypeScript component
- [ ] FAQ section SCSS styling
- [ ] Accordion animations
- [ ] Icon integration (plus/minus, chevron)
- [ ] Responsive design
- [ ] Animation khi scroll
- [ ] FAQ schema markup cho SEO (optional)

---

## 📄 TRANG NỘI DUNG CỐT LÕI

### Card: Chuyển đổi Cấu trúc Dự án từ One Page sang Multiple Pages
**Mô tả:** Chuyển đổi cấu trúc hiện tại từ single-page sang multi-page với routing. Hiện tại dự án chưa có routing và tất cả components đang ở một chỗ. Card này sẽ thiết lập nền tảng cho nhiều trang.

**Trạng thái hiện tại:**
- Tất cả components được render trong một `#app` div
- Chưa có hệ thống routing
- Tất cả sections đều ở một trang
- Components được khởi tạo tuần tự trong `main.ts`

**Trạng thái mục tiêu:**
- Các trang riêng biệt cho Home, About, Services, Portfolio, Blog, Contact
- Hệ thống routing để điều hướng giữa các trang
- Mỗi trang có entry point/component riêng
- Shared components (Header, Footer) có thể tái sử dụng
- Cấu trúc trang và tổ chức hợp lý

**Checklist:**
- [ ] Chọn giải pháp routing (HashRouter, History API, hoặc simple page-based routing)
- [ ] Tạo hệ thống/utility routing (router.ts hoặc sử dụng thư viện có sẵn)
- [ ] Tạo cấu trúc thư mục pages (src/pages/)
- [ ] Tạo các page components riêng biệt:
  - [ ] HomePage component
  - [ ] AboutPage component
  - [ ] ServicesPage component
  - [ ] PortfolioPage component
  - [ ] BlogPage component
  - [ ] ContactPage component
- [ ] Refactor main.ts để sử dụng router thay vì insert components trực tiếp
- [ ] Cập nhật Header navigation để sử dụng routing links
- [ ] Tạo page layout wrapper (với Header và Footer)
- [ ] Di chuyển các sections hiện có sang các trang phù hợp:
  - [ ] Di chuyển Hero section sang HomePage
  - [ ] Di chuyển About section sang AboutPage
  - [ ] Di chuyển Services section sang ServicesPage
  - [ ] Di chuyển Portfolio section sang PortfolioPage
  - [ ] Di chuyển Blog section sang BlogPage
  - [ ] Di chuyển Contact section sang ContactPage
- [ ] Setup trang 404/NotFound cho các routes không hợp lệ
- [ ] Test navigation giữa các trang
- [ ] Đảm bảo smooth page transitions (optional)
- [ ] Cập nhật build configuration nếu cần
- [ ] Test tất cả các trang load đúng
- [ ] Verify shared components (Header, Footer) hoạt động trên tất cả các trang
- [ ] Cập nhật TypeScript types cho routing
- [ ] Document cấu trúc routing

### Card: Trang About Us (Về chúng tôi)
**Mô tả:** Trang About Us đầy đủ với thông tin công ty
**Checklist:**
- [ ] Section Lịch sử công ty
- [ ] Section Tầm nhìn/Sứ mệnh
- [ ] Section Đội ngũ (Team Members) - grid layout
- [ ] Section Giải thưởng/Thành tích
- [ ] Section Timeline/Milestones công ty
- [ ] Section Giá trị/Văn hóa (optional)
- [ ] Breadcrumb navigation
- [ ] Responsive design
- [ ] Animation khi scroll

### Card: Trang Contact Us (Liên hệ)
**Mô tả:** Trang Contact đầy đủ với thông tin liên hệ và form
**Checklist:**
- [ ] Layout thông tin liên hệ (địa chỉ, phone, email, giờ làm việc)
- [ ] Tích hợp Google Maps (placeholder hoặc map thật)
- [ ] Contact form với validation
- [ ] Form fields: Name, Email, Phone, Subject, Message
- [ ] Xử lý form submission
- [ ] Thông báo Success/Error
- [ ] Social media links
- [ ] Breadcrumb navigation
- [ ] Responsive design

### Card: Trang Services (Tổng quan)
**Mô tả:** Trang tổng quan dịch vụ với grid/list view
**Checklist:**
- [ ] Services grid layout
- [ ] Services list layout
- [ ] View toggle (grid/list)
- [ ] Filter theo category
- [ ] Service card design
- [ ] Service icons/images
- [ ] Pagination (nếu cần)
- [ ] Breadcrumb navigation
- [ ] CTA section

### Card: Trang Services - Single (Chi tiết)
**Mô tả:** Trang chi tiết từng dịch vụ
**Checklist:**
- [ ] Single service layout
- [ ] Service header với image
- [ ] Service description/content
- [ ] Service features/benefits
- [ ] Related services section
- [ ] CTA section (Get Quote, Contact, etc.)
- [ ] Breadcrumb navigation
- [ ] Social sharing buttons
- [ ] Responsive design

---

## 📰 TRANG BLOG

### Card: Trang Blog - Grid/List View
**Mô tả:** Trang liệt kê blog với grid và list view
**Checklist:**
- [ ] Blog grid layout
- [ ] Blog list layout
- [ ] View toggle functionality
- [ ] Category filter
- [ ] Tag filter (optional)
- [ ] Search functionality
- [ ] Post card design
- [ ] Featured post section (optional)
- [ ] Pagination
- [ ] Sidebar với widgets (optional)

### Card: Trang Blog - Single Post
**Mô tả:** Trang chi tiết bài viết
**Checklist:**
- [ ] Single post layout
- [ ] Post header với featured image
- [ ] Post content/article
- [ ] Post meta (author, date, category, tags)
- [ ] Sidebar component
- [ ] Comment section HTML markup
- [ ] Related posts section
- [ ] Social sharing buttons
- [ ] Breadcrumb navigation
- [ ] Author bio section (optional)
- [ ] Reading time indicator (optional)

---

## 🔧 CÁC TRANG KHÁC

### Card: Trang 404 Error
**Mô tả:** Trang báo lỗi 404 tùy chỉnh
**Checklist:**
- [ ] 404 page design
- [ ] Error message
- [ ] Navigation links (Home, Back)
- [ ] Search box (optional)
- [ ] Popular links section (optional)
- [ ] Fun/creative design
- [ ] Responsive design
- [ ] Animation effects

---

### Card: One Page - Hero Section với Slider
**Mô tả:** Tạo Hero section với slider/carousel cho One Page
**Checklist:**
- [ ] Hero HTML structure
- [ ] Swiper integration
- [ ] Background video option
- [ ] CTA buttons
- [ ] Scroll indicator

### Card: One Page - Portfolio Section
**Mô tả:** Tạo section Portfolio với grid layout và filter cho One Page
**Checklist:**
- [ ] Portfolio grid component
- [ ] Filter functionality
- [ ] Lightbox integration
- [ ] Isotope layout

### Card: One Page - Team Section
**Mô tả:** Tạo section Team Members cho One Page
**Checklist:**
- [ ] Team HTML structure
- [ ] Team TypeScript
- [ ] Team member cards
- [ ] Social links hover

### Card: One Page - CTA Section
**Mô tả:** Tạo Call-to-Action section cho One Page
**Checklist:**
- [ ] CTA HTML structure
- [ ] CTA styling
- [ ] Button animations
- [ ] Background options

### Card: One Page - FAQ Section
**Mô tả:** Tạo FAQ section với accordion cho One Page
**Checklist:**
- [ ] FAQ section HTML structure
- [ ] Accordion/Collapse component
- [ ] Search functionality (optional)
- [ ] Category grouping
- [ ] FAQ item design
- [ ] Expand/collapse animations
- [ ] FAQ categories/tabs
- [ ] Contact CTA integration

### Card: One Page - Smooth Scroll & Navigation
**Mô tả:** Tích hợp smooth scroll và navigation cho One Page
**Checklist:**
- [ ] Smooth scroll implementation
- [ ] Scroll spy
- [ ] Active menu item update
- [ ] Mobile menu close on click

---

## 🏠 CÁC PHIÊN BẢN TRANG CHỦ (Tích hợp Sections Sau Khi Tạo)

### Card: Trang Chủ 1 - Default (Hiện đại, Tập trung Dịch vụ/Dự án)
**Mô tả:** Tích hợp tất cả sections cho Homepage 1 - Trang chủ hiện đại tập trung vào dịch vụ và dự án

**Sự khác biệt so với các Homepage khác:**
- **Hero Section**: Hero chuẩn doanh nghiệp, tập trung dịch vụ/dự án, tone chuyên nghiệp
- **Services Section**: Nhấn mạnh các dịch vụ, highlight các dịch vụ chính nổi bật
- **About Us Section**: Giới thiệu công ty ngắn gọn, tập trung vào chuyên môn và kinh nghiệm
- **Portfolio Section**: Showcase các dự án đã hoàn thành, filter theo loại dịch vụ
- **Testimonials Section**: Testimonials của khách hàng liên quan đến dịch vụ/dự án
- **CTA Section**: "Get Started", "Request Quote", "Contact Us" - tập trung dịch vụ
- **Layout**: Cân bằng, chuyên nghiệp, hướng dịch vụ
- **Color Scheme**: Màu xanh/corporate chuyên nghiệp
- **Thứ tự Sections**: Hero → About → Services → Portfolio → Testimonials → CTA → Contact

**Checklist:**
- [ ] Tích hợp Header component (đã có)
- [ ] Tùy chỉnh Hero Section cho service/project focus (messaging khác, CTA khác)
- [ ] Tùy chỉnh About Us section (ngắn gọn, tập trung chuyên môn)
- [ ] Tùy chỉnh Services section (highlight dịch vụ chính, service cards)
- [ ] Tích hợp Portfolio/Projects section (đã tạo ở trên)
- [ ] Tùy chỉnh Testimonials section (testimonials liên quan dịch vụ/dự án)
- [ ] Tích hợp CTA section (đã tạo ở trên, tùy chỉnh cho "Get Started" focus)
- [ ] Tích hợp Contact section (đã có)
- [ ] Tích hợp Footer component (đã có)
- [ ] Áp dụng color scheme tập trung dịch vụ/dự án
- [ ] Sắp xếp thứ tự: Hero → About → Services → Portfolio → Testimonials → CTA → Contact
- [ ] Smooth scroll navigation giữa các sections
- [ ] Responsive design cho tất cả sections
- [ ] Test tất cả sections hoạt động cùng nhau

### Card: Trang Chủ 2 - Agency (Tập trung Đội ngũ & Quy trình)
**Mô tả:** Tích hợp tất cả sections cho Homepage 2 - Trang chủ phong cách Agency tập trung vào đội ngũ và quy trình làm việc

**Sự khác biệt so với các Homepage khác:**
- **Hero Section**: Hero phong cách creative/agency, nhấn mạnh sáng tạo và đội ngũ
- **Team Section**: Showcase đội ngũ nổi bật, highlight chuyên môn
- **Working Process Section**: Quy trình làm việc từng bước, thể hiện cách agency hoạt động
- **Services Section**: Dịch vụ agency (design, marketing, strategy), trình bày sáng tạo
- **Portfolio Section**: Format case studies, thể hiện quy trình và kết quả
- **About Us Section**: Câu chuyện agency, cách tiếp cận sáng tạo, giá trị
- **Testimonials Section**: Câu chuyện thành công của khách hàng, dự án sáng tạo
- **CTA Section**: "Work With Us", "Start a Project" - tập trung hợp tác
- **Layout**: Sáng tạo, năng động, hướng đội ngũ
- **Color Scheme**: Màu sắc sáng tạo, có thể có gradients, sống động hơn
- **Thứ tự Sections**: Hero → Team → Working Process → Services → Portfolio → Testimonials → CTA → Contact

**Checklist:**
- [ ] Tích hợp Header component (đã có)
- [ ] Tùy chỉnh Hero Section với thiết kế agency-style (messaging sáng tạo, tập trung đội ngũ)
- [ ] Tích hợp Team Members section (đã tạo ở trên, vị trí nổi bật)
- [ ] Tích hợp Working Process section (đã tạo ở trên, thể hiện workflow)
- [ ] Tùy chỉnh Services section cho agency (dịch vụ sáng tạo, trình bày design-focused)
- [ ] Tích hợp Portfolio/Case Studies section (đã tạo ở trên, tùy chỉnh format case study)
- [ ] Tùy chỉnh About Us section (câu chuyện agency, cách tiếp cận sáng tạo)
- [ ] Tùy chỉnh Testimonials section (testimonials dự án sáng tạo)
- [ ] Tích hợp CTA section (đã tạo ở trên, tùy chỉnh cho "Work With Us" focus)
- [ ] Tích hợp Contact section (đã có)
- [ ] Tích hợp Footer component (đã có)
- [ ] Áp dụng color scheme agency/creative (có thể có gradients)
- [ ] Tùy chỉnh typography cho cảm giác creative/agency
- [ ] Sắp xếp thứ tự: Hero → Team → Working Process → Services → Portfolio → Testimonials → CTA → Contact
- [ ] Thêm animations và interactions sáng tạo
- [ ] Responsive design cho tất cả sections
- [ ] Test tất cả sections hoạt động cùng nhau

### Card: Trang Chủ 3 - Product/SaaS (Tập trung Tính năng & Giá cả)
**Mô tả:** Tích hợp tất cả sections cho Homepage 3 - Trang chủ Product/SaaS tập trung vào tính năng và bảng giá

**Sự khác biệt so với các Homepage khác:**
- **Hero Section**: Hero showcase sản phẩm, highlight lợi ích sản phẩm, CTA demo/trial
- **Features Section**: Tính năng sản phẩm chi tiết, tập trung lợi ích, so sánh
- **Pricing Section**: Nhiều gói giá, giá rõ ràng, so sánh tính năng
- **FAQ Section**: Trả lời câu hỏi thường gặp, giảm friction
- **About Us Section**: Câu chuyện công ty/sản phẩm, sứ mệnh, giá trị (ngắn gọn)
- **Testimonials Section**: Testimonials người dùng, đánh giá sản phẩm, case studies
- **Services Section**: Có thể thay thế hoặc tùy chỉnh thành "Solutions" hoặc "Use Cases"
- **CTA Section**: "Start Free Trial", "Sign Up", "Get Started" - tập trung conversion
- **Layout**: Tối ưu conversion, value proposition rõ ràng
- **Color Scheme**: Màu tech hiện đại, có thể dùng gradients, sạch và hiện đại
- **Thứ tự Sections**: Hero → Features → Pricing → FAQ → Testimonials → CTA → Contact

**Checklist:**
- [ ] Tích hợp Header component (đã có)
- [ ] Tùy chỉnh Hero Section với product showcase (demo sản phẩm, CTA trial)
- [ ] Tích hợp Features section (đã tạo ở trên, tính năng sản phẩm chi tiết)
- [ ] Tích hợp Pricing Tables section (đã tạo ở trên, nhiều tiers)
- [ ] Tích hợp FAQ section (đã tạo ở trên, giải quyết objections)
- [ ] Tùy chỉnh About Us section (câu chuyện sản phẩm/công ty, ngắn gọn)
- [ ] Tùy chỉnh Services section thành "Solutions" hoặc "Use Cases" (optional)
- [ ] Tùy chỉnh Testimonials section (testimonials người dùng, đánh giá sản phẩm)
- [ ] Tích hợp CTA section (đã tạo ở trên, tùy chỉnh cho "Start Free Trial" focus)
- [ ] Tích hợp Contact section (đã có, có thể là "Support" hoặc "Sales")
- [ ] Tích hợp Footer component (đã có)
- [ ] Áp dụng color scheme Product/SaaS (màu tech hiện đại)
- [ ] Tùy chỉnh typography cho cảm giác tech/product
- [ ] Sắp xếp thứ tự: Hero → Features → Pricing → FAQ → Testimonials → CTA → Contact
- [ ] Thêm các elements tối ưu conversion (trust badges, social proof)
- [ ] Tích hợp pricing calculator tương tác (optional)
- [ ] Responsive design cho tất cả sections
- [ ] Test tất cả sections hoạt động cùng nhau

---

### MULTIPLE PAGES - HTML/CSS/JS (GIAI ĐOẠN 2 - Codebase Hiện Tại)

**Lưu ý:** Sau khi hoàn thành One Page, tiếp tục xây dựng Multiple Pages trong cùng codebase trước khi tách.

### Card: Multiple Pages - Homepage
**Mô tả:** Tạo trang chủ cho Multiple Pages version
**Checklist:**
- [ ] Homepage HTML structure
- [ ] Hero section (tách riêng khỏi header)
- [ ] About Us preview section
- [ ] Services preview section
- [ ] Portfolio preview section
- [ ] Testimonials preview section
- [ ] CTA section

### Card: Multiple Pages - About Us Page
**Mô tả:** Tạo trang About Us đầy đủ
**Checklist:**
- [ ] About Us page HTML
- [ ] History/Timeline section
- [ ] Vision/Mission section
- [ ] Team Members grid
- [ ] Awards section
- [ ] Breadcrumb navigation

### Card: Multiple Pages - Services Pages
**Mô tả:** Tạo trang Services và Single Service
**Checklist:**
- [ ] Services page HTML
- [ ] Services grid layout
- [ ] Filter functionality
- [ ] Single service template
- [ ] Related services
- [ ] Breadcrumb

### Card: Multiple Pages - Portfolio Pages
**Mô tả:** Tạo trang Portfolio và Single Portfolio
**Checklist:**
- [ ] Portfolio page HTML
- [ ] Portfolio grid component
- [ ] Filter functionality
- [ ] Single portfolio template
- [ ] Image gallery
- [ ] Related projects

### Card: Multiple Pages - Blog Pages
**Mô tả:** Tạo trang Blog và Single Post
**Checklist:**
- [ ] Blog page HTML
- [ ] Blog grid/list layout
- [ ] View toggle
- [ ] Category filter
- [ ] Single post template
- [ ] Sidebar component
- [ ] Comment section HTML
- [ ] Related posts

### Card: Multiple Pages - Contact Page
**Mô tả:** Tạo trang Contact đầy đủ
**Checklist:**
- [ ] Contact page HTML
- [ ] Contact information layout
- [ ] Contact form với validation
- [ ] Google Maps integration
- [ ] Form submission handling

### Card: Multiple Pages - Additional Pages
**Mô tả:** Tạo các trang bổ sung
**Checklist:**
- [ ] Testimonials page
- [ ] FAQ page với Accordion
- [ ] 404 error page
- [ ] Search results page

### GIAI ĐOẠN 2.5 - TÁCH THÀNH CÁC PHIÊN BẢN (Sau Khi Hoàn Thành Cả One Page & Multiple Pages)

### Card: Tách Codebase thành các Phiên bản (Giai đoạn 2.5)
**Mô tả:** Sau khi hoàn thành cả One Page và Multiple Pages, tách codebase hiện tại thành các thư mục riêng
**Checklist:**
- [ ] Tạo cấu trúc thư mục one-page/
- [ ] Tạo cấu trúc thư mục multiple-pages/
- [ ] Di chuyển code One Page sang one-page/html-css-js/
- [ ] Di chuyển code Multiple Pages sang multiple-pages/html-css-js/
- [ ] Setup shared components folder
- [ ] Setup build configs cho cả 2 phiên bản
- [ ] Test build process cho cả 2 phiên bản

### ONE PAGE - WORDPRESS

### Card: One Page WP - Tạo file cơ bản Theme
**Mô tả:** Tạo các file cơ bản cho One Page WordPress theme
**Checklist:**
- [ ] style.css với theme info
- [ ] index.php (one page)
- [ ] header.php
- [ ] footer.php
- [ ] functions.php

### Card: One Page WP - Tích hợp Sections
**Mô tả:** Tích hợp tất cả sections vào One Page WordPress theme
**Checklist:**
- [ ] Hero section integration
- [ ] About Us section
- [ ] Services section
- [ ] Portfolio section
- [ ] Testimonials section
- [ ] Team section
- [ ] CTA section
- [ ] Contact section

### Card: One Page WP - Customizer Integration
**Mô tả:** Tích hợp WordPress Customizer cho One Page theme
**Checklist:**
- [ ] Color options
- [ ] Logo upload
- [ ] Section content options
- [ ] Social media links

### MULTIPLE PAGES - HTML/CSS/JS (GIAI ĐOẠN 3)

### Card: Multiple Pages - Cấu trúc thư mục (Giai đoạn 3)
**Mô tả:** Tạo cấu trúc thư mục riêng cho Multiple Pages HTML/CSS/JS version
**Checklist:**
- [ ] multiple-pages/html-css-js/ directory
- [ ] pages/ directory
- [ ] Multiple Pages specific build config
- [ ] Multiple Pages entry point setup

### Card: Multiple Pages - Homepage
**Mô tả:** Tạo trang chủ cho Multiple Pages version
**Checklist:**
- [ ] Homepage HTML
- [ ] Hero section
- [ ] About Us preview
- [ ] Services preview
- [ ] Portfolio preview
- [ ] Testimonials preview
- [ ] CTA section

### Card: Multiple Pages - About Us Page
**Mô tả:** Tạo trang About Us đầy đủ cho Multiple Pages
**Checklist:**
- [ ] About Us page HTML
- [ ] History/Timeline section
- [ ] Vision/Mission section
- [ ] Team Members grid
- [ ] Awards section
- [ ] Breadcrumb navigation

### Card: Multiple Pages - Services Pages
**Mô tả:** Tạo trang Services và Single Service cho Multiple Pages
**Checklist:**
- [ ] Services page HTML
- [ ] Services grid layout
- [ ] Filter functionality
- [ ] Single service template
- [ ] Related services
- [ ] Breadcrumb

### Card: Multiple Pages - Portfolio Pages
**Mô tả:** Tạo trang Portfolio và Single Portfolio cho Multiple Pages
**Checklist:**
- [ ] Portfolio page HTML
- [ ] Portfolio grid component
- [ ] Filter functionality
- [ ] Single portfolio template
- [ ] Image gallery
- [ ] Related projects

### Card: Multiple Pages - Blog Pages
**Mô tả:** Tạo trang Blog và Single Post cho Multiple Pages
**Checklist:**
- [ ] Blog page HTML
- [ ] Blog grid/list layout
- [ ] View toggle
- [ ] Category filter
- [ ] Single post template
- [ ] Sidebar component
- [ ] Comment section HTML
- [ ] Related posts

### Card: Multiple Pages - Contact Page
**Mô tả:** Tạo trang Contact đầy đủ cho Multiple Pages
**Checklist:**
- [ ] Contact page HTML
- [ ] Contact information layout
- [ ] Contact form với validation
- [ ] Google Maps integration
- [ ] Form submission handling

### Card: Multiple Pages - Additional Pages
**Mô tả:** Tạo các trang bổ sung cho Multiple Pages
**Checklist:**
- [ ] Testimonials page
- [ ] FAQ page với Accordion
- [ ] 404 error page
- [ ] Search results page

### MULTIPLE PAGES - WORDPRESS

### Card: Multiple Pages WP - Tạo file cơ bản Theme
**Mô tả:** Tạo các file cơ bản cho Multiple Pages WordPress theme
**Checklist:**
- [ ] style.css với theme info
- [ ] index.php
- [ ] header.php
- [ ] footer.php
- [ ] sidebar.php
- [ ] functions.php

### Card: Multiple Pages WP - Template Files
**Mô tả:** Tạo các template files cho Multiple Pages WordPress theme
**Checklist:**
- [ ] page.php
- [ ] single.php
- [ ] archive.php
- [ ] 404.php
- [ ] search.php

### Card: Multiple Pages WP - CPT Services
**Mô tả:** Đăng ký Custom Post Type Services cho Multiple Pages theme
**Checklist:**
- [ ] Register Services CPT
- [ ] archive-service.php
- [ ] single-service.php
- [ ] Custom taxonomies

### Card: Multiple Pages WP - CPT Portfolio
**Mô tả:** Đăng ký Custom Post Type Portfolio cho Multiple Pages theme
**Checklist:**
- [ ] Register Portfolio CPT
- [ ] archive-portfolio.php
- [ ] single-portfolio.php
- [ ] Portfolio categories

### Card: Multiple Pages WP - CPT Team Members
**Mô tả:** Đăng ký Custom Post Type Team cho Multiple Pages theme
**Checklist:**
- [ ] Register Team CPT
- [ ] archive-team.php
- [ ] single-team.php

### Card: Multiple Pages WP - CPT Testimonials
**Mô tả:** Đăng ký Custom Post Type Testimonials cho Multiple Pages theme
**Checklist:**
- [ ] Register Testimonials CPT
- [ ] archive-testimonial.php
- [ ] single-testimonial.php

### Card: Multiple Pages WP - WordPress Customizer
**Mô tả:** Tích hợp WordPress Customizer cho Multiple Pages theme
**Checklist:**
- [ ] Color options
- [ ] Logo upload
- [ ] Layout options
- [ ] Typography settings
- [ ] Social media links

### Card: Multiple Pages WP - ACF Integration
**Mô tả:** Tạo ACF fields cho Multiple Pages theme
**Checklist:**
- [ ] ACF fields - Services
- [ ] ACF fields - Portfolio
- [ ] ACF fields - Team
- [ ] ACF fields - Testimonials

### CHUNG CHO CẢ 2 PHIÊN BẢN

### Card: Responsive Design - Mobile First
**Mô tả:** Đảm bảo responsive design cho cả 2 phiên bản
**Checklist:**
- [ ] Mobile breakpoints (< 768px)
- [ ] Tablet breakpoints (768px - 1024px)
- [ ] Desktop breakpoints (> 1024px)
- [ ] Mobile menu hamburger
- [ ] Touch gestures

### Card: Tương tác & Hiệu ứng (Interactivity)
**Mô tả:** Thêm animations và effects cho cả 2 phiên bản
**Checklist:**
- [ ] Button hover effects
- [ ] Card hover animations
- [ ] Scroll animations (AOS/GSAP)
- [ ] Parallax effects
- [ ] Slider initialization

### Card: Cross-browser Testing
**Mô tả:** Test và fix trên các trình duyệt cho cả 2 phiên bản
**Checklist:**
- [ ] Chrome testing
- [ ] Firefox testing
- [ ] Safari testing
- [ ] Edge testing
- [ ] Fix CSS prefixes
- [ ] Fix JS compatibility

### Card: Performance Optimization
**Mô tả:** Tối ưu hóa performance cho cả 2 phiên bản
**Checklist:**
- [ ] Image optimization (WebP)
- [ ] Lazy loading
- [ ] CSS minification
- [ ] JS minification
- [ ] Code splitting

### HOÀN THIỆN & BÁN HÀNG

### Card: Tạo Demo Content XML - One Page
**Mô tả:** Tạo demo content cho One Page version
**Checklist:**
- [ ] Demo pages XML
- [ ] Demo ACF data
- [ ] Demo widgets

### Card: Tạo Demo Content XML - Multiple Pages
**Mô tả:** Tạo demo content cho Multiple Pages version
**Checklist:**
- [ ] Demo posts XML
- [ ] Demo pages XML
- [ ] Demo Services
- [ ] Demo Portfolio
- [ ] Demo Team
- [ ] Demo Testimonials
- [ ] Demo widgets

### Card: Tích hợp One Click Demo Import
**Mô tả:** Tích hợp One Click Demo Import cho cả 2 phiên bản
**Checklist:**
- [ ] Install plugin
- [ ] Configure import - One Page
- [ ] Configure import - Multiple Pages
- [ ] Test import
- [ ] Fix import issues

### Card: Chạy Theme Check Plugin
**Mô tả:** Chạy Theme Check cho cả 2 WordPress themes
**Checklist:**
- [ ] Install Theme Check
- [ ] Run checks - One Page
- [ ] Run checks - Multiple Pages
- [ ] Fix errors
- [ ] Fix warnings
- [ ] Re-check

### Card: Security Audit
**Mô tả:** Kiểm tra và fix security issues cho cả 2 themes
**Checklist:**
- [ ] Input sanitization
- [ ] Output escaping
- [ ] Nonce checks
- [ ] SQL injection prevention

### Card: Viết Tài liệu Hướng dẫn Cài đặt
**Mô tả:** Viết tài liệu hướng dẫn cài đặt cho cả 2 phiên bản
**Checklist:**
- [ ] Installation guide - One Page
- [ ] Installation guide - Multiple Pages
- [ ] Demo import guide
- [ ] System requirements
- [ ] Screenshots

### Card: Viết Tài liệu Hướng dẫn Sử dụng
**Mô tả:** Viết tài liệu hướng dẫn sử dụng cho cả 2 phiên bản
**Checklist:**
- [ ] Customizer guide
- [ ] CPTs guide (Multiple Pages)
- [ ] ACF guide
- [ ] Page Builder guide
- [ ] One Page specific guide

### Card: Tối ưu hóa CSS/JS - Cả 2 phiên bản
**Mô tả:** Tối ưu hóa CSS và JS cho cả 2 phiên bản
**Checklist:**
- [ ] CSS minification - One Page
- [ ] CSS minification - Multiple Pages
- [ ] JS minification - One Page
- [ ] JS minification - Multiple Pages
- [ ] File combination
- [ ] Remove unused code

### Card: Tối ưu hóa Images
**Mô tả:** Tối ưu hóa images cho cả 2 phiên bản
**Checklist:**
- [ ] Image compression
- [ ] WebP conversion
- [ ] Lazy loading setup
- [ ] Responsive images

### Card: Hero Section với Slider
**Mô tả:** Tạo Hero section với slider/carousel cho trang chủ
**Checklist:**
- [ ] HTML structure
- [ ] Swiper integration
- [ ] Responsive design
- [ ] Animation effects

### Card: Portfolio Section
**Mô tả:** Tạo section Portfolio với grid layout và filter
**Checklist:**
- [ ] Portfolio grid component
- [ ] Filter functionality
- [ ] Lightbox integration
- [ ] Isotope layout

### Card: CTA Section
**Mô tả:** Tạo Call-to-Action section cho trang chủ
**Checklist:**
- [ ] CTA design
- [ ] Button styling
- [ ] Background options

### Card: Trang About Us - Layout
**Mô tả:** Tạo layout trang About Us với các sections
**Checklist:**
- [ ] History/Timeline section
- [ ] Vision/Mission section
- [ ] Team Members grid
- [ ] Awards section

### Card: Trang Contact - Form Validation
**Mô tả:** Hoàn thiện contact form với validation đầy đủ
**Checklist:**
- [ ] Form validation (client-side)
- [ ] Error messages
- [ ] Success message
- [ ] Form styling

### Card: Trang Services - Grid Layout
**Mô tả:** Tạo trang Services với grid/list view
**Checklist:**
- [ ] Services grid
- [ ] Filter by category
- [ ] View toggle (grid/list)
- [ ] Pagination

### Card: Trang Services - Single Template
**Mô tả:** Tạo template trang chi tiết dịch vụ
**Checklist:**
- [ ] Single service layout
- [ ] Breadcrumb
- [ ] Related services
- [ ] CTA section

### Card: Trang Blog - Grid/List View
**Mô tả:** Tạo trang blog với grid và list view
**Checklist:**
- [ ] Blog grid layout
- [ ] Blog list layout
- [ ] View toggle
- [ ] Category filter
- [ ] Pagination

### Card: Trang Blog - Single Post
**Mô tả:** Tạo template trang chi tiết bài viết
**Checklist:**
- [ ] Single post layout
- [ ] Sidebar component
- [ ] Comment section HTML
- [ ] Related posts
- [ ] Social sharing buttons

### Card: Trang Portfolio - Grid Layout
**Mô tả:** Tạo trang Portfolio với grid 2/3/4 columns
**Checklist:**
- [ ] Portfolio grid component
- [ ] Column options (2/3/4)
- [ ] Filter functionality
- [ ] Lightbox

### Card: Trang Portfolio - Single (Case Study)
**Mô tả:** Tạo template trang chi tiết dự án
**Checklist:**
- [ ] Single portfolio layout
- [ ] Image gallery
- [ ] Project details
- [ ] Related projects

### Card: Trang Testimonials
**Mô tả:** Tạo trang riêng liệt kê testimonials
**Checklist:**
- [ ] Testimonials page layout
- [ ] Filter by category/rating
- [ ] Testimonial card design

### Card: Trang FAQ
**Mô tả:** Tạo trang FAQ với accordion
**Checklist:**
- [ ] FAQ page layout
- [ ] Accordion component
- [ ] Search functionality
- [ ] Category grouping

### Card: Trang 404 Error
**Mô tả:** Tạo trang 404 tùy chỉnh
**Checklist:**
- [ ] 404 page design
- [ ] Error message
- [ ] Navigation links

### Card: Responsive Design - Mobile
**Mô tả:** Đảm bảo responsive trên mobile (< 768px)
**Checklist:**
- [ ] Mobile breakpoints
- [ ] Mobile navigation
- [ ] Touch-friendly
- [ ] Mobile optimizations

### Card: Responsive Design - Tablet
**Mô tả:** Đảm bảo responsive trên tablet (768px - 1024px)
**Checklist:**
- [ ] Tablet breakpoints
- [ ] Tablet layout adjustments
- [ ] Touch interactions

### Card: Responsive Design - Desktop
**Mô tả:** Đảm bảo responsive trên desktop (> 1024px)
**Checklist:**
- [ ] Desktop breakpoints
- [ ] Large screen optimizations
- [ ] Hover effects

### Card: CSS Animations & Effects
**Mô tả:** Thêm animations và hover effects
**Checklist:**
- [ ] Button hover effects
- [ ] Card hover animations
- [ ] Transition effects
- [ ] Loading animations

### Card: Scroll Animations
**Mô tả:** Tích hợp scroll animations (AOS/GSAP)
**Checklist:**
- [ ] AOS initialization
- [ ] GSAP scroll triggers
- [ ] Parallax effects
- [ ] Fade-in animations

### Card: Cross-browser Testing
**Mô tả:** Test và fix trên các trình duyệt
**Checklist:**
- [ ] Chrome testing
- [ ] Firefox testing
- [ ] Safari testing
- [ ] Edge testing
- [ ] Fix compatibility issues

### Card: Performance Optimization
**Mô tả:** Tối ưu hóa performance
**Checklist:**
- [ ] Image optimization (WebP)
- [ ] Lazy loading
- [ ] CSS minification
- [ ] JS minification
- [ ] Code splitting

### Card: WordPress Theme - Basic Files
**Mô tả:** Tạo các file cơ bản của WordPress theme
**Checklist:**
- [ ] style.css với theme header
- [ ] index.php
- [ ] header.php
- [ ] footer.php
- [ ] sidebar.php
- [ ] functions.php

### Card: WordPress Theme - Directory Structure
**Mô tả:** Tạo cấu trúc thư mục theme
**Checklist:**
- [ ] inc/ directory
- [ ] assets/css/
- [ ] assets/js/
- [ ] assets/images/
- [ ] assets/fonts/

### Card: WordPress - Header & Footer Integration
**Mô tả:** Tích hợp header và footer vào WordPress
**Checklist:**
- [ ] Header template
- [ ] Footer template
- [ ] WordPress hooks ($wp_head, $wp_footer)
- [ ] Dynamic site info

### Card: WordPress - Enqueue Styles & Scripts
**Mô tả:** Đăng ký và load CSS/JS trong WordPress
**Checklist:**
- [ ] Enqueue main CSS
- [ ] Enqueue Bootstrap
- [ ] Enqueue jQuery
- [ ] Enqueue custom JS
- [ ] Conditional loading

### Card: WordPress - Menu Integration
**Mô tả:** Tích hợp menu navigation
**Checklist:**
- [ ] Register menu locations
- [ ] Primary menu
- [ ] Footer menu
- [ ] Mobile menu

### Card: WordPress - The Loop Integration
**Mô tả:** Tích hợp The Loop cho posts
**Checklist:**
- [ ] Loop trong index.php
- [ ] Loop trong archive.php
- [ ] Loop trong single.php
- [ ] Pagination

### Card: WordPress - Sidebar & Widgets
**Mô tả:** Tích hợp sidebar và widgets
**Checklist:**
- [ ] Register sidebar
- [ ] Main sidebar
- [ ] Footer widgets
- [ ] Widget areas

### Card: WordPress - Template Files
**Mô tả:** Tạo các template files
**Checklist:**
- [ ] page.php
- [ ] single.php
- [ ] archive.php
- [ ] 404.php
- [ ] search.php

### Card: WordPress - Post Formats
**Mô tả:** Hỗ trợ post formats
**Checklist:**
- [ ] Register post formats
- [ ] Template cho mỗi format

### Card: WordPress - CPT Services
**Mô tả:** Đăng ký Custom Post Type Services
**Checklist:**
- [ ] Register Services CPT
- [ ] archive-service.php
- [ ] single-service.php
- [ ] Custom taxonomies

### Card: WordPress - CPT Portfolio
**Mô tả:** Đăng ký Custom Post Type Portfolio
**Checklist:**
- [ ] Register Portfolio CPT
- [ ] archive-portfolio.php
- [ ] single-portfolio.php
- [ ] Portfolio categories

### Card: WordPress - CPT Team Members
**Mô tả:** Đăng ký Custom Post Type Team
**Checklist:**
- [ ] Register Team CPT
- [ ] archive-team.php
- [ ] single-team.php

### Card: WordPress - CPT Testimonials
**Mô tả:** Đăng ký Custom Post Type Testimonials
**Checklist:**
- [ ] Register Testimonials CPT
- [ ] archive-testimonial.php
- [ ] single-testimonial.php

### Card: TGM Plugin Activation
**Mô tả:** Tích hợp TGM Plugin Activation
**Checklist:**
- [ ] Install TGM library
- [ ] Register recommended plugins
- [ ] Register required plugins

### Card: WordPress Customizer
**Mô tả:** Tích hợp WordPress Customizer
**Checklist:**
- [ ] Color options
- [ ] Logo upload
- [ ] Layout options
- [ ] Typography settings
- [ ] Social media links

### Card: Advanced Custom Fields (ACF)
**Mô tả:** Tạo ACF fields cho CPTs
**Checklist:**
- [ ] ACF fields - Services
- [ ] ACF fields - Portfolio
- [ ] ACF fields - Team
- [ ] ACF fields - Testimonials

### Card: Elementor Widgets
**Mô tả:** Tạo widgets cho Elementor
**Checklist:**
- [ ] Services widget
- [ ] Pricing widget
- [ ] Testimonials widget
- [ ] Team widget

### Card: WPBakery Shortcodes
**Mô tả:** Tạo shortcodes cho WPBakery
**Checklist:**
- [ ] Services shortcode
- [ ] Pricing shortcode
- [ ] Testimonials shortcode
- [ ] Team shortcode

### Card: Demo Content XML
**Mô tả:** Tạo demo content XML
**Checklist:**
- [ ] Demo posts XML
- [ ] Demo pages XML
- [ ] Demo Services
- [ ] Demo Portfolio
- [ ] Demo Team
- [ ] Demo Testimonials

### Card: One Click Demo Import
**Mô tả:** Tích hợp One Click Demo Import
**Checklist:**
- [ ] Install plugin
- [ ] Configure import
- [ ] Test import
- [ ] Fix import issues

### Card: Theme Check Plugin
**Mô tả:** Chạy Theme Check và fix lỗi
**Checklist:**
- [ ] Install Theme Check
- [ ] Run checks
- [ ] Fix errors
- [ ] Fix warnings
- [ ] Re-check

### Card: Security Audit
**Mô tả:** Kiểm tra và fix security issues
**Checklist:**
- [ ] Input sanitization
- [ ] Output escaping
- [ ] Nonce checks
- [ ] SQL injection prevention

### Card: Documentation - Installation
**Mô tả:** Viết tài liệu hướng dẫn cài đặt
**Checklist:**
- [ ] Installation guide
- [ ] Demo import guide
- [ ] System requirements
- [ ] Screenshots

### Card: Documentation - User Guide
**Mô tả:** Viết tài liệu hướng dẫn sử dụng
**Checklist:**
- [ ] Customizer guide
- [ ] CPTs guide
- [ ] ACF guide
- [ ] Page Builder guide

### Card: Documentation - Advanced
**Mô tả:** Viết tài liệu tùy chỉnh nâng cao
**Checklist:**
- [ ] Child theme guide
- [ ] Hooks documentation
- [ ] Filters documentation

### Card: Optimization - CSS/JS
**Mô tả:** Tối ưu hóa CSS và JS
**Checklist:**
- [ ] CSS minification
- [ ] JS minification
- [ ] File combination
- [ ] Remove unused code

### Card: Optimization - Images
**Mô tả:** Tối ưu hóa images
**Checklist:**
- [ ] Image compression
- [ ] WebP conversion
- [ ] Lazy loading setup
- [ ] Responsive images

---

## 🟠 DOING

### Card: Responsive Design - Mobile First
**Mô tả:** Đang làm responsive design cho mobile
**Checklist:**
- [x] Breakpoints: Mobile (< 768px)
- [ ] Breakpoints: Tablet (768px - 1024px)
- [ ] Breakpoints: Desktop (> 1024px)
- [ ] Mobile menu hamburger
- [ ] Touch gestures

---

## 🟢 READY TO TEST

*(Chưa có cards nào sẵn sàng test)*

---

## ✅ DONE

### Card: Thiết lập cấu trúc dự án cơ bản (Giai đoạn 0 - Shared Setup)
**Mô tả:** Đã hoàn thành thiết lập cấu trúc dự án cơ bản (dùng chung cho tất cả phiên bản)
**Checklist:**
- [x] Cấu trúc thư mục (css/, js/, images/, fonts/)
- [x] Vite config
- [x] TypeScript config
- [x] SCSS setup

### Card: Thiết lập thư viện JS cần thiết (Giai đoạn 0 - Shared Setup)
**Mô tả:** Đã cài đặt các thư viện cần thiết (dùng chung cho tất cả phiên bản)
**Checklist:**
- [x] jQuery
- [x] Bootstrap 5
- [x] GSAP
- [x] Swiper
- [x] AOS
- [x] Animate.css
- [x] Font Awesome

### Card: Header Component
**Mô tả:** Đã hoàn thành Header component
**Checklist:**
- [x] Header HTML structure
- [x] Header TypeScript
- [x] Navigation menu
- [x] Responsive menu

### Card: Services Section
**Mô tả:** Đã hoàn thành Services section
**Checklist:**
- [x] Services HTML
- [x] Services TypeScript
- [x] Carousel functionality

### Card: About Us Section
**Mô tả:** Đã hoàn thành About Us section
**Checklist:**
- [x] About Us HTML
- [x] About Us TypeScript

### Card: Testimonial Section
**Mô tả:** Đã hoàn thành Testimonial section
**Checklist:**
- [x] Testimonial HTML
- [x] Testimonial TypeScript
- [x] Carousel functionality

### Card: Contact Section
**Mô tả:** Đã hoàn thành Contact section
**Checklist:**
- [x] Contact HTML
- [x] Contact TypeScript
- [x] Parallax effect
- [x] Contact form HTML

### Card: Footer Component
**Mô tả:** Đã hoàn thành Footer component
**Checklist:**
- [x] Footer HTML
- [x] Footer styling

