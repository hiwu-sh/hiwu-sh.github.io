/* ─────────────────────────────────────────────────────────
   Hi 5 — main script
   • Mobile nav toggle
   • EN / 中文 language switch
   ───────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var DEFAULT_LANG = "en";
  var STORAGE_KEY  = "hi5_lang";

  /* ── i18n strings ─────────────────────────────────────── */
  var i18n = {
    en: {
      skipToContent:      "Skip to content",
      toggleMenu:         "Toggle menu",
      navAbout:           "About",
      navApps:            "Apps",
      navServices:        "Services",
      navContact:         "Contact",

      heroKicker:         "Shanghai • Global • Digital-first",
      heroTitle:          "Mobile apps built with a trader's global mindset",
      heroSubtitle:       "We help people move products across borders, and we build iOS apps that make day-to-day work simpler.",
      heroPrimaryCta:     "Explore our apps",
      heroSecondaryCta:   "Contact us",

      statLabel1:  "Focus",     statValue1: "iOS app products",
      statLabel2:  "Coverage",  statValue2: "Import & export",
      statLabel3:  "Base",      statValue3: "Pudong, Shanghai",

      aboutTitle:      "About Hi 5",
      aboutSubtitle:   "International trading expertise, with a product mindset for mobile.",
      aboutCard1Title: "Who we are",
      aboutCard1Text:  "Hi 5 Shanghai International Trading Co. Ltd. is an international trading company based in Shanghai. We support import and export with global partners, and we build mobile applications and digital products.",
      aboutCard2Title: "How we work",
      aboutCard2Text:  "We value clear communication, careful execution, and practical results. That same approach guides how we build apps: useful features, clean UX, and reliable performance.",

      appsTitle:    "Our apps",
      appsSubtitle: "Product-led mobile applications designed for real work.",
      app1Title:    "Snap! Screen Translator",
      app1Text:     "An offline, private screenshot translator that supports multiple languages.",
      app2Title:    "Snap! Language Assistant",
      app2Text:     "A language assistant that translates and transcribes conversations from multiple languages in real time.",

      tagIOS:         "iOS",
      tagProductivity:"Productivity",
      tagOperations:  "Operations",
      tagQuality:     "Quality",
      tagAnalytics:   "Analytics",
      tagInventory:   "Inventory",
      storePlaceholderCta: "App Store link coming soon!",

      servicesTitle:   "Trading & digital services",
      servicesSubtitle:"We support international trade and we build software that makes it easier.",
      svc1Title:  "Import & export support",
      svc1Text:   "We help coordinate suppliers, documents, and timelines so projects stay on track.",
      svc2Title:  "Supplier sourcing",
      svc2Text:   "Identify reliable partners and align requirements, pricing, and product specifications.",
      svc3Title:  "Mobile app development",
      svc3Text:   "Product thinking, clean UX, and practical tooling for teams and customers worldwide.",
      whyTitle:   "Why work with Hi 5",
      whyText:    "You get a team that understands cross-border execution and also knows how to ship software. Practical, measurable, and designed to scale.",
      whyBullet1: "Bilingual communication (EN / 中文)",
      whyBullet2: "Operational clarity and risk reduction",
      whyBullet3: "Mobile-first tools for real workflows",
      whyBullet4: "Shanghai-based, globally oriented",

      contactTitle:       "Contact",
      contactSubtitle:    "Tell us what you are building and we will reply quickly.",
      contactDetailsTitle:"Details",
      companyName:        "Hi 5 Shanghai International Trading Co. Ltd.",
      contactEmailLabel:  "Email",
      addressLabel:       "Office",
      addressEn:          "Room 127, Building 5, No. 1499-1, Shangchuan Road, Pudong New Area, Shanghai",
      addressZh:          "上海市浦东新区上川路1499-1号5幢127室",

      footerMeta: "Shanghai • International Trading • Mobile Apps",
      footerCopy: "© {year} Hi 5 Shanghai International Trading Co. Ltd. All rights reserved.",
      menuOpen:   "Open menu",
      menuClose:  "Close menu",
    },

    zh: {
      skipToContent:    "跳到主要内容",
      toggleMenu:       "切换菜单",
      navAbout:         "关于我们",
      navApps:          "应用产品",
      navServices:      "服务",
      navContact:       "联系",

      heroKicker:       "上海 • 全球 • 数字优先",
      heroTitle:        "以全球贸易视角打造移动应用",
      heroSubtitle:     "我们协助产品跨境流通，同时打造让日常工作更轻松的 iOS 应用。",
      heroPrimaryCta:   "查看我们的应用",
      heroSecondaryCta: "联系我们",

      statLabel1: "重点",     statValue1: "iOS 应用产品",
      statLabel2: "业务范围", statValue2: "进出口贸易",
      statLabel3: "所在地",   statValue3: "上海·浦东",

      aboutTitle:      "关于 Hi 5",
      aboutSubtitle:   "国际贸易经验 + 移动产品思维。",
      aboutCard1Title: "我们是谁",
      aboutCard1Text:  "Hi 5 Shanghai International Trading Co. Ltd. 总部位于上海，是一家国际贸易公司。我们提供进出口相关支持，同时持续打造移动应用与数字化产品。",
      aboutCard2Title: "我们的方法",
      aboutCard2Text:  "我们重视清晰沟通、细致执行和务实结果。这同样体现在应用开发上：实用功能、清爽体验和稳定表现。",

      appsTitle:    "应用产品",
      appsSubtitle: "面向真实场景的产品化移动应用。",
      app1Title:    "Snap! Screen Translator",
      app1Text:     "一个离线、私密的截图翻译工具，支持多种语言。",
      app2Title:    "Snap! Language Assistant",
      app2Text:     "一个语言助手，能够实时翻译和转录音频内容，支持多种语言。",

      tagIOS:         "iOS",
      tagProductivity:"效率",
      tagOperations:  "运营",
      tagQuality:     "质检",
      tagAnalytics:   "数据",
      tagInventory:   "库存",
      storePlaceholderCta: "App Store 链接即将推出！",

      servicesTitle:   "贸易与数字化服务",
      servicesSubtitle:"我们支持国际贸易，也打造让流程更轻松的软件。",
      svc1Title:  "进出口支持",
      svc1Text:   "协同供应商、单证与时间节点，让项目更顺畅、更可控。",
      svc2Title:  "供应商寻源",
      svc2Text:   "筛选可靠合作方，匹配需求、价格与产品规格。",
      svc3Title:  "移动应用开发",
      svc3Text:   "产品思维、清爽体验与实用工具，面向全球用户与团队。",
      whyTitle:   "为什么选择 Hi 5",
      whyText:    "你将获得既懂跨境执行、也能持续交付软件产品的团队。务实、可衡量、可扩展。",
      whyBullet1: "双语沟通（EN / 中文）",
      whyBullet2: "流程清晰、风险可控",
      whyBullet3: "移动优先的业务工具",
      whyBullet4: "立足上海，服务全球",

      contactTitle:       "联系",
      contactSubtitle:    "告诉我们你的需求，我们会尽快回复。",
      contactDetailsTitle:"联系方式",
      companyName:        "Hi 5 Shanghai International Trading Co. Ltd.",
      contactEmailLabel:  "邮箱",
      addressLabel:       "地址",
      addressEn:          "Room 127, Building 5, No. 1499-1, Shangchuan Road, Pudong New Area, Shanghai",
      addressZh:          "上海市浦东新区上川路1499-1号5幢127室",

      footerMeta: "上海 • 国际贸易 • 移动应用",
      footerCopy: "© {year} Hi 5 Shanghai International Trading Co. Ltd. 保留所有权利。",
      menuOpen:   "打开菜单",
      menuClose:  "关闭菜单",
    },
  };

  /* ── Helpers ──────────────────────────────────────────── */
  function qs(sel, root)  { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function fmt(str, vars) {
    return str.replace(/\{(\w+)\}/g, function (_, k) {
      return vars[k] == null ? "{" + k + "}" : String(vars[k]);
    });
  }

  /* ── Language application ─────────────────────────────── */
  function updateLangButtons(lang) {
    qsa(".lang__btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function applyLang(lang) {
    var dict = i18n[lang] || i18n[DEFAULT_LANG];
    var year = String(new Date().getFullYear());

    /* Update text for all i18n nodes */
    qsa("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      var val = dict[key];
      if (typeof val !== "string") return;
      /* footer copy special: inject year */
      if (key === "footerCopy") {
        el.textContent = fmt(val, { year: year });
      } else {
        el.textContent = val;
      }
    });

    /* Fallback: update #year span directly */
    var yearEl = qs("#year");
    if (yearEl) yearEl.textContent = year;

    /* html lang attribute */
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

    /* Persist choice */
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    updateLangButtons(lang);
  }

  function getInitialLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "zh") return stored;
    } catch (e) { /* ignore */ }
    var bl = (navigator.language || "en").toLowerCase();
    return bl.startsWith("zh") ? "zh" : DEFAULT_LANG;
  }

  /* ── Mobile nav ───────────────────────────────────────── */
  function initMenu() {
    var toggle = qs(".nav__toggle");
    var menu   = qs("#navLinks");
    if (!toggle || !menu) return;

    function isOpen() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        menu.classList.add("is-open");
        menu.removeAttribute("hidden");
      } else {
        menu.classList.remove("is-open");
      }
    }

    /* Hamburger click */
    toggle.addEventListener("click", function () {
      setOpen(!isOpen());
    });

    /* Close on any nav link click */
    qsa(".nav__link", menu).forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });

    /* Close on Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) setOpen(false);
    });

    /* Close on outside click */
    document.addEventListener("click", function (e) {
      if (!isOpen()) return;
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        setOpen(false);
      }
    });
  }

  /* ── Language buttons ─────────────────────────────────── */
  function initLanguageButtons(initialLang) {
    qsa(".lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang !== "en" && lang !== "zh") return;
        applyLang(lang);
      });
    });
    applyLang(initialLang);
  }

  /* ── Boot ─────────────────────────────────────────────── */
  /* Script is loaded with `defer` so DOM is already parsed.
     We still guard with DOMContentLoaded in case someone moves
     the script tag to <head> without defer. */
  function boot() {
    var lang = getInitialLang();
    initMenu();
    initLanguageButtons(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
}());
