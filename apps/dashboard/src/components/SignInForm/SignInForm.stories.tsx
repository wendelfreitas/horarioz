import { StoryFn, Meta } from '@storybook/react';

import { SignInForm } from './SignInForm';

export default {
  title: 'Pages/Sign In Form',
  component: SignInForm,
} as Meta;

export const Default: StoryFn = () => <SignInForm />;
