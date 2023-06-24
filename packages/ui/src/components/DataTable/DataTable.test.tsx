import { render, screen } from '@testing-library/react';
import { DataTable } from './DataTable';
import { ColumnDef } from '@tanstack/react-table';

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

describe('<DataTable />', () => {
  it('should render component successfully with no data', () => {
    render(<DataTable data={[]} columns={columns} />);
    const text = screen.getByText('No items');

    expect(text).toBeInTheDocument();
  });

  it('should render all data rows', () => {
    render(<DataTable data={payments} columns={columns} />);
    const text = screen.getByText('pending');

    expect(text).toBeInTheDocument();
  });
});
