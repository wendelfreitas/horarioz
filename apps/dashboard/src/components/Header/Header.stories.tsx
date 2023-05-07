import { StoryFn, Meta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
} as Meta;

export const Default: StoryFn = () => <Header />;
