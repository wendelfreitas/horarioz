import { StoryFn, Meta } from '@storybook/react';

import { AlertProps, Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

export const Default: StoryFn<AlertProps> = (args) => <Alert {...args} />;

Default.args = {
  title: 'Warning Alert',
  type: 'warning',
  content: (
    <div>
      <p>Hello</p>
      <b>World</b>
    </div>
  ),
};

export const NoContent: StoryFn<AlertProps> = (args) => <Alert {...args} />;

NoContent.args = {
  title: 'No content here!',
  type: 'danger',
};

export const Success: StoryFn<AlertProps> = (args) => <Alert {...args} />;

Success.args = {
  title: 'Success Alert',
  type: 'success',
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
  est ea exercitationem non quia quaerat. Doloribus consequuntur nam
  nostrum architecto fugit placeat magnam totam rerum ex cupiditate
  distinctio, fuga repellat.`,
};

export const Warning: StoryFn<AlertProps> = (args) => <Alert {...args} />;

Warning.args = {
  title: 'Warning Alert',
  type: 'warning',
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
  est ea exercitationem non quia quaerat. Doloribus consequuntur nam
  nostrum architecto fugit placeat magnam totam rerum ex cupiditate
  distinctio, fuga repellat.`,
};

export const Danger: StoryFn<AlertProps> = (args) => <Alert {...args} />;

Danger.args = {
  title: 'Warning Alert',
  type: 'danger',
  content: `Sorry! An error ocurred =(`,
};
