import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import zh from './locales/zh.json';

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh', // 默认语言
  debug: false,
  keySeparator: false, // 禁用键分隔符，因为我们的键就是具有层次结构的
  interpolation: {
    escapeValue: false, // 禁用值的转义
  },
});

export default i18n;
