import { StoryFn, Meta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

export const Default: StoryFn = () => (
  <Card>
    <p>Hello World</p>
  </Card>
);
