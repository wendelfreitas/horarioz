import { Button, Drawer } from '@horarioz/ui';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { Input } from '../Input/Input';
import { CurrencyField } from '../CurrencyField/CurrencyField';
import { TimeField } from '../TimeField/TimeField';
import * as Yup from 'yup';
import cn from 'classnames';

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
  time: string;
};

const getCurrencyInFloatNumber = (currency: string) => {
  const result = currency.replace(/[$]|R\$/g, '').trim();

  const currencies = {
    USD: parseFloat(result.replace(',', '')),
    BRL: parseFloat(result.replace('.', '').replace(/,/g, '.')),
  };

  return currencies.BRL;
};

export const ServiceForm = ({ isOpen, onClose }: ServiceFormProps) => {
  const { t } = useTranslation();

  const initialValues = {
    name: '',
    time: '',
    price: '',
    description: '',
  };

  const schema = Yup.object().shape({
    name: Yup.string().trim().required(t('@ServicesForm.name-required')),

    price: Yup.string()
      .transform((value) => value.replace(/[$]|R\$/g, '').trim())
      .required(t('@ServicesForm.price-required')),

    time: Yup.string().required(t('@ServicesForm.time-required')),
  });

  const onSubmit = (values: ServiceInput) =>
    console.log({
      ...values,
      price: getCurrencyInFloatNumber(values.price),
    });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Form>
          <Drawer
            title={t('@ServiceForm.create-service')}
            description={t('@ServiceForm.create-service-description')}
            isOpen={isOpen}
            onClose={onClose}
            footer={
              <div className="flex flex-shrink-0 justify-end px-4 py-4 space-x-3">
                <Button type="button" variant="secondary" onClick={onClose}>
                  {t('@ServiceForm.cancel')}
                </Button>
                <Button type="submit" onClick={() => handleSubmit()}>
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
                placeholder={t('@ServiceForm.service-description-placeholder')}
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
                    name="time"
                  />
                </div>
              </div>
            </div>
          </Drawer>
        </Form>
      )}
    </Formik>
  );
};
