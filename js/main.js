/**
 * DVAN GROUP - Main Frontend Controller with Multi-language (vi, en, zh, ja)
 */

let currentLang = "vi";
let currentCategory = "all";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initI18n();
  initStoreInfo();
  initAppsShowcase();
  initMobileNav();
  initModal();
});

/**
 * Multi-Language (i18n) Controller
 */
const LANG_METADATA = {
  vi: { flag: "🇻🇳", label: "Tiếng Việt" },
  en: { flag: "🇺🇸", label: "English" },
  zh: { flag: "🇨🇳", label: "简体中文" },
  ja: { flag: "🇯🇵", label: "日本語" }
};

function initI18n() {
  const savedLang = localStorage.getItem("dvan_lang") || "vi";
  currentLang = LANG_METADATA[savedLang] ? savedLang : "vi";

  // Bind dropdown toggles
  const langDropdown = document.getElementById("langSelector");
  const langToggleBtn = document.getElementById("langToggleBtn");
  const langOptions = document.querySelectorAll(".lang-option");

  if (langToggleBtn && langDropdown) {
    langToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove("open");
      }
    });
  }

  langOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      const selected = opt.getAttribute("data-lang");
      if (selected && selected !== currentLang) {
        changeLanguage(selected);
      }
      if (langDropdown) langDropdown.classList.remove("open");
    });
  });

  applyTranslations(currentLang);
}

function changeLanguage(lang) {
  if (!LANG_METADATA[lang]) return;
  currentLang = lang;
  localStorage.setItem("dvan_lang", lang);
  document.documentElement.setAttribute("lang", lang);

  applyTranslations(lang);
  applyFilterAndSearch();
}

function t(key, fallback = "") {
  if (typeof TRANSLATIONS === "undefined" || !TRANSLATIONS[currentLang]) {
    return fallback || key;
  }
  return TRANSLATIONS[currentLang][key] || (TRANSLATIONS["en"] && TRANSLATIONS["en"][key]) || fallback || key;
}

function applyTranslations(lang) {
  // Update Selector Button Display
  const currentFlag = document.getElementById("currentLangFlag");
  const currentText = document.getElementById("currentLangText");
  if (currentFlag && currentText && LANG_METADATA[lang]) {
    currentFlag.textContent = LANG_METADATA[lang].flag;
    currentText.textContent = LANG_METADATA[lang].label;
  }

  // Update active state in menu
  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("active", opt.getAttribute("data-lang") === lang);
  });

  // Translate all DOM elements with [data-i18n]
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (val) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.setAttribute("placeholder", val);
      } else {
        el.textContent = val;
      }
    }
  });

  // Re-translate search input placeholder
  const searchInput = document.getElementById("searchAppsInput");
  if (searchInput) {
    searchInput.placeholder = t("apps.searchPlaceholder", "Tìm kiếm ứng dụng...");
  }
}

/**
 * Returns localized app info for the active language
 */
function getLocalizedApp(app) {
  if (typeof TRANSLATIONS === "undefined") return app;
  const transObj = TRANSLATIONS[currentLang]?.apps?.[app.id] || 
                   TRANSLATIONS["en"]?.apps?.[app.id] || {};

  return {
    ...app,
    name: transObj.name || app.name,
    tagline: transObj.tagline || app.tagline,
    category: transObj.category || app.category,
    badge: transObj.badge || app.badge,
    description: transObj.description || app.description,
    features: transObj.features || app.features,
    rawCategory: app.category // keep original for category filter matching
  };
}

/**
 * Initialize Store & Developer Info
 */
