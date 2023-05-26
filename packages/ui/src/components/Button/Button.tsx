import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import HashLoader from 'react-spinners/HashLoader';

type ButtonVariantsType = 'primary' | 'secondary';

export type ButtonProps = {
  /**
   * The variant of the button. It supports just two type of variants: 'primary', 'secondary'.
   */
  variant?: ButtonVariantsType;
  /**
   * The button text.
   */
  children: React.ReactNode;
  /**
   * The button loading state.
   */
  isLoading?: boolean;
  /**
   * The button is danger state.
   */
  danger?: boolean;
  /**
   * The 3 button sizes: 'small', 'medium', 'large'.
   */
  size?: 'small' | 'medium' | 'large';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = 'primary',
  children,
  isLoading = false,
  size = 'medium',
  danger = false,
  ...props
}: ButtonProps) => {
  const Variants = {
    primary: cn(
      danger ? 'bg-red-600' : 'bg-primary-700',
      isLoading || props.disabled || 'hover:bg-primary-800',
      'text-white',
      danger && 'hover:bg-red-700'
    ),
    secondary: cn(
      'bg-white',
      'border-gray-200',
      isLoading || props.disabled || 'hover:bg-gray-50',
      'border',
      danger
        ? 'hover:bg-white hover:text-red-700 text-red-600 border-red-400'
        : 'text-black bg-gray-100'
    ),
  };

  const getVariant = () => {
    return Variants[variant];
  };

  const getClass = () => {
    const sizes = {
      small: cn('h-9', 'text-xs'),
      medium: cn('h-11', 'text-sm'),
      large: cn('h-12', 'text-sm'),
    };

    let style = cn(
      'relative rounded-lg min-h-full font-medium text-center px-5',
      getVariant()
    );

    style = cn(style, sizes[size]);

    if (isLoading || props.disabled) {
      style = cn(style, 'opacity-70 cursor-not-allowed');
    }

    if (isLoading) {
      style = cn(style, 'flex justify-center items-center');
    }

    return cn(style, props.className);
  };

  return (
    <button
      {...props}
      className={getClass()}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <HashLoader
          size={20}
          color="white"
          className="self-auto"
          data-testid="loading-indicator"
        />
      ) : (
        children
      )}
    </button>
  );
};
