import { StoryFn, Meta } from '@storybook/react';

import { Onboarding } from './Onboarding';

export default {
  title: 'Pages/Onboarding',
  component: Onboarding,
} as Meta;

export const Default: StoryFn = () => <Onboarding />;