function initStoreInfo() {
  if (typeof STORE_INFO === "undefined") return;

  const elStoreName = document.querySelectorAll(".bind-store-name");
  elStoreName.forEach(el => el.textContent = STORE_INFO.name);

  const elDevName = document.querySelectorAll(".bind-dev-name");
  elDevName.forEach(el => el.textContent = STORE_INFO.developerName);

  const elEmail = document.querySelectorAll(".bind-email");
  elEmail.forEach(el => {
    el.textContent = STORE_INFO.email;
    if (el.tagName === "A") {
      el.href = `mailto:${STORE_INFO.email}`;
    }
  });

  // Stats
  const statDownloads = document.querySelector(".bind-stat-downloads");
  if (statDownloads) statDownloads.textContent = STORE_INFO.stats.totalDownloads;

  const statRating = document.querySelector(".bind-stat-rating");
  if (statRating) statRating.textContent = STORE_INFO.stats.ratingAverage;

  const statApps = document.querySelector(".bind-stat-apps");
  if (statApps) statApps.textContent = STORE_INFO.stats.activeApps;

  const statCountries = document.querySelector(".bind-stat-countries");
  if (statCountries) statCountries.textContent = STORE_INFO.stats.countries;

  // Tech stack rendering
  const techGrid = document.getElementById("techStackGrid");
  if (techGrid && STORE_INFO.techStack) {
    techGrid.innerHTML = STORE_INFO.techStack.map(item => `
      <div class="tech-card">
        <div class="tech-card-icon">⚡</div>
        <div class="tech-card-info">
          <h4>${escapeHtml(item.name)}</h4>
          <p>${escapeHtml(item.desc)}</p>
        </div>
      </div>
    `).join("");
  }
}

/**
 * Initialize Apps Showcase, Filters & Search
 */
function initAppsShowcase() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchAppsInput");

  if (typeof APPS_DATA !== "undefined") {
    applyFilterAndSearch();

    // Filter Buttons
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-category") || "all";
        applyFilterAndSearch();
      });
    });

    // Search Input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyFilterAndSearch();
      });
    }
  }
}

