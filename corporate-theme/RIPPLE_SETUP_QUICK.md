# 🚀 Hướng Dẫn Nhanh: Cài Đặt Water Ripple Effect

## 📦 Bước 1: Cài Đặt Thư Viện

### Cách 1: Sử dụng npm (Khuyến nghị)

```bash
cd corporate-theme
npm install jquery.ripples
```

Sau đó chạy lại dev server:
```bash
npm run dev
```

### Cách 2: Sử dụng CDN (Nhanh, không cần build)

Nếu không muốn cài qua npm, bạn có thể dùng CDN. Thêm vào file `index.html`:

```html
<!-- Thêm vào <head> hoặc trước </body> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js"></script>
```

**Lưu ý**: Nếu dùng CDN, bạn không cần chạy `npm install jquery.ripples`.

## ✅ Bước 2: Kiểm Tra

Code đã được tích hợp sẵn trong `Header.ts`. Chỉ cần:

1. Cài đặt thư viện (npm hoặc CDN)
2. Chạy dev server
3. Di chuột vào header để xem hiệu ứng!

## 🎨 Tùy Chỉnh Hiệu Ứng

Mở file `src/components/Header.ts`, tìm method `setupRipples()` và thay đổi các tham số:

```typescript
$slideshow.ripples({
  resolution: 512,      // Độ phân giải (128-1024)
  dropRadius: 20,       // Bán kính giọt nước (10-50)
  perturbance: 0.04,    // Mức độ biến dạng (0.01-0.1)
  interactive: true,    // Tự động khi di chuột
});
```

## 🔧 Troubleshooting

### Lỗi: jQuery not found
**Giải pháp**: Đảm bảo jQuery đã được cài: `npm install`

### Lỗi: Ripples not working
**Nguyên nhân**: WebGL không được hỗ trợ hoặc background không phù hợp

**Giải pháp**: 
- Kiểm tra browser có hỗ trợ WebGL không
- Đảm bảo header có background image hoặc màu

### Hiệu ứng không mượt
**Giải pháp**: Giảm resolution xuống 256 hoặc 128

## 📝 File Đã Được Cập Nhật

- ✅ `package.json` - Đã thêm jquery.ripples
- ✅ `src/components/Header.ts` - Đã tích hợp ripple effect
- ✅ Tự động tắt trên mobile để tối ưu performance

## 🎯 Sử Dụng

Sau khi cài đặt, hiệu ứng sẽ tự động hoạt động khi:
- Di chuột vào phần header slideshow
- Hiệu ứng nước sẽ tạo sóng theo con trỏ chuột

**Không cần code thêm!** 🎉

