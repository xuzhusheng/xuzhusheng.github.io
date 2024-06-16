import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// import en from "./locales/en/translation.json";
// import zh from "./locales/zh/translation.json";
const options = {
  // order and from where user language should be detected
  order: ['querystring', 'cookie', 'navigator', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
}

i18n
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
    debug: false,
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    supportedLngs: ['en', 'zh'],
    detection: options,
    fallbackLng: "en",
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: 'locales/{{lng}}/translation.json', // URL pattern for translations
    },
    // resources: {
    //     en: {
    //         translation: en,
    //     },
    //     zh: {
    //         translation: zh,
    //     },
    // },
});

export default i18n;