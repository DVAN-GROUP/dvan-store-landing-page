/**
 * DVAN GROUP - Hệ thống đa ngôn ngữ (Multi-language Translation Dictionary)
 * Hỗ trợ 4 ngôn ngữ: Tiếng Việt (vi), English (en), 简体中文 (zh), 日本語 (ja)
 */

const TRANSLATIONS = {
  vi: {
    // Navigation
    "nav.home": "Trang chủ",
    "nav.apps": "Ứng dụng",
    "nav.about": "Về chúng tôi",
    "nav.contact": "Hỗ trợ & Liên hệ",
    "nav.privacy": "Chính sách riêng tư",
    "nav.viewApps": "Xem ứng dụng",
    
    // Hero
    "hero.badge": "Google Play Verified Developer",
    "hero.title1": "Xây dựng trải nghiệm di động",
    "hero.titleHighlight": "Hiện Đại • Tiện Ích • Tối Ưu",
    "hero.desc": "DVAN GROUP chuyên thiết kế & phát triển các ứng dụng di động trên nền tảng Flutter (Android & iOS) với sứ mệnh mang đến trải nghiệm mượt mà, tiện ích, giải quyết các nhu cầu thiết thực trong công việc và đời sống hàng ngày.",
    "hero.btnExplore": "Khám phá Ứng dụng",
    "hero.btnContact": "Liên hệ phát triển",
    
    // Stats
    "stats.downloads": "Lượt cài đặt",
    "stats.rating": "Đánh giá trung bình",
    "stats.apps": "Ứng dụng hoạt động",
    "stats.countries": "Quốc gia sử dụng",
    
    // Apps Showcase
    "apps.tag": "Kho Ứng Dụng",
    "apps.title": "Danh mục Ứng dụng của chúng tôi",
    "apps.subtitle": "Các ứng dụng được xây dựng cẩn trọng, tập trung vào hiệu năng cao, giao diện thân thiện và bảo mật thông tin.",
    "apps.searchPlaceholder": "Tìm kiếm ứng dụng...",
    "apps.filterAll": "Tất cả",
    "apps.filterTools": "Công cụ",
    "apps.filterFinance": "Tài chính",
    "apps.filterProductivity": "Năng suất",
    "apps.btnDetails": "Chi tiết",
    "apps.btnInstall": "Tải ứng dụng",
    "apps.btnComingSoon": "Sắp ra mắt",
    "apps.emptyTitle": "Không tìm thấy ứng dụng nào",
    "apps.emptyDesc": "Vui lòng thử tìm kiếm với từ khóa khác hoặc chuyển danh mục.",
    
    // About
    "about.tag": "Về DVAN GROUP",
    "about.title": "Cam kết chất lượng & Trải nghiệm người dùng",
    "about.p1": "Chúng tôi luôn tin rằng một ứng dụng tốt không chỉ nằm ở tính năng, mà còn ở tốc độ phản hồi nhanh, giao diện trực quan và sự tôn trọng quyền riêng tư của người dùng.",
    "about.p2": "Với nền tảng công nghệ đa nền tảng Flutter kết hợp kiến trúc Clean Architecture, mỗi sản phẩm ra mắt đều trải qua các vòng kiểm thử nghiêm ngặt trước khi đến tay người dùng trên Google Play và App Store.",
    "about.highlightTitle": "💡 Dễ dàng cập nhật & Đóng góp ý kiến",
    "about.highlightDesc": "Bạn có ý tưởng hoặc cần hỗ trợ về ứng dụng? Đội ngũ luôn sẵn sàng lắng nghe phản hồi của bạn để nâng cấp sản phẩm ngày một tốt hơn.",
    "about.coreTech": "Công nghệ cốt lõi",
    
    // Contact
    "contact.tag": "Trung tâm Hỗ trợ",
    "contact.title": "Bạn có câu hỏi hoặc cần hỗ trợ?",
    "contact.desc": "Nếu bạn gặp sự cố kỹ thuật trong quá trình sử dụng ứng dụng, cần hỗ trợ tài khoản hoặc muốn hợp tác phát triển sản phẩm, hãy gửi email trực tiếp cho chúng tôi.",
    "contact.note": "Phản hồi thường được xử lý trong vòng 24 - 48 giờ làm việc.",
    
    // Footer
    "footer.brandDesc": "Nhà phát triển ứng dụng di động độc lập. Tập trung vào các sản phẩm tiện ích, năng suất và giải pháp số thông minh.",
    "footer.navTitle": "Điều hướng",
    "footer.legalTitle": "Pháp lý & Chính sách",
    "footer.privacy": "Chính sách quyền riêng tư (Privacy)",
    "footer.terms": "Điều khoản sử dụng (Terms)",
    "footer.userData": "Bảo vệ dữ liệu người dùng",
    "footer.officialSite": "Trang web chính thức cho tài khoản Google Play Developer:",
    
    // Modal
    "modal.category": "Danh mục:",
    "modal.reviews": "đánh giá",
    "modal.updating": "Đang cập nhật",
    "modal.installs": "Lượt cài đặt",
    "modal.version": "Phiên bản",
    "modal.intro": "Giới thiệu ứng dụng",
    "modal.features": "Tính năng nổi bật",
    "modal.getPlay": "Tải trên Google Play",
    "modal.getAppStore": "App Store",
    "modal.privacyLink": "Chính sách riêng tư",
    
    // App Data Translations (key = appId)
    "apps": {
      "dvan-smart-scanner": {
        "name": "DVAN Smart Scanner",
        "tagline": "Máy quét tài liệu thông minh & chuyển đổi PDF nhanh chóng",
        "category": "Công cụ",
        "badge": "Phổ biến",
        "description": "DVAN Smart Scanner biến điện thoại của bạn thành một máy quét cầm tay mạnh mẽ. Tự động nhận diện cạnh trang giấy, lọc màu sắc độ nét cao, nhận dạng chữ viết OCR đa ngôn ngữ và xuất file PDF/JPG tức thì chỉ bằng một chạm.",
        "features": [
          "Tự động căn chỉnh và làm nét văn bản thông minh",
          "Hỗ trợ OCR trích xuất chữ tiếng Việt và hơn 50 ngôn ngữ",
          "Ký tên điện tử và thêm watermark bản quyền trực tiếp",
          "Bảo mật tài liệu bằng mật khẩu và mã hóa nội bộ",
          "Đồng bộ lưu trữ đám mây Google Drive, OneDrive"
        ]
      },
      "dvan-money-tracker": {
        "name": "DVAN Quản Lý Chi Tiêu",
        "tagline": "Ghi chép tài chính cá nhân thông minh, đơn giản và trực quan",
        "category": "Tài chính",
        "badge": "Mới cập nhật",
        "description": "Ứng dụng giúp bạn kiểm soát ngân sách, theo dõi các khoản thu chi hàng ngày một cách trực quan bằng biểu đồ phân tích thông minh, nhắc nhở chi tiêu quá giới hạn và lập kế hoạch tiết kiệm hiệu quả.",
        "features": [
          "Ghi chép thu chi nhanh chỉ trong 3 giây",
          "Báo cáo biểu đồ cột, tròn sinh động, phân nhóm thông minh",
          "Cảnh báo khi sắp vượt định mức ngân sách tháng",
          "Dữ liệu được lưu trữ an toàn, hoạt động hoàn toàn offline",
          "Xuất báo cáo định dạng Excel / CSV tiện lợi"
        ]
      },
      "dvan-focus-pomodoro": {
        "name": "DVAN Focus Timer",
        "tagline": "Phương pháp Pomodoro & Theo dõi thói quen tập trung",
        "category": "Năng suất",
        "badge": "Khuyên dùng",
        "description": "Tối ưu hiệu suất học tập và làm việc với chu kỳ Pomodoro 25/5 chuẩn khoa học, âm thanh nền sóng não (White Noise, mưa rơi, quán cà phê) giúp tăng cường khả năng tập trung sâu.",
        "features": [
          "Bộ đếm thời gian linh hoạt tùy biến thời gian học và nghỉ",
          "Thư viện âm thanh tiếng ồn trắng (White noise) chất lượng cao",
          "Thống kê chuỗi ngày tập trung (Streaks) truyền cảm hứng",
          "Chế độ chặn thông báo khi đang trong phiên làm việc",
          "Giao diện tối giản tối ưu pin cho màn hình AMOLED"
        ]
      },
      "dvan-quick-notes": {
        "name": "DVAN Quick Notes",
        "tagline": "Ghi chú nhanh, checklist công việc và bảo mật vân tay",
        "category": "Năng suất",
        "badge": "Sắp ra mắt",
        "description": "Ứng dụng ghi chú siêu tốc nhẹ nhàng, hỗ trợ checklist công việc hàng ngày, ghim ghi chú quan trọng và bảo vệ nội dung nhạy cảm bằng sinh trắc học vân tay / FaceID.",
        "features": [
          "Tốc độ mở ứng dụng dưới 0.2 giây",
          "Ghim widget ghi chú nhanh ra màn hình chính điện thoại",
          "Khóa từng ghi chú riêng biệt bằng mã PIN hoặc vân tay",
          "Hỗ trợ định dạng văn bản Markdown trực quan"
        ]
      }
    }
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.apps": "Apps",
    "nav.about": "About Us",
    "nav.contact": "Support & Contact",
    "nav.privacy": "Privacy Policy",
    "nav.viewApps": "View Apps",
    
    // Hero
    "hero.badge": "Google Play Verified Developer",
    "hero.title1": "Crafting Mobile Experiences",
    "hero.titleHighlight": "Modern • Intuitive • Optimized",
    "hero.desc": "DVAN GROUP specializes in designing & building high-performance cross-platform mobile apps with Flutter (Android & iOS). Our mission is to deliver seamless, practical solutions that enrich daily life and productivity.",
    "hero.btnExplore": "Explore Apps",
    "hero.btnContact": "Contact Us",
    
    // Stats
    "stats.downloads": "Total Installs",
    "stats.rating": "Average Rating",
    "stats.apps": "Active Apps",
    "stats.countries": "Countries Reached",
    
    // Apps Showcase
    "apps.tag": "App Showcase",
    "apps.title": "Our Mobile Applications",
    "apps.subtitle": "Carefully engineered applications focusing on top performance, user-friendly interface, and strict privacy protection.",
    "apps.searchPlaceholder": "Search apps by name, feature...",
    "apps.filterAll": "All",
    "apps.filterTools": "Tools",
    "apps.filterFinance": "Finance",
    "apps.filterProductivity": "Productivity",
    "apps.btnDetails": "Details",
    "apps.btnInstall": "Get App",
    "apps.btnComingSoon": "Coming Soon",
    "apps.emptyTitle": "No applications found",
    "apps.emptyDesc": "Please try searching with another keyword or select a different category.",
    
    // About
    "about.tag": "About DVAN GROUP",
    "about.title": "Commitment to Quality & User Experience",
    "about.p1": "We firmly believe that great software is defined not just by features, but by snappy responsiveness, clean UX, and respect for user privacy.",
    "about.p2": "Built with cross-platform Flutter and Clean Architecture principles, each release undergoes rigorous QA testing before publishing on Google Play and Apple App Store.",
    "about.highlightTitle": "💡 Continuous Updates & Community Driven",
    "about.highlightDesc": "Have an idea or need support? We actively listen to user feedback to constantly refine and improve our products.",
    "about.coreTech": "Core Technologies",
    
    // Contact
    "contact.tag": "Support Center",
    "contact.title": "Have Questions or Need Support?",
    "contact.desc": "If you experience any issues, need assistance with your app data, or want to explore collaboration, feel free to reach out directly.",
    "contact.note": "Inquiries are typically answered within 24 - 48 business hours.",
    
    // Footer
    "footer.brandDesc": "Independent mobile software studio crafting high-quality utilities, productivity, and smart digital experiences.",
    "footer.navTitle": "Navigation",
    "footer.legalTitle": "Legal & Policies",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.userData": "User Data Protection",
    "footer.officialSite": "Official Website for Google Play Developer:",
    
    // Modal
    "modal.category": "Category:",
    "modal.reviews": "reviews",
    "modal.updating": "Updating",
    "modal.installs": "Installs",
    "modal.version": "Version",
    "modal.intro": "About the App",
    "modal.features": "Key Features",
    "modal.getPlay": "Get on Google Play",
    "modal.getAppStore": "App Store",
    "modal.privacyLink": "Privacy Policy",
    
    // App Data Translations
    "apps": {
      "dvan-smart-scanner": {
        "name": "DVAN Smart Scanner",
        "tagline": "Intelligent document scanner & instant high-res PDF converter",
        "category": "Tools",
        "badge": "Popular",
        "description": "DVAN Smart Scanner turns your device into a portable pocket scanner. Automatically detects page borders, enhances readability, extracts text with multilingual OCR, and exports crisp PDF/JPG in seconds.",
        "features": [
          "Automatic edge detection & smart image enhancement",
          "High-accuracy OCR supporting over 50 languages",
          "Digital signature & custom watermark protection",
          "Local encryption and password-protected files",
          "Seamless cloud sync with Google Drive and OneDrive"
        ]
      },
      "dvan-money-tracker": {
        "name": "DVAN Expense Tracker",
        "tagline": "Smart, simple and visual personal finance management",
        "category": "Finance",
        "badge": "Updated",
        "description": "Gain full control over your budget. Track daily expenses and income effortlessly with intuitive charts, smart budget threshold alerts, and goal-oriented savings planning.",
        "features": [
          "Log expenses in under 3 seconds",
          "Dynamic interactive charts with auto-categorization",
          "Smart budget alerts when approaching spending limits",
          "100% offline capable with local private storage",
          "One-tap Excel / CSV financial export"
        ]
      },
      "dvan-focus-pomodoro": {
        "name": "DVAN Focus Timer",
        "tagline": "Science-backed Pomodoro & habit tracking timer",
        "category": "Productivity",
        "badge": "Featured",
        "description": "Boost work and study productivity with scientifically proven 25/5 Pomodoro intervals, enriched by ambient soundscapes (white noise, rain, cafe vibes) for deep focus.",
        "features": [
          "Customizable focus and break interval intervals",
          "Curated library of relaxing ambient sounds",
          "Inspiring streak counters and historical analytics",
          "Do Not Disturb integration during active focus sessions",
          "Minimalist dark UI optimized for AMOLED battery life"
        ]
      },
      "dvan-quick-notes": {
        "name": "DVAN Quick Notes",
        "tagline": "Lightning-fast notes, task checklists & biometric lock",
        "category": "Productivity",
        "badge": "Coming Soon",
        "description": "Lightweight, ultra-fast note-taking app. Organize daily task checklists, pin urgent thoughts, and secure private notes behind fingerprint / FaceID biometrics.",
        "features": [
          "Ultra-fast startup time under 0.2s",
          "Home screen quick-access widgets",
          "Per-note biometric encryption (Fingerprint / PIN)",
          "Clean Markdown formatting support"
        ]
      }
    }
  },

  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.apps": "应用展示",
    "nav.about": "关于我们",
    "nav.contact": "支持与联系",
    "nav.privacy": "隐私政策",
    "nav.viewApps": "查看应用",
    
    // Hero
    "hero.badge": "Google Play 认证开发者",
    "hero.title1": "打造卓越的移动体验",
    "hero.titleHighlight": "现代 • 高效 • 极致优化",
    "hero.desc": "DVAN GROUP 专注于基于 Flutter 跨平台框架（Android 与 iOS）开发高品质移动应用，致力于提供流畅、实用且贴近日常工作与生活需求的数字解决方案。",
    "hero.btnExplore": "探索所有应用",
    "hero.btnContact": "商务联系",
    
    // Stats
    "stats.downloads": "总安装量",
    "stats.rating": "平均评分",
    "stats.apps": "活跃应用",
    "stats.countries": "覆盖国家",
    
    // Apps Showcase
    "apps.tag": "应用商店",
    "apps.title": "精选移动应用",
    "apps.subtitle": "每一款应用均经过精心打磨，聚焦于卓越性能、直观的用户界面与严密的隐私安全保护。",
    "apps.searchPlaceholder": "搜索应用名称或功能...",
    "apps.filterAll": "全部",
    "apps.filterTools": "工具",
    "apps.filterFinance": "财务",
    "apps.filterProductivity": "生产力",
    "apps.btnDetails": "详情",
    "apps.btnInstall": "下载应用",
    "apps.btnComingSoon": "即将推出",
    "apps.emptyTitle": "未找到相关应用",
    "apps.emptyDesc": "请尝试使用其他关键词搜索或切换不同分类。",
    
    // About
    "about.tag": "关于 DVAN GROUP",
    "about.title": "秉持品质，重塑用户体验",
    "about.p1": "我们深信，一款优秀的软件不仅在于丰富的功能，更在于闪电般的响应速度、极简优雅的交互以及对用户数据隐私的绝对尊重。",
    "about.p2": "采用 Flutter 跨平台技术与清晰架构设计，每款产品在发布至 Google Play 与 App Store 之前均经过严苛的多轮测试。",
    "about.highlightTitle": "💡 持续迭代，倾听用户声音",
    "about.highlightDesc": "如果您有任何建议或需要帮助，欢迎随时联系我们，您的反馈是我们持续进化的源动力。",
    "about.coreTech": "核心技术栈",
    
    // Contact
    "contact.tag": "支持中心",
    "contact.title": "有任何疑问或需要技术支持？",
    "contact.desc": "如果您在使用过程中遇到任何技术问题、需要账户或数据支持，或者寻求项目合作，请直接向我们发送邮件。",
    "contact.note": "我们通常会在 24 至 48 个工作小时内给予回复。",
    
    // Footer
    "footer.brandDesc": "独立移动应用开发工作室，致力于打造实用工具、高效生产力与智能数字化体验。",
    "footer.navTitle": "网站导航",
    "footer.legalTitle": "法律与条款",
    "footer.privacy": "隐私政策 (Privacy Policy)",
    "footer.terms": "服务条款 (Terms of Service)",
    "footer.userData": "用户数据保护",
    "footer.officialSite": "Google Play 开发者官方认证站点：",
    
    // Modal
    "modal.category": "分类：",
    "modal.reviews": "条评价",
    "modal.updating": "更新中",
    "modal.installs": "安装次数",
    "modal.version": "版本",
    "modal.intro": "应用简介",
    "modal.features": "核心亮点",
    "modal.getPlay": "在 Google Play 下载",
    "modal.getAppStore": "前往 App Store",
    "modal.privacyLink": "查看隐私政策",
    
    // App Data Translations
    "apps": {
      "dvan-smart-scanner": {
        "name": "DVAN 智能扫描王",
        "tagline": "智能高清文档扫描仪与快速 PDF 转换利器",
        "category": "工具",
        "badge": "热门",
        "description": "DVAN 智能扫描王将您的手机瞬间变为强大的便携式扫描仪。自动边缘检测、高清滤镜调优、多语言 OCR 文字识别，一键快速导出高清 PDF 与图片。",
        "features": [
          "智能边缘检测与自动透视矫正",
          "高精度 OCR 文字识别，支持 50+ 种语言",
          "支持电子签名与个性化防伪水印",
          "本地密码加密保护重要文档安全",
          "轻松同步备份至 Google Drive 与网盘"
        ]
      },
      "dvan-money-tracker": {
        "name": "DVAN 智能记账管家",
        "tagline": "直观明了的个人财务收支与资产管理助手",
        "category": "财务",
        "badge": "最新更新",
        "description": "轻松掌控预算收支。通过精美动态图表全方位追踪日常花销，智能超支预警，助您实现科学理财与储蓄目标。",
        "features": [
          "极速记账，3 秒内完成单笔记账",
          "直观饼图与柱状图自动多维分类分析",
          "预算警戒线实时提醒，避免冲动消费",
          "数据完全本地私密存储，离线即可顺畅运行",
          "一键导出 Excel / CSV 格式财务报表"
        ]
      },
      "dvan-focus-pomodoro": {
        "name": "DVAN 专注番茄钟",
        "tagline": "科学番茄工作法与深度专注习惯养成",
        "category": "生产力",
        "badge": "精选推荐",
        "description": "基于经典 25/5 番茄工作法，搭配精心挑选的高品质白噪音（雨声、海浪、咖啡馆），帮您摆脱干扰，迅速进入深度心流工作状态。",
        "features": [
          "灵活自定义专注与休息时间间隔",
          "高品质沉浸式白噪音与自然声环境音效",
          "打卡连续天数统计，激发满满成就感",
          "专注模式下自动免打扰防分心",
          "极简暗黑界面设计，全面节省 AMOLED 屏幕电量"
        ]
      },
      "dvan-quick-notes": {
        "name": "DVAN 极速笔记",
        "tagline": "轻量便签、日常清单与生物指纹加密",
        "category": "生产力",
        "badge": "即将推出",
        "description": "超轻量、零卡顿的极速备忘录应用。随时记录灵感、清单待办事项，更支持通过指纹与面容安全锁单独加密私密笔记。",
        "features": [
          "启动耗时小于 0.2 秒，极致轻巧",
          "支持桌面快捷便签小组件",
          "单篇笔记生物识别（指纹/面容）独立加密",
          "原生 Markdown 语法排版支持"
        ]
      }
    }
  },

  ja: {
    // Navigation
    "nav.home": "ホーム",
    "nav.apps": "アプリ一覧",
    "nav.about": "開発者について",
    "nav.contact": "サポート・お問い合わせ",
    "nav.privacy": "プライバシーポリシー",
    "nav.viewApps": "アプリを見る",
    
    // Hero
    "hero.badge": "Google Play 認証デベロッパー",
    "hero.title1": "最高のモバイル体験を創る",
    "hero.titleHighlight": "洗練 • 直感的 • 最適化",
    "hero.desc": "DVAN GROUP は、Flutter（Android / iOS）を活用した高品質なクロスプラットフォームアプリの開発に特化しています。毎日の暮らしや仕事をより便利で快適にする実用的なアプリをお届けします。",
    "hero.btnExplore": "アプリを探す",
    "hero.btnContact": "お問い合わせ",
    
    // Stats
    "stats.downloads": "累計ダウンロード数",
    "stats.rating": "平均評価",
    "stats.apps": "公開中アプリ",
    "stats.countries": "利用されている国",
    
    // Apps Showcase
    "apps.tag": "アプリストア",
    "apps.title": "開発アプリ一覧",
    "apps.subtitle": "高いパフォーマンス、洗練された直感的な UI、そしてユーザーのプライバシー保護を最優先に設計しています。",
    "apps.searchPlaceholder": "アプリ名や機能で検索...",
    "apps.filterAll": "すべて",
    "apps.filterTools": "ツール",
    "apps.filterFinance": "ファイナンス",
    "apps.filterProductivity": "仕事効率化",
    "apps.btnDetails": "詳細を見る",
    "apps.btnInstall": "入手する",
    "apps.btnComingSoon": "近日公開",
    "apps.emptyTitle": "アプリが見つかりませんでした",
    "apps.emptyDesc": "別のキーワードで検索するか、カテゴリーを変更してお試しください。",
    
    // About
    "about.tag": "DVAN GROUP について",
    "about.title": "品質へのこだわりと最高のユーザー体験",
    "about.p1": "優れたアプリケーションとは、単に機能が多いことではなく、軽快な動作、直感的な操作性、そしてプライバシーへの配慮が融合したものだと確信しています。",
    "about.p2": "Flutter とクリーンアーキテクチャを採用し、厳しいテストを重ねて高品質なアプリを Google Play および App Store へお届けしています。",
    "about.highlightTitle": "💡 ユーザーファーストの継続的なアップデート",
    "about.highlightDesc": "機能のご要望やご意見がありましたらお気軽にお寄せください。皆様の声を大切に、日々進化を続けています。",
    "about.coreTech": "主要開発技術",
    
    // Contact
    "contact.tag": "サポートセンター",
    "contact.title": "ご不明な点やサポートが必要ですか？",
    "contact.desc": "アプリのご利用における不具合、データに関するお問い合わせ、またはコラボレーションのご相談など、いつでもお気軽にご連絡ください。",
    "contact.note": "通常 24〜48 営業時間以内にご返信いたします。",
    
    // Footer
    "footer.brandDesc": "スマートな生活と生産性を向上させる実用的なモバイルアプリを開発する独立スタジオです。",
    "footer.navTitle": "ナビゲーション",
    "footer.legalTitle": "規約・ポリシー",
    "footer.privacy": "プライバシーポリシー",
    "footer.terms": "利用規約",
    "footer.userData": "ユーザーデータ保護",
    "footer.officialSite": "Google Play デベロッパー公式認証サイト：",
    
    // Modal
    "modal.category": "カテゴリー：",
    "modal.reviews": "件の評価",
    "modal.updating": "集計中",
    "modal.installs": "ダウンロード",
    "modal.version": "バージョン",
    "modal.intro": "アプリ概要",
    "modal.features": "主な機能・特徴",
    "modal.getPlay": "Google Play で手に入れる",
    "modal.getAppStore": "App Store でダウンロード",
    "modal.privacyLink": "プライバシーポリシー",
    
    // App Data Translations
    "apps": {
      "dvan-smart-scanner": {
        "name": "DVAN スマートスキャナー",
        "tagline": "高精度なドキュメントスキャン＆高速 PDF 変換ツール",
        "category": "ツール",
        "badge": "人気",
        "description": "スマートフォンが高性能なポータブルスキャナーに早変わり。書類の輪郭を自動検知して補正、多言語 OCR で文字を読み取り、瞬時にクリアな PDF や画像として保存できます。",
        "features": [
          "書類の輪郭自動検知＆歪み補正機能",
          "50 以上の言語に対応した高精度 OCR テキスト抽出",
          "電子署名＆透かし（ウォーターマーク）追加",
          "パスワード保護による安心のドキュメントセキュリティ",
          "Google Drive などのクラウドへスムーズに保存"
        ]
      },
      "dvan-money-tracker": {
        "name": "DVAN 家計簿マネージャー",
        "tagline": "シンプルでわかりやすい日々の収支・資産管理",
        "category": "ファイナンス",
        "badge": "新着更新",
        "description": "無理のない予算管理をサポート。毎日の支出と収入を直感的なグラフで可視化し、予算オーバーの防止や貯蓄計画をしっかり後押しします。",
        "features": [
          "わずか 3 秒で完了するかんたん入力",
          "円グラフ・棒グラフによるスマートな自動分類レポート",
          "設定した予算の上限アラート機能",
          "端末ローカル保存で安心、完全オフライン対応",
          "Excel / CSV 形式でのデータ書き出し"
        ]
      },
      "dvan-focus-pomodoro": {
        "name": "DVAN 集中タイマー (ポモドーロ)",
        "tagline": "科学的ポモドーロテクニック＆集中習慣トラッカー",
        "category": "仕事効率化",
        "badge": "おすすめ",
        "description": "25分集中＋5分休憩のポモドーロメソッドで作業効率を最大化。ホワイトノイズや雨音などの環境音で、周囲の雑音を遮断し深い集中状態へ導きます。",
        "features": [
          "作業時間と休憩時間を自由にカスタマイズ",
          "心地よいリラックス環境音（ホワイトノイズ）ライブラリ",
          "やる気が続く連続達成（ストリーク）記録",
          "セッション中の通知ブロックモード",
          "目に優しくバッテリーを節約するミニマルなダークテーマ"
        ]
      },
      "dvan-quick-notes": {
        "name": "DVAN クイックメモ",
        "tagline": "爆速起動メモ、チェックリスト＆生体認証ロック",
        "category": "仕事効率化",
        "badge": "近日公開",
        "description": "驚くほど軽快に動作するメモアプリ。日々のタスクチェックリストや大切なアイデアを即座に記録し、指紋認証や FaceID で機密メモを強固に保護します。",
        "features": [
          "0.2 秒未満の圧倒的な高速起動",
          "ホーム画面からすぐ確認できるウィジェット対応",
          "メモごとの生体認証（指紋 / 暗証番号）個別ロック",
          "見やすい Markdown 記法対応"
        ]
      }
    }
  }
};

