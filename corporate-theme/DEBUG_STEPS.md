# 🔍 Debug Steps - Ripple Effect Không Hoạt Động

## Bước 1: Mở Console (F12)

Sau khi reload trang, bạn sẽ thấy các log sau nếu mọi thứ OK:

```
✅ jQuery is available
✅ jQuery Ripples plugin is available  
✅ Starting ripple initialization...
✅✅✅ RIPPLE EFFECT INITIALIZED SUCCESSFULLY! ✅✅✅
💡 Move your mouse over the header slideshow to see water wave effect
```

## Bước 2: Nếu Thấy Lỗi

### Lỗi: "jQuery not loaded"
**Giải pháp**: Kiểm tra trong Network tab xem jQuery có load không

### Lỗi: "jQuery Ripples plugin not loaded"
**Giải pháp**: 
1. Kiểm tra Network tab - tìm `jquery.ripples.min.js`
2. Nếu 404 hoặc failed, thử CDN khác

## Bước 3: Test Thủ Công

Mở Console và chạy từng dòng:

```javascript
// 1. Kiểm tra jQuery
console.log(typeof $, typeof jQuery);

// 2. Kiểm tra Ripples
console.log(typeof $.fn.ripples);

// 3. Kiểm tra element
console.log($('.header__slideshow').length);

// 4. Test ripple
$('.header__slideshow').ripples({
  resolution: 256,
  dropRadius: 25,
  perturbance: 0.05,
  interactive: true
});
```

## Bước 4: Kiểm Tra Elements

1. Mở tab **Elements**
2. Tìm `.header__slideshow`
3. Xem có `<canvas>` element bên trong không
4. Nếu có canvas = ripple đã được khởi tạo

## Bước 5: Kiểm Tra Background Image

Ripple cần background image. Kiểm tra:

```javascript
const slide = document.querySelector('.header__slideshow-slide.active');
const bg = window.getComputedStyle(slide).backgroundImage;
console.log('Background:', bg);
```

## ⚠️ Nếu Vẫn Không Hoạt Động

Có thể cần:
1. Download file ripples về local
2. Hoặc dùng thư viện khác (như GSAP, Three.js)
3. Hoặc tạo custom ripple effect bằng CSS/JS

Cho tôi biết bạn thấy gì trong Console!

