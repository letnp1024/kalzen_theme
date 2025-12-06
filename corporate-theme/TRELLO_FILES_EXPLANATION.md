# Giải Thích Sự Khác Biệt Giữa 2 Files Trello

## 📄 TỔNG QUAN

Bạn có **2 files** để quản lý kế hoạch Trello:

1. **`TRELLO_PLAN.md`** - Kế hoạch CHI TIẾT & ĐẦY ĐỦ
2. **`TRELLO_CARDS_SIMPLE.md`** - Format ĐƠN GIẢN để Copy-Paste

---

## 🔍 SỰ KHÁC BIỆT CHI TIẾT

### 1. **TRELLO_PLAN.md** (Kế hoạch Chi tiết)

#### 📋 **Mục đích:**
- File **THAM KHẢO CHI TIẾT** - để hiểu toàn bộ dự án
- File **QUY CHUẨN** - chứa tất cả thông tin, tiêu chuẩn, yêu cầu
- File **DOCUMENTATION** - tài liệu đầy đủ về dự án

#### ✨ **Đặc điểm:**
- ✅ **Cấu trúc theo GIAI ĐOẠN** (Giai đoạn 0, 1, 2, 3, 4, 5)
- ✅ **Chi tiết từng card** với mô tả đầy đủ
- ✅ **Có Dependencies** - mối quan hệ phụ thuộc giữa các tasks
- ✅ **Có Acceptance Criteria** - tiêu chí chấp nhận
- ✅ **Có Testing Checklist** - checklist test chi tiết
- ✅ **Có Tiêu chuẩn kỹ thuật** - Browser Support, Performance, Accessibility, SEO
- ✅ **Có Definition of Done** - tiêu chí hoàn thành
- ✅ **Có Risk Management** - quản lý rủi ro
- ✅ **Có Version Control Workflow** - quy trình Git
- ✅ **Có Design Requirements** - yêu cầu design

#### 📊 **Nội dung:**
```
TRELLO_PLAN.md
├── Hướng dẫn sử dụng
├── Cấu trúc dự án
├── GIAI ĐOẠN 0: Thiết lập chung
│   └── Chi tiết từng card với checklist
├── GIAI ĐOẠN 1: One Page HTML/CSS/JS
│   └── Chi tiết từng card với checklist
├── GIAI ĐOẠN 2: One Page WordPress
│   └── Chi tiết từng card với checklist
├── GIAI ĐOẠN 3: Multiple Pages HTML/CSS/JS
│   └── Chi tiết từng card với checklist
├── GIAI ĐOẠN 4: Multiple Pages WordPress
│   └── Chi tiết từng card với checklist
├── GIAI ĐOẠN 5: Hoàn thiện & Bán hàng
│   └── Chi tiết từng card với checklist
├── TỔNG KẾT
│   ├── Trạng thái hiện tại
│   ├── Ưu tiên tiếp theo
│   └── Cấu trúc sản phẩm
└── PHẦN BỔ SUNG QUAN TRỌNG
    ├── Tiêu chuẩn & Yêu cầu kỹ thuật
    ├── Definition of Done
    ├── Dependencies
    ├── Testing Checklist
    ├── Acceptance Criteria
    ├── Design Requirements
    ├── Version Control & Workflow
    └── Risk Management
```

#### 🎯 **Khi nào dùng:**
- ✅ Khi cần **HIỂU RÕ** toàn bộ dự án
- ✅ Khi cần **THAM KHẢO** tiêu chuẩn kỹ thuật
- ✅ Khi cần **KIỂM TRA** dependencies giữa các tasks
- ✅ Khi cần **XÁC ĐỊNH** acceptance criteria cho một task
- ✅ Khi cần **XEM** testing checklist chi tiết
- ✅ Khi cần **TRA CỨU** quy trình và best practices

#### 📝 **Ví dụ nội dung:**
```markdown
#### 🟡 **Card: One Page - Hero Section** - **to do**
- Hero section với slider/carousel
- Background video hoặc image slider
- Call-to-action buttons
- Scroll down indicator
- **Checklist:**
  - [ ] Hero HTML structure
  - [ ] Swiper slider integration
  - [ ] Background video option
  - [ ] CTA buttons
  - [ ] Scroll indicator animation
```

