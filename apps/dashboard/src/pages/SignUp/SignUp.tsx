import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SignUpForm } from '@/components/SignUpForm/SignUpForm';

export const SignUp = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="flex min-h-full flex-1 flex-col justify-center py-5 md:py-16 sm:px-6 lg:px-8 bg-white sm:bg-gray-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Horarioz"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] ">
          <div className="bg-white px-6 py-6 sm:py-12 overflow-auto sm:shadow sm:rounded-lg sm:px-12">
            <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
              {t('@SignUp.register-your-account')}
            </h2>
            <SignUpForm />
          </div>

          <p className="mt-8 sm:mt-10 text-center text-sm text-gray-500">
            {t('@SignUp.already-registered')}
            <Link
              to="/sign-in"
              className="font-medium leading-6 text-black hover:text-gray-800"
            >
              {t('@SignUp.sign-in-now')}
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
