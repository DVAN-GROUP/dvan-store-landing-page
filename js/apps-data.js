/**
 * DVAN GROUP - Dữ liệu danh sách ứng dụng (App Showcase Data)
 * -------------------------------------------------------------
 * HƯỚNG DẪN THÊM APP MỚI:
 * Để thêm một app mới lên website, bạn chỉ cần sao chép 1 khối {} bên dưới
 * và điền thông tin app của bạn vào. Website sẽ tự động hiển thị!
 */

const APPS_DATA = [
  {
    id: "dvan-smart-scanner",
    name: "DVAN Smart Scanner",
    tagline: "Máy quét tài liệu thông minh & chuyển đổi PDF nhanh chóng",
    category: "Công cụ", // Danh mục: 'Công cụ', 'Năng suất', 'Tài chính', 'Tiện ích', 'Giải trí'
    badge: "Phổ biến", // Nhãn: 'Mới', 'Hot', 'Phổ biến', 'Sắp ra mắt'
    badgeType: "hot", // 'new', 'hot', 'soon'
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%236366f1'/><stop offset='100%' stop-color='%23a855f7'/></linearGradient></defs><rect width='100' height='100' rx='22' fill='url(%23g1)'/><path d='M30 35 L30 25 L40 25 M60 25 L70 25 L70 35 M30 65 L30 75 L40 75 M60 75 L70 75 L70 65' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' fill='none'/><rect x='36' y='36' width='28' height='28' rx='6' fill='white' fill-opacity='0.25'/><path d='M25 50 L75 50' stroke='%2338bdf8' stroke-width='3' stroke-linecap='round'/></svg>",
    rating: 4.8,
    reviewsCount: 1240,
    downloads: "50K+",
    version: "1.2.4",
    platform: "Android & iOS",
    description:
      "DVAN Smart Scanner biến điện thoại của bạn thành một máy quét cầm tay mạnh mẽ. Tự động nhận diện cạnh trang giấy, lọc màu sắc độ nét cao, nhận dạng chữ viết OCR đa ngôn ngữ và xuất file PDF/JPG tức thì chỉ bằng một chạm.",
    features: [
      "Tự động căn chỉnh và làm nét văn bản thông minh",
      "Hỗ trợ OCR trích xuất chữ tiếng Việt và hơn 50 ngôn ngữ",
      "Ký tên điện tử và thêm watermark bản quyền trực tiếp",
      "Bảo mật tài liệu bằng mật khẩu và mã hóa nội bộ",
      "Đồng bộ lưu trữ đám mây Google Drive, OneDrive",
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps", // Thay bằng link Google Play thật của bạn
      appStore: "", // Để trống nếu chưa phát hành trên App Store
      apkDirect: "",
      privacyPolicy: "privacy-policy.html?app=smart-scanner",
    },
  },
  {
    id: "dvan-money-tracker",
    name: "DVAN Quản Lý Chi Tiêu",
    tagline: "Ghi chép tài chính cá nhân thông minh, đơn giản và trực quan",
    category: "Tài chính",
    badge: "Mới cập nhật",
    badgeType: "new",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g2' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%2310b981'/><stop offset='100%' stop-color='%2306b6d4'/></linearGradient></defs><rect width='100' height='100' rx='22' fill='url(%23g2)'/><circle cx='50' cy='50' r='24' fill='none' stroke='white' stroke-width='4'/><path d='M50 34 V66 M57 42 C57 38.5 53.5 36.5 50 36.5 C45 36.5 42.5 39 42.5 43 C42.5 50.5 57.5 49 57.5 57 C57.5 61 54.5 63.5 50 63.5 C45 63.5 42.5 61 42 57' stroke='white' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/></svg>",
    rating: 4.9,
    reviewsCount: 860,
    downloads: "25K+",
    version: "2.0.1",
    platform: "Android & iOS",
    description:
      "Ứng dụng giúp bạn kiểm soát ngân sách, theo dõi các khoản thu chi hàng ngày một cách trực quan bằng biểu đồ phân tích thông minh, nhắc nhở chi tiêu quá giới hạn và lập kế hoạch tiết kiệm hiệu quả.",
    features: [
      "Ghi chép thu chi nhanh chỉ trong 3 giây",
      "Báo cáo biểu đồ cột, tròn sinh động, phân nhóm thông minh",
      "Cảnh báo khi sắp vượt định mức ngân sách tháng",
      "Dữ liệu được lưu trữ an toàn, hoạt động hoàn toàn offline",
      "Xuất báo cáo định dạng Excel / CSV tiện lợi",
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps",
      appStore: "",
      apkDirect: "",
      privacyPolicy: "privacy-policy.html?app=money-tracker",
    },
  },
  {
    id: "dvan-focus-pomodoro",
    name: "DVAN Focus Timer",
    tagline: "Phương pháp Pomodoro & Theo dõi thói quen tập trung",
    category: "Năng suất",
    badge: "Khuyên dùng",
    badgeType: "hot",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g3' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23f97316'/><stop offset='100%' stop-color='%23ef4444'/></linearGradient></defs><rect width='100' height='100' rx='22' fill='url(%23g3)'/><circle cx='50' cy='52' r='22' fill='none' stroke='white' stroke-width='4'/><path d='M50 52 L50 38 M50 52 L60 52' stroke='white' stroke-width='3.5' stroke-linecap='round'/><path d='M44 24 H56 M50 24 V28' stroke='white' stroke-width='3' stroke-linecap='round'/></svg>",
    rating: 4.7,
    reviewsCount: 520,
    downloads: "15K+",
    version: "1.0.8",
    platform: "Android",
    description:
      "Tối ưu hiệu suất học tập và làm việc với chu kỳ Pomodoro 25/5 chuẩn khoa học, âm thanh nền sóng não (White Noise, mưa rơi, quán cà phê) giúp tăng cường khả năng tập trung sâu.",
    features: [
      "Bộ đếm thời gian linh hoạt tùy biến thời gian học và nghỉ",
      "Thư viện âm thanh tiếng ồn trắng (White noise) chất lượng cao",
      "Thống kê chuỗi ngày tập trung (Streaks) truyền cảm hứng",
      "Chế độ chặn thông báo khi đang trong phiên làm việc",
      "Giao diện tối giản tối ưu pin cho màn hình AMOLED",
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps",
      appStore: "",
      apkDirect: "",
      privacyPolicy: "privacy-policy.html?app=focus-timer",
    },
  },
  {
    id: "dvan-quick-notes",
    name: "DVAN Quick Notes",
    tagline: "Ghi chú nhanh, checklist công việc và bảo mật vân tay",
    category: "Năng suất",
    badge: "Sắp ra mắt",
    badgeType: "soon",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g4' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%238b5cf6'/><stop offset='100%' stop-color='%23ec4899'/></linearGradient></defs><rect width='100' height='100' rx='22' fill='url(%23g4)'/><path d='M32 30 H68 M32 42 H68 M32 54 H55 M32 66 H48' stroke='white' stroke-width='4' stroke-linecap='round'/><circle cx='68' cy='66' r='10' fill='white' fill-opacity='0.3'/><path d='M65 66 L67 68 L72 63' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    rating: 5.0,
    reviewsCount: 0,
    downloads: "Coming Soon",
    version: "1.0.0-beta",
    platform: "Android & iOS",
    description:
      "Ứng dụng ghi chú siêu tốc nhẹ nhàng, hỗ trợ checklist công việc hàng ngày, ghim ghi chú quan trọng và bảo vệ nội dung nhạy cảm bằng sinh trắc học vân tay / FaceID.",
    features: [
      "Tốc độ mở ứng dụng dưới 0.2 giây",
      "Ghim widget ghi chú nhanh ra màn hình chính điện thoại",
      "Khóa từng ghi chú riêng biệt bằng mã PIN hoặc vân tay",
      "Hỗ trợ định dạng văn bản Markdown trực quan",
    ],
    links: {
      googlePlay: "",
      appStore: "",
      apkDirect: "",
      privacyPolicy: "privacy-policy.html?app=quick-notes",
    },
  },
];

