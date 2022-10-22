import { Story, Meta } from '@storybook/react/types-6-0';

import { SocialButtonProps, SocialButton } from './SocialButton';

export default {
  title: 'Components/Social Button',
  component: SocialButton,
} as Meta;

export const Github: Story<SocialButtonProps> = () => (
  <div className="w-full">
    <SocialButton network="github" title="Conecte-se com github" />
  </div>
);
