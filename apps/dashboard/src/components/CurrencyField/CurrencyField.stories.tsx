import { StoryFn, Meta } from '@storybook/react';

import { CurrencyField } from './CurrencyField';

export default {
  title: 'Components/CurrencyField',
  component: CurrencyField,
} as Meta;

export const Default: StoryFn = () => <CurrencyField name="currency" />;
