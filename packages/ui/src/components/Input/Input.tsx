import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { IMaskInput } from 'react-imask';
import uniqid from 'uniqid';
import cn from 'classnames';
import { AnyMaskedOptions } from 'imask';

export type InputProps = {
  /**
   * Add a text with color red to the input
   */
  error?: string;
  /**
   * The input label, if the label and placeholder have same value this label will be a floating label.
   */
  label?: string;
  /**
   * If the button is disabled.
   */
  disabled?: boolean;
  /**
   * A word to add to the end of input.
   */
  suffix?: string;

  unmask?: boolean | 'typed';

  mask?: string;

  as?: 'input' | 'textarea';
  blocks?: { [key: string]: AnyMaskedOptions };
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export const getInputClasses = (props: InputProps) => {
  let style = cn(
    'min-h-[3rem]',
    'block',
    'px-4',
    'pb-2.5',
    'pt-3.5',
    'w-full',
    'text-sm',
    'bg-transparent',
    'rounded-lg',
    'border',
    'appearance-none',
    'focus:outline-none',
    'peer',
    props.placeholder !== props.label
      ? 'placeholder:text-gray-400'
      : 'placeholder:text-white',
    'focus:ring-0'
  );

  if (props.disabled) {
    style = cn(
      style,
      'bg-gray-100',
      'placeholder:text-gray-100',
      '!text-gray-500',
      'hover:cursor-not-allowed'
    );
  }

  if (props.error) {
    return cn(style, 'text-red-500', 'border-red-500', 'focus:border-red-500');
  }

  return cn(style, 'text-gray-900', 'border-gray-200', 'focus:border-black');
};

export const getLabelClasses = (props: InputProps) => {
  let style = cn(
    'hover:cursor-text',
    'select-none',
    'absolute',
    'text-base',
    'duration-300',
    'transform',
    '-translate-y-4',
    'scale-75',
    'top-[0.25rem]',
    'z-1',
    'origin-[0]',
    'ml-2',
    'left-1',
    'px-2',
    'peer-focus:px-2',
    'peer-placeholder-shown:scale-100',
    'peer-placeholder-shown:-translate-y-1/2',
    'peer-placeholder-shown:top-1/2',
    'peer-placeholder-shown:py-0.5',
    'peer-placeholder-shown:text-sm',
    'peer-focus:top-[0.12rem]',
    'peer-focus:py-0.5',
    'peer-focus:scale-75',
    'peer-focus:-translate-y-4',
    'peer-focus:text-base'
  );

  if (props.placeholder !== props.label) {
    style = cn(
      'hover:cursor-text',
      'select-none',
      'absolute',
      'text-gray-500',
      'text-base',
      'duration-300',
      'transform',
      '-translate-y-4',
      'scale-75',
      'top-[0.25rem]',
      'z-1',
      'origin-[0]',
      'ml-2',
      'left-1',
      'px-2',
      'peer-focus:px-2',
      'peer-focus:top-[0.25rem]',
      'peer-focus:py-0',
      'peer-focus:scale-75',
      'peer-focus:-translate-y-4',
      'peer-focus:text-base'
    );
  }

  if (props.disabled) {
    return cn(
      style,
      'bg-gray-100',
      'rounded',
      'hover:cursor-not-allowed',
      'text-gray-500'
    );
  }

  if (props.error) {
    return cn(style, 'text-red-500', 'bg-white');
  }

  return cn(style, 'text-gray-500', 'peer-focus:text-black', 'bg-white');
};

export const Input = (props: InputProps) => {
  const id = props.id || uniqid('input_');
  const type = props.as || 'input';

  const isTextArea = type === 'textarea';

  const getContainerClasses = () => {
    let styles = cn('relative', 'rounded');

    if (props.disabled) {
      styles = cn(styles, 'bg-gray-100');
    }

    return styles;
  };

  return (
    <div>
      <div className={cn(!isTextArea && 'h-16', 'mb-5')}>
        <div className={getContainerClasses()}>
          {type === 'textarea' ? (
            <textarea
              id={props.name || id}
              className={getInputClasses(props)}
              {...props}
            />
          ) : (
            <IMaskInput
              id={props.name || id}
              className={getInputClasses(props)}
              {...props}
            />
          )}
          <label htmlFor={props.name || id} className={getLabelClasses(props)}>
            {props.label}{' '}
            {props.required && <span className="text-red-500">*</span>}
          </label>

          {props.suffix && (
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 border border-y-0 border-r-0 border-gray-300 text-xs ">
              {props.suffix}
            </span>
          )}
        </div>
        {props.error && (
          <legend
            className={cn(
              'text-red-500',
              'text-xs',
              'mt-2',
              'ml-2',
              'animate-fade-down'
            )}
          >
            {props.error}
          </legend>
        )}
      </div>
    </div>
  );
};
