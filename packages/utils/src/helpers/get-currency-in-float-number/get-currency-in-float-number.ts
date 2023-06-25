import { CURRENCIES } from '../../constants';

export const getCurrencyInFloatNumber = (value: string, language: string) => {
  const result = value.replace(/[$]|R\$/g, '').trim();
  const currency = CURRENCIES[language];

  const formats: {
    [key: string]: number;
  } = {
    USD: parseFloat(result.replace(',', '')),
    BRL: parseFloat(result.replace('.', '').replace(/,/g, '.')),
  };

  return formats[currency.code];
};
