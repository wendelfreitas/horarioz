import { StoryFn, Meta } from '@storybook/react';

import { Login } from './Login';

export default {
  title: 'Pages/Login',
  component: Login,
} as Meta;

export const Default: StoryFn = () => <Login />;
