import { Story, Meta } from '@storybook/react/types-6-0';

import { InputProps, Input } from './Input';

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

export const Default: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

Default.args = {
  label: 'Full name',
  placeholder: 'Testing',
  required: true,
};

export const Disabled: Story<InputProps> = (args) => (
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

export const WithError: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

WithError.args = {
  label: 'Full name',
  placeholder: 'Testing',
  error: 'Error text',
};

export const WithHelper: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

WithHelper.args = {
  label: 'Full name',
  placeholder: 'Testing',
  helper: 'This is a helper text',
  name: 'fullname',
};

export const WithoutPlaceholder: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input
      {...args}
      placeholder="Address without placeholder"
      id="address"
      label="Address without placeholder"
    />
    <br />
    <Input
      {...args}
      placeholder="With"
      id="with"
      label="Address with placeholder"
    />
  </div>
);

export const MultipleFields: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
    <br />
    <Input {...args} />
  </div>
);

MultipleFields.args = {
  label: 'Address',
};
