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
import ja from './locales/ja.json';
import ms from './locales/ms.json';
import zh from './locales/zh.json';

// Detect language from URL prefix (/pt/..., /ja/...) first, then localStorage, then default
const SUPPORTED = ['en', 'pt', 'es', 'de', 'id', 'th', 'ko', 'ru', 'ja', 'ms', 'zh'];
function detectLanguage(): string {
  if (typeof window !== 'undefined') {
    const seg = window.location.pathname.split('/').filter(Boolean)[0];
    if (seg && SUPPORTED.includes(seg)) return seg;
  }
  return localStorage.getItem('language') || 'en';
}

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
      ja: { translation: ja },
      ms: { translation: ms },
      zh: { translation: zh },
    },
    lng: detectLanguage(),
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
