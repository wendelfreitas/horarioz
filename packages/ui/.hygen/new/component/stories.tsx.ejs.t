---
to: <%= absPath %>/<%= component_name %>.stories.tsx
---
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { <%= component_name %>Props, <%= component_name %> } from '.';

export default {
  title: '<%= component_name %>',
  component: <%= component_name %>,
} as Meta;

export const Default: Story<<%= component_name %>Props> = () => <<%= component_name %> />;
