(() => {
  const DEFAULT_LANG = "en";
  const STORAGE_KEY = "hi5_lang";

  const i18n = {
    en: {
      skipToContent: "Skip to content",
      toggleMenu: "Toggle menu",
      navAbout: "About",
      navApps: "Apps",
      navServices: "Services",
      navContact: "Contact",

      heroKicker: "Shanghai • Global • Digital-first",
      heroTitle: "Mobile apps built with a trader’s global mindset",
      heroSubtitle:
        "Hi 5 Shanghai International Trading Co. Ltd. connects markets through import & export — and builds mobile applications that simplify real-world operations.",
      heroPrimaryCta: "Explore our apps",
      heroSecondaryCta: "Contact us",

      statLabel1: "Focus",
      statValue1: "iOS app products",
      statLabel2: "Coverage",
      statValue2: "Import & export",
      statLabel3: "Base",
      statValue3: "Pudong, Shanghai",

      aboutTitle: "About Hi 5",
      aboutSubtitle: "International trading expertise, with a product mindset for mobile.",
      aboutCard1Title: "Who we are",
      aboutCard1Text:
        "Hi 5 Shanghai International Trading Co. Ltd. is an international trading company based in Shanghai, supporting import & export across global partners — with a growing focus on mobile applications and digital products.",
      aboutCard2Title: "How we work",
      aboutCard2Text:
        "We bring the same discipline used in cross-border trade — clarity, risk reduction, and consistent execution — to app development: practical features, clean UX, and operational reliability.",

      appsTitle: "Our apps",
      appsSubtitle: "Product-led mobile applications designed for real work.",
      app1Title: "Snap! Screen Translator",
      app1Text: "An offline, private screenshot translator that supports multiple languages.",
      app2Title: "Snap! Language Assistant",
      app2Text: "A language assistant that translates and transcribes conversations from multiple languages in real time.",
    //   app3Title: "QC Snapshot",
    //   app3Text: "Capture inspections, photos, and checklists quickly — built for teams on the move.",
    //   app4Title: "Customer Pulse",
    //   app4Text: "Turn feedback into action with quick surveys, sentiment snapshots, and simple reporting.",
    //   app5Title: "Stock Lite",
    //   app5Text: "A clean inventory helper for small teams — scan, count, and export summaries fast.",
      tagIOS: "iOS",
      tagProductivity: "Productivity",
      tagOperations: "Operations",
      tagQuality: "Quality",
      tagAnalytics: "Analytics",
      tagInventory: "Inventory",
      storePlaceholderCta: "App Store link coming soon!",

      servicesTitle: "Trading & digital services",
      servicesSubtitle: "We support international trade — and build software that makes it easier.",
      svc1Title: "Import & export support",
      svc1Text: "Coordination across suppliers, documents, and timelines — structured for predictable outcomes.",
      svc2Title: "Supplier sourcing",
      svc2Text: "Identify reliable partners and align requirements, pricing, and product specifications.",
      svc3Title: "Mobile app development",
      svc3Text: "Product thinking, clean UX, and operational tooling — built for teams and customers worldwide.",
      whyTitle: "Why work with Hi 5",
      whyText:
        "We combine cross-border execution with a software builder’s perspective — practical, measurable, and designed to scale.",
      whyBullet1: "Bilingual communication (EN / 中文)",
      whyBullet2: "Operational clarity and risk reduction",
      whyBullet3: "Mobile-first tools for real workflows",
      whyBullet4: "Shanghai-based, globally oriented",

      contactTitle: "Contact",
      contactSubtitle: "Tell us what you’re building — we’ll reply quickly.",
      contactDetailsTitle: "Details",
      companyName: "Hi 5 Shanghai International Trading Co. Ltd.",
      contactEmailLabel: "Email",
      addressLabel: "Office",
      addressEn: "Room 127, Building 5, No. 1499-1, Shangchuan Road, Pudong New Area, Shanghai",
      addressZh: "上海市浦东新区上川路1499-1号5幢127室",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send",
      formFineprint: "This form is frontend-only for now. If you prefer, email us directly.",

      footerMeta: "Shanghai • International Trading • Mobile Apps",
      footerCopy: "© {year} Hi 5 Shanghai International Trading Co. Ltd. All rights reserved.",

      formError: "Please fill in your name, a valid email, and a message.",
      formOk: "Thanks — please email us at contact@hiwu.io (form sending is not connected yet).",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    zh: {
      skipToContent: "跳到主要内容",
      toggleMenu: "切换菜单",
      navAbout: "关于我们",
      navApps: "应用产品",
      navServices: "服务",
      navContact: "联系",

      heroKicker: "上海 • 全球 • 数字优先",
      heroTitle: "以全球贸易视角打造移动应用",
      heroSubtitle:
        "Hi 5 Shanghai International Trading Co. Ltd. 通过进出口连接全球市场，并打造让真实业务更高效的移动应用。",
      heroPrimaryCta: "查看我们的应用",
      heroSecondaryCta: "联系我们",

      statLabel1: "重点",
      statValue1: "iOS 应用产品",
      statLabel2: "业务范围",
      statValue2: "进出口贸易",
      statLabel3: "所在地",
      statValue3: "上海·浦东",

      aboutTitle: "关于 Hi 5",
      aboutSubtitle: "国际贸易经验 + 移动产品思维。",
      aboutCard1Title: "我们是谁",
      aboutCard1Text:
        "Hi 5 Shanghai International Trading Co. Ltd. 总部位于上海，是一家国际贸易公司，提供进出口相关支持，并持续聚焦移动应用与数字化产品。",
      aboutCard2Title: "我们的方法",
      aboutCard2Text:
        "我们将跨境贸易中对清晰、风险控制与稳定交付的要求带入应用开发：实用功能、清爽体验与可靠运行。",

      appsTitle: "应用产品",
      appsSubtitle: "面向真实场景的产品化移动应用。",
      app1Title: "Snap! Screen Translator",
      app1Text: "一个离线、私密的截图翻译工具，支持多种语言。",
      app2Title: "Snap! Language Assistant",
      app2Text: "一个语言助手，能够实时翻译和转录音频内容，支持多种语言。"
    //   app3Title: "QC Snapshot（示例）",
    //   app3Text: "快速记录质检、照片与清单，适合移动作业团队。",
    //   app4Title: "Customer Pulse（示例）",
    //   app4Text: "用快速问卷与情绪概览把反馈转化为行动，并生成简洁报表。",
    //   app5Title: "Stock Lite（示例）",
    //   app5Text: "为小团队打造的清爽库存工具：扫码、盘点、快速导出汇总。",
      tagIOS: "iOS",
      tagProductivity: "效率",
      tagOperations: "运营",
      tagQuality: "质检",
      tagAnalytics: "数据",
      tagInventory: "库存",
      storePlaceholderCta: "App Store 链接即将推出！",

      servicesTitle: "贸易与数字化服务",
      servicesSubtitle: "我们支持国际贸易，也打造让流程更轻松的软件。",
      svc1Title: "进出口支持",
      svc1Text: "覆盖供应商、单证与时间节点的协同，让结果更可预期。",
      svc2Title: "供应商寻源",
      svc2Text: "筛选可靠合作方，匹配需求、价格与产品规格。",
      svc3Title: "移动应用开发",
      svc3Text: "产品思维、清爽体验与运营工具，面向全球用户与团队。",
      whyTitle: "为什么选择 Hi 5",
      whyText: "将跨境执行能力与软件产品视角结合，务实、可衡量、可扩展。",
      whyBullet1: "双语沟通（EN / 中文）",
      whyBullet2: "流程清晰、风险可控",
      whyBullet3: "移动优先的业务工具",
      whyBullet4: "立足上海，服务全球",

      contactTitle: "联系",
      contactSubtitle: "告诉我们你的需求，我们会尽快回复。",
      contactDetailsTitle: "联系方式",
      companyName: "Hi 5 Shanghai International Trading Co. Ltd.",
      contactEmailLabel: "邮箱",
      addressLabel: "地址",
      addressEn: "Room 127, Building 5, No. 1499-1, Shangchuan Road, Pudong New Area, Shanghai",
      addressZh: "上海市浦东新区上川路1499-1号5幢127室",
      formName: "姓名",
      formEmail: "邮箱",
      formMessage: "留言",
      formSubmit: "发送",
      formFineprint: "此表单暂不支持直接发送。如需更快响应，请直接邮件联系我们。",

      footerMeta: "上海 • 国际贸易 • 移动应用",
      footerCopy: "© {year} Hi 5 Shanghai International Trading Co. Ltd. 保留所有权利。",

      formError: "请填写姓名、有效邮箱与留言内容。",
      formOk: "感谢联系。请直接发送邮件至 contact@hiwu.io（表单发送尚未接入）。",
      menuOpen: "打开菜单",
      menuClose: "关闭菜单",
    },
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function format(str, vars) {
    return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] == null ? `{${k}}` : String(vars[k])));
  }

  function setPressed(lang) {
    $$(".lang__btn").forEach((btn) => {
      const pressed = btn.dataset.lang === lang;
      btn.setAttribute("aria-pressed", pressed ? "true" : "false");
    });
  }

  function applyLang(lang) {
    const dict = i18n[lang] || i18n[DEFAULT_LANG];

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const val = dict[key];
      if (typeof val !== "string") return;
      el.textContent = val;
    });

    // Update <html lang="">
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

    // Footer year
    const year = String(new Date().getFullYear());
    const yearEl = $("#year");
    if (yearEl) yearEl.textContent = year;

    // Footer copyright with year formatting (if present)
    const footerCopy = dict.footerCopy;
    const footerEl = $("[data-i18n='footerCopy']");
    if (footerEl && typeof footerCopy === "string") {
      footerEl.textContent = format(footerCopy, { year });
    }

    // Persist
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }

    setPressed(lang);
  }

  function getInitialLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && (stored === "en" || stored === "zh")) return stored;
    } catch {
      // ignore
    }
    const browserLang = (navigator.language || "en").toLowerCase();
    if (browserLang.startsWith("zh")) return "zh";
    return DEFAULT_LANG;
  }

  // Mobile menu toggle
  function initMenu() {
    const toggle = $(".nav__toggle");
    const links = $("#navLinks");
    if (!toggle || !links) return;

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      links.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    // Close when clicking a link (mobile)
    $$(".nav__link", links).forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }

  function initLanguageButtons(initialLang) {
    $$(".lang__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (lang !== "en" && lang !== "zh") return;
        applyLang(lang);
      });
    });

    applyLang(initialLang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const initialLang = getInitialLang();
    initMenu();
    initLanguageButtons(initialLang);
  });
})();

