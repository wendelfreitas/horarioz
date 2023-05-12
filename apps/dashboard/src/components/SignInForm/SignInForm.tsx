import { Button, SocialButton } from '@horarioz/ui';
import { useTranslation } from 'react-i18next';
import { Input } from '../Input/Input';

import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import { useSignIn, useSignInWithGoogle } from '@horarioz/hooks';
import { Fragment } from 'react';

type Inputs = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const { t } = useTranslation();
  const { mutate: login, isLoading } = useSignIn();
  const { mutate: loginWithGoogle, isLoading: isLoadingGoogle } =
    useSignInWithGoogle();

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
    <Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ isValid, dirty }) => (
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
                disabled={!dirty || !isValid || isLoading}
              >
                {t('@SignInForm.sign-in')}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <div className="relative mt-10">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-white px-6 text-black">
              {t('@SignInForm.or-continue-with')}
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4">
          <SocialButton
            isLoading={isLoadingGoogle}
            onClick={() => loginWithGoogle()}
            title={t('@SignInForm.sign-in-with-google')}
            network="google"
          />
        </div>
      </div>
    </Fragment>
  );
};
