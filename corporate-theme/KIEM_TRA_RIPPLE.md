# 🔍 Kiểm Tra Ripple Effect

## Bước 1: Mở Console (F12)
Nhấn F12 để mở Developer Tools, chuyển sang tab **Console**

## Bước 2: Kiểm Tra Logs

Bạn sẽ thấy các dòng log sau nếu mọi thứ OK:
```
✅ jQuery is available
✅ jQuery Ripples plugin is available  
✅ Found slideshow element, initializing ripple...
✅ Ripple effect initialized on header slideshow!
💡 Move your mouse over the header to see the effect
```

## Bước 3: Nếu Có Lỗi

### Lỗi: "jQuery not available"
**Giải pháp**: Kiểm tra `main.ts` có import jQuery không

### Lỗi: "jQuery Ripples plugin not loaded"
**Giải pháp**: Dùng CDN thay vì npm import

Mở file `index.html` và thêm trước dòng Bootstrap JS:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.6.3/jquery.ripples.min.js"></script>
```

Sau đó xóa dòng này trong `main.ts`:
```typescript
import 'jquery.ripples'  // <-- Xóa dòng này
```

## Bước 4: Test Thủ Công

Mở Console và gõ:
```javascript
$('.header__slideshow').ripples({
  resolution: 256,
  dropRadius: 20,
  perturbance: 0.04,
  interactive: true
});
```

Nếu có lỗi, bạn sẽ thấy message trong console.

## Bước 5: Kiểm Tra Elements

1. Mở tab **Elements** (F12)
2. Tìm `.header__slideshow`
3. Kiểm tra xem có `<canvas>` element bên trong không
4. Nếu có canvas = ripple đã được khởi tạo

## Vấn Đề Thường Gặp

### 1. Hiệu ứng không hiển thị
- Kiểm tra WebGL: Mở console gõ `!!window.WebGLRenderingContext` (phải là `true`)
- Kiểm tra background image có load không

### 2. Hiệu ứng lag
- Giảm resolution xuống 256
- Tắt trên mobile (đã tự động)

### 3. Không có hiệu ứng khi di chuột
- Kiểm tra `interactive: true` trong settings
- Xem console có lỗi không

