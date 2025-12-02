# Hướng Dẫn Chuyển Đổi Từ Single-Page Sang Multi-Page

## 📊 Phân Tích Cấu Trúc Hiện Tại

### **Cấu trúc hiện tại (Single-Page):**
```
src/
├── main.ts                    # Load tất cả components vào #app
├── components/
│   ├── header/               # Header component
│   ├── services/             # Services component
│   ├── about-us/             # About Us component
│   ├── testimonial/          # Testimonial component
│   ├── contact/              # Contact component
│   └── footer/               # Footer component
└── scss/
    └── main.scss             # Global styles
```

**Vấn đề:**
- ❌ Tất cả components load cùng lúc
- ❌ Không có routing
- ❌ Không thể tách thành các trang riêng (Home, About, Services, Contact, Blog)
- ❌ Khó scale khi thêm nhiều trang

---

## 🎯 3 Cách Tiếp Cận Multi-Page

### **Option 1: Multi-Page với Vite Multi-Page Config** (Tách biệt hoàn toàn)
- Mỗi trang là file HTML riêng
- Tách biệt hoàn toàn, không share code
- Phù hợp: Website tĩnh, ít tương tác

### **Option 2: SPA với Client-Side Routing** (Khuyến nghị) ⭐
- Giữ SPA nhưng thêm routing
- Share components, chỉ load page cần thiết
- Phù hợp: Website động, nhiều tương tác

### **Option 3: Hybrid** (Kết hợp)
- Một số trang tách biệt (landing pages)
- Một số trang dùng routing (dashboard, admin)
- Phù hợp: Website phức tạp

---

## ✅ Khuyến Nghị: Option 2 - SPA với Client-Side Routing

**Lý do:**
- ✅ Dễ migrate từ code hiện tại
- ✅ Share components và styles
- ✅ Fast navigation (không reload page)
- ✅ SEO-friendly với pre-rendering
- ✅ Có thể dùng vanilla router hoặc thư viện nhẹ

---

## 📁 Cấu Trúc Mới Đề Xuất

```
src/
├── main.ts                    # Entry point, khởi tạo router
├── router/
│   ├── Router.ts             # Router class (vanilla)
│   ├── routes.ts             # Route definitions
│   └── types.ts              # Route types
├── pages/
│   ├── HomePage.ts           # Home page (tổng hợp components)
│   ├── AboutPage.ts          # About page
│   ├── ServicesPage.ts       # Services page
│   ├── ContactPage.ts       # Contact page
│   └── BlogPage.ts          # Blog page (nếu có)
├── layouts/
│   ├── MainLayout.ts        # Layout chung (Header + Footer)
│   └── PageLayout.ts         # Layout cho từng page
├── components/               # Shared components
│   ├── header/
│   ├── footer/
│   ├── services/
│   ├── about-us/
│   ├── testimonial/
│   └── contact/
└── scss/
    └── main.scss
```

---

## 🚀 Bước 1: Tạo Router System

### **1.1. Tạo Router Class**

**src/router/types.ts:**
```typescript
export interface Route {
  path: string;
  name: string;
  component: () => Promise<void> | void;
  layout?: 'main' | 'minimal';
}

export type RouteParams = Record<string, string>;
```

**src/router/Router.ts:**
```typescript
import { Route, RouteParams } from './types';

export class Router {
  private routes: Route[] = [];
  private currentRoute: Route | null = null;
  private params: RouteParams = {};

  constructor(routes: Route[]) {
    this.routes = routes;
    this.init();
  }

  private init(): void {
    // Listen to popstate (browser back/forward)
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });

    // Handle initial load
    this.handleRoute();

    // Handle link clicks
    document.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        this.navigate(target.getAttribute('href')!);
      }
    });
  }

  private handleRoute(): void {
    const path = window.location.pathname;
    const route = this.routes.find(r => this.matchRoute(r.path, path));

    if (route) {
      this.currentRoute = route;
      this.loadRoute(route);
    } else {
      // 404 - redirect to home
      this.navigate('/');
    }
  }

  private matchRoute(routePath: string, currentPath: string): boolean {
    const routeParts = routePath.split('/');
    const pathParts = currentPath.split('/');

    if (routeParts.length !== pathParts.length) {
      return false;
    }

    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(':')) {
        // Dynamic param
        const paramName = routeParts[i].slice(1);
        this.params[paramName] = pathParts[i];
      } else if (routeParts[i] !== pathParts[i]) {
        return false;
      }
    }

    return true;
  }

  private async loadRoute(route: Route): Promise<void> {
    const app = document.querySelector('#app');
    if (!app) return;

    // Clear app
    app.innerHTML = '';

    // Load layout
    const layout = route.layout || 'main';
    await this.loadLayout(layout, app);

    // Load page component
    await route.component();
  }

  private async loadLayout(layout: string, container: HTMLElement): Promise<void> {
    if (layout === 'main') {
      const { MainLayout } = await import('../layouts/MainLayout');
      const mainLayout = new MainLayout();
      container.innerHTML = mainLayout.render();
      mainLayout.init();
    }
    // Add other layouts here
  }

  public navigate(path: string): void {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  public getParams(): RouteParams {
    return { ...this.params };
  }
}
```

