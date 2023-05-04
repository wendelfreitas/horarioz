import { Button } from '@horarioz/ui';
import { useTranslation } from 'react-i18next';
import { Input } from '../Input/Input';

import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import { useSignUp } from '@horarioz/hooks';

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export const SignUpForm = () => {
  const { t } = useTranslation();
  const { mutate: signUp, isLoading } = useSignUp();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email(t('@SignInForm.email-invalid'))
      .trim()
      .required(t('teste')),
    name: Yup.string().trim().required('Nome é obrigatório'),
    password: Yup.string()
      .required(t('@SignInForm.password-required'))
      .trim()
      .oneOf([Yup.ref('confirm_password')], 'Passwords must match'),
    confirm_password: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords must match'
    ),
  });

  const initialValues = {
    email: '',
    password: '',
    name: '',
    confirm_password: '',
  };

  const onSubmit = (
    { email, password, name }: Inputs,
    actions: FormikHelpers<Inputs>
  ) =>
    signUp(
      { email, password, name },
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
              id="name"
              required
              name="name"
              label={t('@SignInForm.name')}
              placeholder={t('@SignInForm.name')}
            />
          </div>

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
            <Input
              type="password"
              id="confirm_password"
              required
              name="confirm_password"
              label={t('@SignInForm.confirm_password')}
              placeholder={t('@SignInForm.confirm_password')}
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
