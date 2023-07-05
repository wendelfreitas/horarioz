import { Button, Drawer } from '@horarioz/ui';
import { useTranslation } from 'react-i18next';
import { Form, Formik, FormikHelpers } from 'formik';
import { toast } from 'react-hot-toast';
import { Input } from '../Input/Input';
import { CurrencyField } from '../CurrencyField/CurrencyField';
import { TimeField } from '../TimeField/TimeField';
import {
  useCreateService,
  useGetServiceById,
  useUpdateService,
  useUser,
} from '@horarioz/hooks';
import {
  getCurrencyInFloatNumber,
  getNumberInCurrencyFormat,
} from '@horarioz/utils';
import * as Yup from 'yup';
import { KeyboardEvent } from 'react';
import { useServiceStore } from '@/stores/use-service-store/use-service-store';

type ServiceFormProps = {
  serviceId?: string;
  isOpen: boolean;
  onClose: () => void;
};

type ServiceInput = {
  name: string;
  description: string;
  price: string;
  duration: string;
};

export const ServiceForm = ({
  serviceId,
  onClose,
  isOpen,
}: ServiceFormProps) => {
  const serviceStore = useServiceStore((state) => state);
  const isEditing = !!serviceId;

  const { t, i18n } = useTranslation();

  const { mutate: createService, isLoading: isCreatingService } =
    useCreateService();
  const { mutate: updateService, isLoading: isUpdatingService } =
    useUpdateService({
      column: 'id',
      value: serviceId,
    });

  const { data } = useGetServiceById(serviceId);
  const { company } = useUser();

  const initialValues = {
    name: data?.service?.name || '',
    duration: data?.service?.duration || '',
    price: data?.service?.price
      ? getNumberInCurrencyFormat(Number(data?.service?.price), i18n.language)
      : '',
    description: data?.service?.description || '',
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
      if (serviceId) {
        updateService(
          {
            ...values,
            price: getCurrencyInFloatNumber(values.price, i18n.language),
          },
          {
            onSuccess: ({ data: service }) => {
              if (service) {
                onClose();
                serviceStore.updateService(service);
                toast.success(
                  t('@ServiceForm.service-updated-successfully', {
                    name: service?.name,
                  })
                );
              }
            },
          }
        );
      } else {
        createService(
          {
            ...values,
            company_id: company?.id,
            price: getCurrencyInFloatNumber(values.price, i18n.language),
          },
          {
            onSuccess: ({ data: service }) => {
              if (service) {
                onClose();
                serviceStore.addService(service);
                toast.success(
                  t('@ServiceForm.service-created-successfully', {
                    name: service?.name,
                  })
                );
                resetForm();
              }
            },
          }
        );
      }
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, resetForm }) => {
        const onCloseDrawer = () => {
          onClose();
          resetForm();
        };

        const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        };

        return (
          <Form onKeyDown={onKeyDown}>
            <Drawer
              title={t(
                isEditing
                  ? '@ServiceForm.edit-service'
                  : '@ServiceForm.create-service'
              )}
              unmount
              description={t('@ServiceForm.create-service-description')}
              isOpen={isOpen}
              onClose={onCloseDrawer}
              footer={
                <div className="flex flex-shrink-0 justify-end px-4 py-4 space-x-3">
                  <div>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={onCloseDrawer}
                    >
                      {t('@ServiceForm.cancel')}
                    </Button>
                    <span className="sr-only">
                      {t('@ServiceForm.close-service-form-a11y')}
                    </span>
                  </div>

                  <Button
                    type="submit"
                    className="w-36"
                    isLoading={isCreatingService || isUpdatingService}
                    data-testid={
                      isEditing
                        ? 'edit-service-button'
                        : 'create-service-button'
                    }
                    onClick={() => handleSubmit()}
                  >
                    {t(
                      isEditing
                        ? '@ServiceForm.edit-service'
                        : '@ServiceForm.create-service'
                    )}
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
                    <TimeField bigger placeholder="HH:MM" name="duration" />
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
