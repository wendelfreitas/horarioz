import { StoryFn, Meta } from '@storybook/react';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { CalendarProps, Calendar } from './Calendar';

export default {
  title: 'Calendar',
  component: Calendar,
} as Meta;

export const Default: StoryFn<CalendarProps> = () => (
  <Calendar
    selected={new Date('2023-05-05')}
    month={new Date('2023-05-05')}
    mode="single"
  />
);

export const PortugueseVersion: StoryFn<CalendarProps> = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      selected={selected}
      onSelect={(date) => {
        setSelected(date);
        setMonth(date);
      }}
      mode="single"
      locale={ptBR}
      month={month}
      onMonthChange={setMonth}
    />
  );
};
