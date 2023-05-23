import { StoryFn, Meta } from '@storybook/react';

import { TooltipProps, Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

export const Default: StoryFn<TooltipProps> = () => (
  <div className="w-full">
    <Tooltip content="This is an example to Tooltip">
      <button>Teste</button>
    </Tooltip>
  </div>
);
