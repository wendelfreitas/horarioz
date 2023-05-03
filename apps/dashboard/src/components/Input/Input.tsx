import { Field, FieldProps } from 'formik';

import { Input as DefaultInput, InputProps } from '@horarioz/ui';

export const Input = (props: InputProps) => {
  return (
    <Field name={props.name}>
      {({ field, meta }: FieldProps) => {
        const error = (meta.touched && meta.error) || '';

        return <DefaultInput {...field} {...props} error={error} />;
      }}
    </Field>
  );
};
