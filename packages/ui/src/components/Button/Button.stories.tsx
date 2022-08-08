import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Default: Story<ButtonProps> = (args) => (
  <Button {...args}>Hello Storybook</Button>
);
