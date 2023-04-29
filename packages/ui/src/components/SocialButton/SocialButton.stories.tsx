import { StoryFn, Meta } from '@storybook/react';

import { SocialButtonProps, SocialButton } from './SocialButton';

export default {
  title: 'Components/Social Button',
  component: SocialButton,
} as Meta;

export const Github: StoryFn<SocialButtonProps> = () => (
  <div className="w-full">
    <SocialButton network="github" title="Conecte-se com github" />
  </div>
);
