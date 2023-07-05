import { InputProps } from '@horarioz/ui';
import IMask from 'imask';
import cn from 'classnames';
import { Input } from '../Input/Input';

export type TimeFieldProps = {
  bigger?: boolean;
} & InputProps;

export const TimeField = ({ bigger, ...props }: TimeFieldProps) => {
  const getBiggerStyle = cn(
    'w-full',
    'h-16',
    'text-5xl',
    'font-semibold',
    'bg-transparent',
    'text-gray-900',
    'placeholder:text-gray-300',
    'caret-gray-300',
    'text-center',
    'focus:outline-none'
  );

  return (
    <Input
      {...props}
      className={cn(props.className, bigger && getBiggerStyle)}
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
