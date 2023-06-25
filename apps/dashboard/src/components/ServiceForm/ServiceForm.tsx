import { Button, Drawer } from '@horarioz/ui';
import { useTranslation } from 'react-i18next';
import { Form, Formik, FormikHelpers } from 'formik';
import { toast } from 'react-hot-toast';
import { Input } from '../Input/Input';
import { CurrencyField } from '../CurrencyField/CurrencyField';
import { TimeField } from '../TimeField/TimeField';
import { useCreateService, useUser } from '@horarioz/hooks';
import * as Yup from 'yup';
import cn from 'classnames';
import i18n from '@/configs/i18n';

type ServiceFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const getInputStyle = () =>
  cn(
    'w-full',
    'h-16',
    'text-5xl',
    'font-semibold',
    'bg-transparent',
    'text-gray-900',
    'placeholder:text-gray-300',
    'caret-gray-300',
    'text-center',
    'focus:outline-none'
  );

type ServiceInput = {
  name: string;
  description: string;
  price: string;
  duration: string;
};

const getCurrencyInFloatNumber = (currency: string) => {
  const result = currency.replace(/[$]|R\$/g, '').trim();

  const currencies: {
    [key: string]: number;
  } = {
    USD: parseFloat(result.replace(',', '')),
    BRL: parseFloat(result.replace('.', '').replace(/,/g, '.')),
  };

  return currencies[i18n.language];
};

export const ServiceForm = ({ isOpen, onClose }: ServiceFormProps) => {
  const { t } = useTranslation();
  const { mutate: createService, isLoading } = useCreateService();
  const { company } = useUser();

  const initialValues = {
    name: '',
    duration: '',
    price: '',
    description: '',
  };

  const schema = Yup.object().shape({
    name: Yup.string().trim().required(t('@ServiceForm.name-required')),

    price: Yup.string()
      .transform((value) => value.replace(/[$]|R\$/g, '').trim())
      .required(t('@ServiceForm.price-required')),

    duration: Yup.string()
      .required(t('@ServiceForm.time-required'))
      .matches(
        /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
        t('@ServiceForm.duration-invalid-format')
      ),
  });

  const onSubmit = (
    values: ServiceInput,
    { resetForm }: FormikHelpers<ServiceInput>
  ) => {
    if (company) {
      createService(
        {
          ...values,
          company_id: company?.id,
          price: getCurrencyInFloatNumber(values.price),
        },
        {
          onSuccess: ({ data: service }) => {
            resetForm();
            onClose();
            toast.success(
              t('@ServiceForm.service-created-successfully', {
                name: service?.name,
              })
            );
          },
        }
      );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, resetForm }) => {
        const onCloseDrawer = () => {
          resetForm();
          onClose();
        };

        return (
          <Form>
            <Drawer
              title={t('@ServiceForm.create-service')}
              description={t('@ServiceForm.create-service-description')}
              isOpen={isOpen}
              onClose={onCloseDrawer}
              footer={
                <div className="flex flex-shrink-0 justify-end px-4 py-4 space-x-3">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={onCloseDrawer}
                  >
                    {t('@ServiceForm.cancel')}
                  </Button>
                  <Button
                    type="submit"
                    className="w-36"
                    isLoading={isLoading}
                    data-testid="create-service-button"
                    onClick={() => handleSubmit()}
                  >
                    {t('@ServiceForm.create-service')}
                  </Button>
                </div>
              }
            >
              <div>
                <Input
                  label={t('@ServiceForm.service-name')}
                  placeholder={t('@ServiceForm.service-name-placeholder')}
                  name="name"
                  required
                />

                <CurrencyField
                  label={t('@ServiceForm.service-price')}
                  required
                  name="price"
                />

                <Input
                  as="textarea"
                  rows={5}
                  name="description"
                  label={t('@ServiceForm.service-description')}
                  placeholder={t(
                    '@ServiceForm.service-description-placeholder'
                  )}
                />

                <div className="justify-start items-start flex flex-col">
                  <label htmlFor="time" className="text-sm text-gray-500">
                    {t('@ServiceForm.estimated-duration')}
                  </label>

                  <div>
                    <TimeField
                      className={getInputStyle()}
                      placeholder="HH:MM"
                      autoFocus={isOpen}
                      name="duration"
                    />
                  </div>
                </div>
              </div>
            </Drawer>
          </Form>
        );
      }}
    </Formik>
  );
};
