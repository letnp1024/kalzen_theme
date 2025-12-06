# Trello Cards - Simple Format for Copy

## 📋 PROJECT STRUCTURE
The project includes **2 main versions**, each with **2 types**:
1. **One Page Version** (Single Page)
   - HTML/CSS/JS (Static)
   - WordPress Theme
2. **Multiple Pages Version** (Multi-page)
   - HTML/CSS/JS (Static)
   - WordPress Theme

---

## 🔵 NEED INFORMATION

### Card: Decide Design System & Color Palette
**Description:** Need to decide color scheme, typography system, spacing system for the entire theme (shared for both versions)
**Checklist:**
- [ ] Primary colors
- [ ] Secondary colors
- [ ] Typography scale
- [ ] Spacing system

### Card: Decide Code Sharing Structure
**Description:** Need to decide how to organize shared components between One Page and Multiple Pages
**Checklist:**
- [ ] Shared components structure
- [ ] Code sharing strategy
- [ ] Build process for both versions

---

## 📝 NOTE
This file contains simple cards to copy into Trello. To view the detailed plan with all cards organized by stages, please see the **TRELLO_PLAN.md** file.

The cards below are organized by Trello columns. Each card should have labels to distinguish:
- **One Page** or **Multiple Pages**
- **HTML/CSS/JS** or **WordPress**
- **Stage 0, 1, 2, 3, 4, 5**

### ⚠️ IMPORTANT: Understanding Project Workflow

**Current Status:**
- ✅ **Stage 0 (DONE)**: Basic project structure - Vite, TypeScript, SCSS, libraries setup
- 🟠 **Stage 1 (IN PROGRESS)**: Building One Page in current codebase (corporate-theme/)
  - Currently working on: Header, Services, About Us, Testimonials, Contact, Footer
  - Still need: Hero (separate from header), Portfolio, Team, CTA sections
- ⏸️ **Stage 2 (AFTER ONE PAGE)**: Building Multiple Pages in current codebase
  - Create separate pages: Home, About, Services, Portfolio, Blog, Contact
- ⏸️ **Stage 2.5 (AFTER BOTH COMPLETE)**: Split code into separate versions
  - Extract current codebase to one-page/html-css-js/ and multiple-pages/html-css-js/
  - Setup separate build configs
- ⏸️ **Stage 3-4 (LATER)**: WordPress themes

**Workflow:**
1. **Complete One Page** in current codebase (TypeScript + SCSS)
2. **Complete Multiple Pages** in current codebase (TypeScript + SCSS)
3. **Then split** into one-page/ and multiple-pages/ folders
4. **Then build** static HTML/CSS/JS versions from TypeScript/SCSS
5. **Then create** WordPress themes from HTML/CSS/JS versions

**Important Issue to Fix:**
- ⚠️ **Header Structure**: Currently top bar, nav bar, mobile menu, and hero section are all in one Header component
- Need to **separate Header** (top bar + nav + mobile) from **Hero Section** (slideshow + content)

---

## 🟡 TO DO

### STAGE 1 - COMPLETE ONE PAGE (Current Codebase)

**Note:** These tasks are done in the CURRENT codebase (corporate-theme/) using TypeScript + SCSS. We will split into separate versions AFTER completing One Page.

### ONE PAGE - HTML/CSS/JS (STAGE 1 - Current Codebase)

### Card: Separate Header from Hero Section (Priority Fix)
**Description:** Currently top bar, nav bar, mobile menu, and hero are all in Header component. Need to separate them.
**Checklist:**
- [ ] Extract top bar (logo + contact info) to separate component
- [ ] Extract navigation bar to separate component
- [ ] Extract mobile menu to separate component
- [ ] Keep hero section (slideshow + content) separate
- [ ] Update Header.ts to only handle header parts
- [ ] Create Hero.ts component for hero section
- [ ] Update headerTemplate.ts to separate structure
- [ ] Update SCSS to separate header and hero styles
- [ ] Test sticky navigation behavior
- [ ] Test mobile menu functionality

### Card: Add Consistent Animations to Existing Components
**Description:** Add uniform animations to all existing components (Header, Hero, About Us, Services, Testimonials, Contact, Footer) for consistent user experience

**Animation Strategy:**
- Use AOS (Animate On Scroll) or GSAP for scroll animations
- Consistent animation timing and easing across all components
- Fade-in, slide-up animations for sections
- Hover effects for interactive elements
- Smooth transitions

**Checklist:**
- [ ] **Setup Animation Library**
  - [x] AOS library installed (package.json - ✅ already done)
  - [x] GSAP library installed (package.json - ✅ already done)
  - [x] Libraries setup code exists (libraries-setup.ts - ✅ already done)
  - [ ] Import and call initializeLibraries() in main.ts
  - [ ] Configure AOS settings (duration, offset, easing) - adjust if needed
  - [ ] Configure GSAP ScrollTrigger settings
  - [ ] Create animation utility functions (if needed)

- [ ] **Header Component Animations**
  - [ ] Sticky header fade-in animation
  - [ ] Mobile menu slide-in animation
  - [ ] Navigation links hover effects
  - [ ] Logo animation on scroll
  - [ ] Top bar slide-down animation

- [ ] **Hero Section Animations**
  - [ ] Hero content fade-in on load
  - [ ] Slideshow transition animations (already have, enhance)
  - [ ] CTA buttons hover effects
  - [ ] Scroll indicator bounce animation
  - [ ] Text slide-up animation

- [ ] **About Us Section Animations**
  - [ ] Section fade-in on scroll
  - [ ] Content cards slide-up animation
  - [ ] Image fade-in animation
  - [ ] Text reveal animation
  - [ ] Counter animations (if any)

- [ ] **Services Section Animations**
  - [ ] Section fade-in on scroll
  - [ ] Service cards stagger animation
  - [ ] Card hover effects (lift, shadow)
  - [ ] Icon animations on hover
  - [ ] Carousel/slider transition animations

