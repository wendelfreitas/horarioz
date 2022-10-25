import { Story, Meta } from '@storybook/react/types-6-0';

import { CheckboxProps, Checkbox } from './Checkbox';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta;

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

Default.args = {
  name: 'terms',
  label: 'Accept terms',
};

export const Disabled: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

Disabled.args = {
  name: 'terms',
  label: 'Accept terms',
  disabled: true,
};
