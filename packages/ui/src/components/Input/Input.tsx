import { InputHTMLAttributes } from 'react';
import { Transition } from '@headlessui/react';
import uniqid from 'uniqid';
import cn from 'classnames';

export type InputProps = {
  /**
   * Add a text with color red to the input
   */
  error?: string;
  /**
   * Add a helper text below the input.
   */
  helper?: string;
  /**
   * The input label, if the label and placeholder have same value this label will be a floating label.
   */
  label?: string;
  icon?: React.ReactNode;
  /**
   * If the button is disabled.
   */
  disabled?: boolean;
  /**
   * A word to add to the end of input.
   */
  suffix?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const getInputClasses = (props: InputProps) => {
  let style = cn(
    'block',
    'px-4',
    'pb-2.5',
    'pt-3',
    'w-full',
    'text-sm',
    'bg-transparent',
    'rounded-lg',
    'border',
    'appearance-none',
    'focus:outline-none',
    'peer',
    'placeholder:text-white',
    'focus:ring-0'
  );

  if (props.placeholder !== props.label) {
    style = cn(style, 'placeholder:text-gray-500');
  }

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

  const getContainerClasses = () => {
    let styles = cn('relative', 'rounded');

    if (props.disabled) {
      styles = cn(styles, 'bg-gray-100');
    }

    return styles;
  };

  return (
    <div>
      <div className={getContainerClasses()}>
        <input id={id} className={getInputClasses(props)} {...props} />
        <label htmlFor={id} className={getLabelClasses(props)}>
          {props.label}
        </label>

        {props.suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 border border-y-0 border-r-0 border-gray-300 text-xs ">
            {props.suffix}
          </span>
        )}
      </div>
      <Transition
        show={Boolean(props.error)}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <legend className={cn('text-red-500', 'text-xs', 'mt-2', 'ml-2')}>
          {props.error}
        </legend>
      </Transition>
      {props.helper && (
        <legend className={cn('text-xs', 'mt-2', 'ml-2')}>
          {props.helper}
        </legend>
      )}
    </div>
  );
};
