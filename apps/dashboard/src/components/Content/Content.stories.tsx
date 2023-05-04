import { StoryFn, Meta } from '@storybook/react';

import { ContentProps, Content } from './Content';

export default {
  title: 'Layout/Content',
  component: Content,
} as Meta;

export const Default: StoryFn<ContentProps> = () => (
  <Content>Hello World</Content>
);
