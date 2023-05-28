import { Button } from '@horarioz/ui';
import { useTranslation } from 'react-i18next';
import { Input } from '@components/Input/Input';

import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import { useSignUp } from '@horarioz/hooks';
import { useNavigate } from 'react-router-dom';

type SignUpInput = {
  email: string;
  password: string;
  confirm_password: string;
};

export const SignUpForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { mutate: signUp, isLoading } = useSignUp();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email(t('@SignUpForm.email-invalid'))
      .trim()
      .required(t('@SignUpForm.email-required')),
    password: Yup.string()
      .required(t('@SignUpForm.password-required'))
      .trim()
      .oneOf(
        [Yup.ref('confirm_password')],
        t('@SignUpForm.passwords-not-match')
      ),
    confirm_password: Yup.string().oneOf(
      [Yup.ref('password')],
      t('@SignUpForm.passwords-not-match')
    ),
  });

  const initialValues = {
    email: '',
    password: '',
    confirm_password: '',
  };

  const onSubmit = (
    { email, password }: SignUpInput,
    actions: FormikHelpers<SignUpInput>
  ) =>
    signUp(
      { email, password },
      {
        onError: (error) => {
          actions.setErrors({
            [getKeyToSetError(error.message)]: t(error.message),
          });
        },
        onSuccess: () => navigate(`/confirmation-email?email=${email}`),
      }
    );

  const getKeyToSetError = (message: string) => {
    switch (message) {
      case 'Password should be at least 6 characters':
        return 'password';
      default:
        return 'email';
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isValid }) => (
        <Form className="mt-8 grid grid-cols-6">
          <div className="col-span-6">
            <Input
              type="email"
              id="email"
              name="email"
              required
              label={t('@SignUpForm.email')}
              placeholder={t('@SignUpForm.email')}
            />
          </div>

          <div className="col-span-6">
            <Input
              type="password"
              id="password"
              required
              name="password"
              label={t('@SignUp.password')}
              placeholder={t('@SignUp.password')}
            />
          </div>

          <div className="col-span-6">
            <Input
              type="password"
              id="confirm_password"
              required
              name="confirm_password"
              label={t('@SignUpForm.confirm_password')}
              placeholder={t('@SignUpForm.confirm_password')}
            />
          </div>

          <div className="col-span-6 mt-5">
            <Button
              isLoading={isLoading}
              className="w-full"
              type="submit"
              disabled={!isValid || isLoading}
            >
              {t('@SignUpForm.sign-up')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
