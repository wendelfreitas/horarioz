import { Button } from '@horarioz/ui';
import { useTranslation } from 'react-i18next';
import { Input } from '../Input/Input';

import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import { useSignIn } from '@horarioz/hooks';

type Inputs = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const { t } = useTranslation();
  const { mutate: login, isLoading } = useSignIn();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email(t('@SignInForm.email-invalid'))
      .trim()
      .required(t('@SignInForm.email-required')),
    password: Yup.string().required(t('@SignInForm.password-required')).trim(),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (
    { email, password }: Inputs,
    actions: FormikHelpers<Inputs>
  ) =>
    login(
      { email, password },
      {
        onError: (error) => actions.setErrors({ email: t(error.message) }),
      }
    );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isValid }) => (
        <Form className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6">
            <Input
              type="email"
              id="email"
              name="email"
              required
              label={t('@SignInForm.email')}
              placeholder={t('@SignInForm.email')}
            />
          </div>

          <div className="col-span-6">
            <Input
              type="password"
              id="password"
              required
              name="password"
              label={t('@SignInForm.password')}
              placeholder={t('@SignInForm.password')}
            />
          </div>

          <div className="col-span-6">
            <a className="text-sm text-primary-500 mx-1 hover:cursor-pointer hover:text-primary-700">
              {t('@SignInForm.forgot-password')}
            </a>
          </div>
          <div className="col-span-6">
            <Button
              className="w-full"
              type="submit"
              disabled={!isValid || isLoading}
            >
              {t('@SignInForm.sign-in')}
            </Button>
          </div>

          <div className="col-span-6">
            <hr className="border-gray-100" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