---

## 📄 Bước 2: Tạo Pages

### **2.1. Home Page** (Tổng hợp tất cả components hiện tại)

**src/pages/HomePage.ts:**
```typescript
import { Header } from '../components/Header';
import { Services } from '../components/services/Services';
import { AboutUs } from '../components/about-us/AboutUs';
import { Testimonial } from '../components/testimonial/Testimonial';
import { Contact } from '../components/contact/Contact';

import { headerHTML } from '../components/header/headerTemplate';
import { servicesHTML } from '../components/services/servicesTemplate';
import { aboutUsHTML } from '../components/about-us/aboutUsTemplate';
import { testimonialHTML } from '../components/testimonial/testimonialTemplate';
import { contactHTML } from '../components/contact/contactTemplate';
import { footerHTML } from '../components/footer/footerTemplate';

export class HomePage {
  private header: Header | null = null;
  private services: Services | null = null;
  private aboutUs: AboutUs | null = null;
  private testimonial: Testimonial | null = null;
  private contact: Contact | null = null;

  async load(): Promise<void> {
    const content = document.querySelector('#page-content');
    if (!content) return;

    // Load all sections
    content.innerHTML = `
      ${headerHTML}
      ${servicesHTML}
      ${aboutUsHTML}
      ${testimonialHTML}
      ${contactHTML}
    `;

    // Initialize components
    this.header = new Header();
    this.header.pauseOnHover();
    
    this.services = new Services();
    this.aboutUs = new AboutUs();
    this.testimonial = new Testimonial();
    this.contact = new Contact();

    // Initialize contact form
    this.initContactForm();
  }

  private initContactForm(): void {
    const form = document.querySelector<HTMLFormElement>('#contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      console.log('Form submitted:', Object.fromEntries(formData));
      alert('Thank you for your message!');
      form.reset();
    });
  }

  destroy(): void {
    // Cleanup if needed
    this.header = null;
    this.services = null;
    this.aboutUs = null;
    this.testimonial = null;
    this.contact = null;
  }
}
```

### **2.2. About Page** (Chỉ About Us component)

**src/pages/AboutPage.ts:**
```typescript
import { AboutUs } from '../components/about-us/AboutUs';
import { aboutUsHTML } from '../components/about-us/aboutUsTemplate';

export class AboutPage {
  private aboutUs: AboutUs | null = null;

  async load(): Promise<void> {
    const content = document.querySelector('#page-content');
    if (!content) return;

    content.innerHTML = aboutUsHTML;
    this.aboutUs = new AboutUs();
  }

  destroy(): void {
    this.aboutUs = null;
  }
}
```

### **2.3. Services Page**

**src/pages/ServicesPage.ts:**
```typescript
import { Services } from '../components/services/Services';
import { servicesHTML } from '../components/services/servicesTemplate';

export class ServicesPage {
  private services: Services | null = null;

  async load(): Promise<void> {
    const content = document.querySelector('#page-content');
    if (!content) return;

    content.innerHTML = servicesHTML;
    this.services = new Services();
  }

  destroy(): void {
    this.services = null;
  }
}
```

### **2.4. Contact Page**

**src/pages/ContactPage.ts:**
```typescript
import { Contact } from '../components/contact/Contact';
import { contactHTML } from '../components/contact/contactTemplate';

export class ContactPage {
  private contact: Contact | null = null;

  async load(): Promise<void> {
    const content = document.querySelector('#page-content');
    if (!content) return;

    content.innerHTML = contactHTML;
    this.contact = new Contact();
    this.initContactForm();
  }

  private initContactForm(): void {
    const form = document.querySelector<HTMLFormElement>('#contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      console.log('Form submitted:', Object.fromEntries(formData));
      alert('Thank you for your message!');
      form.reset();
    });
  }

  destroy(): void {
    this.contact = null;
  }
}
```

