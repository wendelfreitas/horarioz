import { i18n } from '@horarioz/i18n';

import ptBR from '@locales/pt-br/translation.json';
import enUS from '@locales/en-us/translation.json';
import { locales } from '@horarioz/supabase';

const resources = {
  'pt-BR': {
    translation: {
      ...ptBR,
      ...locales.ptbr,
    },
  },
  ['en-US']: {
    translation: {
      ...enUS,
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
