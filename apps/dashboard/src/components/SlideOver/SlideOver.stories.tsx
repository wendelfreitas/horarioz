import { Story, Meta } from '@storybook/react/types-6-0';

import { SlideOverProps, SlideOver } from './SlideOver';

export default {
  title: 'Layout/SlideOver',
  component: SlideOver,
} as Meta;

export const Default: Story<SlideOverProps> = () => (
  <SlideOver>
    <p>Hello World</p>
  </SlideOver>
);
