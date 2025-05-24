const translations = {
  en: {
    title: "Welcome to BJF Token",
    description: "BJF Token is a decentralized cryptocurrency inspired by Benjamin Franklin, aiming for financial freedom and global adoption.",
    footer: "Copyright © 2025 BJF Token"
  },
  fa: {
    title: "به توکن BJF خوش آمدید",
    description: "توکن BJF یک ارز دیجیتال غیرمتمرکز الهام‌گرفته از بنجامین فرانکلین است، با هدف آزادی مالی و پذیرش جهانی.",
    footer: "کپی‌رایت © ۲۰۲۵ توکن BJF"
  },
  ar: {
    title: "مرحبًا بكم في BJF Token",
    description: "رمز BJF هو عملة مشفرة لامركزية مستوحاة من بنيامين فرانكلين، تهدف إلى الحرية المالية والتبني العالمي.",
    footer: "حقوق النشر © 2025 BJF Token"
  },
  es: {
    title: "Bienvenido a BJF Token",
    description: "BJF Token es una criptomoneda descentralizada inspirada en Benjamin Franklin, que busca la libertad financiera y la adopción global.",
    footer: "Derechos de autor © 2025 BJF Token"
  },
  zh: {
    title: "欢迎使用 BJF Token",
    description: "BJF Token 是一种受本杰明·富兰克林启发的去中心化加密货币，旨在实现财务自由和全球采用。",
    footer: "版权 © 2025 BJF Token"
  },
  ru: {
    title: "Добро пожаловать в BJF Token",
    description: "BJF Token — это децентрализованная криптовалюта, вдохновленная Бенджамином Франклином, стремящаяся к финансовой свободе и глобальному принятию.",
    footer: "Авторские права © 2025 BJF Token"
  },
  tr: {
    title: "BJF Token'a Hoş Geldiniz",
    description: "BJF Token, Benjamin Franklin'den ilham alan, finansal özgürlük ve küresel benimsemeyi hedefleyen merkeziyetsiz bir kripto para birimidir.",
    footer: "Telif Hakkı © 2025 BJF Token"
  }
};

document.getElementById("langSelect").addEventListener("change", function() {
  const lang = this.value;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
});