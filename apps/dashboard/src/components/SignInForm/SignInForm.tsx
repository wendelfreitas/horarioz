import { Button } from '@suwilo/ui';
import { AuthError, EmailAuthProvider } from 'firebase/auth';
import { useSignInWithEmail } from '../../hooks/use-sign-in-with-email/use-sign-in-with-email';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Input } from '../Input/Input';
import { useNavigate } from 'react-router-dom';

type SignInFormProps = { email: string; password: string };

type CodeProps = {
  [name: string]: [string, string];
};

export const SignInForm = () => {
  const { mutate: login, isLoading } = useSignInWithEmail();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email(t('@SignInForm.email-invalid'))
      .trim()
      .required(t('@SignInForm.email-required')),
    password: Yup.string().required(t('@SignInForm.password-required')).trim(),
  });

  const onSubmit = (
    values: SignInFormProps,
    actions: FormikHelpers<SignInFormProps>
  ) => {
    const credentials = EmailAuthProvider.credential(
      values.email,
      values.password
    );

    const onError = (error: AuthError) => {
      const codes: CodeProps = {
        'auth/user-not-found': ['email', t('firebase.auth/user-not-found')],
        'auth/wrong-password': ['password', t('firebase.auth/password-wrong')],
      };

      const args = codes[error.code];

      actions.setFieldError(...args);
    };

    login(credentials, {
      onError,
      onSuccess: () => navigate('/'),
    });
  };

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
              id="Email"
              name="email"
              required
              label={t('@SignInForm.email')}
              placeholder={t('@SignInForm.email')}
            />
          </div>

          <div className="col-span-6">
            <Input
              type="password"
              id="Password"
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
              isLoading={isLoading}
              disabled={!isValid}
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
