import { StoryFn, Meta } from '@storybook/react';

import { InputProps, Input } from '@suwilo/ui';

export default {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    helper: {
      control: {
        type: 'text',
      },
    },
    error: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const Default: StoryFn<InputProps> = (args: InputProps) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

Default.args = {
  label: 'Full name',
  placeholder: 'Testing',
  required: true,
};

export const Disabled: StoryFn<InputProps> = (args: InputProps) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

Disabled.args = {
  label: 'Full name',
  placeholder: 'Testing',
  required: true,
  disabled: true,
};
