import { InputProps } from '@horarioz/ui';
import IMask from 'imask';
import { Input } from '../Input/Input';

export const TimeField = (props: InputProps) => {
  return (
    <Input
      {...props}
      inputMode="numeric"
      mask="HH:MM"
      blocks={{
        HH: {
          mask: IMask.MaskedRange,
          placeholderChar: 'HH',
          from: 0,
          to: 23,
          maxLength: 1,
        },
        MM: {
          mask: IMask.MaskedRange,
          placeholderChar: 'MM',
          from: 0,
          to: 59,
          maxLength: 2,
        },
      }}
    />
  );
};
