import { StoryFn, Meta } from '@storybook/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './DropdownMenu';

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
} as Meta;

export const Default: StoryFn = () => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <button>Trigger Menu</button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="space-y-1">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem className="text-sm hover:cursor-pointer hover:bg-gray-50 space-x-2">
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem className="text-sm text-red-500 hover:cursor-pointer hover:bg-gray-50 space-x-2">
        Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
