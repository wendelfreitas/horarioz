import { Button } from '@soloquiz/ui';
import { useTranslation } from 'react-i18next';
import { Input } from '../Input/Input';
import * as Yup from 'yup';

export const SignInForm = () => {
  const { t } = useTranslation();

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

  return (
    <form className="mt-8 grid grid-cols-6 gap-6">
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
        <Button className="w-full" type="submit">
          {t('@SignInForm.sign-in')}
        </Button>
      </div>

      <div className="col-span-6">
        <hr className="border-gray-100" />
      </div>
    </form>
  );
};
