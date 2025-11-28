# 💧 Hướng Dẫn: Thêm Hiệu Ứng Water Wave cho Header

## 🎯 Mục Tiêu
Tạo hiệu ứng gợn sóng nước (water ripple) khi di chuyển chuột qua phần header.

## 📦 Bước 1: Cài Đặt jQuery Ripples

### Phương Án A: Cài qua npm (Khuyến nghị)

Mở terminal và chạy:
```bash
cd corporate-theme
npm install jquery.ripples
```

### Phương Án B: Dùng CDN (Nhanh hơn)

Nếu không muốn dùng npm, mở file `index.html` và thêm dòng này **TRƯỚC** dòng Bootstrap JS:

```html
<!-- Thêm vào trước dòng Bootstrap JS Bundle -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js"></script>
```

Vị trí cụ thể: Thêm vào sau dòng 21, trước dòng 22 trong `index.html`

## ✅ Bước 2: Hoàn Tất!

**Tin tốt**: Code đã được tích hợp sẵn! Bạn chỉ cần:

1. ✅ Cài đặt thư viện (bước 1)
2. ✅ Chạy lại dev server: `npm run dev`
3. ✅ Di chuột vào header để xem hiệu ứng!

## 🎨 Cách Hoạt Động

- **Tự động**: Hiệu ứng sẽ xuất hiện khi bạn di chuột vào phần header slideshow
- **Tối ưu**: Tự động tắt trên mobile để đảm bảo hiệu năng
- **Mượt mà**: Sử dụng WebGL để render hiệu ứng mượt mà

## 🔧 Tùy Chỉnh (Tùy chọn)

Nếu muốn thay đổi độ mạnh của hiệu ứng, mở file:
`src/components/Header.ts`

Tìm dòng có:
```typescript
resolution: 512,      // Tăng để mượt hơn (tốn tài nguyên hơn)
dropRadius: 20,       // Tăng để giọt nước lớn hơn
perturbance: 0.04,    // Tăng để sóng rõ hơn (0.01-0.1)
```

## ⚠️ Lưu Ý

1. **WebGL Required**: Cần trình duyệt hỗ trợ WebGL
2. **Background**: Hoạt động tốt nhất với background có hình ảnh
3. **Performance**: Tự động tắt trên mobile (< 768px)

## 🐛 Khắc Phục Sự Cố

### Hiệu ứng không hoạt động?
- Kiểm tra console (F12) có lỗi không
- Đảm bảo đã cài đặt thư viện (npm hoặc CDN)
- Kiểm tra browser có hỗ trợ WebGL

### Hiệu ứng lag/chậm?
- Giảm `resolution` xuống 256
- Giảm `dropRadius` xuống 15

## 📁 Files Đã Cập Nhật

- ✅ `package.json` - Đã thêm jquery.ripples vào dependencies
- ✅ `src/components/Header.ts` - Đã tích hợp method `initRippleEffect()`
- ✅ Tự động kiểm tra WebGL và mobile

## 🎉 Xong!

Bây giờ chỉ cần chạy:
```bash
npm install  # Nếu dùng npm
npm run dev  # Khởi động server
```

Và thưởng thức hiệu ứng water wave trên header! 🌊

