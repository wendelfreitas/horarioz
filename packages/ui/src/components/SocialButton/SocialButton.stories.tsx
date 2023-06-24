import { StoryFn, Meta } from '@storybook/react';

import { SocialButtonProps, SocialButton } from './SocialButton';

export default {
  title: 'Components/Social Button',
  component: SocialButton,
} as Meta;

export const Google: StoryFn<SocialButtonProps> = () => (
  <div className="w-full">
    <SocialButton network="google" title="Conecte-se com Google" />
  </div>
);
