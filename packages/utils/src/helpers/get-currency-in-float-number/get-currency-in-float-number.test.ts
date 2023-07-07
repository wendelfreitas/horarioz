import { getCurrencyInFloatNumber } from './get-currency-in-float-number';

describe('getCurrencyInFloatNumber', () => {
  it('should return the currency string in float', () => {
    expect(getCurrencyInFloatNumber('3.000,20', 'pt-BR')).toBe(3000.2);
  });
});