- [ ] **Testimonials Section Animations**
  - [ ] Section fade-in on scroll
  - [ ] Testimonial cards fade-in animation
  - [ ] Carousel transition animations
  - [ ] Avatar/image animations
  - [ ] Quote text reveal animation

- [ ] **Contact Section Animations**
  - [ ] Section fade-in on scroll
  - [ ] Form fields focus animations
  - [ ] Button hover effects
  - [ ] Map fade-in animation
  - [ ] Parallax effect (if applicable)

- [ ] **Footer Component Animations**
  - [ ] Footer fade-in on scroll
  - [ ] Social links hover effects
  - [ ] Footer links hover animations
  - [ ] Newsletter form animations

- [ ] **Consistent Animation Settings**
  - [ ] Standardize animation duration (e.g., 0.6s)
  - [ ] Standardize easing function (e.g., ease-out)
  - [ ] Standardize scroll offset (e.g., 100px)
  - [ ] Standardize stagger delay (e.g., 0.1s)
  - [ ] Document animation standards

- [ ] **Performance Optimization**
  - [ ] Use CSS transforms for animations (GPU accelerated)
  - [ ] Debounce scroll events
  - [ ] Lazy load animations
  - [ ] Reduce motion for accessibility (prefers-reduced-motion)
  - [ ] Test animation performance

- [ ] **Testing**
  - [ ] Test animations on all sections
  - [ ] Test on different scroll speeds
  - [ ] Test on mobile devices
  - [ ] Test with reduced motion preference
  - [ ] Ensure animations don't block content

---

## 🧩 CREATE MISSING SECTIONS FOR HOMEPAGE (Do This First)

**Note:** The following sections are already created: Header, Hero, About Us, Services, Testimonials, Contact, Footer

**Workflow:** Create all missing sections first, then integrate them into homepage variations.

The sections below are **MISSING** and need to be created:

### Card: Portfolio/Projects Section
**Description:** Create Portfolio/Projects section for Homepage 1 and Homepage 2
**Checklist:**
- [ ] Portfolio section HTML structure
- [ ] Portfolio grid layout (2/3/4 columns option)
- [ ] Portfolio item card design
- [ ] Portfolio filter functionality (by category)
- [ ] Lightbox integration for portfolio images
- [ ] Hover effects on portfolio items
- [ ] Portfolio item overlay with project info
- [ ] "View Project" button/link
- [ ] Isotope/Masonry layout option
- [ ] Portfolio TypeScript component
- [ ] Portfolio SCSS styling
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Animation on scroll (AOS/GSAP)
- [ ] Load more / Pagination (if needed)

### Card: Call-to-Action (CTA) Section
**Description:** Create CTA section for all homepage variations
**Checklist:**
- [ ] CTA section HTML structure
- [ ] CTA heading and description
- [ ] Primary CTA button design
- [ ] Secondary CTA button (optional)
- [ ] CTA background options (solid color, gradient, image)
- [ ] CTA section TypeScript component
- [ ] CTA section SCSS styling
- [ ] Multiple CTA variations (centered, split, full-width)
- [ ] Responsive design
- [ ] Animation on scroll
- [ ] Button hover effects
- [ ] Icon integration (optional)

### Card: Team Members Section
**Description:** Create Team Members section for Homepage 2 (Agency)
**Checklist:**
- [ ] Team section HTML structure
- [ ] Team grid layout (2/3/4 columns)
- [ ] Team member card design
- [ ] Team member photo/avatar
- [ ] Team member name and title
- [ ] Team member bio/description
- [ ] Social media links (hover effect)
- [ ] Team section TypeScript component
- [ ] Team section SCSS styling
- [ ] Hover effects (card lift, image zoom)
- [ ] Responsive design
- [ ] Animation on scroll
- [ ] Team member modal/popup (optional)

### Card: Working Process Section
**Description:** Create Working Process section for Homepage 2 (Agency)
**Checklist:**
- [ ] Working Process section HTML structure
- [ ] Process steps layout (horizontal timeline or vertical)
- [ ] Step number/icon design
- [ ] Step title and description
- [ ] Process flow visualization
- [ ] Working Process TypeScript component
- [ ] Working Process SCSS styling
- [ ] Step-by-step animation
- [ ] Progress indicator (optional)
- [ ] Responsive design
- [ ] Animation on scroll
- [ ] Icon integration for each step

### Card: Features Section
**Description:** Create Features section for Homepage 3 (Product/SaaS)
**Checklist:**
- [ ] Features section HTML structure
- [ ] Features grid layout (2/3/4 columns)
- [ ] Feature card design
- [ ] Feature icon/image
- [ ] Feature title and description
- [ ] Feature list/checklist (optional)
- [ ] Features section TypeScript component
- [ ] Features section SCSS styling
- [ ] Hover effects on feature cards
- [ ] Icon animations
- [ ] Responsive design
- [ ] Animation on scroll
- [ ] Feature comparison table (optional)

### Card: Pricing Tables Section
**Description:** Create Pricing Tables section for Homepage 3 (Product/SaaS)
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
- [ ] Hover effects on pricing cards
- [ ] Responsive design (stack on mobile)
- [ ] Animation on scroll
- [ ] Pricing calculator integration (optional)
- [ ] Currency switcher (optional)

### Card: FAQ Section
**Description:** Create FAQ section for Homepage 3 (Product/SaaS)
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
- [ ] Animation on scroll
- [ ] FAQ schema markup for SEO (optional)

---

## 📄 CORE CONTENT PAGES

### Card: Convert Project Structure from One Page to Multiple Pages
**Description:** Convert current single-page structure to multi-page structure with routing. Currently, the project doesn't have routing and all components are in one place. This card will set up the foundation for multiple pages.

