---
to: <%= absPath %>/<%= component_name %>.stories.tsx
---
import { Story, Meta } from '@storybook/react/types-6-0';

import { <%= component_name %>Props, <%= component_name %> } from './<%= component_name %>';

export default {
  title: '<%= component_name %>',
  component: <%= component_name %>,
} as Meta;

export const Default: Story<<%= component_name %>Props> = () => <<%= component_name %> />;