function applyFilterAndSearch() {
  if (typeof APPS_DATA === "undefined") return;

  const localizedList = APPS_DATA.map(app => getLocalizedApp(app));

  const filtered = localizedList.filter(app => {
    const matchCategory = (currentCategory === "all") || (app.rawCategory === currentCategory);
    const matchSearch = !searchQuery || 
      app.name.toLowerCase().includes(searchQuery) || 
      app.tagline.toLowerCase().includes(searchQuery) ||
      app.description.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  renderApps(filtered);
}

function renderApps(apps) {
  const container = document.getElementById("appsGrid");
  if (!container) return;

  if (apps.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p style="font-size: 2.5rem; margin-bottom: 12px;">🔍</p>
        <h3>${escapeHtml(t("apps.emptyTitle", "Không tìm thấy ứng dụng nào"))}</h3>
        <p>${escapeHtml(t("apps.emptyDesc", "Vui lòng thử tìm kiếm với từ khóa khác hoặc chuyển danh mục."))}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = apps.map(app => {
    const badgeClass = app.badgeType === "new" ? "badge-new" : (app.badgeType === "hot" ? "badge-hot" : "badge-soon");
    const previewFeatures = (app.features || []).slice(0, 3).map(f => `<li>${escapeHtml(f)}</li>`).join("");

    return `
      <article class="app-card" data-id="${app.id}">
        <div class="app-header">
          <img class="app-icon" src="${app.icon}" alt="${escapeHtml(app.name)}" loading="lazy">
          <div class="app-info">
            <div class="app-title-wrap">
              <h3 class="app-title">${escapeHtml(app.name)}</h3>
              ${app.badge ? `<span class="app-badge ${badgeClass}">${escapeHtml(app.badge)}</span>` : ""}
            </div>
            <p class="app-tagline">${escapeHtml(app.tagline)}</p>
          </div>
        </div>

        <div class="app-meta">
          <span class="meta-item"><span class="rating-star">★</span> ${app.rating}</span>
          <span>•</span>
          <span class="meta-item">📥 ${app.downloads}</span>
          <span>•</span>
          <span class="meta-item">📱 ${app.platform}</span>
        </div>

        <ul class="app-features-preview">
          ${previewFeatures}
        </ul>

        <div class="app-card-footer">
          <button class="btn btn-secondary btn-sm" onclick="openAppModal('${app.id}')">
            ${escapeHtml(t("apps.btnDetails", "Chi tiết"))}
          </button>
          ${app.links.googlePlay ? `
            <a href="${app.links.googlePlay}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              ${escapeHtml(t("apps.btnInstall", "Tải ứng dụng"))}
            </a>
          ` : `
            <button class="btn btn-outline btn-sm" disabled style="opacity: 0.6; cursor: not-allowed;">
              ${escapeHtml(t("apps.btnComingSoon", "Sắp ra mắt"))}
            </button>
          `}
        </div>
      </article>
    `;
  }).join("");
}

/**
 * Modal Details Popup
 */
function initModal() {
  const overlay = document.getElementById("appModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!overlay) return;

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

window.openAppModal = function(appId) {
  if (typeof APPS_DATA === "undefined") return;
  const rawApp = APPS_DATA.find(a => a.id === appId);
  if (!rawApp) return;

  const app = getLocalizedApp(rawApp);
  const overlay = document.getElementById("appModalOverlay");
  const modalContent = document.getElementById("modalDynamicContent");
  if (!overlay || !modalContent) return;

  const featuresList = (app.features || []).map(f => `<li>✓ ${escapeHtml(f)}</li>`).join("");

  modalContent.innerHTML = `
    <div class="modal-header">
      <img class="modal-icon" src="${app.icon}" alt="${escapeHtml(app.name)}">
      <div>
        <h2 style="font-size: 1.5rem; margin-bottom: 4px;">${escapeHtml(app.name)}</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${escapeHtml(app.tagline)}</p>
        <span style="font-size: 0.82rem; color: var(--primary); font-weight: 600;">
          ${escapeHtml(t("modal.category", "Danh mục:"))} ${escapeHtml(app.category)}
        </span>
      </div>
    </div>

    <div class="modal-meta-grid">
      <div>
        <div style="font-size: 1.25rem; font-weight: 700; color: #fbbf24;">★ ${app.rating}</div>
        <div style="font-size: 0.78rem; color: var(--text-muted);">${app.reviewsCount > 0 ? `${app.reviewsCount} ${t("modal.reviews", "đánh giá")}` : t("modal.updating", "Đang cập nhật")}</div>
      </div>
      <div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-main);">${app.downloads}</div>
        <div style="font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(t("modal.installs", "Lượt cài đặt"))}</div>
      </div>
      <div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-main);">v${app.version}</div>
        <div style="font-size: 0.78rem; color: var(--text-muted);">${app.platform}</div>
      </div>
    </div>

    <h4 style="font-size: 1.05rem; margin-bottom: 8px;">${escapeHtml(t("modal.intro", "Giới thiệu ứng dụng"))}</h4>
    <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 20px;">
      ${escapeHtml(app.description)}
    </p>

    <h4 style="font-size: 1.05rem; margin-bottom: 8px;">${escapeHtml(t("modal.features", "Tính năng nổi bật"))}</h4>
    <ul class="modal-features-list">
      ${featuresList}
    </ul>

    <div class="modal-actions">
      ${app.links.googlePlay ? `
        <a href="${app.links.googlePlay}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
          ${escapeHtml(t("modal.getPlay", "Tải trên Google Play"))}
        </a>
      ` : ''}
      ${app.links.appStore ? `
        <a href="${app.links.appStore}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex: 1;">
          ${escapeHtml(t("modal.getAppStore", "App Store"))}
        </a>
      ` : ''}
      <a href="${app.links.privacyPolicy || 'privacy-policy.html'}" class="btn btn-outline" style="font-size: 0.85rem;">
        ${escapeHtml(t("modal.privacyLink", "Chính sách riêng tư"))}
      </a>
    </div>
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeModal = function() {
  const overlay = document.getElementById("appModalOverlay");
  if (overlay) {
    overlay.classList.remove("active");
  }
  document.body.style.overflow = "";
};

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}

/**
 * Dark / Light Theme Toggle
 */
function initTheme() {
  const themeBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("dvan_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("dvan_theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById("themeIcon");
  if (iconSpan) {
    iconSpan.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