**Current State:**
- All components are rendered in one `#app` div
- No routing system
- All sections are on a single page
- Components are initialized sequentially in `main.ts`

**Target State:**
- Separate pages for Home, About, Services, Portfolio, Blog, Contact
- Routing system to navigate between pages
- Each page has its own entry point/component
- Shared components (Header, Footer) are reusable
- Proper page structure and organization

**Checklist:**
- [ ] Choose routing solution (HashRouter, History API, or simple page-based routing)
- [ ] Create routing system/utility (router.ts or use existing library)
- [ ] Create pages directory structure (src/pages/)
- [ ] Create separate page components:
  - [ ] HomePage component
  - [ ] AboutPage component
  - [ ] ServicesPage component
  - [ ] PortfolioPage component
  - [ ] BlogPage component
  - [ ] ContactPage component
- [ ] Refactor main.ts to use router instead of direct component insertion
- [ ] Update Header navigation to use routing links
- [ ] Create page layout wrapper (with Header and Footer)
- [ ] Move existing sections to appropriate pages:
  - [ ] Move Hero section to HomePage
  - [ ] Move About section to AboutPage
  - [ ] Move Services section to ServicesPage
  - [ ] Move Portfolio section to PortfolioPage
  - [ ] Move Blog section to BlogPage
  - [ ] Move Contact section to ContactPage
- [ ] Setup 404/NotFound page for invalid routes
- [ ] Test navigation between pages
- [ ] Ensure smooth page transitions (optional)
- [ ] Update build configuration if needed
- [ ] Test all pages load correctly
- [ ] Verify shared components (Header, Footer) work on all pages
- [ ] Update TypeScript types for routing
- [ ] Document routing structure

### Card: About Us Page
**Description:** Full About Us page with company information
**Checklist:**
- [ ] Company history section
- [ ] Vision/Mission section
- [ ] Team Members grid layout
- [ ] Awards/Achievements section
- [ ] Timeline/Company milestones
- [ ] Values/Culture section (optional)
- [ ] Breadcrumb navigation
- [ ] Responsive design
- [ ] Animation on scroll

### Card: Contact Us Page
**Description:** Full Contact page with contact information and form
**Checklist:**
- [ ] Contact information layout (address, phone, email, hours)
- [ ] Google Maps integration (placeholder or real map)
- [ ] Contact form with validation
- [ ] Form fields: Name, Email, Phone, Subject, Message
- [ ] Form submission handling
- [ ] Success/Error messages
- [ ] Social media links
- [ ] Breadcrumb navigation
- [ ] Responsive design

### Card: Services Page (Overview)
**Description:** Services overview page with grid/list view
**Checklist:**
- [ ] Services grid layout
- [ ] Services list layout
- [ ] View toggle (grid/list)
- [ ] Filter by category functionality
- [ ] Service card design
- [ ] Service icons/images
- [ ] Pagination (if needed)
- [ ] Breadcrumb navigation
- [ ] CTA section

### Card: Services - Single Page
**Description:** Single service detail page
**Checklist:**
- [ ] Single service layout
- [ ] Service header with image
- [ ] Service description/content
- [ ] Service features/benefits
- [ ] Related services section
- [ ] CTA section (Get Quote, Contact, etc.)
- [ ] Breadcrumb navigation
- [ ] Social sharing buttons
- [ ] Responsive design

---

## 📰 BLOG PAGES

### Card: Blog - Grid/List View
**Description:** Blog listing page with grid and list view options
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
- [ ] Sidebar with widgets (optional)

### Card: Blog - Single Post
**Description:** Single blog post detail page
**Checklist:**
- [ ] Single post layout
- [ ] Post header with featured image
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

## 🔧 OTHER PAGES

### Card: 404 Error Page
**Description:** Custom 404 error page
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

### Card: One Page - Hero Section with Slider
**Description:** Create Hero section with slider/carousel for One Page
**Checklist:**
- [ ] Hero HTML structure
- [ ] Swiper integration
- [ ] Background video option
- [ ] CTA buttons
- [ ] Scroll indicator

### Card: One Page - Portfolio Section
**Description:** Create Portfolio section with grid layout and filter for One Page
**Checklist:**
- [ ] Portfolio grid component
- [ ] Filter functionality
- [ ] Lightbox integration
- [ ] Isotope layout

### Card: One Page - Team Section
**Description:** Create Team Members section for One Page
**Checklist:**
- [ ] Team HTML structure
- [ ] Team TypeScript
- [ ] Team member cards
- [ ] Social links hover

### Card: One Page - CTA Section
**Description:** Create Call-to-Action section for One Page
**Checklist:**
- [ ] CTA HTML structure
- [ ] CTA styling
- [ ] Button animations
- [ ] Background options

### Card: One Page - FAQ Section
**Description:** Create FAQ section with accordion for One Page
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
**Description:** Integrate smooth scroll and navigation for One Page
**Checklist:**
- [ ] Smooth scroll implementation
- [ ] Scroll spy
- [ ] Active menu item update
- [ ] Mobile menu close on click

---

## 🏠 HOMEPAGE VARIATIONS (Integrate Sections After Creating Them)

### Card: Homepage 1 - Default (Modern, Service/Project Focus)
**Description:** Integrate all sections for Homepage 1 - Modern homepage focused on services and projects

**Key Differences from Other Homepages:**
- **Hero Section**: Standard business hero with service/project focus, professional tone
- **Services Section**: Emphasize service offerings, highlight key services prominently
- **About Us Section**: Brief company intro, focus on expertise and experience
- **Portfolio Section**: Showcase completed projects, filter by service type
- **Testimonials Section**: Client testimonials related to services/projects
- **CTA Section**: "Get Started", "Request Quote", "Contact Us" - service-focused
- **Layout**: Balanced, professional, service-oriented
- **Color Scheme**: Professional blue/corporate colors
- **Section Order**: Hero → About → Services → Portfolio → Testimonials → CTA → Contact

