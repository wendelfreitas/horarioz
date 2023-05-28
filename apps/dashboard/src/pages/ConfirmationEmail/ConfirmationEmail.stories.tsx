import { StoryFn, Meta } from '@storybook/react';

import { ConfirmationEmail } from './ConfirmationEmail';

export default {
  title: 'Pages/Confirmation Email',
  component: ConfirmationEmail,
} as Meta;

export const Default: StoryFn = () => <ConfirmationEmail />;
