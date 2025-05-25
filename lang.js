const translations = {
    en: {
        title: "Welcome to BJF Token",
        home: "Home",
        buy: "Buy Token",
        airdrop: "Airdrop",
        whitepaper: "Whitepaper",
        contact: "Contact",
        description: "BJF Token is a decentralized crypto asset built on the BNB Chain.",
        contract: "Contract"
    },
    fa: {
        title: "به توکن BJF خوش آمدید",
        home: "خانه",
        buy: "خرید توکن",
        airdrop: "ایردراپ",
        whitepaper: "وایت‌پیپر",
        contact: "تماس",
        description: "توکن BJF یک دارایی رمزارزی غیرمتمرکز روی زنجیره BNB است.",
        contract: "آدرس قرارداد"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.getElementById("language-switcher");
    switcher.addEventListener("change", (e) => translatePage(e.target.value));
});

function translatePage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}