**Checklist:**
- [ ] Integrate Header component (already created)
- [ ] Customize Hero Section for service/project focus (different messaging, CTA)
- [ ] Customize About Us section (brief, expertise-focused)
- [ ] Customize Services section (highlight key services, service cards)
- [ ] Integrate Portfolio/Projects section (already created above)
- [ ] Customize Testimonials section (service/project-related testimonials)
- [ ] Integrate CTA section (already created above, customize for "Get Started" focus)
- [ ] Integrate Contact section (already created)
- [ ] Integrate Footer component (already created)
- [ ] Apply service/project-focused color scheme
- [ ] Arrange section order: Hero → About → Services → Portfolio → Testimonials → CTA → Contact
- [ ] Smooth scroll navigation between sections
- [ ] Responsive design for all sections
- [ ] Test all sections work together

### Card: Homepage 2 - Agency (Team & Working Process Focus)
**Description:** Integrate all sections for Homepage 2 - Agency-style homepage focused on team and working process

**Key Differences from Other Homepages:**
- **Hero Section**: Creative/agency-style hero, emphasize creativity and team
- **Team Section**: Showcase team members prominently, highlight expertise
- **Working Process Section**: Step-by-step workflow, show how agency works
- **Services Section**: Agency services (design, marketing, strategy), creative presentation
- **Portfolio Section**: Case studies format, show process and results
- **About Us Section**: Agency story, creative approach, values
- **Testimonials Section**: Client success stories, creative projects
- **CTA Section**: "Work With Us", "Start a Project" - collaboration-focused
- **Layout**: Creative, dynamic, team-oriented
- **Color Scheme**: Creative colors, may include gradients, more vibrant
- **Section Order**: Hero → Team → Working Process → Services → Portfolio → Testimonials → CTA → Contact

**Checklist:**
- [ ] Integrate Header component (already created)
- [ ] Customize Hero Section with agency-style design (creative messaging, team focus)
- [ ] Integrate Team Members section (already created above, prominent placement)
- [ ] Integrate Working Process section (already created above, show workflow)
- [ ] Customize Services section for agency (creative services, design-focused presentation)
- [ ] Integrate Portfolio/Case Studies section (already created above, customize for case study format)
- [ ] Customize About Us section (agency story, creative approach)
- [ ] Customize Testimonials section (creative project testimonials)
- [ ] Integrate CTA section (already created above, customize for "Work With Us" focus)
- [ ] Integrate Contact section (already created)
- [ ] Integrate Footer component (already created)
- [ ] Apply agency/creative color scheme (may include gradients)
- [ ] Customize typography for creative/agency feel
- [ ] Arrange section order: Hero → Team → Working Process → Services → Portfolio → Testimonials → CTA → Contact
- [ ] Add creative animations and interactions
- [ ] Responsive design for all sections
- [ ] Test all sections work together

### Card: Homepage 3 - Product/SaaS (Features & Pricing Focus)
**Description:** Integrate all sections for Homepage 3 - Product/SaaS homepage focused on features and pricing

**Key Differences from Other Homepages:**
- **Hero Section**: Product showcase hero, highlight product benefits, demo/trial CTA
- **Features Section**: Detailed product features, benefit-focused, comparison
- **Pricing Section**: Multiple pricing tiers, clear pricing, feature comparison
- **FAQ Section**: Address common questions, reduce friction
- **About Us Section**: Company/product story, mission, values (brief)
- **Testimonials Section**: User testimonials, product reviews, case studies
- **Services Section**: May be replaced or customized as "Solutions" or "Use Cases"
- **CTA Section**: "Start Free Trial", "Sign Up", "Get Started" - conversion-focused
- **Layout**: Conversion-optimized, clear value proposition
- **Color Scheme**: Modern tech colors, may use gradients, clean and modern
- **Section Order**: Hero → Features → Pricing → FAQ → Testimonials → CTA → Contact

**Checklist:**
- [ ] Integrate Header component (already created)
- [ ] Customize Hero Section with product showcase (product demo, trial CTA)
- [ ] Integrate Features section (already created above, detailed product features)
- [ ] Integrate Pricing Tables section (already created above, multiple tiers)
- [ ] Integrate FAQ section (already created above, address objections)
- [ ] Customize About Us section (product/company story, brief)
- [ ] Customize Services section as "Solutions" or "Use Cases" (optional)
- [ ] Customize Testimonials section (user testimonials, product reviews)
- [ ] Integrate CTA section (already created above, customize for "Start Free Trial" focus)
- [ ] Integrate Contact section (already created, may be "Support" or "Sales")
- [ ] Integrate Footer component (already created)
- [ ] Apply Product/SaaS color scheme (modern tech colors)
- [ ] Customize typography for tech/product feel
- [ ] Arrange section order: Hero → Features → Pricing → FAQ → Testimonials → CTA → Contact
- [ ] Add conversion-optimized elements (trust badges, social proof)
- [ ] Interactive pricing calculator integration (optional)
- [ ] Responsive design for all sections
- [ ] Test all sections work together

---

### MULTIPLE PAGES - HTML/CSS/JS (STAGE 2 - Current Codebase)

**Note:** After completing One Page, continue building Multiple Pages in the same codebase before splitting.

### Card: Multiple Pages - Homepage
**Description:** Create homepage for Multiple Pages version
**Checklist:**
- [ ] Homepage HTML structure
- [ ] Hero section (separate from header)
- [ ] About Us preview section
- [ ] Services preview section
- [ ] Portfolio preview section
- [ ] Testimonials preview section
- [ ] CTA section

### Card: Multiple Pages - About Us Page
**Description:** Create full About Us page
**Checklist:**
- [ ] About Us page HTML
- [ ] History/Timeline section
- [ ] Vision/Mission section
- [ ] Team Members grid
- [ ] Awards section
- [ ] Breadcrumb navigation

