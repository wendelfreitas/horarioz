import { ReactNode } from 'react';
import cn from 'classnames';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export type TooltipProps = {
  content: string;
  children: ReactNode;
};

export const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <span>{children}</span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={5}
            className={cn(
              'bg-white',
              'border-2',
              'p-2',
              'animate-duration-300',
              'will-change-transform',
              'text-sm',
              'rounded',
              'radix-side-top:animate-slide-down-fade',
              'radix-side-right:animate-slide-left-fade',
              'radix-side-bottom:animate-slide-up-fade',
              'radix-side-left:animate-slide-right-fade',
              'inline-flex items-center rounded-md px-4 py-2.5'
            )}
          >
            <span>{content}</span>
            <TooltipPrimitive.Arrow className="fill-current text-gray-200 opacity-100" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
