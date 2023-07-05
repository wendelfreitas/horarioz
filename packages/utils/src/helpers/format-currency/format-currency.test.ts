import { formatCurrency } from './format-currency';

describe('formatCurrency', () => {
  it('should return the currency string with symbol', () => {
    expect(formatCurrency(30.0, 'en-US')).toBe('$ 30.00');
  });
});
