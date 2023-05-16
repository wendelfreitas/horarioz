import { StoryFn, Meta } from '@storybook/react';

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

export const Default: StoryFn<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

Default.args = {
  label: 'Full name',
  placeholder: 'Testing',
  required: true,
};

export const Disabled: StoryFn<InputProps> = (args) => (
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

export const WithError: StoryFn<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

WithError.args = {
  label: 'Full name',
  placeholder: 'Testing',
  error: 'Error text',
};

export const WithHelper: StoryFn<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

WithHelper.args = {
  label: 'Full name',
  placeholder: 'Testing',
  name: 'fullname',
};

export const WithoutPlaceholder: StoryFn<InputProps> = (args) => (
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

export const MultipleFields: StoryFn<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
    <br />
    <Input
      {...args}
      mask="R$ price"
      blocks={{
        price: {
          mask: Number,
          padFractionalZeros: true,
          thousandsSeparator: '.',
          radix: ',',
          mapToRadix: ['.'],
        },
      }}
    />
  </div>
);

MultipleFields.args = {
  label: 'Address',
};
