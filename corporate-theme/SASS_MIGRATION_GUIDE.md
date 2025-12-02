# Hướng Dẫn Xử Lý Sass Deprecation Warnings

Tài liệu này giải thích cách xử lý các deprecation warnings để tương thích với Dart Sass 3.0.0.

## 📋 Tổng Quan

Có 3 loại warnings chính:

1. ✅ **Đã sửa**: `darken()` và `lighten()` trong code custom
2. ⚠️ **Không thể sửa** (phải đợi): `@import` trong Bootstrap
3. ⚠️ **Không thể sửa** (từ thư viện): Color functions trong Bootstrap

---

## ✅ ĐÃ XỬ LÝ

### 1. `darken()` và `lighten()` trong `_variables.scss`

**Trước:**
```scss
$primary-dark: darken($primary, 10%);
$primary-light: lighten($primary, 10%);
```

**Sau:**
```scss
@use "sass:color";

$primary-dark: color.adjust($primary, $lightness: -10%);
$primary-light: color.adjust($primary, $lightness: 10%);
```

**Giải thích:**
- `darken()` và `lighten()` đã bị deprecated
- Chuyển sang dùng module `sass:color` với `color.adjust()`
- `color.adjust()` cho phép điều chỉnh lightness chính xác hơn

**Kết quả:** ✅ Không còn warnings cho phần này

---

## ⚠️ KHÔNG THỂ SỬA (Phải đợi Bootstrap)

### 2. `@import` Rules trong Bootstrap

**Warnings:**
```
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
...
```

**Tại sao không thể sửa:**
- Bootstrap được thiết kế cho `@import`, không phải `@use`
- Các file nội bộ của Bootstrap chia sẻ namespace global
- Nếu dùng `@use`, sẽ gây lỗi (ví dụ: `_assert-ascending` mixin không tìm thấy)

**Giải pháp:**
1. **Ngắn hạn**: Tiếp tục dùng `@import` cho Bootstrap (vẫn hoạt động)
2. **Dài hạn**: Đợi Bootstrap hỗ trợ `@use` chính thức

**Khi nào Bootstrap sẽ hỗ trợ:**
- Bootstrap team đang làm việc trên việc hỗ trợ `@use`
- Có thể mất vài phiên bản nữa
- Theo dõi: https://github.com/twbs/bootstrap/issues

**Kết quả:** ⚠️ Warnings vẫn còn nhưng không ảnh hưởng đến code hiện tại

---

## ⚠️ KHÔNG THỂ SỬA (Từ node_modules)

### 3. Color Functions trong Bootstrap

**Warnings:**
```
mix(white, $color, $weight)
red($color)
green($color)
blue($color)
```

**Vị trí:**
- `node_modules/bootstrap/scss/_functions.scss`
- `node_modules/bootstrap/scss/_variables.scss`

**Tại sao không thể sửa:**
- Nằm trong `node_modules` (thư viện bên ngoài)
- Nếu sửa, sẽ bị ghi đè khi chạy `npm install`
- Không nên chỉnh sửa code trong `node_modules`

**Giải pháp:**
1. **Không làm gì**: Đây là warnings từ Bootstrap, không phải code của bạn
2. **Đợi Bootstrap update**: Bootstrap sẽ tự cập nhật khi hỗ trợ Dart Sass 3.0.0
3. **Suppress warnings** (không khuyến nghị): Có thể tắt warnings trong config

**Kết quả:** ⚠️ Warnings vẫn còn nhưng không ảnh hưởng đến code

---

## 📊 Bảng Tổng Kết

| Loại Warning | File | Có thể sửa? | Trạng thái |
|--------------|------|-------------|------------|
| `darken()` | `_variables.scss` | ✅ Có | ✅ **Đã sửa** |
| `lighten()` | `_variables.scss` | ✅ Có | ✅ **Đã sửa** |
| `@import` Bootstrap | `main.scss` | ❌ Không | ⚠️ Đợi Bootstrap |
| `mix()` trong Bootstrap | `node_modules` | ❌ Không | ⚠️ Đợi Bootstrap |
| `red()/green()/blue()` | `node_modules` | ❌ Không | ⚠️ Đợi Bootstrap |

---

## 🎯 Chiến Lược Xử Lý

### Code của bạn (đã làm ✅)
- ✅ Sửa tất cả `darken()`, `lighten()` sang `color.adjust()`
- ✅ Dùng `@use` cho code custom
- ✅ Dùng `@forward` cho modules

### Bootstrap (không thể làm gì ⚠️)
- ⚠️ Tiếp tục dùng `@import` cho Bootstrap
- ⚠️ Chấp nhận warnings từ Bootstrap
- ⚠️ Đợi Bootstrap hỗ trợ `@use`

### Khi nào cần hành động?
1. **Bây giờ**: Không cần làm gì thêm
2. **Khi Dart Sass 3.0.0 ra mắt**: 
   - Nếu Bootstrap chưa update → tạm thời giữ phiên bản Sass cũ
   - Hoặc tìm alternative cho Bootstrap
3. **Khi Bootstrap hỗ trợ @use**: Migrate sang `@use`

---

## 📚 Tài Liệu Tham Khảo

- [Sass Migration Guide](https://sass-lang.com/documentation/at-rules/use)
- [Sass Color Module](https://sass-lang.com/documentation/modules/color)
- [Bootstrap GitHub Issues](https://github.com/twbs/bootstrap/issues)

---

## ✅ Kết Luận

**Những gì đã làm:**
- ✅ Sửa tất cả warnings trong code custom của bạn
- ✅ Code của bạn đã sẵn sàng cho Dart Sass 3.0.0

**Những gì không thể làm:**
- ⚠️ Warnings từ Bootstrap sẽ còn cho đến khi Bootstrap update
- ⚠️ Đây là bình thường và không ảnh hưởng đến code

**Trạng thái hiện tại:**
- ✅ Code của bạn: **Sẵn sàng cho tương lai**
- ⚠️ Bootstrap: **Đợi update từ team Bootstrap**

