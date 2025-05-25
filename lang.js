const translations = {
  en: {
    home: "Home",
    buy_token: "Buy Token",
    airdrop: "Airdrop",
    whitepaper: "Whitepaper",
    contact: "Contact",
    welcome: "Welcome to BJF Token",
    description: "BJF is a decentralized digital asset built on the BNB Chain. It enables community-driven investment, low fees, and global access.",
    contract: "Contract:"
  },
  fa: {
    home: "خانه",
    buy_token: "خرید توکن",
    airdrop: "ایردراپ",
    whitepaper: "وایت‌پیپر",
    contact: "تماس",
    welcome: "به BJF Token خوش آمدید",
    description: "BJF یک دارایی دیجیتال غیرمتمرکز بر پایه زنجیره BNB است. امکان سرمایه‌گذاری مبتنی بر جامعه، کارمزد پایین و دسترسی جهانی را فراهم می‌کند.",
    contract: "آدرس قرارداد:"
  },
  ar: {
    home: "الرئيسية",
    buy_token: "شراء التوكن",
    airdrop: "الإيردروب",
    whitepaper: "الورقة البيضاء",
    contact: "اتصل",
    welcome: "مرحبًا بكم في BJF Token",
    description: "BJF هو أصل رقمي لامركزي مبني على سلسلة BNB. يتيح الاستثمار المجتمعي والرسوم المنخفضة والوصول العالمي.",
    contract: "العقد:"
  },
  fr: {
    home: "Accueil",
    buy_token: "Acheter le Token",
    airdrop: "Airdrop",
    whitepaper: "Livre blanc",
    contact: "Contact",
    welcome: "Bienvenue sur BJF Token",
    description: "BJF est un actif numérique décentralisé sur la BNB Chain. Il permet un investissement communautaire, des frais réduits et un accès mondial.",
    contract: "Contrat:"
  },
  es: {
    home: "Inicio",
    buy_token: "Comprar Token",
    airdrop: "Airdrop",
    whitepaper: "Libro Blanco",
    contact: "Contacto",
    welcome: "Bienvenido a BJF Token",
    description: "BJF es un activo digital descentralizado construido sobre la BNB Chain. Permite inversión comunitaria, tarifas bajas y acceso global.",
    contract: "Contrato:"
  },
  zh: {
    home: "首页",
    buy_token: "购买代币",
    airdrop: "空投",
    whitepaper: "白皮书",
    contact: "联系",
    welcome: "欢迎来到 BJF Token",
    description: "BJF 是基于 BNB 链的去中心化数字资产。支持社区驱动的投资、低费用和全球访问。",
    contract: "合约地址："
  },
  ru: {
    home: "Главная",
    buy_token: "Купить токен",
    airdrop: "Эирдроп",
    whitepaper: "Вайтпейпер",
    contact: "Контакты",
    welcome: "Добро пожаловать в BJF Token",
    description: "BJF — это децентрализованный цифровой актив на основе сети BNB. Он обеспечивает инвестиции, управляемые сообществом, низкие комиссии и глобальный доступ.",
    contract: "Контракт:"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("language-switcher");
  switcher.addEventListener("change", (e) => translatePage(e.target.value));
});

function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}