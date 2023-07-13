import { Button } from '@horarioz/ui';
import cn from 'classnames';
import welcomeAnimation from '@/assets/animations/welcome.json';
import successAnimation from '@/assets/animations/success.json';
import { Form, Formik } from 'formik';
import { Player } from '@lottiefiles/react-lottie-player';
import { KeyboardEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/Input/Input';
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid';
import { useGetDomains, useUserOnboarding } from '@horarioz/hooks';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const STEPS = {
  WELCOME: 'WELCOME',
  USER_FULL_NAME: 'USER_FULL_NAME',
  USER_PHONE_NUMBER: 'USER_PHONE_NUMBER',
  COMPANY_NAME: 'COMPANY_NAME',
  COMPANY_SLUG: 'COMPANY_SLUG',
  FINISH: 'FINISH',
};

type StepsInput = {
  name: string;
  phone: string;
  company_name: string;
  slug: string;
};

const getInputStyle = () =>
  cn(
    'w-full',
    'text-5xl',
    'font-semibold',
    'bg-transparent',
    'text-gray-900',
    'placeholder:text-gray-300',
    'text-start',
    'caret-gray-300',
    'focus:outline-none'
  );

export const Steps = () => {
  const { t } = useTranslation();

  const { mutate: saveOnboard, isLoading } = useUserOnboarding();

  const [step, setStep] = useState(STEPS.WELCOME);
  const { data: domains } = useGetDomains({
    enabled: step === STEPS.COMPANY_SLUG,
  });

  const goNext = () => {
    const current = Object.keys(STEPS).indexOf(step);
    const next = Object.keys(STEPS)[current + 1];

    setStep(next);
  };

  const goBack = () => {
    const current = Object.keys(STEPS).indexOf(step);
    const next = Object.keys(STEPS)[current - 1];

    setStep(next);
  };

  const getStepStyle = (name: string) => {
    let style = cn(
      'flex',
      'flex-col',
      'space-y-10',
      'w-full',
      'mb-20',
      'items-start'
    );

    if (step !== name) {
      style = cn(style, 'hidden');
    }

    return style;
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>,
    error: boolean,
    onNext?: () => void
  ) => {
    if (e.key === 'Enter' && !error) {
      if (onNext) {
        onNext();
      } else {
        goNext();
      }
    }

    if (e.key === 'Escape') {
      goBack();
    }
  };

  const schema = Yup.object().shape({
    name: Yup.string().trim().required(t('@Steps.name-required')),
    phone: Yup.string()
      .trim()
      .required(t('@Steps.phone-required'))
      .matches(
        /^(\+55|55)?(\s|-)?(\()?(\d{2})?(\))?(\s|-)?(9\s?)?(\d{4})-(\d{4})$/,
        t('@Steps.phone-invalid')
      ),
    company_name: Yup.string()
      .trim()
      .required(t('@Steps.company-name-required')),
    slug: Yup.string()
      .trim()
      .required(t('@Steps.slug-required'))
      .matches(
        /^(?!https:\/\/)([a-zA-Z0-9-]+)(?!\.[a-zA-Z]+)$/,
        t('@Steps.slug-invalid')
      )
      .test(
        'verify-domain',
        t('@Steps.domain-already-exists'),
        (value) =>
          new Promise((resolve) =>
            resolve(
              !domains?.find((domain) => domain === `${value}.horarioz.com`)
            )
          )
      ),
  });

  const initialValues = {
    name: '',
    phone: '',
    company_name: '',
    slug: '',
  };

  const onSubmit = async (values: StepsInput) =>
    saveOnboard(
      {
        name: values.name,
        phone: values.phone.replace(/[^0-9]/g, ''),
        company_name: values.company_name,
        slug: values.slug,
      },
      {
        onError: (error) => toast.error(error.message),
        onSuccess: () => goNext(),
      }
    );

  const isTheCurrentStep = (name: string) => step === name;

  const Wrapper = ({
    title,
    error,
    children,
    onNext = goNext,
  }: {
    title: string;
    step: string;
    error?: boolean;
    children: React.ReactNode;
    onNext?: () => void;
  }) => {
    return (
      <div className={cn(getStepStyle(step), 'animate-fade-left', 'w-full')}>
        <button
          className="font-medium flex items-center"
          type="button"
          onClick={() => goBack()}
        >
          <ArrowUturnLeftIcon className="w-4 h-4 mr-3" /> {t('@Steps.back')}
        </button>
        <h1 className="text-3xl font-medium text-black ">{title}</h1>
        {children}
        <div className="space-x-5">
          <Button
            type="button"
            isLoading={isLoading}
            className="!rounded-full"
            onClick={onNext}
            disabled={error}
          >
            {t('@Steps.next')}
          </Button>
          <span className="text-gray-400">{t('@Steps.or-press-enter')}</span>
        </div>
      </div>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ errors, values, setFieldValue, handleSubmit }) => (
        <Form>
          <main className="h-full flex items-center justify-center">
            <div
              className={cn(
                getStepStyle(STEPS.WELCOME),
                'animate-fade-down',
                'items-center',
                'justify-center'
              )}
            >
              <div className="items-center flex flex-col">
                <Player
                  src={welcomeAnimation}
                  autoplay
                  loop
                  className="w-56 sm:w-96 "
                />
                <h1 className="text-3xl font-semibold text-black mb-5  mt-16 text-center">
                  {t('@Steps.welcome')}
                </h1>
                <p className="text-center text-gray-400 text-sm sm:text-base max-w-xl">
                  {t('@Steps.introduction')}
                </p>
              </div>

              <Button
                type="button"
                variant="primary"
                className="!rounded-full px-8 text-md"
                onClick={() => goNext()}
              >
                {t('@Steps.start')}
              </Button>
              <p className="text-center text-gray-400 text-sm  max-w-xs sm:max-w-md">
                {t('@Steps.you-can-change-later')}
              </p>
            </div>

            {isTheCurrentStep(STEPS.USER_FULL_NAME) && (
              <Wrapper
                title={t('@Steps.whats-your-name')}
                step={STEPS.USER_FULL_NAME}
                error={!values.name.trim() || !!errors?.name}
              >
                <div className="w-full">
                  <Input
                    id="name"
                    name="name"
                    className={getInputStyle()}
                    placeholder={t('@Steps.type-here')}
                    onKeyDown={(e) =>
                      handleKeyDown(e, !values.name.trim() || !!errors?.name)
                    }
                    autoFocus
                  />
                </div>
              </Wrapper>
            )}

            {isTheCurrentStep(STEPS.USER_PHONE_NUMBER) && (
              <Wrapper
                title={t('@Steps.whats-your-phone-number')}
                step={STEPS.USER_PHONE_NUMBER}
                error={!values.phone.trim() || !!errors?.phone}
              >
                <div className="w-full">
                  <Input
                    name="phone"
                    inputMode="numeric"
                    className={getInputStyle()}
                    placeholder={t('@Steps.type-here')}
                    onKeyDown={(e) =>
                      handleKeyDown(e, !values.phone.trim() || !!errors?.phone)
                    }
                    autoFocus
                    mask="+{55} (00) 00000-0000"
                  />
                </div>
              </Wrapper>
            )}

            {isTheCurrentStep(STEPS.COMPANY_NAME) && (
              <Wrapper
                title={t('@Steps.whats-your-company-name')}
                step={STEPS.COMPANY_NAME}
                error={!values.company_name.trim() || !!errors?.company_name}
              >
                <div className="w-full">
                  <Input
                    name="company_name"
                    className={getInputStyle()}
                    placeholder={t('@Steps.type-here')}
                    onKeyDown={(e) =>
                      handleKeyDown(
                        e,
                        !values.company_name.trim() || !!errors?.company_name
                      )
                    }
                    autoFocus
                  />
                </div>
              </Wrapper>
            )}

            {isTheCurrentStep(STEPS.COMPANY_SLUG) && (
              <Wrapper
                title={t('@Steps.whats-your-company-slug')}
                step={STEPS.COMPANY_SLUG}
                error={!values.slug.trim() || !!errors?.slug}
                onNext={handleSubmit}
              >
                <div className="flex items-center">
                  <Input
                    name="slug"
                    maxLength={20}
                    className={getInputStyle()}
                    onChange={(e) =>
                      setFieldValue('slug', e.target.value.toLowerCase())
                    }
                    placeholder={t('@Steps.type-here')}
                    onKeyDown={(e) =>
                      handleKeyDown(
                        e,
                        !values.slug.trim() || !!errors?.slug,
                        handleSubmit
                      )
                    }
                    autoFocus
                  />
                </div>
                <p className="text-gray-400 text-md max-w-4xl">
                  {t('@Steps.slug-information')}
                </p>
                <p className="text-gray-400">
                  {t('@Steps.your-url-will-be')}
                  <b className="font-medium text-gray-900 ml-2">
                    https://{values.slug}.horarioz.com
                  </b>
                </p>
              </Wrapper>
            )}

            {isTheCurrentStep(STEPS.FINISH) && (
              <div
                className={cn(
                  getStepStyle(STEPS.FINISH),
                  'items-center',
                  'animate-fade-up'
                )}
              >
                <div className="items-center flex flex-col pb-40">
                  <Player
                    src={successAnimation}
                    controls
                    autoplay
                    loop
                    className="w-56 sm:w-70"
                  />
                  <h1 className="text-3xl font-semibold text-black mb-7 mt-5 text-center">
                    {t('@Steps.you-done')}
                  </h1>
                  <p className="text-center text-gray-400 text-sm sm:text-base max-w-xl mb-12">
                    {t('@Steps.you-answered-all-questions')}
                  </p>
                  <Button
                    variant="primary"
                    aria-label={t('@Steps.go-to-my-dashboard')}
                    type="button"
                    className="!rounded-full col-span-3 w-80 text-md"
                    onClick={() => window.location.reload()}
                  >
                    {t('@Steps.go-to-my-dashboard')}
                  </Button>
                </div>
              </div>
            )}
          </main>
        </Form>
      )}
    </Formik>
  );
};
