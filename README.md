# DVAN GROUP - Developer Storefront & Portfolio

Website chính thức giới thiệu studio phát triển ứng dụng di động **DVAN GROUP** (Nhà phát triển: **Dvanit**) và kho ứng dụng Android / iOS.

Trang web này được tối ưu đặc biệt để phục vụ việc **đăng ký tài khoản Google Play Console**, xác minh danh tính nhà phát triển và cung cấp đường link **Chính sách quyền riêng tư (Privacy Policy)** bắt buộc của Google Play & Apple App Store.

---

## 📁 Cấu Trúc Dự Án

```
Web/
├── index.html              # Trang chủ giới thiệu studio & danh mục ứng dụng
├── privacy-policy.html     # Trang Chính sách quyền riêng tư (Bắt buộc cho Google Play)
├── terms.html              # Điều khoản dịch vụ (Terms of Service)
├── css/
│   └── style.css           # Giao diện hiện đại (Dark/Light mode, Responsive, Glassmorphism)
├── js/
│   ├── translations.js     # Từ điển đa ngôn ngữ (Tiếng Việt, English, 中文, 日本語)
│   ├── apps-data.js        # File cấu hình dữ liệu ứng dụng (Thêm/sửa app cực kỳ dễ)
│   └── main.js             # Logic lọc danh mục, tìm kiếm, popup chi tiết, đa ngôn ngữ & theme
└── README.md               # Hướng dẫn chi tiết sử dụng & triển khai web
```

---

## 🚀 Cách Xem Trang Web Trên Máy Tính

Bạn có thể xem ngay trang web bằng một trong các cách sau:

### Cách 1: Mở trực tiếp bằng trình duyệt

Nhấp đúp chuột trực tiếp vào tệp `index.html` để mở trong trình duyệt Chrome, Edge hoặc Safari.

### Cách 2: Sử dụng máy chủ cục bộ (Khuyên dùng)

Chạy một trong các lệnh sau trong thư mục `Web/`:

```bash
# Bằng npx:
npx serve .

# Hoặc bằng Python:
python3 -m http.server 8080
```

Sau đó truy cập: `http://localhost:8080`

---

## 📱 Hướng Dẫn Thêm Hoặc Cập Nhật Ứng Dụng Mới

Mọi thông tin về các app bạn đã làm đều nằm trong tệp: **`js/apps-data.js`**.  
Khi có app mới, bạn chỉ cần mở tệp này và thêm 1 đoạn code như sau:

```javascript
{
  id: "ten-app-viet-lien",
  name: "Tên Ứng Dụng Của Bạn",
  tagline: "Một câu giới thiệu ngắn gọn, súc tích",
  category: "Công cụ", // Chọn: 'Công cụ', 'Tài chính', 'Năng suất', 'Tiện ích', hoặc tự đặt
  badge: "Mới ra mắt",  // 'Mới', 'Hot', 'Phổ biến', 'Sắp ra mắt'
  badgeType: "new",    // 'new', 'hot', 'soon'
  icon: "assets/images/app-icon.png", // Hoặc link ảnh online
  rating: 4.9,
  reviewsCount: 150,
  downloads: "5K+",
  version: "1.0.0",
  platform: "Android & iOS",
  description: "Mô tả chi tiết về ứng dụng và lợi ích mang lại cho người dùng...",
  features: [
    "Tính năng nổi bật 1",
    "Tính năng nổi bật 2",
    "Tính năng nổi bật 3"
  ],
  links: {
    googlePlay: "https://play.google.com/store/apps/details?id=com.dvangroup.yourapp",
    appStore: "", // Để trống nếu chưa có
    apkDirect: "",
    privacyPolicy: "privacy-policy.html?app=yourapp"
  }
}
```

Lưu tệp lại, trang web sẽ **tự động cập nhật hiển thị** ứng dụng mới kèm tính năng lọc danh mục, tìm kiếm và popup chi tiết!

---

## 🌐 Hướng Dẫn Xuất Bản Lên Mạng (Miễn Phí) Để Điền Vào Google Play Console

Trong màn hình đăng ký tài khoản Google Play Console (mục _Nhập URL trang web của bạn_), bạn cần một đường link có dạng `https://...`. Dưới đây là 3 cách đưa trang web này lên mạng miễn phí chỉ trong vài phút:

### Cách 1: Sử dụng Vercel hoặc Netlify (Nhanh nhất - 1 phút)

1. Truy cập [vercel.com](https://vercel.com) hoặc [netlify.com](https://netlify.com) và đăng nhập bằng tài khoản GitHub/Google.
2. Kéo thả trực tiếp toàn bộ thư mục `Web` này vào giao diện kéo thả của họ.
3. Bạn sẽ nhận được ngay 1 đường link miễn phí như `https://dvan-group.vercel.app`.
4. Điền link này vào ô **URL trang web** trên Google Play Console!

### Cách 2: Sử dụng GitHub Pages (Miễn phí vĩnh viễn)

1. Đẩy mã nguồn thư mục `Web` lên một repository trên GitHub (ví dụ: `dvan-group-web`).
2. Vào phần **Settings** của repository -> Chọn mục **Pages**.
3. Chọn nhánh `main` và bấm **Save**.
4. Bạn sẽ có đường link: `https://<ten-user>.github.io/dvan-group-web/`.

### Cách 3: Sử dụng Firebase Hosting

Nếu bạn đã quen với Firebase:

```bash
firebase init hosting
# Chọn thư mục public là . (hoặc Web)
firebase deploy
```

Bạn sẽ có tên miền miễn phí dạng `https://dvangroup.web.app`.

---

## 🔒 Các Đường Dẫn Quan Trọng Cho Google Play:

- **Trang chủ giới thiệu Store:** `https://<ten-mien-cua-ban>/`
- **Chính sách quyền riêng tư (Privacy Policy URL):** `https://<ten-mien-cua-ban>/privacy-policy.html`
- **Yêu cầu xóa dữ liệu (Data Deletion URL):** `https://<ten-mien-cua-ban>/privacy-policy.html#user-data`
- **Email liên hệ hỗ trợ:** `dvangroup.dream@gmail.com`
