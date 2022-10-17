import { Story, Meta } from '@storybook/react/types-6-0';

import { Layout } from './Layout';

export default {
  title: 'Layout/Structure',
  component: Layout,
} as Meta;

export const Default: Story = () => (
  <div className="h-screen">
    <Layout />
  </div>
);
