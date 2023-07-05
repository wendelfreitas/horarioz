import { StoryFn, Meta } from '@storybook/react';

import { Services } from './Services';

export default {
  title: 'Pages/Services',
  component: Services,
} as Meta;

export const Default: StoryFn = () => <Services />;
