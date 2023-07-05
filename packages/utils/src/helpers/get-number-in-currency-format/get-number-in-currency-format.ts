import { CURRENCIES } from '../../constants';

export const getNumberInCurrencyFormat = (value: number, language: string) => {
  const currency = CURRENCIES[language];

  const formats: {
    [key: string]: string;
  } = {
    USD: String(value.toFixed(2)),
    BRL: String(value.toFixed(2)).replace('.', ','),
  };

  return formats[currency.code];
};
