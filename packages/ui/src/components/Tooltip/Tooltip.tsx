import { ReactNode } from 'react';
import cn from 'classnames';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

/**
 * Props for the Tooltip component.
 */
export interface TooltipProps {
  /**
   * The distance (in pixels) between the tooltip and the target element.
   */
  distance: number;
  /**
   * The content to be displayed in the tooltip.
   */
  content: string;
  /**
   * The delay (in milliseconds) before the tooltip appears when hovering over the target element.
   * @default 500
   */
  delay?: number;
  /**
   * The child elements or component that will trigger the display of the tooltip when hovered over.
   */
  children: ReactNode;
}

/**
 * Tooltip Component
 *
 * A UI component that provides additional information or context when hovering or interacting with another element.
 * It renders a tooltip that appears near the target element and displays the specified content.
 *
 * @param props - The props for the Tooltip component.
 * @returns The rendered Tooltip component.
 */
export const Tooltip = ({
  content,
  children,
  distance,
  delay = 500,
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider delayDuration={delay}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <span className="mt-4">{children}</span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={distance}
            className={cn(
              'z-50',
              'bg-white',
              'border',
              'animate-duration-300',
              'will-change-transform',
              'text-sm',
              'animate-fade',
              'inline-flex',
              'items-center',
              'rounded-md',
              'px-4',
              'py-2.5'
            )}
          >
            <span className="text-xs">{content}</span>
            <TooltipPrimitive.Arrow className="fill-current text-gray-200 opacity-100" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
