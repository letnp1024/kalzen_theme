# 🔍 Debug Ripple Effect

## Các Bước Kiểm Tra

### 1. Kiểm tra Console (F12)
Mở Developer Tools và xem có lỗi gì không:
- `jQuery not available` - jQuery chưa load
- `jQuery Ripples plugin not loaded` - Ripples chưa load
- `WebGL not supported` - Browser không hỗ trợ WebGL

### 2. Kiểm tra Elements
Xem trong Elements tab, tìm `.header__slideshow` - có canvas element được tạo bên trong không?

### 3. Kiểm tra Network
Xem có file jquery.ripples được load không?

## Giải Pháp Nhanh: Dùng CDN

Nếu npm import không hoạt động, dùng CDN trong `index.html`:

```html
<!-- Thêm vào trước dòng Bootstrap JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.6.3/jquery.ripples.min.js"></script>
```

Sau đó xóa dòng import trong `main.ts`:
```typescript
// Xóa dòng này:
// import 'jquery.ripples'
```

## Test Manual

Mở Console và chạy:
```javascript
// Kiểm tra jQuery
console.log(typeof $, typeof jQuery);

// Kiểm tra ripples
console.log(typeof $.fn.ripples);

// Test manual
$('.header__slideshow').ripples({
  resolution: 256,
  dropRadius: 20,
  perturbance: 0.04,
  interactive: true
});
```