---

### 2. **TRELLO_CARDS_SIMPLE.md** (Format Đơn giản)

#### 📋 **Mục đích:**
- File **COPY-PASTE** - để nhanh chóng tạo cards trên Trello
- File **THỰC HÀNH** - format đơn giản, dễ sử dụng
- File **QUICK REFERENCE** - tham khảo nhanh các cards

#### ✨ **Đặc điểm:**
- ✅ **Cấu trúc theo CỘT TRELLO** (Need Information, To Do, Doing, Ready to Test, Done)
- ✅ **Format đơn giản** - dễ copy vào Trello
- ✅ **Chỉ có checklist cơ bản** - không có chi tiết kỹ thuật
- ✅ **Tổ chức theo phiên bản** - One Page, Multiple Pages
- ✅ **Dễ đọc, dễ tìm** - format gọn gàng

#### 📊 **Nội dung:**
```
TRELLO_CARDS_SIMPLE.md
├── Cấu trúc dự án (tóm tắt)
├── 🔵 NEED INFORMATION
│   └── Cards cần thông tin
├── 🟡 TO DO
│   ├── ONE PAGE - HTML/CSS/JS
│   ├── ONE PAGE - WORDPRESS
│   ├── MULTIPLE PAGES - HTML/CSS/JS
│   ├── MULTIPLE PAGES - WORDPRESS
│   ├── CHUNG CHO CẢ 2 PHIÊN BẢN
│   └── HOÀN THIỆN & BÁN HÀNG
├── 🟠 DOING
│   └── Cards đang làm
├── 🟢 READY TO TEST
│   └── Cards sẵn sàng test
└── ✅ DONE
    └── Cards đã hoàn thành
```

#### 🎯 **Khi nào dùng:**
- ✅ Khi cần **TẠO CARDS NHANH** trên Trello
- ✅ Khi cần **COPY-PASTE** checklist vào Trello
- ✅ Khi cần **XEM NHANH** danh sách tasks
- ✅ Khi cần **TỔ CHỨC** cards theo cột Trello
- ✅ Khi làm việc **HÀNG NGÀY** với Trello

#### 📝 **Ví dụ nội dung:**
```markdown
### Card: One Page - Hero Section với Slider
**Mô tả:** Tạo Hero section với slider/carousel cho One Page
**Checklist:**
- [ ] Hero HTML structure
- [ ] Swiper integration
- [ ] Background video option
- [ ] CTA buttons
- [ ] Scroll indicator
```

---

## 🔄 QUY TRÌNH SỬ DỤNG KẾT HỢP

### Bước 1: Đọc `TRELLO_PLAN.md`
1. Đọc để **HIỂU RÕ** toàn bộ dự án
2. Xem **Dependencies** để biết thứ tự làm việc
3. Xem **Acceptance Criteria** để biết yêu cầu
4. Xem **Testing Checklist** để biết cách test
5. Xem **Tiêu chuẩn kỹ thuật** để đảm bảo chất lượng

### Bước 2: Sử dụng `TRELLO_CARDS_SIMPLE.md`
1. Mở file và tìm card cần tạo
2. **Copy** card đó (bao gồm mô tả và checklist)
3. **Paste** vào Trello
4. Thêm **Labels** (One Page, Multiple Pages, HTML/CSS/JS, WordPress, Giai đoạn)
5. Thêm **Due Date** nếu cần
6. Assign cho team member

### Bước 3: Khi làm việc
1. Mở Trello để xem tasks hàng ngày
2. Khi cần **CHI TIẾT**, quay lại `TRELLO_PLAN.md`
3. Khi cần **THAM KHẢO** tiêu chuẩn, xem phần bổ sung trong `TRELLO_PLAN.md`
4. Khi **HOÀN THÀNH**, cập nhật checklist trong Trello

---

## 📊 SO SÁNH TRỰC QUAN

