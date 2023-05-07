import { StoryFn, Meta } from '@storybook/react';

import { SignIn } from './SignIn';

export default {
  title: 'Pages/Sign In',
  component: SignIn,
} as Meta;

export const Default: StoryFn = () => <SignIn />;
