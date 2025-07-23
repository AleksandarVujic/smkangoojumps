import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import translation files
import enTranslations from './locales/en.json';
import srTranslations from './locales/sr-Cyrl.json';
import ruTranslations from './locales/ru.json';

const resources = {
  'sr-Cyrl': {
    translation: srTranslations
  },
  ru: {
    translation: ruTranslations
  },
  en: {
    translation: enTranslations
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'sr-Cyrl',
    // debug: process.env.NODE_ENV === 'development',
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // Pluralization support
    pluralSeparator: '_',
    contextSeparator: '_',

    // Namespace configuration
    defaultNS: 'translation',
    ns: ['translation'],

    // React specific options
    react: {
      useSuspense: false,
    },
  });

export default i18n;