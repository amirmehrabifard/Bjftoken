const translations = {
  en: {
    welcome: "Welcome to BJF Token",
    description: "BJF Token is a decentralized digital asset built on the BNB Chain. It enables community-driven growth, low fees, and transparent global access.",
    home: "Home", buy: "Buy Token", airdrop: "Airdrop", whitepaper: "Whitepaper", contact: "Contact"
  },
  fa: {
    welcome: "به BJF Token خوش آمدید",
    description: "BJF Token یک دارایی دیجیتال غیرمتمرکز بر بستر BNB Chain است که با هدف رشد جامعه‌محور، کارمزد کم و دسترسی جهانی شفاف توسعه یافته است.",
    home: "خانه", buy: "خرید توکن", airdrop: "ایردراپ", whitepaper: "وایت‌پیپر", contact: "تماس"
  },
  ar: {
    welcome: "مرحبًا بكم في BJF Token",
    description: "BJF Token هو أصل رقمي لامركزي مبني على سلسلة BNB، يتيح نموًا مجتمعيًا ورسومًا منخفضة ووصولًا شفافًا عالميًا.",
    home: "الرئيسية", buy: "شراء التوكن", airdrop: "إيردروب", whitepaper: "الورقة البيضاء", contact: "اتصل"
  },
  fr: {
    welcome: "Bienvenue sur BJF Token",
    description: "BJF Token est un actif numérique décentralisé sur la BNB Chain, favorisant la croissance communautaire, des frais bas et un accès mondial transparent.",
    home: "Accueil", buy: "Acheter", airdrop: "Airdrop", whitepaper: "Livre blanc", contact: "Contact"
  },
  es: {
    welcome: "Bienvenido a BJF Token",
    description: "BJF Token es un activo digital descentralizado en BNB Chain, con crecimiento impulsado por la comunidad, bajas tarifas y acceso global transparente.",
    home: "Inicio", buy: "Comprar Token", airdrop: "Airdrop", whitepaper: "Libro blanco", contact: "Contacto"
  },
  zh: {
    welcome: "欢迎来到 BJF Token",
    description: "BJF Token 是构建在 BNB 链上的去中心化数字资产，支持社区驱动增长、低费用和全球透明访问。",
    home: "主页", buy: "购买代币", airdrop: "空投", whitepaper: "白皮书", contact: "联系"
  },
  ru: {
    welcome: "Добро пожаловать в BJF Token",
    description: "BJF Token — это децентрализованный цифровой актив на основе сети BNB с поддержкой сообщества, низкими комиссиями и прозрачным доступом.",
    home: "Главная", buy: "Купить токен", airdrop: "Эирдроп", whitepaper: "Вайтпейпер", contact: "Контакты"
  },
  tr: {
    welcome: "BJF Token'a Hoş Geldiniz",
    description: "BJF Token, BNB Zinciri üzerinde topluluk odaklı büyüme, düşük ücretler ve şeffaf küresel erişim sağlayan merkeziyetsiz bir dijital varlıktır.",
    home: "Ana Sayfa", buy: "Token Satın Al", airdrop: "Airdrop", whitepaper: "Teknik Doküman", contact: "İletişim"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("language-switcher");
  switcher.addEventListener("change", (e) => applyTranslations(e.target.value));
  applyTranslations(switcher.value);
});

function applyTranslations(lang) {
  const t = translations[lang];
  document.getElementById("welcome").textContent = t.welcome;
  document.getElementById("description").textContent = t.description;
  document.getElementById("nav-home").textContent = t.home;
  document.getElementById("nav-buy").textContent = t.buy;
  document.getElementById("nav-airdrop").textContent = t.airdrop;
  document.getElementById("nav-whitepaper").textContent = t.whitepaper;
  document.getElementById("nav-contact").textContent = t.contact;
}