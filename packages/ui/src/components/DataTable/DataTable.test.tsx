import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    email: 'wendel@example.com',
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

  it('should render all data rows', async () => {
    render(<DataTable data={payments} columns={columns} perPage={1} />);
    const previous = screen.getByTestId('previous');
    const next = screen.getByTestId('next');

    userEvent.click(next);

    await waitFor(() =>
      expect(screen.getByText('example@gmail.com')).toBeInTheDocument()
    );

    userEvent.click(previous);

    await waitFor(() =>
      expect(screen.getByText('wendel@example.com')).toBeInTheDocument()
    );

    expect(previous).toBeInTheDocument();
    expect(next).toBeInTheDocument();
  });
});
