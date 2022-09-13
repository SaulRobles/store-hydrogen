import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//@ts-ignore
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from "./assets/locales/en/translation.json";
import translationES from "./assets/locales/es/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: false,
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;