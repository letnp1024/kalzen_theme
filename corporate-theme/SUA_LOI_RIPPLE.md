# 🔧 Sửa Lỗi Ripple Effect Không Hoạt Động

## ⚡ Giải Pháp Nhanh (Dùng CDN)

Nếu ripple effect không hoạt động với npm import, dùng CDN:

### Bước 1: Mở file `index.html`
Tìm dòng 21-22, bỏ comment dòng CDN:
```html
<!-- Đổi từ: -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.6.3/jquery.ripples.min.js"></script> -->

<!-- Thành: -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.6.3/jquery.ripples.min.js"></script>
```

### Bước 2: Comment import trong `main.ts`
Mở `src/main.ts`, tìm dòng:
```typescript
import 'jquery.ripples'
```

Đổi thành:
```typescript
// import 'jquery.ripples'  // Dùng CDN thay vì npm
```

### Bước 3: Restart dev server
```powershell
# Dừng server (Ctrl+C)
# Chạy lại:
npm run dev
```

## 🔍 Kiểm Tra

1. Mở Console (F12)
2. Di chuột vào header
3. Xem có hiệu ứng không

## ✅ Sau Khi Sửa

Bạn sẽ thấy trong console:
```
✅ jQuery is available
✅ jQuery Ripples plugin is available
✅ Ripple effect initialized on header slideshow!
```

Và khi di chuột vào header sẽ có hiệu ứng water wave! 🌊

