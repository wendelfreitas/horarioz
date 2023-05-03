import { Story, Meta } from '@storybook/react/types-6-0';

import { AuthMiddlewareProps, AuthMiddleware } from './AuthMiddleware';

export default {
  title: 'AuthMiddleware',
  component: AuthMiddleware,
} as Meta;

export const Default: Story<AuthMiddlewareProps> = () => <AuthMiddleware />;
