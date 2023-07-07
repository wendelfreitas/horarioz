import { getNumberInCurrencyFormat } from './get-number-in-currency-format';

describe('getNumberInCurrencyFormat', () => {
  it('should return the currency string with symbol', () => {
    expect(getNumberInCurrencyFormat(30.1, 'en-US')).toBe('30.10');
  });
});
