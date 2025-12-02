# Best Practices: HTML Templates trong TypeScript/Vite Project

## 📊 So Sánh 2 Cách Tiếp Cận

### **Cách 1: HTML String trong TypeScript** (Hiện tại)

```typescript
// contactTemplate.ts
export const contactHTML = `
<section class="contact" id="contact">
  <div class="container">
    ...
  </div>
</section>
`;
```

#### ✅ Ưu điểm:
1. **Đơn giản**: Không cần cấu hình thêm
2. **Type Safety**: Có thể type-check template string
3. **Tích hợp tốt**: TypeScript hiểu ngay
4. **Tree-shaking**: Dễ dàng optimize bundle size
5. **Không cần loader**: Vite tự xử lý TypeScript files
6. **Import trực tiếp**: `import { contactHTML } from './contactTemplate'`

#### ❌ Nhược điểm:
1. **Không có syntax highlighting HTML**: Khó đọc khi HTML dài
2. **Khó format**: Template strings khó format đẹp
3. **Không có IntelliSense**: IDE không hỗ trợ HTML autocomplete
4. **Khó maintain**: HTML dài trông rối trong TS file

---

### **Cách 2: File HTML riêng rồi import** (Đề xuất)

```html
<!-- Contact.html -->
<section class="contact" id="contact">
  <div class="container">
    ...
  </div>
</section>
```

```typescript
// contactTemplate.ts
import contactHTML from './Contact.html?raw';

export { contactHTML };
```

#### ✅ Ưu điểm:
1. **Syntax highlighting tốt**: HTML được highlight đúng
2. **Dễ đọc và maintain**: HTML tách biệt khỏi logic
3. **IntelliSense**: IDE hỗ trợ HTML autocomplete, validation
4. **Dễ format**: Format HTML dễ dàng với Prettier
5. **Separation of Concerns**: Tách HTML và logic rõ ràng
6. **Dễ review**: Code review HTML dễ hơn
7. **Tái sử dụng**: Có thể dùng HTML file cho testing/documentation

#### ❌ Nhược điểm:
1. **Cần thêm file**: Mỗi template cần 2 files (HTML + TS)
2. **Import path dài hơn**: Cần `?raw` query parameter
3. **Vite config**: Cần đảm bảo Vite hỗ trợ `?raw` (mặc định có)

---

## 🎯 Khuyến Nghị

### **Nên dùng File HTML riêng** khi:
- ✅ HTML template dài (>50 dòng)
- ✅ HTML phức tạp (nhiều nested elements)
- ✅ Cần maintain và review HTML thường xuyên
- ✅ Team có designer/developer làm việc với HTML
- ✅ Cần tái sử dụng HTML cho testing/documentation

### **Có thể dùng HTML string** khi:
- ✅ HTML template ngắn (<30 dòng)
- ✅ Template đơn giản (ít nested elements)
- ✅ HTML ít thay đổi
- ✅ Chỉ developer làm việc với code

---

## 📝 Cấu Trúc Đề Xuất

### **Cách hiện tại** (Template string):
```
components/
  contact/
    ├── Contact.ts              (Logic)
    └── contactTemplate.ts      (HTML string)
```

### **Cách đề xuất** (File HTML riêng):
```
components/
  contact/
    ├── Contact.ts              (Logic)
    ├── Contact.html            (HTML template)
    └── contactTemplate.ts      (Import và export)
```

---

## 🔧 Ví Dụ Migration

### **Trước** (Template string):
```typescript
// contactTemplate.ts
export const contactHTML = `
<section class="contact" id="contact">
  <div class="container">
    <div class="contact__card">
      ...
    </div>
  </div>
</section>
`;
```

### **Sau** (File HTML riêng):

**Contact.html:**
```html
<section class="contact" id="contact">
  <div class="container">
    <div class="contact__card">
      <!-- Left: Image -->
      <div class="contact__image-wrapper">
        <div class="contact__image" style="background-image: url('/images/contact.jpg');"></div>
        <div class="contact__image-overlay"></div>
      </div>
      
      <!-- Right: Content with Form -->
      <div class="contact__content">
        <h2 class="contact__title">Get In Touch</h2>
        <p class="contact__description">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <!-- Contact Form -->
        <form class="contact__form" id="contactForm">
          ...
        </form>
      </div>
    </div>
  </div>
</section>
```

**contactTemplate.ts:**
```typescript
/**
 * Contact HTML Template
 */
import contactHTML from './Contact.html?raw';

export { contactHTML };
```

**Sử dụng** (không thay đổi):
```typescript
// main.ts
import { contactHTML } from './components/contact/contactTemplate';
app.insertAdjacentHTML('beforeend', contactHTML);
```

---

## ⚡ Lưu Ý Vite

Vite hỗ trợ `?raw` query parameter mặc định để import file như string:

```typescript
import html from './file.html?raw';  // ✅ Hoạt động ngay
```

Không cần cấu hình thêm trong `vite.config.ts`!

---

## 🎨 Best Practices

1. **Đặt tên file rõ ràng**: `Contact.html`, `Header.html`
2. **Giữ logic trong TS**: Chỉ HTML trong `.html` file
3. **Export từ template file**: Dùng `contactTemplate.ts` để wrap
4. **Consistent pattern**: Dùng cùng pattern cho tất cả components
5. **Comment trong HTML**: Thêm comments để dễ hiểu structure

---

## 📊 Kết Luận

### **Cho dự án này:**

**Khuyến nghị: CHUYỂN SANG FILE HTML RIÊNG** vì:

1. ✅ Templates đã khá dài (contact ~98 dòng)
2. ✅ Dễ maintain và review hơn
3. ✅ IDE hỗ trợ tốt hơn (syntax highlighting, autocomplete)
4. ✅ Tách biệt HTML và logic rõ ràng
5. ✅ Vite hỗ trợ tốt với `?raw` import

**Migration path:**
- Từ từ migrate các template dài trước (contact, header, about-us)
- Giữ template string cho các template ngắn nếu muốn
- Hoặc migrate tất cả để consistent

---

## 🔗 Tài Liệu Tham Khảo

- [Vite Static Asset Handling](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
- [TypeScript Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

