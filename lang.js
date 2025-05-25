
const translations = {
    en: {
        welcome: "Welcome to BJF Token",
        description: "BJF Token is a decentralized, community-driven digital asset built on the BNB Chain. Our mission is to enable fair access to blockchain innovation while promoting financial freedom through transparency and inclusion.\n\nKey Features:\n- Token Sale: Purchase tokens directly through a user-friendly and secure interface.\n- Free Airdrop: Get free BJF tokens by registering and referring friends.\n- Detailed Whitepaper: Explore our technology, economic model, and development strategy.\n- Multi-language: Supports international users with language switching."
    },
    fa: {
        welcome: "خوش آمدید به BJF Token",
        description: "BJF Token یک دارایی دیجیتال غیرمتمرکز و جامعه‌محور است که بر بستر زنجیره BNB توسعه یافته. این پروژه با هدف ایجاد رشد پایدار، شفافیت مالی، و گسترش دسترسی عمومی به فناوری بلاک‌چین طراحی شده است.\n\nویژگی‌های کلیدی پروژه:\n- فروش توکن: امکان خرید مستقیم توکن با رابط کاربری ساده و ایمن.\n- ایردراپ رایگان: با ثبت‌نام و معرفی دوستان، توکن رایگان دریافت کنید.\n- وایت‌پیپر جامع: بررسی جزئیات فناوری، اهداف اقتصادی، و مسیر توسعه پروژه.\n- چند زبانه: پشتیبانی از کاربران بین‌المللی با رابط کاربری چند زبانه."
    }
};

const langSelector = document.getElementById("language-selector");
const welcomeText = document.getElementById("welcome");
const descText = document.getElementById("description");

function setLanguage(lang) {
    welcomeText.innerText = translations[lang].welcome;
    descText.innerText = translations[lang].description.replace(/\n/g, "\n");
}

langSelector.addEventListener("change", (e) => {
    setLanguage(e.target.value);
});

window.onload = () => {
    setLanguage(langSelector.value);
};
