import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect } from 'react';
import { Button } from '../Button/Button';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../Table/Table';

export type DataTableProps<TData, TValue> = {
  /**
   * An array of ColumnDef objects defining the table columns and how to render their contents.
   */
  columns: ColumnDef<TData, TValue>[];
  /**
   *  An array of objects representing the data records to be displayed in the table.
   */
  data: TData[];
  /**
   * A custom ReactNode or string to be displayed when the table is empty. Optional.
   */
  empty?: React.ReactNode | string;

  perPage?: number;
};

/**
 * Datable component to render table data for users
 */
export const DataTable = <TData, TValue>({
  columns,
  data,
  empty = 'No items',
  perPage = 14,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      pagination: {
        pageSize: perPage,
      },
    },
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div className="border overflow-x-auto rounded-md">
        <Table className="bg-primary-700 w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{
                        width:
                          header.getSize() !== 150
                            ? header.getSize()
                            : undefined,
                      }}
                      className="text-white text-xs"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="bg-white hover:bg-gray-100 text-xs rounded-full"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {empty}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 mt-2">
        <Button
          size="small"
          data-testid="previous"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          size="small"
          data-testid="next"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Próxima
        </Button>
      </div>
    </div>
  );
};
