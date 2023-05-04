import { StoryFn, Meta } from '@storybook/react';

import { AuthMiddlewareProps, AuthMiddleware } from './AuthMiddleware';

export default {
  title: 'AuthMiddleware',
  component: AuthMiddleware,
} as Meta;

export const Default: StoryFn<AuthMiddlewareProps> = () => (
  <AuthMiddleware>Hello Horarioz</AuthMiddleware>
);
