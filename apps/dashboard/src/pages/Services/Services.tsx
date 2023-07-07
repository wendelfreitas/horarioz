import { PlusIcon } from '@heroicons/react/20/solid';
import { Button } from '@horarioz/ui';
import { useTranslation } from 'react-i18next';
import { Content } from '@/components/Content/Content';
import { Layout } from '@/components/Layout/Layout';
import { ServiceForm } from '@/components/ServiceForm/ServiceForm';
import { ServiceList } from '@/components/ServiceList/ServiceList';
import { useServiceStore } from '@/stores/use-service-store/use-service-store';
import { DeleteServiceModal } from '@/components/DeleteServiceModal/DeleteServiceModal';

export const Services = () => {
  const { t } = useTranslation();
  const serviceStore = useServiceStore((state) => state);

  return (
    <Layout>
      <Content>
        <div>
          <div className="space-y-5 mb-3">
            <div className="flex items-center justify-between">
              <h1 className="text-base sm:text-lg font-semibold">
                {t('@Services.my-services')}
              </h1>
              <Button
                onClick={() => serviceStore.open()}
                size="small"
                className="flex items-center"
              >
                <PlusIcon className="h-4 w-4 sm:h-3 sm:w-3 mr-2" />{' '}
                {t('@Services.create-service')}
              </Button>
            </div>
          </div>
          <ServiceList />
        </div>
      </Content>
      <ServiceForm
        serviceId={serviceStore.editing}
        isOpen={serviceStore.isCreateServiceFormOpen}
        onClose={() => serviceStore.close()}
      />
      <DeleteServiceModal
        isOpen={serviceStore.isDeletingServiceModalOpen}
        service={serviceStore.removing}
        onClose={() => serviceStore.close()}
      />
    </Layout>
  );
};
