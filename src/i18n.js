import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: false,
    interpolation: { escapeValue: false },
    resources: {
      ru: {
        translation: {
          // Navbar
          nav_atelier: "Ателье",
          nav_clothing: "Одежда",
          nav_painting: "Картины",
          nav_home: "Дом",
          nav_contact: "Контакты",

          // Hero
          hero_title: "HUTZAAV — Ателье Галины Хвостенко",
          hero_text: "Более 20 лет опыта, тонкий вкус и ручная работа на каждом этапе. Уникальные изделия, в которых сочетаются качество, комфорт и индивидуальность.",
          hero_subtext: "Одежда, в которой вы чувствуете себя собой.",
          hero_button: "Записаться",

          // Clothing
          clothing_title: "Коллекция от HUTZAAV",
          clothing_subtext: "Каждый образ — это история, сотканная из стиля, вкуса и уверенности.",
          clothing_button: "Купить",
          clothing_toggle_show: "Показать всё",
          clothing_toggle_hide: "Скрыть",

          // Painting
          painting_title: "Арт-коллекция HUTZAAV",
          painting_subtext: "Картины ручной работы — отражение характера и настроения. Мы создаём уникальные работы, чтобы они говорили за вас.",
          painting_button: "Купить",
          painting_toggle_show: "Показать все",
          painting_toggle_hide: "Скрыть",

          // Home
          home_title: "Домашняя коллекция",
          home_subtext: "Уникальные предметы интерьера, в которых сочетаются эстетика и уют. Добавьте тепло и стиль в свой дом.",
          home_button: "Купить",
          home_toggle_show: "Показать всё",
          home_toggle_hide: "Скрыть",

          // Contact
          contact_title: "Связь с ателье HUTZAAV",
          contact_subtext: "Мы всегда на связи — выберите удобный способ и свяжитесь с нами прямо сейчас.",

          // Modal
          modal_clothing_desc: "Уникальный дизайн и высокое качество пошива.",
          modal_painting_desc: "Авторская живопись, душа в каждом мазке.",
          modal_pay: "Оплатить",
          modal_error: "Ошибка при переходе к оплате"
        },
      },

      en: {
        translation: {
          nav_atelier: "Atelier",
          nav_clothing: "Clothing",
          nav_painting: "Paintings",
          nav_home: "Home",
          nav_contact: "Contact",

          hero_title: "HUTZAAV — Atelier by Galina Hvostenko",
          hero_text: "Over 20 years of experience, refined taste, and handmade excellence at every stage. Unique creations combining quality, comfort, and individuality.",
          hero_subtext: "Clothes that make you feel like yourself.",
          hero_button: "Book now",

          clothing_title: "HUTZAAV Clothing Collection",
          clothing_subtext: "Each look is a story woven from style, taste, and confidence.",
          clothing_button: "Buy",
          clothing_toggle_show: "Show all",
          clothing_toggle_hide: "Hide",

          painting_title: "HUTZAAV Art Collection",
          painting_subtext: "Hand-painted artworks reflecting character and mood. Unique pieces that speak for you.",
          painting_button: "Buy",
          painting_toggle_show: "Show all",
          painting_toggle_hide: "Hide",

          home_title: "Home Collection",
          home_subtext: "Unique interior pieces combining aesthetics and comfort. Add warmth and style to your home.",
          home_button: "Buy",
          home_toggle_show: "Show all",
          home_toggle_hide: "Hide",

          contact_title: "Contact HUTZAAV",
          contact_subtext: "We're always available — choose your preferred method and reach out to us now.",

          modal_clothing_desc: "Unique design and high-quality tailoring.",
          modal_painting_desc: "Author’s artwork, soul in every stroke.",
          modal_pay: "Pay",
          modal_error: "Failed to redirect to checkout"
        },
      },

      he: {
        translation: {
          nav_atelier: "סדנה",
          nav_clothing: "בגדים",
          nav_painting: "ציורים",
          nav_home: "בית",
          nav_contact: "צור קשר",

          hero_title: "HUTZAAV — הסטודיו של גלינה חבוסטנקו",
          hero_text: "יותר מ-20 שנות ניסיון, טעם מעודן ועבודת יד בכל שלב. יצירות ייחודיות שמשלבות איכות, נוחות ואישיות.",
          hero_subtext: "בגדים שגורמים לך להרגיש אתה עצמך.",
          hero_button: "לקבוע פגישה",

          clothing_title: "קולקציית הבגדים של HUTZAAV",
          clothing_subtext: "כל לוק הוא סיפור שמורכב מסטייל, טעם וביטחון.",
          clothing_button: "לקנות",
          clothing_toggle_show: "הצג הכל",
          clothing_toggle_hide: "הסתר",

          painting_title: "אוסף האמנות של HUTZAAV",
          painting_subtext: "ציורים בעבודת יד שמשקפים אופי ורגש. יצירות ייחודיות שמדברות בשמך.",
          painting_button: "לקנות",
          painting_toggle_show: "הצג הכל",
          painting_toggle_hide: "הסתר",

          home_title: "קולקציית הבית",
          home_subtext: "פריטי עיצוב ייחודיים שמשלבים אסתטיקה וחמימות. הוסיפו סגנון ונשמה לבית שלכם.",
          home_button: "לקנות",
          home_toggle_show: "הצג הכל",
          home_toggle_hide: "הסתר",

          contact_title: "צור קשר עם HUTZAAV",
          contact_subtext: "אנחנו זמינים תמיד — בחרו את הדרך הנוחה לכם וצורו קשר מיד.",

          modal_clothing_desc: "עיצוב ייחודי ותפירה באיכות גבוהה.",
          modal_painting_desc: "ציור מקורי עם נשמה בכל תנועה.",
          modal_pay: "לתשלום",
          modal_error: "שגיאה בהפנייה לתשלום"
        },
      },
    },
  });

export default i18n;
