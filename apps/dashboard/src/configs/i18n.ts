import { i18n } from '@horarioz/i18n';

import ptbr from '../locales/ptbr/translation.json';

const resources = {
  ptbr: {
    translation: ptbr,
  },
};

i18n.init({
  returnNull: false,
  resources,
  lng: 'ptbr',
  fallbackLng: 'ptbr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
