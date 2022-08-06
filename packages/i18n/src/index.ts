import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, I18nextProvider } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next);

export { i18n, I18nextProvider };
