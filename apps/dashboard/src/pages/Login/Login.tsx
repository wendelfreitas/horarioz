import { SocialButton } from '@suwilo/ui';
import { GithubAuthProvider } from 'firebase/auth';
import { useSignInWithGithub } from '../../hooks/use-sign-in-with-github/use-sign-in-with-github';
import { useTranslation } from 'react-i18next';
import { SignInForm } from '../../components/SignInForm/SignInForm';

export const Login = () => {
  const { mutate } = useSignInWithGithub();
  const { t } = useTranslation();

  const handleOnSignInWithGithub = () =>
    mutate({
      provider: new GithubAuthProvider(),
    });

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Suwilo aside background"
            src="https://img.freepik.com/free-vector/gradient-galaxy-background_23-2148983655.jpg?w=2000&t=st=1666315353~exp=1666315953~hmac=7b3e31b4e1a24f9ff1f7cf37ff4caa16dab378d5638557ca7f0221fdf2ecf8f0"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Sign in into Suwilo ☀️
            </h1>

            <p className="mt-4 text-sm text-gray-500">
              Improve your skills, increase your knowledge, achieve your goals.
              Look for mentors who are willing to make you better every day.
            </p>

            <SignInForm />

            <div className="col-span-6 mt-5">
              <SocialButton
                network="github"
                title={t('@Login.sign-in-with-github')}
                className="w-full"
                onClick={handleOnSignInWithGithub}
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};