### Card: Multiple Pages - Services Pages
**Description:** Create Services page and Single Service page
**Checklist:**
- [ ] Services page HTML
- [ ] Services grid layout
- [ ] Filter functionality
- [ ] Single service template
- [ ] Related services
- [ ] Breadcrumb

### Card: Multiple Pages - Portfolio Pages
**Description:** Create Portfolio page and Single Portfolio page
**Checklist:**
- [ ] Portfolio page HTML
- [ ] Portfolio grid component
- [ ] Filter functionality
- [ ] Single portfolio template
- [ ] Image gallery
- [ ] Related projects

### Card: Multiple Pages - Blog Pages
**Description:** Create Blog page and Single Post page
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
**Description:** Create full Contact page
**Checklist:**
- [ ] Contact page HTML
- [ ] Contact information layout
- [ ] Contact form with validation
- [ ] Google Maps integration
- [ ] Form submission handling

### Card: Multiple Pages - Additional Pages
**Description:** Create additional pages
**Checklist:**
- [ ] Testimonials page
- [ ] FAQ page with Accordion
- [ ] 404 error page
- [ ] Search results page

### STAGE 2.5 - SPLIT INTO VERSIONS (After Both One Page & Multiple Pages Complete)

### Card: Split Codebase into Versions (Stage 2.5)
**Description:** After completing both One Page and Multiple Pages, split current codebase into separate folders
**Checklist:**
- [ ] Create one-page/ directory structure
- [ ] Create multiple-pages/ directory structure
- [ ] Move One Page code to one-page/html-css-js/
- [ ] Move Multiple Pages code to multiple-pages/html-css-js/
- [ ] Setup shared components folder
- [ ] Setup build configs for both versions
- [ ] Test build process for both versions

### ONE PAGE - WORDPRESS

### Card: One Page WP - Create Basic Theme Files
**Description:** Create basic files for One Page WordPress theme
**Checklist:**
- [ ] style.css with theme info
- [ ] index.php (one page)
- [ ] header.php
- [ ] footer.php
- [ ] functions.php

### Card: One Page WP - Integrate Sections
**Description:** Integrate all sections into One Page WordPress theme
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
**Description:** Integrate WordPress Customizer for One Page theme
**Checklist:**
- [ ] Color options
- [ ] Logo upload
- [ ] Section content options
- [ ] Social media links

### MULTIPLE PAGES - HTML/CSS/JS (STAGE 3)

### Card: Multiple Pages - Directory Structure (Stage 3)
**Description:** Create specific directory structure for Multiple Pages HTML/CSS/JS version
**Checklist:**
- [ ] multiple-pages/html-css-js/ directory
- [ ] pages/ directory
- [ ] Multiple Pages specific build config
- [ ] Multiple Pages entry point setup

### Card: Multiple Pages - Homepage
**Description:** Create homepage for Multiple Pages version
**Checklist:**
- [ ] Homepage HTML
- [ ] Hero section
- [ ] About Us preview
- [ ] Services preview
- [ ] Portfolio preview
- [ ] Testimonials preview
- [ ] CTA section

### Card: Multiple Pages - About Us Page
**Description:** Create full About Us page for Multiple Pages
**Checklist:**
- [ ] About Us page HTML
- [ ] History/Timeline section
- [ ] Vision/Mission section
- [ ] Team Members grid
- [ ] Awards section
- [ ] Breadcrumb navigation

### Card: Multiple Pages - Services Pages
**Description:** Create Services page and Single Service page for Multiple Pages
**Checklist:**
- [ ] Services page HTML
- [ ] Services grid layout
- [ ] Filter functionality
- [ ] Single service template
- [ ] Related services
- [ ] Breadcrumb

### Card: Multiple Pages - Portfolio Pages
**Description:** Create Portfolio page and Single Portfolio page for Multiple Pages
**Checklist:**
- [ ] Portfolio page HTML
- [ ] Portfolio grid component
- [ ] Filter functionality
- [ ] Single portfolio template
- [ ] Image gallery
- [ ] Related projects

### Card: Multiple Pages - Blog Pages
**Description:** Create Blog page and Single Post page for Multiple Pages
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
**Description:** Create full Contact page for Multiple Pages
**Checklist:**
- [ ] Contact page HTML
- [ ] Contact information layout
- [ ] Contact form with validation
- [ ] Google Maps integration
- [ ] Form submission handling

### Card: Multiple Pages - Additional Pages
**Description:** Create additional pages for Multiple Pages
**Checklist:**
- [ ] Testimonials page
- [ ] FAQ page with Accordion
- [ ] 404 error page
- [ ] Search results page

### MULTIPLE PAGES - WORDPRESS

### Card: Multiple Pages WP - Create Basic Theme Files
**Description:** Create basic files for Multiple Pages WordPress theme
**Checklist:**
- [ ] style.css with theme info
- [ ] index.php
- [ ] header.php
- [ ] footer.php
- [ ] sidebar.php
- [ ] functions.php

### Card: Multiple Pages WP - Template Files
**Description:** Create template files for Multiple Pages WordPress theme
**Checklist:**
- [ ] page.php
- [ ] single.php
- [ ] archive.php
- [ ] 404.php
- [ ] search.php

### Card: Multiple Pages WP - CPT Services
**Description:** Register Custom Post Type Services for Multiple Pages theme
**Checklist:**
- [ ] Register Services CPT
- [ ] archive-service.php
- [ ] single-service.php
- [ ] Custom taxonomies

### Card: Multiple Pages WP - CPT Portfolio
**Description:** Register Custom Post Type Portfolio for Multiple Pages theme
**Checklist:**
- [ ] Register Portfolio CPT
- [ ] archive-portfolio.php
- [ ] single-portfolio.php
- [ ] Portfolio categories