---

## 🎨 Bước 3: Tạo Layout System

### **3.1. Main Layout** (Header + Footer)

**src/layouts/MainLayout.ts:**
```typescript
import { headerHTML } from '../components/header/headerTemplate';
import { footerHTML } from '../components/footer/footerTemplate';
import { Header } from '../components/Header';

export class MainLayout {
  private header: Header | null = null;

  render(): string {
    return `
      ${headerHTML}
      <main id="page-content"></main>
      ${footerHTML}
    `;
  }

  init(): void {
    // Initialize header
    this.header = new Header();
    this.header.pauseOnHover();

    // Initialize navigation
    this.initNavigation();
  }

  private initNavigation(): void {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/')) {
          e.preventDefault();
          // Navigation handled by router
        }
      });
    });
  }

  destroy(): void {
    this.header = null;
  }
}
```

---

## 🔧 Bước 4: Cấu Hình Routes

### **src/router/routes.ts:**
```typescript
import { Route } from './types';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ServicesPage } from '../pages/ServicesPage';
import { ContactPage } from '../pages/ContactPage';

export const routes: Route[] = [
  {
    path: '/',
    name: 'home',
    component: async () => {
      const page = new HomePage();
      await page.load();
    },
    layout: 'main'
  },
  {
    path: '/about',
    name: 'about',
    component: async () => {
      const page = new AboutPage();
      await page.load();
    },
    layout: 'main'
  },
  {
    path: '/services',
    name: 'services',
    component: async () => {
      const page = new ServicesPage();
      await page.load();
    },
    layout: 'main'
  },
  {
    path: '/contact',
    name: 'contact',
    component: async () => {
      const page = new ContactPage();
      await page.load();
    },
    layout: 'main'
  }
];
```

---

## 🎯 Bước 5: Cập Nhật main.ts

### **src/main.ts:**
```typescript
import './scss/main.scss';
import { Router } from './router/Router';
import { routes } from './router/routes';

// Initialize Router
const router = new Router(routes);

console.log('✅ Corporate Theme initialized successfully!');
```

---

## 📝 Bước 6: Cập Nhật Navigation Links

### **Cập nhật Header template:**
```html
<!-- Thay đổi từ: -->
<a class="nav-link" href="#about">About Us</a>

<!-- Thành: -->
<a class="nav-link" href="/about">About Us</a>
```

---

## ⚙️ Bước 7: Cấu Hình Vite cho Multi-Page

### **vite.config.ts:**
```typescript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Có thể thêm các entry points khác nếu cần
      }
    }
  },
  server: {
    historyApiFallback: true // Quan trọng cho SPA routing
  }
});
```

---

## 🎨 Cấu Trúc Thư Mục Hoàn Chỉnh

```
src/
├── main.ts                    # Entry point
├── router/
│   ├── Router.ts             # Router class
│   ├── routes.ts             # Route definitions
│   └── types.ts              # Route types
├── pages/
│   ├── HomePage.ts           # Home page
│   ├── AboutPage.ts          # About page
│   ├── ServicesPage.ts       # Services page
│   └── ContactPage.ts        # Contact page
├── layouts/
│   └── MainLayout.ts         # Main layout
├── components/               # Shared components
│   ├── header/
│   ├── footer/
│   ├── services/
│   ├── about-us/
│   ├── testimonial/
│   └── contact/
└── scss/
    └── main.scss
```

---

## ✅ Lợi Ích Sau Khi Migrate

1. ✅ **Tách biệt pages**: Mỗi trang là một class riêng
2. ✅ **Code splitting**: Chỉ load code cần thiết
3. ✅ **Dễ maintain**: Dễ thêm/sửa/xóa pages
4. ✅ **SEO-friendly**: Có thể pre-render
5. ✅ **Fast navigation**: Không reload page
6. ✅ **Share components**: Components được tái sử dụng

---

## 🚀 Next Steps

1. Tạo router system
2. Tạo pages từ components hiện tại
3. Tạo layout system
4. Cấu hình routes
5. Cập nhật navigation
6. Test routing

---

## 📚 Tài Liệu Tham Khảo

- [Vite SPA Routing](https://vitejs.dev/guide/static-deploy.html#single-page-application)
- [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

