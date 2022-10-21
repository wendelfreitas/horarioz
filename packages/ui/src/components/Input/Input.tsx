import { InputHTMLAttributes } from 'react';
import cn from 'classnames';

export type InputProps = {
  error?: string;
  helper?: string;
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, name, error, helper, ...props }: InputProps) => {
  const getLabelClasses = () => {
    const styles = {
      error: cn('border-red-500'),
      default: cn('focus-within:border-black', 'border-gray-200'),
    };

    let style = cn(
      'relative',
      'block',
      'rounded-md',
      'border',
      'px-3',
      'pt-3',
      'hover:cursor-text',
      error ? styles.error : styles.default
    );

    if (props.disabled) {
      style = cn(style, 'bg-gray-100', 'hover:cursor-not-allowed');
    }

    return style;
  };

  const getInputClasses = () => {
    let style = cn(
      'peer',
      'h-8',
      'w-full',
      'border-none',
      'bg-transparent',
      'pb-2',
      'p-0',
      'px-1',
      'focus:border-transparent',
      'autofill:bg-transparent',
      'focus:outline-none',
      'focus:ring-0',
      'sm:text-sm'
    );

    if (props.disabled) {
      style = cn(style, 'hover:cursor-not-allowed');
    }

    if (error) {
      return cn(style, 'text-red-500');
    }

    return style;
  };

  const getSpanClasses = () => {
    let style = cn(
      'bg-white',
      'absolute',
      'px-1',
      'left-3',
      '-translate-y-1/2',
      'text-xs',
      'transition-all',
      'top-1/2',
      'text-sm',
      'peer-focus:top-0',
      'peer-focus:text-xs',
      'peer-focus:ml-0'
    );

    if (props.placeholder) {
      style = cn(
        'top-0',
        'bg-white',
        'absolute',
        'px-1',
        'left-3',
        '-translate-y-1/2',
        'text-xs',
        'transition-all',
        'top-0',
        'text-sm',
        'peer-focus:top-0',
        'peer-focus:text-xs',
        'peer-focus:ml-0'
      );
    }

    if (props.disabled) {
      style = cn(style, 'bg-gray-100', 'rounded', 'hover:cursor-not-allowed');
    }

    if (error) {
      return cn(style, 'text-red-500');
    }

    return cn(style, 'text-gray-500', 'peer-focus:text-black');
  };

  return (
    <div>
      <label htmlFor={name} className={getLabelClasses()}>
        <input id={name} className={getInputClasses()} {...props} />

        <span className={getSpanClasses()}>{label}</span>
      </label>
      {error && (
        <p className={cn('text-red-500', 'text-xs', 'mt-2', 'ml-2')}>{error}</p>
      )}
      {helper && <p className={cn('text-xs', 'mt-2', 'ml-2')}>{helper}</p>}
    </div>
  );
};
