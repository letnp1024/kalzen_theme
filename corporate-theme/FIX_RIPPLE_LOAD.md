# 🔧 Sửa Lỗi jQuery Ripples Plugin Không Load

## ❌ Lỗi Hiện Tại
```
⚠️ jQuery Ripples plugin not loaded yet, retrying...
```

## 🔍 Kiểm Tra

### Bước 1: Mở Console và chạy
```javascript
// Kiểm tra jQuery
console.log('jQuery:', typeof $, typeof jQuery);

// Kiểm tra Ripples
console.log('Ripples:', typeof $.fn.ripples);
```

### Bước 2: Kiểm Tra Network Tab
1. Mở **Network** tab (F12)
2. Reload trang (F5)
3. Tìm file `jquery.ripples.min.js`
4. Xem status code:
   - **200** = Load thành công ✅
   - **404** = Không tìm thấy ❌
   - **Failed** = Lỗi network ❌

## ✅ Giải Pháp

### Giải Pháp 1: Dùng CDN Khác

Thử đổi CDN URL trong `index.html`:

```html
<!-- Option 1: jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/jquery.ripples@0.6.3/dist/jquery.ripples.min.js"></script>

<!-- Option 2: unpkg -->
<script src="https://unpkg.com/jquery.ripples@0.6.3/dist/jquery.ripples.min.js"></script>

<!-- Option 3: GitHub Raw -->
<script src="https://raw.githubusercontent.com/sirxemic/jquery.ripples/master/dist/jquery.ripples.min.js"></script>
```

### Giải Pháp 2: Load Script Động

Thêm vào `main.ts` sau khi jQuery load:

```typescript
// Load ripples script dynamically
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/jquery.ripples@0.6.3/dist/jquery.ripples.min.js';
script.onload = () => {
  console.log('✅ Ripples loaded, initializing...');
  initRipple();
};
document.head.appendChild(script);
```

### Giải Pháp 3: Download và Lưu Local

1. Download file: https://cdn.jsdelivr.net/npm/jquery.ripples@0.6.3/dist/jquery.ripples.min.js
2. Lưu vào: `public/js/jquery.ripples.min.js`
3. Load từ local:
```html
<script src="/js/jquery.ripples.min.js"></script>
```

