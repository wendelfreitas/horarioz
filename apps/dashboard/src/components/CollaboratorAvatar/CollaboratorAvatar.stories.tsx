import { Story, Meta } from '@storybook/react/types-6-0';

import {
  CollaboratorAvatar,
  CollaboratorAvatarProps,
} from './CollaboratorAvatar';

export default {
  title: 'Components/Collaborator Avatar',
  component: CollaboratorAvatar,
} as Meta;

export const Default: Story<CollaboratorAvatarProps> = (args) => (
  <CollaboratorAvatar {...args} />
);

Default.args = {
  name: 'Wendel Freitas',
  src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
};

export const NoImage: Story<CollaboratorAvatarProps> = (args) => (
  <CollaboratorAvatar {...args} />
);

NoImage.args = {
  name: 'Wendel Freitas',
  src: '',
};
