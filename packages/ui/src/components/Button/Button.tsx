type ButtonVariantsType = 'primary' | 'secondary';

export type ButtonProps = {
  /**
   * The variant of the button. It supports just two type of variants: 'primary', 'secondary'.
   */
  variant?: ButtonVariantsType;
  /**
   * On click handle.
   */
  onClick: () => void;
  /**
   * The button text.
   */
  children: React.ReactNode;
};

const Variants = {
  primary: 'bg-primary-500 hover:bg-primary-700 text-white ',
  secondary:
    'bg-transparent hover:bg-gray-100/50 text-black border boder-gray-100/50',
};

export const Button = ({
  variant = 'primary',
  children,
  onClick,
}: ButtonProps) => {
  const getVariant = () => {
    return Variants[variant];
  };

  const getClass = () => {
    return `rounded-lg px-5 py-2.5 text-sm font-semibold ${getVariant()}`;
  };

  return (
    <button className={getClass()} onClick={onClick}>
      {children}
    </button>
  );
};
