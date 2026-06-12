// Portfolio Starter JS (dark mode + simple language toggle + mailto form + mobile menu)

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const THEME_KEY = "portfolio_theme";
const LANG_KEY = "portfolio_lang";

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  const icon = theme === "light" ? "🌙" : "☀️";
  const t1 = $("#themeToggle");
  const t2 = $("#themeToggleMobile");
  if (t1) t1.textContent = icon;
  if (t2) t2.textContent = icon + (theme === "light" ? "" : "");
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

const I18N = {
  en: {
    portfolio:"Porfolio",
    Download_cv:"C.V.",
    hero_pill: "Student Specializing in Tourism and Travel Technology",
    hero_hi: "Hi, I'm",
    hero_name:"HANEEN ELDOMIATY",

    hero_subtitle:
      "I work in the tourism and travel field, focusing on organizing professional trips and delivering exceptional travel experiences, with skills in itinerary planning, booking management, and customer service.",
    hero_btn_projects: "View Projects",
    hero_btn_contact: "Contact Me",
    hero_location: "Port Said, Egypt",
    hero_degree: "East Port Said University of Technology",
    profile_role: "Senior Tourism and Travel servies",
    stat_projects: "Projects",
    stat_certificates: "Certificates",
    stat_internships: "Internships",

    about_title: "About Me",
    about_text:
      "I am a student in Tourism and Travel Services Technology, passionate about the tourism industry, destination management, and tour planning. I enjoy organizing travel programs, dealing with clients, and learning new skills in tourism marketing and customer service. I aim to apply my academic knowledge in practical, real-world tourism environments.",
    about_highlights: "Highlights",
    hl1: "Participated in preparing domestic and international tour programs and organizing travel itineraries",
    hl2: "Familiar with flight and hotel booking basics and reservation systems",
    hl3: "Committed to strong communication skills and teamwork in tourism work environments",
    about_education: "Education",
    edu1: "East Port Said University of Technology",
    edu1b: "Tourism and Travel Services Technology Program",
    edu2: "Expected Graduation: 2026",

    skills_title: "Skills",
    skills_tech: "Technical",
    skills_tools: "Tools",
    skills_soft: "Soft Skills",
    

    projects_title: "Projects",
    p1_desc: "A second-year graduation project focused on showcasing Sinai products and launching an awareness campaign about Sinai’s destinations, traditions, and cultural heritage.",
    p2_desc: "A fourth-year graduation project aimed at helping visually impaired individuals explore Egypt’s monuments and history through 3D tactile models that can be touched to recognize and understand each artifact.",
  
    contact_title: "Contact",
    contact_quick: "Quick Links",
    form_name: "Your name",
    form_email: "Your email",
    form_message: "Message",
    form_send: "Send",

    back_to_top: "Back to top ↑",
  },

  ar: {
    portfolio:"ملف الأعمال الشخصي",
    Download_cv:"السيرة الذاتية",

    hero_pill: "طالب متخصص في تكنولوجيا السياحة والسفر",
    hero_hi: "مرحبًا، أنا",
    hero_name:"حنين الدمياطي",
    hero_subtitle:
      "أعمل في مجال السياحة والسفر، مع التركيز على تنظيم الرحلات المهنية وتقديم تجارب سفر استثنائية، ولدي مهارات في تخطيط الجداول، وإدارة الحجوزات، وخدمة العملاء.",
    hero_btn_projects: "عرض المشاريع",
    hero_btn_contact: "تواصل معي",
    hero_location: "بورسعيد، مصر",
    hero_degree: "جامعة شرق بورسعيد التكنولوجية",
    profile_role: "خدمات السياحة والسفر العليا",
    stat_projects: "المشاريع",
    stat_certificates: "الشهادات",
    stat_internships: "التدريبات",
    

    about_title: "نبذة عني",
    about_text:
      "أنا طالب في تكنولوجيا خدمات السياحة والسفر، ولدي شغف بصناعة السياحة، وإدارة الوجهات، وتخطيط الجولات السياحية. أستمتع بتنظيم برامج السفر، والتعامل مع العملاء، وتعلم مهارات جديدة في تسويق السياحة وخدمة العملاء. أسعى لتطبيق معرفتي الأكاديمية في بيئات سياحية عملية وواقعية.[eos]",
    about_highlights: "أبرز النقاط",
    hl1: "شارك في إعداد برامج الجولات المحلية والدولية وتنظيم جداول الرحلات",
    hl2: "على دراية بأساسيات حجز الرحلات الجوية والفنادق وأنظمة الحجز",
    hl3: "ملتزم بمهارات اتصال قوية والعمل الجماعي في بيئات العمل السياحية",
    about_education: "التعليم",
    edu1: "جامعة شرق بورسعيد التكنولوجية",
    edu1b: "برنامج تكنولوجيا خدمات السياحة والسفر",
    edu2: "متوقع التخرج :2026",

    skills_title: "المهارات",
    skills_tech: "المهارات التقنية",
    skills_tools: "الأدوات",
    skills_soft: "المهارات الشخصية",
    
    projects_title: "المشاريع",
    p1_desc: "مشروع تخرج للعام الثاني ركز على عرض منتجات سيناء وإطلاق حملة توعية حول وجهات سيناء وتقاليدها وتراثها الثقافي.",
    p2_desc: "مشروع تخرج في السنة الرابعة يهدف إلى مساعدة الأفراد المكفوفين على استكشاف آثار وتاريخ مصر من خلال نماذج ثلاثية الأبعاد يمكن لمسها للتعرف على كل قطعة أثرية وفهمها.",
  

    contact_title: "التواصل",
    contact_quick: "روابط سريعة",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_message: "الرسالة",
    form_send: "إرسال",

    back_to_top: "العودة إلى الأعلى ↑",



  },
};

function setLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const btn = $("#langToggle");
  const btnM = $("#langToggleMobile");
  const label = lang === "ar" ? "EN" : "AR";
  if (btn) btn.textContent = label;
  if (btnM) btnM.textContent = label;

  localStorage.setItem(LANG_KEY, lang);
}

function toggleLanguage() {
  const current = localStorage.getItem(LANG_KEY) || "en";
  setLanguage(current === "en" ? "ar" : "en");
}

function setupMobileMenu() {
  const burger = $("#burger");
  const menu = $("#mobileMenu");
  if (!burger || !menu) return;

  function closeMenu() {
    menu.hidden = true;
    burger.setAttribute("aria-expanded", "false");
  }

  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    menu.hidden = open;
  });

  $$(".mobileLink").forEach((a) => a.addEventListener("click", closeMenu));
}

function setupContactForm() {
  const form = $("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    // Replace with your real email:
    const to = "you@example.com";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

function init() {
  // Footer year
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Theme
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  setTheme(savedTheme);
  $("#themeToggle")?.addEventListener("click", toggleTheme);
  $("#themeToggleMobile")?.addEventListener("click", toggleTheme);

  // Language
  const savedLang = localStorage.getItem(LANG_KEY) || "en";
  setLanguage(savedLang);
  $("#langToggle")?.addEventListener("click", toggleLanguage);
  $("#langToggleMobile")?.addEventListener("click", toggleLanguage);

  setupMobileMenu();
  setupContactForm();
}

document.addEventListener("DOMContentLoaded", init);
