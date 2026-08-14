import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { content } from "@/config/content";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: content.es,
    },
    en: {
      translation: content.en,
    },
  },
  fallbackLng: "es",
  lng: "es", // Always start with Spanish for SSR consistency
  interpolation: {
    escapeValue: false,
  },
  // Disable suspense for SSR compatibility
  react: {
    useSuspense: false,
  },
});

export default i18n;
