import { StoryFn, Meta } from '@storybook/react';

import { SignUpForm } from './SignUpForm';

export default {
  title: 'Pages/Sign Up Form',
  component: SignUpForm,
} as Meta;

export const Default: StoryFn = () => <SignUpForm />;
