import { Fragment, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import successAnimation from '@/assets/animations/success.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { Button } from '@horarioz/ui';
import { useSupabase } from '@horarioz/hooks';
import { useLocation } from 'react-router-dom';

export const ConfirmationEmail = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remainingFormattedTime, setFormattedRemainingTime] = useState<
    string | null
  >(null);
  const supabase = useSupabase();
  const { t } = useTranslation();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const email = queryParams.get('email');

  const formatTime = useCallback((timer: number) => {
    const minutes = Math.floor(timer / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timer % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }, []);

  const countdownTimer = useCallback(
    (countdown: number) => {
      let timer = countdown;
      setFormattedRemainingTime(`Aguarde ${formatTime(timer)} para reenviar`);

      const interval = setInterval(() => {
        if (timer <= 0) {
          clearInterval(interval);
          setDisabled(false);
          setFormattedRemainingTime(null);
        } else {
          setFormattedRemainingTime(
            `Aguarde ${formatTime(timer)} para reenviar`
          );
          timer--;
        }
      }, 1000);
    },
    [formatTime]
  );

  const resendConfirmationEmail = useCallback(async () => {
    if (email) {
      setLoading(true);
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });

      if (error) {
        const seconds = extractSecondsFromPhrase(error.message);
        if (seconds) {
          setDisabled(true);
          setLoading(false);
          return countdownTimer(seconds);
        } else {
          setDisabled(false);
          setLoading(false);
          return setFormattedRemainingTime(null);
        }
      }

      countdownTimer(60);
      setDisabled(true);
      setLoading(false);
    }
  }, [countdownTimer, email, supabase.auth]);

  function extractSecondsFromPhrase(phrase: string): number | null {
    const regex = /(\d+) seconds/;
    const match = phrase.match(regex);

    if (match && match[1]) {
      return parseInt(match[1]);
    }

    return null;
  }

  useEffect(() => {
    if (email) {
      setDisabled(true);
      resendConfirmationEmail();
    }
  }, [resendConfirmationEmail, email]);

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
          <div className="bg-white sm:py-12 overflow-auto sm:shadow sm:rounded-lg sm:px-12 flex flex-col">
            <Player
              src={successAnimation}
              controls
              autoplay
              loop
              className="w-56 sm:w-70"
            />

            <p className="text-center">
              Seu registro foi feito com sucesso! Por favor, verifique seu
              e-mail para confirmar sua conta.
            </p>

            <Button
              isLoading={loading}
              disabled={disabled}
              onClick={() => resendConfirmationEmail()}
              className="mt-6"
            >
              {remainingFormattedTime ||
                t('@ConfirmationEmail.resend-confirmation-email')}
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
