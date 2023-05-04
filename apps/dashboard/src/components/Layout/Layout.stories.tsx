import { StoryFn, Meta } from '@storybook/react';

import { Layout } from './Layout';

export default {
  title: 'Layout/Structure',
  component: Layout,
} as Meta;

export const Default: StoryFn = () => (
  <div className="h-screen">
    <Layout />
  </div>
);
