import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';
import de from './locales/de.json';
import id from './locales/id.json';
import th from './locales/th.json';
import ko from './locales/ko.json';
import ru from './locales/ru.json';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
      de: { translation: de },
      id: { translation: id },
      th: { translation: th },
      ko: { translation: ko },
      ru: { translation: ru },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
