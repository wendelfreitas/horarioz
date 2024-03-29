import { StoryFn, Meta } from '@storybook/react';

import { SubmenuProps, Submenu } from './Submenu';

export default {
  title: 'Content/Submenu',
  component: Submenu,
} as Meta;

export const Default: StoryFn<SubmenuProps> = () => (
  <div className="relative">
    <Submenu
      menus={[
        {
          name: 'Submenu',
          href: '/submenu',
          current: false,
        },
      ]}
    />
  </div>
);
