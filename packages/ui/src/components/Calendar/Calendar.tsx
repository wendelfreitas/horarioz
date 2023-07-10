import { DayPicker } from 'react-day-picker';
import cn from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  const getSelectedDateStyle = cn(
    'bg-primary-600',
    'rounded-full',
    'text-white',
    'hover:bg-primary-700',
    'focus:bg-primary-700'
  );

  const getDayStyle = cn(
    'h-9',
    'w-9',
    'p-0',
    'aria-selected:opacity-100',
    'font-normal',
    'rounded-full',
    'hover:bg-gray-200',
    'select-none'
  );

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'capitalize space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'capitalize text-muted-foreground rounded-md w-9 font-normal text-xs',
        row: 'flex w-full mt-2',
        cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: getDayStyle,
        day_selected: getSelectedDateStyle,
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeftIcon className="h-4 w-4" {...props} />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRightIcon className="h-4 w-4" {...props} />
        ),
      }}
      {...props}
    />
  );
};
