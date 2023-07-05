import { CURRENCIES } from '../../constants';

export const formatCurrency = (value: number, language: string) => {
  const currency = CURRENCIES[language];

  const formats: {
    [key: string]: string;
  } = {
    USD: String(value.toFixed(2)),
    BRL: String(value.toFixed(2)).replace('.', ','),
  };

  return `${currency.symbol} ${formats[currency.code]}`;
};
