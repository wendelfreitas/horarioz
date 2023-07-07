import {
  Fragment,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { getInputClasses, getLabelClasses } from '../Input/Input';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import cn from 'classnames';
import uniqid from 'uniqid';

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

const Type = {
  AUTOCOMPLETE: 'autocomplete',
  LISTBOX: 'listbox',
};

export type SelectProps = {
  /**
   * The type of the select component, if the type is autocomplete the select will be a combobox with an input to filter results, otherwise will be a listbox.
   */
  type?: (typeof Type)[keyof typeof Type];
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
  /**
   * If the select is disabled.
   */
  disabled?: boolean;
  /**
   * If the select is required.
   */
  required?: boolean;
  /**
   * The list of combobox options
   */
  options: Option[];
  /**
   * Label to show when options is empty.
   */
  emptyLabel?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

/**
 * Select component for choose one option from a list.
 */
export const Select = ({
  label,
  options,
  type = Type.LISTBOX,
  emptyLabel = 'No options.',
  ...props
}: SelectProps) => {
  const id = props.id || uniqid('select_');
  const isAutocomplete = type === Type.AUTOCOMPLETE;
  const [query, setQuery] = useState('');

  const getOptionsListClasses = () => {
    return cn(
      'border',
      'z-10',
      'border-black',
      'absolute',
      'mt-2',
      'max-h-60',
      'w-full',
      'overflow-auto',
      'rounded-md',
      'bg-white',
      'py-0',
      'text-base',
      'shadow',
      'ring-1',
      'ring-black',
      'ring-opacity-5',
      'focus:outline-none',
      'sm:text-sm'
    );
  };

  const getResults = () => {
    if (!query.trim()) {
      return options;
    }

    return options.filter((option) =>
      option.label
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    );
  };

  const defaultValue = options.find(
    (option) => option.value === props.defaultValue
  );

  const Messages = () => (
    <Fragment>
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
    </Fragment>
  );

  return (
    <Combobox name={props.name} defaultValue={defaultValue} nullable>
      {({ open }) => (
        <Fragment>
          <div className="relative">
            <div className="relative">
              <Combobox.Button
                className={cn('w-full', {
                  'cursor-pointer': !isAutocomplete,
                })}
              >
                <Combobox.Input
                  id={id}
                  contentEditable={isAutocomplete}
                  readOnly={!isAutocomplete || !open}
                  displayValue={(option: Option) => option?.label}
                  onChange={(event) => setQuery(event.target.value)}
                  className={cn(
                    getInputClasses(props),
                    {
                      '!border-black': open,
                    },
                    {
                      'cursor-pointer': !isAutocomplete,
                    }
                  )}
                  placeholder={props.placeholder}
                />
              </Combobox.Button>
              <label htmlFor={id} className={getLabelClasses(props)}>
                {label}{' '}
                {props.required && <span className="text-red-500">*</span>}
              </label>
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Combobox.Options className={getOptionsListClasses()}>
              {!getResults().length ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-400">
                  {emptyLabel}
                </div>
              ) : (
                getResults().map((option) => (
                  <Combobox.Option
                    key={option.value}
                    value={option}
                    disabled={option.disabled}
                    className={({ active, disabled }) =>
                      cn(
                        'relative',
                        'cursor-default',
                        'select-none',
                        'py-3',
                        'pl-4',
                        'pr-4',
                        'text-gray-500',
                        {
                          'bg-gray-50 text-black hover:cursor-pointer': active,
                        },
                        { 'text-gray-300 hover:cursor-not-allowed': disabled }
                      )
                    }
                  >
                    {({ selected }) => (
                      <span
                        className={cn('block', 'truncate', {
                          'text-black': selected,
                        })}
                      >
                        {option.label}
                      </span>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </div>
          <Messages />
        </Fragment>
      )}
    </Combobox>
  );
};
