import { PlusIcon } from '@heroicons/react/20/solid';
import { Button } from '@horarioz/ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/Card/Card';
import { Content } from '../../components/Content/Content';
import { Layout } from '../../components/Layout/Layout';
import { ServiceForm } from '../../components/ServiceForm/ServiceForm';

export const Services = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <Content>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h1 className="text-base sm:text-lg font-semibold">
              Create Service
            </h1>
            <Button
              onClick={() => setIsOpen(true)}
              size="small"
              className="flex items-center"
            >
              <PlusIcon className="h-4 w-4 sm:h-3 sm:w-3 mr-2" />{' '}
              {t('@Services.create-service')}
            </Button>
          </div>
          <Card>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed cumque
            inventore quidem alias impedit ex unde officiis vitae, consectetur
            ratione quas vel eligendi in qui obcaecati sunt minima
            necessitatibus molestias!
          </Card>
        </div>
        <div></div>
      </Content>
      <ServiceForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Layout>
  );
};
