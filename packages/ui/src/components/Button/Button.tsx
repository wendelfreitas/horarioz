import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

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
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = 'primary',
  children,
  isLoading = false,
  danger = false,
  ...props
}: ButtonProps) => {
  const Variants = {
    primary: cn(
      danger ? 'bg-red-500' : 'bg-primary-500',
      isLoading || props.disabled || 'hover:bg-primary-600',
      'text-white',
      danger && 'hover:bg-red-600'
    ),
    secondary: cn(
      'bg-transparent',
      isLoading || props.disabled || 'hover:bg-gray-100/50',
      'border',
      danger
        ? 'hover:bg-white hover:text-red-700 text-red-600 border-red-400'
        : ' text-black border-gray-100/50'
    ),
  };

  const getVariant = () => {
    return Variants[variant];
  };

  const getClass = () => {
    let style = `relative rounded-lg min-h-[3rem] text-sm font-semibold text-center px-5 ${getVariant()} ${
      props.className
    }`;

    if (isLoading || props.disabled) {
      style = cn(style, 'opacity-70 cursor-not-allowed');
    }

    return style;
  };

  return (
    <button
      {...props}
      className={getClass()}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <PropagateLoader
          size={10}
          color="white"
          className="pb-2"
          data-testid="loading-indicator"
        />
      ) : (
        children
      )}
    </button>
  );
};