| Tiêu chí | TRELLO_PLAN.md | TRELLO_CARDS_SIMPLE.md |
|----------|----------------|------------------------|
| **Mục đích** | Tham khảo chi tiết | Copy-paste nhanh |
| **Độ dài** | ~1086 dòng (rất chi tiết) | ~865 dòng (gọn gàng) |
| **Cấu trúc** | Theo Giai đoạn | Theo Cột Trello |
| **Chi tiết** | Rất chi tiết | Đơn giản |
| **Dependencies** | ✅ Có | ❌ Không |
| **Acceptance Criteria** | ✅ Có | ❌ Không |
| **Testing Checklist** | ✅ Có (chi tiết) | ❌ Không |
| **Tiêu chuẩn kỹ thuật** | ✅ Có đầy đủ | ❌ Không |
| **Definition of Done** | ✅ Có | ❌ Không |
| **Risk Management** | ✅ Có | ❌ Không |
| **Format** | Phức tạp (nested) | Đơn giản (flat) |
| **Dễ copy** | ❌ Khó (quá chi tiết) | ✅ Dễ (format đơn giản) |
| **Dễ đọc** | ⚠️ Cần thời gian | ✅ Dễ đọc nhanh |

---

## 💡 KHUYẾN NGHỊ

### Nên dùng `TRELLO_PLAN.md` khi:
- 📖 Cần **HIỂU RÕ** toàn bộ dự án
- 🔍 Cần **TRA CỨU** tiêu chuẩn kỹ thuật
- ✅ Cần **XÁC ĐỊNH** acceptance criteria
- 🧪 Cần **XEM** testing checklist chi tiết
- 🔗 Cần **KIỂM TRA** dependencies
- 📚 Cần **HỌC** quy trình và best practices

### Nên dùng `TRELLO_CARDS_SIMPLE.md` khi:
- ⚡ Cần **TẠO CARDS NHANH** trên Trello
- 📋 Cần **COPY-PASTE** checklist
- 👀 Cần **XEM NHANH** danh sách tasks
- 🎯 Đang **LÀM VIỆC HÀNG NGÀY** với Trello
- 📝 Cần **TỔ CHỨC** cards theo cột

---

## 🎯 TÓM TẮT

**`TRELLO_PLAN.md`** = 📚 **SÁCH HƯỚNG DẪN CHI TIẾT**
- Đọc để hiểu, tham khảo, tra cứu
- Chứa tất cả thông tin, tiêu chuẩn, quy trình

**`TRELLO_CARDS_SIMPLE.md`** = 📋 **BẢNG CHECKLIST ĐƠN GIẢN**
- Dùng để copy-paste vào Trello
- Format gọn gàng, dễ sử dụng

**→ Sử dụng CẢ HAI:**
- Đọc `TRELLO_PLAN.md` để hiểu rõ
- Dùng `TRELLO_CARDS_SIMPLE.md` để làm việc nhanh

---

## ❓ CÂU HỎI THƯỜNG GẶP

**Q: Tại sao không gộp thành 1 file?**
A: Vì mục đích khác nhau:
- `TRELLO_PLAN.md` = Documentation chi tiết
- `TRELLO_CARDS_SIMPLE.md` = Quick reference để copy

**Q: File nào quan trọng hơn?**
A: Cả 2 đều quan trọng:
- `TRELLO_PLAN.md` = Quan trọng cho **HIỂU RÕ** dự án
- `TRELLO_CARDS_SIMPLE.md` = Quan trọng cho **LÀM VIỆC** hàng ngày

**Q: Có cần cập nhật cả 2 files không?**
A: Nên cập nhật cả 2:
- Khi thêm task mới → Thêm vào cả 2 files
- Khi thay đổi checklist → Cập nhật cả 2 files
- `TRELLO_PLAN.md` = Source of truth (chi tiết)
- `TRELLO_CARDS_SIMPLE.md` = Simplified version (để copy)

**Q: Nên bắt đầu từ file nào?**
A: Bắt đầu từ `TRELLO_PLAN.md`:
1. Đọc để hiểu rõ dự án
2. Xem dependencies và acceptance criteria
3. Sau đó dùng `TRELLO_CARDS_SIMPLE.md` để tạo cards trên Trello