### Card: Multiple Pages WP - CPT Team Members
**Description:** Register Custom Post Type Team for Multiple Pages theme
**Checklist:**
- [ ] Register Team CPT
- [ ] archive-team.php
- [ ] single-team.php

### Card: Multiple Pages WP - CPT Testimonials
**Description:** Register Custom Post Type Testimonials for Multiple Pages theme
**Checklist:**
- [ ] Register Testimonials CPT
- [ ] archive-testimonial.php
- [ ] single-testimonial.php

### Card: Multiple Pages WP - WordPress Customizer
**Description:** Integrate WordPress Customizer for Multiple Pages theme
**Checklist:**
- [ ] Color options
- [ ] Logo upload
- [ ] Layout options
- [ ] Typography settings
- [ ] Social media links

### Card: Multiple Pages WP - ACF Integration
**Description:** Create ACF fields for Multiple Pages theme
**Checklist:**
- [ ] ACF fields - Services
- [ ] ACF fields - Portfolio
- [ ] ACF fields - Team
- [ ] ACF fields - Testimonials

### SHARED FOR BOTH VERSIONS

### Card: Responsive Design - Mobile First
**Description:** Ensure responsive design for both versions
**Checklist:**
- [ ] Mobile breakpoints (< 768px)
- [ ] Tablet breakpoints (768px - 1024px)
- [ ] Desktop breakpoints (> 1024px)
- [ ] Mobile menu hamburger
- [ ] Touch gestures

### Card: Interactions & Effects (Interactivity)
**Description:** Add animations and effects for both versions
**Checklist:**
- [ ] Button hover effects
- [ ] Card hover animations
- [ ] Scroll animations (AOS/GSAP)
- [ ] Parallax effects
- [ ] Slider initialization

### Card: Cross-browser Testing
**Description:** Test and fix on browsers for both versions
**Checklist:**
- [ ] Chrome testing
- [ ] Firefox testing
- [ ] Safari testing
- [ ] Edge testing
- [ ] Fix CSS prefixes
- [ ] Fix JS compatibility

### Card: Performance Optimization
**Description:** Optimize performance for both versions
**Checklist:**
- [ ] Image optimization (WebP)
- [ ] Lazy loading
- [ ] CSS minification
- [ ] JS minification
- [ ] Code splitting

### FINALIZATION & SALES PREPARATION

### Card: Create Demo Content XML - One Page
**Description:** Create demo content for One Page version
**Checklist:**
- [ ] Demo pages XML
- [ ] Demo ACF data
- [ ] Demo widgets

### Card: Create Demo Content XML - Multiple Pages
**Description:** Create demo content for Multiple Pages version
**Checklist:**
- [ ] Demo posts XML
- [ ] Demo pages XML
- [ ] Demo Services
- [ ] Demo Portfolio
- [ ] Demo Team
- [ ] Demo Testimonials
- [ ] Demo widgets

### Card: Integrate One Click Demo Import
**Description:** Integrate One Click Demo Import for both versions
**Checklist:**
- [ ] Install plugin
- [ ] Configure import - One Page
- [ ] Configure import - Multiple Pages
- [ ] Test import
- [ ] Fix import issues

### Card: Run Theme Check Plugin
**Description:** Run Theme Check for both WordPress themes
**Checklist:**
- [ ] Install Theme Check
- [ ] Run checks - One Page
- [ ] Run checks - Multiple Pages
- [ ] Fix errors
- [ ] Fix warnings
- [ ] Re-check

### Card: Security Audit
**Description:** Check and fix security issues for both themes
**Checklist:**
- [ ] Input sanitization
- [ ] Output escaping
- [ ] Nonce checks
- [ ] SQL injection prevention

### Card: Write Installation Documentation
**Description:** Write installation documentation for both versions
**Checklist:**
- [ ] Installation guide - One Page
- [ ] Installation guide - Multiple Pages
- [ ] Demo import guide
- [ ] System requirements
- [ ] Screenshots

### Card: Write User Guide Documentation
**Description:** Write user guide documentation for both versions
**Checklist:**
- [ ] Customizer guide
- [ ] CPTs guide (Multiple Pages)
- [ ] ACF guide
- [ ] Page Builder guide
- [ ] One Page specific guide

### Card: Optimize CSS/JS - Both Versions
**Description:** Optimize CSS and JS for both versions
**Checklist:**
- [ ] CSS minification - One Page
- [ ] CSS minification - Multiple Pages
- [ ] JS minification - One Page
- [ ] JS minification - Multiple Pages
- [ ] File combination
- [ ] Remove unused code

### Card: Optimize Images
**Description:** Optimize images for both versions
**Checklist:**
- [ ] Image compression
- [ ] WebP conversion
- [ ] Lazy loading setup
- [ ] Responsive images

### Card: Hero Section with Slider
**Description:** Create Hero section with slider/carousel for homepage
**Checklist:**
- [ ] HTML structure
- [ ] Swiper integration
- [ ] Responsive design
- [ ] Animation effects

### Card: Portfolio Section
**Description:** Create Portfolio section with grid layout and filter
**Checklist:**
- [ ] Portfolio grid component
- [ ] Filter functionality
- [ ] Lightbox integration
- [ ] Isotope layout

### Card: CTA Section
**Description:** Create Call-to-Action section for homepage
**Checklist:**
- [ ] CTA design
- [ ] Button styling
- [ ] Background options

### Card: About Us Page - Layout
**Description:** Create About Us page layout with sections
**Checklist:**
- [ ] History/Timeline section
- [ ] Vision/Mission section
- [ ] Team Members grid
- [ ] Awards section

### Card: Contact Page - Form Validation
**Description:** Complete contact form with full validation
**Checklist:**
- [ ] Form validation (client-side)
- [ ] Error messages
- [ ] Success message
- [ ] Form styling

