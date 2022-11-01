import { Field, FieldProps } from 'formik';
import { Input as DefaultInput, InputProps } from '@suwilo/ui';

export const Input = (props: InputProps) => {
  return (
    <Field name={props.name}>
      {({ field, form: { touched }, meta }: FieldProps) => (
        <DefaultInput {...field} {...props} error={touched && meta.error} />
      )}
    </Field>
  );
};
