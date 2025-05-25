const translations = {
  en: {
    welcome: "Welcome to BJF Token",
    description: "BJF Token is a decentralized, community-driven digital asset built on the BNB Chain. Our mission is to enable fair access to blockchain innovation while promoting financial freedom through transparency and inclusion."
  },
  fa: {
    welcome: "خوش آمدید به BJF Token",
    description: "BJF Token یک دارایی دیجیتال غیرمتمرکز و جامعه‌محور است که بر بستر زنجیره BNB توسعه یافته. هدف ما ایجاد رشد پایدار، شفافیت مالی، و دسترسی منصفانه به نوآوری در بلاک‌چین است."
  },
  ar: {
    welcome: "مرحبًا بكم في BJF Token",
    description: "BJF Token هو أصل رقمي لامركزي يقوده المجتمع مبني على شبكة BNB. هدفنا هو تمكين الوصول العادل إلى الابتكار المالي وتعزيز الشفافية."
  },
  fr: {
    welcome: "Bienvenue sur BJF Token",
    description: "BJF Token est un actif numérique décentralisé dirigé par la communauté sur la BNB Chain. Notre mission est de promouvoir l'inclusion financière et la transparence."
  },
  es: {
    welcome: "Bienvenido a BJF Token",
    description: "BJF Token es un activo digital descentralizado impulsado por la comunidad en la BNB Chain. Buscamos promover la libertad financiera con transparencia."
  },
  zh: {
    welcome: "欢迎来到 BJF Token",
    description: "BJF Token 是在 BNB 链上构建的去中心化社区驱动数字资产。我们的使命是实现区块链创新的公平访问。"
  }
};

const switcher = document.getElementById("language-switcher");
const welcomeText = document.getElementById("welcome");
const descText = document.getElementById("description");

function translate(lang) {
  const t = translations[lang];
  if (t) {
    welcomeText.innerText = t.welcome;
    descText.innerText = t.description;
  }
}

switcher.addEventListener("change", e => translate(e.target.value));
window.onload = () => translate(switcher.value);