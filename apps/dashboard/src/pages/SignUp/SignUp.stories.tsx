import { StoryFn, Meta } from '@storybook/react';

import { SignUp } from './SignUp';

export default {
  title: 'Pages/Sign Up',
  component: SignUp,
} as Meta;

export const Default: StoryFn = () => <SignUp />;
