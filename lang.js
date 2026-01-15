const translations = {
  fr: {
    nav_home: "Accueil",
    nav_courses: "Cours",
    nav_td: "TD / TP",
    nav_news: "Annonces",
    nav_contact: "Contact",

    welcome: "Bienvenue 👋",
    intro: "Ce site a été créé pour aider les étudiants de L3 Informatique à accéder facilement aux cours, TD/TP et informations importantes.",

    courses_title: "Cours L3 Informatique",
    course_gl: "Génie Logiciel",
    course_db: "Bases de Données",
    course_net: "Réseaux Informatiques",
    course_os: "Systèmes d’Exploitation",
    course_web: "Programmation Web",
    download: "Télécharger",

    td_title: "TD & TP",
    td_db: "TD Bases de Données",
    td_net: "TP Réseaux",
    td_web: "TP Programmation Web",

    news_title: "Annonces",
    news_1: "📅 Examen de Bases de Données : 15 mars",
    news_2: "📢 Dépôt des projets Web avant fin du mois",

    contact_title: "Contact",
    email: "Email",
    phone: "WhatsApp",

    footer: "© L3 Informatique – FSEA – Université de N'Djamena"
  },

  en: {
    nav_home: "Home",
    nav_courses: "Courses",
    nav_td: "Tutorials / Labs",
    nav_news: "Announcements",
    nav_contact: "Contact",

    welcome: "Welcome 👋",
    intro: "This website was created to help L3 Computer Science students easily access courses, tutorials, and important information.",

    courses_title: "L3 Computer Science Courses",
    course_gl: "Software Engineering",
    course_db: "Databases",
    course_net: "Computer Networks",
    course_os: "Operating Systems",
    course_web: "Web Programming",
    download: "Download",

    td_title: "Tutorials & Labs",
    td_db: "Database Tutorials",
    td_net: "Network Labs",
    td_web: "Web Programming Labs",

    news_title: "Announcements",
    news_1: "📅 Database exam: March 15",
    news_2: "📢 Web project submission before the end of the month",

    contact_title: "Contact",
    email: "Email",
    phone: "WhatsApp",

    footer: "© L3 Computer Science – FSEA – University of N'Djamena"
  },

  ar: {
    nav_home: "الرئيسية",
    nav_courses: "الدروس",
    nav_td: "الأعمال الموجهة / التطبيقية",
    nav_news: "الإعلانات",
    nav_contact: "اتصال",

    welcome: "مرحبا 👋",
    intro: "تم إنشاء هذا الموقع لمساعدة طلاب السنة الثالثة إعلام آلي على الوصول بسهولة إلى الدروس والأعمال الموجهة والمعلومات المهمة.",

    courses_title: "دروس السنة الثالثة إعلام آلي",
    course_gl: "هندسة البرمجيات",
    course_db: "قواعد البيانات",
    course_net: "شبكات الحاسوب",
    course_os: "أنظمة التشغيل",
    course_web: "برمجة الويب",
    download: "تحميل",

    td_title: "الأعمال الموجهة والتطبيقية",
    td_db: "أعمال موجهة قواعد البيانات",
    td_net: "أعمال تطبيقية شبكات",
    td_web: "أعمال تطبيقية برمجة الويب",

    news_title: "الإعلانات",
    news_1: "📅 امتحان قواعد البيانات: 15 مارس",
    news_2: "📢 آخر أجل لتسليم مشروع الويب نهاية الشهر",

    contact_title: "اتصال",
    email: "البريد الإلكتروني",
    phone: "واتساب",

    footer: "© السنة الثالثة إعلام آلي – FSEA – جامعة نجامينا"
  }
};

function setLang(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  document.body.classList.toggle("rtl", lang === "ar");
  document.documentElement.lang = lang;

  localStorage.setItem("lang", lang);
}

window.addEventListener("load", () => {
  const lang = localStorage.getItem("lang") || "fr";
  setLang(lang);
});
