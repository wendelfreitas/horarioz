import { useSignOut } from '@horarioz/hooks';
import { Button } from '@horarioz/ui';
import { useTranslation } from 'react-i18next';
import { Steps } from '../../components/Steps/Steps';

export const Onboarding = () => {
  const { t } = useTranslation();
  const { mutate: signOut, isLoading } = useSignOut();

  return (
    <div className="bg-gray-50 w-full min-h-screen flex justify-center">
      <div className="w-full sm:w-3/4 px-4 sm:px-0 justify-between flex flex-col py-5">
        <header className=" align-middle items-center justify-between pt-1 sm:pt-10 hidden sm:flex ">
          <img
            className="h-10 w-auto rounded-lg"
            src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
            alt="Synx"
          />
          <Button
            variant="secondary"
            className="!rounded-full"
            isLoading={isLoading}
            onClick={() => signOut()}
          >
            {t('@Onboarding.sign-out')}
          </Button>
        </header>
        <Steps />

        <footer>
          <div className="flex justify-between text-xs text-gray-400">
            <span>{new Date().getFullYear()} Horarioz.</span>
            <div className="space-x-5">
              <a href="#">Privacy</a>
              <a href="#">Terms of service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
