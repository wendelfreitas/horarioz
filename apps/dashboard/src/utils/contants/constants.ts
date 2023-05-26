type CurrencyConfig = {
  [key: string]: {
    symbol: string;
    thousandsSeparator: string;
    radix: string;
  };
};

export const currencies: CurrencyConfig = {
  ['en-US']: {
    symbol: '$',
    thousandsSeparator: ',',
    radix: '.',
  },
  ['pt-BR']: {
    symbol: 'R$',
    thousandsSeparator: '.',
    radix: ',',
  },
};
