---
to: <%= absPath %>/<%= component_name %>.stories.tsx
---
import { StoryFn, Meta } from '@storybook/react';

import { <%= component_name %>Props, <%= component_name %> } from './<%= component_name %>';

export default {
  title: '<%= component_name %>',
  component: <%= component_name %>,
} as Meta;

export const Default: StoryFn<<%= component_name %>Props> = () => <<%= component_name %> />;


