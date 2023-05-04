import { StoryFn, Meta } from '@storybook/react';

import { SlideOverProps, SlideOver } from './SlideOver';

export default {
  title: 'Layout/SlideOver',
  component: SlideOver,
} as Meta;

export const Default: StoryFn<SlideOverProps> = () => (
  <SlideOver>
    <p>Hello World</p>
  </SlideOver>
);
