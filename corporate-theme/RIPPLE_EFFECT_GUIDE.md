# Hướng Dẫn Tích Hợp Water Ripple Effect cho Header

## 📦 Bước 1: Cài Đặt jQuery và Ripple Library

jQuery đã được cài đặt trong dự án. Bây giờ chúng ta cần thêm thư viện ripple effect.

### Cách 1: Sử dụng npm (Khuyến nghị)

```bash
cd corporate-theme
npm install jquery.ripples
```

### Cách 2: Sử dụng CDN (Nhanh hơn, không cần build)

Sử dụng CDN trong file `index.html`:

```html
<!-- jQuery (đã có trong package.json) -->
<!-- jquery.ripples CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js"></script>
```

## 🎯 Bước 2: Tích Hợp vào Header Component

### 2.1. Import jQuery và Ripples trong TypeScript

Tạo hoặc cập nhật file `src/components/Header.ts`:

```typescript
import $ from 'jquery';
import 'jquery.ripples';

// Hoặc nếu dùng CDN, chỉ cần đảm bảo jQuery global
declare global {
  interface Window {
    $: typeof import('jquery');
    jQuery: typeof import('jquery');
  }
}
```

### 2.2. Khởi tạo Ripple Effect

Thêm method vào class Header:

```typescript
/**
 * Initialize ripple effect on header
 */
private initRippleEffect(): void {
  // Đảm bảo jQuery có sẵn globally
  if (typeof window.$ === 'undefined') {
    window.$ = window.jQuery = require('jquery');
  }

  const $header = $('.header__slideshow, .header__navigation-inner');
  
  // Khởi tạo ripple effect
  $header.ripples({
    resolution: 512,
    dropRadius: 20,        // Bán kính của gợn sóng
    perturbance: 0.04,     // Mức độ biến dạng (0.01 - 0.1)
    interactive: true,     // Kích hoạt khi di chuột
    crossOrigin: ''        // CORS nếu dùng hình ảnh
  });

  // Tạo ripple khi di chuột
  $header.on('mousemove', function(e: MouseEvent) {
    const $this = $(this);
    const x = e.pageX - $this.offset().left;
    const y = e.pageY - $this.offset().top;
    
    $this.ripples('drop', x, y, 20, 0.04);
  });
}
```

## 🎨 Bước 3: Cấu Hình và Tùy Chỉnh

### Tham số cấu hình Ripples:

```typescript
$header.ripples({
  // Độ phân giải (càng cao càng mượt nhưng tốn tài nguyên)
  resolution: 512,  // 128, 256, 512, 1024
  
  // Bán kính của giọt nước
  dropRadius: 20,   // 10-50
  
  // Mức độ biến dạng (càng cao càng rõ)
  perturbance: 0.04, // 0.01-0.1
  
  // Tự động tạo ripple khi di chuột
  interactive: true,
  
  // Cross-origin cho hình ảnh
  crossOrigin: '',
  
  // Vị trí x, y (nếu muốn cố định)
  // x: 0,
  // y: 0,
});
```

### Các method có sẵn:

```typescript
// Tạo ripple tại vị trí cụ thể
$header.ripples('drop', x, y, radius, strength);

// Xóa tất cả ripple
$header.ripples('destroy');

// Tạm dừng
$header.ripples('pause');

// Tiếp tục
$header.ripples('play');

// Update settings
$header.ripples('set', {
  dropRadius: 30,
  perturbance: 0.06
});
```

## 🔧 Bước 4: Tích Hợp Hoàn Chỉnh

### Cập nhật Header.ts

```typescript
export class Header {
  private slideshowContainer: HTMLElement | null;
  // ... các properties khác

  constructor() {
    this.slideshowContainer = document.querySelector('.header__slideshow');
    // ... các init khác
    this.init();
    this.initRippleEffect(); // Thêm dòng này
  }

  private initRippleEffect(): void {
    // Code từ bước 2.2
  }
}
```

### Cập nhật main.ts để load jQuery trước

```typescript
// Import jQuery trước
import $ from 'jquery';
window.$ = window.jQuery = $;

// Import ripples sau khi jQuery đã load
import 'jquery.ripples';
```

## 💡 Bước 5: Tùy Chỉnh CSS (Nếu cần)

Thêm vào `_header.scss`:

```scss
.header {
  &__slideshow {
    position: relative;
    overflow: hidden;
    
    // Đảm bảo có background để ripple hiển thị
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  }

  &__navigation-inner {
    position: relative;
    overflow: hidden;
  }
}
```

## ⚠️ Lưu Ý Quan Trọng

1. **WebGL Support**: Ripple effect cần WebGL. Kiểm tra:
   ```javascript
   if (!window.WebGLRenderingContext) {
     console.warn('WebGL not supported, ripple effect disabled');
   }
   ```

2. **Performance**: 
   - Resolution cao sẽ tốn nhiều tài nguyên
   - Nên dùng resolution 256-512 cho tốt nhất

3. **Background Image**: 
   - Ripple hoạt động tốt với hình ảnh background
   - Có thể dùng màu solid nhưng hiệu ứng sẽ ít rõ hơn

4. **Mobile**: 
   - Nên tắt ripple trên mobile để tối ưu performance
   ```typescript
   if (window.innerWidth < 768) {
     // Tắt ripple trên mobile
     return;
   }
   ```

## 🚀 Ví Dụ Hoàn Chỉnh

Xem file `src/components/Header.ts` đã được cập nhật với ripple effect.

## 📚 Tài Liệu Tham Khảo

- [jquery.ripples GitHub](https://github.com/sirxemic/jquery.ripples)
- [jQuery Documentation](https://api.jquery.com/)

