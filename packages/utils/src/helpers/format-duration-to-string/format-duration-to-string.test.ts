import { formatDurationToString } from './format-duration-to-string';

describe('formatDurationToString', () => {
  it('should return the currency string with symbol', () => {
    expect(formatDurationToString('10:00', 'en-US')).toBe('10 hours');
  });
});
