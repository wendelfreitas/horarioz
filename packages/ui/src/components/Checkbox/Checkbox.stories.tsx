import { StoryFn, Meta } from '@storybook/react';

import { CheckboxProps, Checkbox } from './Checkbox';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta;

export const Default: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

Default.args = {
  name: 'terms',
  label: 'Accept terms',
};

export const Disabled: StoryFn<CheckboxProps> = (args) => (
  <Checkbox {...args} />
);

Disabled.args = {
  name: 'terms',
  label: 'Accept terms',
  disabled: true,
};
