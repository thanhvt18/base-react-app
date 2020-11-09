import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import viTrans from '../translations/vi.json';
import enTrans from '../translations/en.json';

/*
 *  Implement transaction by i18next
 * */

const resources = {
  en: {
    translation: enTrans,
  },
  vi: {
    translation: viTrans,
  },
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vn',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18next;
