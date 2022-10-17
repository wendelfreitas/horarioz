import { Story, Meta } from '@storybook/react/types-6-0';

import { ContentProps, Content } from './Content';

export default {
  title: 'Layout/Content',
  component: Content,
} as Meta;

export const Default: Story<ContentProps> = () => (
  <Content>Hello World</Content>
);
