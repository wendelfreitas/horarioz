import { StoryFn, Meta } from '@storybook/react';

import { TimeField } from './TimeField';

export default {
  title: 'Components/TimeField',
  component: TimeField,
} as Meta;

export const Default: StoryFn = () => (
  <TimeField name="time" placeholder="HH:MM" />
);
export const Bigger: StoryFn = () => (
  <TimeField name="time" placeholder="HH:MM" bigger />
);
