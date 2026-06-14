import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en.json';
import arTranslations from './ar.json';

// Default language
const defaultLanguage = localStorage.getItem('language') || 'en';
const isArabic = defaultLanguage === 'ar';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations },
    },
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Set HTML direction
document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
document.documentElement.lang = defaultLanguage;

i18n.on('languageChanged', (lng: string) => {
  localStorage.setItem('language', lng);
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;
