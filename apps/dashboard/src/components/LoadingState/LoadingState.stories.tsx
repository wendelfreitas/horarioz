import { StoryFn, Meta } from '@storybook/react';

import { LoadingState } from './LoadingState';

export default {
  title: 'Components/LoadingState',
  component: LoadingState,
} as Meta;

export const Default: StoryFn = () => (
  <LoadingState title="Hello Horarioz" description="That is loading" />
);
