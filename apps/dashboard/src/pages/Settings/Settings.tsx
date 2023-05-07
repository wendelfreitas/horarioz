import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { Input } from '@horarioz/ui';
import { Content } from '../../components/Content/Content';
import { Layout } from '../../components/Layout/Layout';

type CardProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

const Card = ({ children, title, description }: CardProps) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg border-gray-200 border ">
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-md font-semibold">{title}</h1>
        {description && (
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
};

export const SettingsPage = () => {
  return (
    <Layout>
      <Content
        submenus={[
          { name: 'Gerais', href: '#', current: true },
          { name: 'Integrações', href: '#', current: false },
          { name: 'Domínio Customizado', href: '#', current: false },
        ]}
      >
        <div className="space-y-5">
          {/* <h1 className="text-lg font-semibold">Configurações Gerais</h1> */}

          <Card
            title="Configurações Gerais"
            description="Aqui voce irá encontrar as configurações gerais de sua empresa como nome, categoria, domínio"
          >
            <div className="flex align-middle items-center gap-5 mb-8 ml-2">
              <img
                className="h-16 w-auto rounded-lg"
                src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
                alt="Synx"
              />
              <div>
                <h2 className="text-4xl font-bold">Acme</h2>
                <span className="text-gray-500">Tatto</span>
              </div>
            </div>
            <div className="grid grid-rows-1 gap-5">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-4">
                  <Input
                    placeholder="Nome da empresa"
                    label="Nome da empresa"
                    value="Acme"
                  />
                </div>
                <div className="col-span-4">
                  <Input
                    placeholder="Categoria"
                    label="Categoria"
                    value="Tatto"
                  />
                </div>

                <div className="col-span-4">
                  <Input
                    placeholder="Timezone"
                    label="Timezone"
                    value="America/Sao_Paulo"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-5 items-center">
                <div className="col-span-2">
                  <Input
                    placeholder="Meu site"
                    label="Meu site"
                    value="acme"
                    suffix="horarioz.com"
                    disabled
                  />
                </div>
                <div className="col-span-4 flex gap-2 h-full items-center">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                  <p className="text-gray-400 text-xs">
                    O site https://acme.horarioz.com não está disponível.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};