### Card: Services Page - Grid Layout
**Description:** Create Services page with grid/list view
**Checklist:**
- [ ] Services grid
- [ ] Filter by category
- [ ] View toggle (grid/list)
- [ ] Pagination

### Card: Services Page - Single Template
**Description:** Create single service page template
**Checklist:**
- [ ] Single service layout
- [ ] Breadcrumb
- [ ] Related services
- [ ] CTA section

### Card: Blog Page - Grid/List View
**Description:** Create blog page with grid and list view
**Checklist:**
- [ ] Blog grid layout
- [ ] Blog list layout
- [ ] View toggle
- [ ] Category filter
- [ ] Pagination

### Card: Blog Page - Single Post
**Description:** Create single post page template
**Checklist:**
- [ ] Single post layout
- [ ] Sidebar component
- [ ] Comment section HTML
- [ ] Related posts
- [ ] Social sharing buttons

### Card: Portfolio Page - Grid Layout
**Description:** Create Portfolio page with grid 2/3/4 columns
**Checklist:**
- [ ] Portfolio grid component
- [ ] Column options (2/3/4)
- [ ] Filter functionality
- [ ] Lightbox

### Card: Portfolio Page - Single (Case Study)
**Description:** Create single portfolio page template
**Checklist:**
- [ ] Single portfolio layout
- [ ] Image gallery
- [ ] Project details
- [ ] Related projects

### Card: Testimonials Page
**Description:** Create dedicated page listing testimonials
**Checklist:**
- [ ] Testimonials page layout
- [ ] Filter by category/rating
- [ ] Testimonial card design

### Card: FAQ Page
**Description:** Create FAQ page with accordion
**Checklist:**
- [ ] FAQ page layout
- [ ] Accordion component
- [ ] Search functionality
- [ ] Category grouping

### Card: 404 Error Page
**Description:** Create custom 404 page
**Checklist:**
- [ ] 404 page design
- [ ] Error message
- [ ] Navigation links

### Card: Responsive Design - Mobile
**Description:** Ensure responsive on mobile (< 768px)
**Checklist:**
- [ ] Mobile breakpoints
- [ ] Mobile navigation
- [ ] Touch-friendly
- [ ] Mobile optimizations

### Card: Responsive Design - Tablet
**Description:** Ensure responsive on tablet (768px - 1024px)
**Checklist:**
- [ ] Tablet breakpoints
- [ ] Tablet layout adjustments
- [ ] Touch interactions

### Card: Responsive Design - Desktop
**Description:** Ensure responsive on desktop (> 1024px)
**Checklist:**
- [ ] Desktop breakpoints
- [ ] Large screen optimizations
- [ ] Hover effects

### Card: CSS Animations & Effects
**Description:** Add animations and hover effects
**Checklist:**
- [ ] Button hover effects
- [ ] Card hover animations
- [ ] Transition effects
- [ ] Loading animations

### Card: Scroll Animations
**Description:** Integrate scroll animations (AOS/GSAP)
**Checklist:**
- [ ] AOS initialization
- [ ] GSAP scroll triggers
- [ ] Parallax effects
- [ ] Fade-in animations

### Card: Cross-browser Testing
**Description:** Test and fix on browsers
**Checklist:**
- [ ] Chrome testing
- [ ] Firefox testing
- [ ] Safari testing
- [ ] Edge testing
- [ ] Fix compatibility issues

### Card: Performance Optimization
**Description:** Optimize performance
**Checklist:**
- [ ] Image optimization (WebP)
- [ ] Lazy loading
- [ ] CSS minification
- [ ] JS minification
- [ ] Code splitting

### Card: WordPress Theme - Basic Files
**Description:** Create basic WordPress theme files
**Checklist:**
- [ ] style.css with theme header
- [ ] index.php
- [ ] header.php
- [ ] footer.php
- [ ] sidebar.php
- [ ] functions.php

### Card: WordPress Theme - Directory Structure
**Description:** Create theme directory structure
**Checklist:**
- [ ] inc/ directory
- [ ] assets/css/
- [ ] assets/js/
- [ ] assets/images/
- [ ] assets/fonts/

### Card: WordPress - Header & Footer Integration
**Description:** Integrate header and footer into WordPress
**Checklist:**
- [ ] Header template
- [ ] Footer template
- [ ] WordPress hooks ($wp_head, $wp_footer)
- [ ] Dynamic site info

### Card: WordPress - Enqueue Styles & Scripts
**Description:** Register and load CSS/JS in WordPress
**Checklist:**
- [ ] Enqueue main CSS
- [ ] Enqueue Bootstrap
- [ ] Enqueue jQuery
- [ ] Enqueue custom JS
- [ ] Conditional loading

### Card: WordPress - Menu Integration
**Description:** Integrate menu navigation
**Checklist:**
- [ ] Register menu locations
- [ ] Primary menu
- [ ] Footer menu
- [ ] Mobile menu

### Card: WordPress - The Loop Integration
**Description:** Integrate The Loop for posts
**Checklist:**
- [ ] Loop in index.php
- [ ] Loop in archive.php
- [ ] Loop in single.php
- [ ] Pagination

### Card: WordPress - Sidebar & Widgets
**Description:** Integrate sidebar and widgets
**Checklist:**
- [ ] Register sidebar
- [ ] Main sidebar
- [ ] Footer widgets
- [ ] Widget areas

### Card: WordPress - Template Files
**Description:** Create template files
**Checklist:**
- [ ] page.php
- [ ] single.php
- [ ] archive.php
- [ ] 404.php
- [ ] search.php

### Card: WordPress - Post Formats
**Description:** Support post formats
**Checklist:**
- [ ] Register post formats
- [ ] Template for each format

### Card: WordPress - CPT Services
**Description:** Register Custom Post Type Services
**Checklist:**
- [ ] Register Services CPT
- [ ] archive-service.php
- [ ] single-service.php
- [ ] Custom taxonomies

