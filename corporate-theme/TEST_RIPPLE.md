# 🧪 Test Ripple Effect - Hướng Dẫn Kiểm Tra

## 📋 Các Bước Kiểm Tra

### 1. Restart Dev Server
```powershell
# Dừng server (Ctrl+C)
npm run dev
```

### 2. Mở Console (F12)
Nhấn F12 → Tab Console

### 3. Kiểm Tra Logs

Bạn sẽ thấy các dòng sau:
```
✅ jQuery is available
✅ jQuery Ripples plugin is available
✅ Found slideshow element, initializing ripple effect...
✅ Ripple effect initialized on slideshow!
💡 Move your mouse over the header slideshow to see the water wave effect
```

### 4. Test Thủ Công trong Console

Nếu không thấy logs trên, thử chạy lệnh này trong Console:

```javascript
// Kiểm tra jQuery
console.log('jQuery:', typeof $, typeof jQuery);

// Kiểm tra ripples
console.log('Ripples:', typeof $.fn.ripples);

// Kiểm tra element
console.log('Slideshow:', $('.header__slideshow').length);

// Test khởi tạo thủ công
$('.header__slideshow').ripples({
  resolution: 256,
  dropRadius: 25,
  perturbance: 0.05,
  interactive: true
});
```

### 5. Kiểm Tra Elements

1. Mở tab **Elements** (F12)
2. Tìm `.header__slideshow`
3. Xem có `<canvas>` bên trong không
4. Nếu có canvas = ripple đã khởi tạo

## 🚨 Nếu Vẫn Không Hoạt Động

### Kiểm Tra Network Tab
1. Mở tab **Network** (F12)
2. Reload trang (F5)
3. Tìm file `jquery.ripples.min.js`
4. Xem có load thành công không (status 200)

### Kiểm Tra WebGL
Chạy trong Console:
```javascript
!!window.WebGLRenderingContext  // Phải là true
```

### Thử CDN Khác
Nếu CDN hiện tại không load, thử:
```html
<script src="https://cdn.jsdelivr.net/npm/jquery.ripples@0.6.3/dist/jquery.ripples.min.js"></script>
```

