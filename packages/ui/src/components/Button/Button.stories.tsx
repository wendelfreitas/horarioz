import { StoryFn, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Default: StoryFn<ButtonProps> = (args) => (
  <div className="grid grid-cols-6 gap-6">
    <Button {...args} className="w-full" />
  </div>
);

Default.args = {
  variant: 'primary',
  children: 'Hello World',
};

export const Loading: StoryFn<ButtonProps> = (args) => (
  <div className="grid grid-cols-6 gap-6">
    <Button {...args} className="w-full py-5" />
  </div>
);

Loading.args = {
  variant: 'primary',
  children: 'Hello World',
  isLoading: true,
};