### Card: WordPress - CPT Portfolio
**Description:** Register Custom Post Type Portfolio
**Checklist:**
- [ ] Register Portfolio CPT
- [ ] archive-portfolio.php
- [ ] single-portfolio.php
- [ ] Portfolio categories

### Card: WordPress - CPT Team Members
**Description:** Register Custom Post Type Team
**Checklist:**
- [ ] Register Team CPT
- [ ] archive-team.php
- [ ] single-team.php

### Card: WordPress - CPT Testimonials
**Description:** Register Custom Post Type Testimonials
**Checklist:**
- [ ] Register Testimonials CPT
- [ ] archive-testimonial.php
- [ ] single-testimonial.php

### Card: TGM Plugin Activation
**Description:** Integrate TGM Plugin Activation
**Checklist:**
- [ ] Install TGM library
- [ ] Register recommended plugins
- [ ] Register required plugins

### Card: WordPress Customizer
**Description:** Integrate WordPress Customizer
**Checklist:**
- [ ] Color options
- [ ] Logo upload
- [ ] Layout options
- [ ] Typography settings
- [ ] Social media links

### Card: Advanced Custom Fields (ACF)
**Description:** Create ACF fields for CPTs
**Checklist:**
- [ ] ACF fields - Services
- [ ] ACF fields - Portfolio
- [ ] ACF fields - Team
- [ ] ACF fields - Testimonials

### Card: Elementor Widgets
**Description:** Create widgets for Elementor
**Checklist:**
- [ ] Services widget
- [ ] Pricing widget
- [ ] Testimonials widget
- [ ] Team widget

### Card: WPBakery Shortcodes
**Description:** Create shortcodes for WPBakery
**Checklist:**
- [ ] Services shortcode
- [ ] Pricing shortcode
- [ ] Testimonials shortcode
- [ ] Team shortcode

### Card: Demo Content XML
**Description:** Create demo content XML
**Checklist:**
- [ ] Demo posts XML
- [ ] Demo pages XML
- [ ] Demo Services
- [ ] Demo Portfolio
- [ ] Demo Team
- [ ] Demo Testimonials

### Card: One Click Demo Import
**Description:** Integrate One Click Demo Import
**Checklist:**
- [ ] Install plugin
- [ ] Configure import
- [ ] Test import
- [ ] Fix import issues

### Card: Theme Check Plugin
**Description:** Run Theme Check and fix errors
**Checklist:**
- [ ] Install Theme Check
- [ ] Run checks
- [ ] Fix errors
- [ ] Fix warnings
- [ ] Re-check

### Card: Security Audit
**Description:** Check and fix security issues
**Checklist:**
- [ ] Input sanitization
- [ ] Output escaping
- [ ] Nonce checks
- [ ] SQL injection prevention

### Card: Documentation - Installation
**Description:** Write installation documentation
**Checklist:**
- [ ] Installation guide
- [ ] Demo import guide
- [ ] System requirements
- [ ] Screenshots

### Card: Documentation - User Guide
**Description:** Write user guide documentation
**Checklist:**
- [ ] Customizer guide
- [ ] CPTs guide
- [ ] ACF guide
- [ ] Page Builder guide

### Card: Documentation - Advanced
**Description:** Write advanced customization documentation
**Checklist:**
- [ ] Child theme guide
- [ ] Hooks documentation
- [ ] Filters documentation

### Card: Optimization - CSS/JS
**Description:** Optimize CSS and JS
**Checklist:**
- [ ] CSS minification
- [ ] JS minification
- [ ] File combination
- [ ] Remove unused code

### Card: Optimization - Images
**Description:** Optimize images
**Checklist:**
- [ ] Image compression
- [ ] WebP conversion
- [ ] Lazy loading setup
- [ ] Responsive images

---

## 🟠 DOING

### Card: Responsive Design - Mobile First
**Description:** Working on responsive design for mobile
**Checklist:**
- [x] Breakpoints: Mobile (< 768px)
- [ ] Breakpoints: Tablet (768px - 1024px)
- [ ] Breakpoints: Desktop (> 1024px)
- [ ] Mobile menu hamburger
- [ ] Touch gestures

---

## 🟢 READY TO TEST

*(No cards ready for testing yet)*

---

## ✅ DONE

### Card: Setup Basic Project Structure (Stage 0 - Shared Setup)
**Description:** Completed basic project structure setup (shared for all versions)
**Checklist:**
- [x] Directory structure (css/, js/, images/, fonts/)
- [x] Vite config
- [x] TypeScript config
- [x] SCSS setup

### Card: Setup Required JS Libraries (Stage 0 - Shared Setup)
**Description:** Installed required libraries (shared for all versions)
**Checklist:**
- [x] jQuery
- [x] Bootstrap 5
- [x] GSAP
- [x] Swiper
- [x] AOS
- [x] Animate.css
- [x] Font Awesome

### Card: Header Component
**Description:** Completed Header component
**Checklist:**
- [x] Header HTML structure
- [x] Header TypeScript
- [x] Navigation menu
- [x] Responsive menu

### Card: Services Section
**Description:** Completed Services section
**Checklist:**
- [x] Services HTML
- [x] Services TypeScript
- [x] Carousel functionality

### Card: About Us Section
**Description:** Completed About Us section
**Checklist:**
- [x] About Us HTML
- [x] About Us TypeScript

### Card: Testimonial Section
**Description:** Completed Testimonial section
**Checklist:**
- [x] Testimonial HTML
- [x] Testimonial TypeScript
- [x] Carousel functionality

### Card: Contact Section
**Description:** Completed Contact section
**Checklist:**
- [x] Contact HTML
- [x] Contact TypeScript
- [x] Parallax effect
- [x] Contact form HTML

### Card: Footer Component
**Description:** Completed Footer component
**Checklist:**
- [x] Footer HTML
- [x] Footer styling

