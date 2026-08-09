import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "From Idea to Production.": "From Idea to Production.",
      // More translations can be added here
    },
  },
  tr: {
    translation: {
      "From Idea to Production.": "Fikirden Üretime.",
      // More translations can be added here
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
