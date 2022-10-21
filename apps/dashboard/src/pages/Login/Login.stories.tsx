import { Story, Meta } from '@storybook/react/types-6-0';

import { Login } from './Login';

export default {
  title: 'Pages/Login',
  component: Login,
} as Meta;

export const Default: Story = () => <Login />;
