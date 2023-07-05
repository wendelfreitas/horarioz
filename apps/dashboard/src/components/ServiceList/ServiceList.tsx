import {
  DataTable,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Loading,
} from '@horarioz/ui';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetServiceByCompanyId, useUser } from '@horarioz/hooks';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import {
  getNumberInCurrencyFormat,
  formatDurationToString,
} from '@horarioz/utils';
import noDataAnimation from '@assets/animations/no-data.json';
import { Database } from '@horarioz/supabase';
import { Player } from '@lottiefiles/react-lottie-player';
import { useServiceStore } from '@/stores/use-service-store/use-service-store';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

type Service = Database['public']['Tables']['services']['Row'];

export const ServiceList = () => {
  const { company } = useUser();
  const { t, i18n } = useTranslation();
  const { data, isLoading } = useGetServiceByCompanyId(company?.id, {
    enabled: !!company?.id,
  });
  const { setServices, services, open, edit, remove } = useServiceStore(
    (state) => state
  );

  useEffect(() => {
    setServices(data || []);
  }, [data, setServices]);

  const columns: ColumnDef<Service>[] = [
    {
      id: 'name',
      accessorKey: t('@ServiceList.name'),
      cell: ({ row }) => <p className="font-medium">{row.original.name}</p>,
      size: 300,
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: 'price',
      accessorKey: t('@ServiceList.price'),
      cell: ({ row }) => (
        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {row.original.price
            ? `R$ ${getNumberInCurrencyFormat(row.original.price, 'pt-BR')}`
            : t('@ServiceList.free')}
        </span>
      ),

      enableSorting: false,
      enableHiding: false,
    },

    {
      id: 'duration',
      accessorKey: t('@ServiceList.duration'),
      cell: ({ row }) =>
        formatDurationToString(row.original.duration, i18n.language),
      enableSorting: false,
      enableHiding: true,
    },

    {
      id: 'created_at',
      accessorKey: t('@ServiceList.created_at'),
      cell: ({ row }) => (
        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
          {format(new Date(row.original.created_at!), 'dd/MM/yyyy HH:mm')}
        </span>
      ),
      enableSorting: false,
      enableHiding: false,
    },

    {
      id: 'actions',
      size: 80,
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-1">
            <DropdownMenuLabel>{t('@ServiceList.actions')}</DropdownMenuLabel>
            <DropdownMenuItem
              className="text-sm hover:cursor-pointer hover:bg-gray-50 space-x-2"
              onClick={() => edit(row.original.id)}
            >
              <PencilSquareIcon className="h-4 w-4 mb-0.5" />{' '}
              <span>{t('@ServiceList.edit')}</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-sm text-red-500 hover:cursor-pointer hover:bg-gray-50 space-x-2"
              onClick={() => remove(row.original)}
            >
              <TrashIcon className="h-4 w-4" />{' '}
              <span>{t('@ServiceList.delete')}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center w-full h-[85vh] rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
        <Loading />
        <h3 className="mt-2 text-md font-semibold text-gray-900">
          Carregando Serviços
          {/* {t('@ServiceList.no-services')} */}
        </h3>
        <p className="mt-1 text-md text-gray-500">
          Estamos carregando seus serviços por favor aguarde.
          {/* {t('@ServiceList.lets-start-creating-service')} */}
        </p>
        <div className="mt-6 flex items-center justify-center">
          <p className="text-primary-700 text-xs italic">
            {/* Clique aqui para criar seu primeiro serviço
             */}
            O DNA humano, quando totalmente esticado, pode se estender por uma
            distância de cerca de 10 bilhões de quilômetros.
          </p>
        </div>
      </div>
    );
  }

  if (!services?.length) {
    return (
      <button
        type="button"
        onClick={() => open()}
        className="relative block w-full h-[85vh] rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 hover:cursor-pointer"
      >
        <Player src={noDataAnimation} autoplay loop className="w-56 sm:w-96" />
        <h3 className="mt-2 text-md font-semibold text-gray-900">
          {/* Sem serviços  */}
          {t('@ServiceList.no-services')}
        </h3>
        <p className="mt-1 text-md text-gray-500">
          {/* Voce não tem serviços cadastrados, comece criando seu primeiro
          serviço. */}

          {t('@ServiceList.lets-start-creating-service')}
        </p>
        <div className="mt-6 flex items-center justify-center">
          <p className="text-primary-700">
            {/* Clique aqui para criar seu primeiro serviço
             */}
            {t('@ServiceList.click-to-create-service')}
          </p>
        </div>
      </button>
    );
  }

  return <DataTable columns={columns} data={services} />;
};
