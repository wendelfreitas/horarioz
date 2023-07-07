import formatDuration from 'date-fns/formatDuration';
import { enUS, ptBR } from 'date-fns/locale';

export const formatDurationToString = (time: string, language: string) => {
  const [hours, minutes] = time.split(':');

  const locale: {
    [key: string]: Locale;
  } = {
    'en-US': enUS,
    'pt-BR': ptBR,
  };

  const duration = formatDuration(
    {
      hours: Number(hours),
      minutes: Number(minutes),
    },
    {
      format: ['hours', 'minutes'],
      locale: locale[language],
    }
  );

  return duration;
};
