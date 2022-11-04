import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import * as LabelPrimitive from '@radix-ui/react-label';
import cn from 'classnames';

export type CheckboxProps = {
  /**
   * The name of checkbox input.
   */
  name: string;
  /**
   * The label of checkbox input.
   */
  label: string;
  /**
   * The align of checkbox input.
   */
  align?: 'start' | 'center' | 'end';
} & Omit<CheckboxPrimitive.CheckboxProps, 'asChild'>;

export const Checkbox = ({
  name,
  label,
  align = 'center',
  ...props
}: CheckboxProps) => {
  const getCheckboxClass = () =>
    cn(
      'border',
      'flex',
      'h-5',
      'w-5',
      'min-w-[1.25rem]',
      'items-center',
      'justify-center',
      'rounded',
      'radix-state-checked:bg-primary-500',
      'focus:outline-none',
      'focus-visible:ring',
      'focus-visible:ring-primary-500',
      'focus-visible:ring-opacity-75',
      'radix-disabled:bg-gray-50',
      'radix-disabled:cursor-not-allowed'
    );

  const getLabelClass = () => {
    const style = cn(
      'ml-3',
      'select-none',
      'text-sm',
      'cursor-pointer',
      'text-gray-500'
    );
    return props.disabled
      ? cn(style, 'text-gray-400', 'cursor-not-allowed')
      : style;
  };

  return (
    <div className={`flex items-${align}`}>
      <CheckboxPrimitive.Root
        name={name}
        id={props.id}
        className={getCheckboxClass()}
        {...props}
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon className="h-5 w-5 self-center text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <LabelPrimitive.Label htmlFor={props.id} className={getLabelClass()}>
        {label}
      </LabelPrimitive.Label>
    </div>
  );
};