// Thông tin chung về Store / Nhà phát triển
const STORE_INFO = {
  name: "DVAN GROUP",
  developerName: "Dvanit (DVAN)",
  role: "Mobile App Development Studio",
  email: "dvangroup.dream@gmail.com",
  phone: "+84 (0) 9xx xxx xxx",
  location: "Việt Nam",
  bio: "DVAN GROUP chuyên thiết kế & phát triển các ứng dụng di động trên nền tảng Flutter (Android & iOS) với sứ mệnh mang đến trải nghiệm mượt mà, tiện ích, giải quyết các nhu cầu thiết thực trong công việc và đời sống hàng ngày.",
  googlePlayDeveloperUrl:
    "https://play.google.com/store/apps/dev?id=DVAN_GROUP",
  stats: {
    totalDownloads: "100K+",
    ratingAverage: "4.8★",
    activeApps: "4+",
    countries: "15+",
  },
  techStack: [
    { name: "Flutter", icon: "flutter", desc: "Cross-platform Framework" },
    { name: "Dart", icon: "dart", desc: "Core Programming Language" },
    {
      name: "Android SDK",
      icon: "android",
      desc: "Native Android Integration",
    },
    { name: "iOS / Swift", icon: "apple", desc: "iOS Optimization" },
    { name: "Firebase", icon: "firebase", desc: "Backend & Cloud Services" },
    {
      name: "Google Play Console",
      icon: "play",
      desc: "App Distribution & Analytics",
    },
  ],
};
