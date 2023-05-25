import { StoryFn, Meta } from '@storybook/react';

import { TooltipProps, Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

export const Default: StoryFn<TooltipProps> = () => (
  <div className="w-full">
    <Tooltip content="This is an example to Tooltip">
      <Button>Button Test</Button>
    </Tooltip>
  </div>
);
