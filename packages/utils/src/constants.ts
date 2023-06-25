type CurrencyConfigType = {
  [key: string]: {
    symbol: string;
    thousandsSeparator: string;
    radix: string;
    code: string;
  };
};

export const CURRENCIES: CurrencyConfigType = {
  ['en-US']: {
    symbol: '$',
    thousandsSeparator: ',',
    radix: '.',
    code: 'USD',
  },
  ['pt-BR']: {
    symbol: 'R$',
    thousandsSeparator: '.',
    radix: ',',
    code: 'BRL',
  },
};
