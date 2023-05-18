import { StoryFn, Meta } from '@storybook/react';

import { Steps } from './Steps';

export default {
  title: 'Components/Steps',
  component: Steps,
} as Meta;

export const Default: StoryFn = () => <Steps />;
