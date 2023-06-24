import { StoryFn, Meta } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from './DataTable';

export default {
  title: 'Components/DataTable',
  component: DataTable,
} as Meta;

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  // ...
];

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
];

export const Default: StoryFn = () => (
  <DataTable data={payments} columns={columns} />
);

export const WithNoData: StoryFn = () => (
  <DataTable data={[]} columns={columns} />
);
