import {
  Button as DefaultButton,
  ButtonProps as DefaultButtonProps,
} from '@chakra-ui/react';

type ButtonVariantsType = 'primary' | 'secondary';

export type ButtonProps = {
  /**
   * The variant of the button. It supports just two type of variants: 'primary', 'secondary'.
   */
  variant?: ButtonVariantsType;
  /**
   * on click handle.
   */
  onClick: DefaultButtonProps['onClick'];
  children: React.ReactNode;
};

export const Button = ({
  variant = 'primary',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <DefaultButton
      background={variant}
      color="white"
      _hover={{ background: `${variant}_hover` }}
      onClick={onClick}
    >
      {children}
    </DefaultButton>
  );
};
