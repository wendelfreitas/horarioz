type ButtonVariantsType = 'primary' | 'secondary';

export type ButtonProps = {
  /**
   * The variant of the button. It supports just two type of variants: 'primary', 'secondary'.
   */
  variant?: ButtonVariantsType;
  /**
   * on click handle.
   */
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = ({
  variant = 'primary',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button className="bg-red-700" onClick={onClick}>
      {children}
    </button>
  );
};
