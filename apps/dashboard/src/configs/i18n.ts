import { i18n } from '@horarioz/i18n';

import ptbr from '../locales/ptbr/translation.json';
import en from '../locales/en/translation.json';
import { locales } from '@horarioz/supabase';

const resources = {
  'pt-BR': {
    translation: {
      ...ptbr,
      ...locales.ptbr,
    },
  },
  ['en-US']: {
    translation: {
      ...en,
      ...locales.en,
    },
  },
};

i18n.init({
  returnNull: false,
  resources,
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
