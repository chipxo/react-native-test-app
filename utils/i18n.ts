import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

export type TranslationKeys =
  | keyof (typeof resources)["en"]["translation"]
  | keyof (typeof resources)["ar"]["translation"];

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
} as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
