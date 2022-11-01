import { Story, Meta } from '@storybook/react/types-6-0';

import { InputProps, Input } from '@suwilo/ui';
import { Form, Formik } from 'formik';

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
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={() => console.log('submited')}
    >
      <Form>
        <Input {...args} />
      </Form>
    </Formik>
  </div>
);

Default.args = {
  label: 'Full name',
  placeholder: 'Testing',
  required: true,
};

export const Disabled: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={() => console.log('submited')}
    >
      <Form>
        <Input {...args} />
      </Form>
    </Formik>
  </div>
);

Disabled.args = {
  label: 'Full name',
  placeholder: 'Testing',
  required: true,
  disabled: true,
};
