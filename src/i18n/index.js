import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './en.json';

i18n
  .use(LanguageDetector) // detect user browser language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: process.env.NODE_ENV === 'development',

    resources: {
      en,
    },

    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });
