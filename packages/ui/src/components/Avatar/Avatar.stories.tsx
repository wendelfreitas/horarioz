import { StoryFn, Meta } from '@storybook/react';

import { AvatarProps, Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

export const Default: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

Default.args = {
  name: 'Wendel Freitas',
  src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
};

export const NoImage: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

NoImage.args = {
  name: 'Wendel Freitas',
  src: '',
};
