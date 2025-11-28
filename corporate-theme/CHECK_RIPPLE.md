# 🔍 Kiểm Tra Ripple Effect - Debug Guide

## ⚠️ Vấn Đề: Ripple không hoạt động

Ripple effect cần background image để hoạt động. Hiện tại code đã được sửa để:
1. Áp dụng ripple vào slideshow container (có background image)
2. Overlay màu primary hiển thị phía trên

## 🔧 Các Bước Kiểm Tra

### 1. Mở Console (F12)
Kiểm tra các log messages:
- `✅ jQuery is available`
- `✅ jQuery Ripples plugin is available`
- `✅ Found slideshow element, initializing ripple effect...`
- `✅ Ripple effect initialized on slideshow!`

### 2. Kiểm Tra Elements
1. Mở tab **Elements**
2. Tìm `.header__slideshow`
3. Xem có `<canvas>` element bên trong không
4. Nếu có canvas = ripple đã được khởi tạo

### 3. Test Thủ Công trong Console
```javascript
// Kiểm tra jQuery
console.log(typeof $, typeof jQuery);

// Kiểm tra ripples plugin
console.log(typeof $.fn.ripples);

// Test manual
$('.header__slideshow').ripples({
  resolution: 256,
  dropRadius: 30,
  perturbance: 0.06,
  interactive: true
});
```

## 🚨 Nếu Vẫn Không Hoạt Động

### Giải Pháp 1: Dùng CDN
Uncomment dòng trong `index.html`:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.6.3/jquery.ripples.min.js"></script>
```

Và comment dòng trong `main.ts`:
```typescript
// import 'jquery.ripples'
```

### Giải Pháp 2: Kiểm Tra WebGL
```javascript
// Chạy trong console
!!window.WebGLRenderingContext  // Phải là true
```

### Giải Pháp 3: Tăng Delay
Có thể DOM chưa sẵn sàng. Tăng delay trong `Header.ts`:
```typescript
setTimeout(() => {
  // ...
}, 1000);  // Tăng từ 500 lên 1000 hoặc 1500
```

