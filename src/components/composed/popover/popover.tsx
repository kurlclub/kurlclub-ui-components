'use client';

import * as React from 'react';

import {
  Popover as BasePopover,
  PopoverContent as BasePopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import { cn } from '@/lib/utils';

const Popover = BasePopover;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof BasePopoverContent>,
  React.ComponentPropsWithoutRef<typeof BasePopoverContent>
>(({ className, ...props }, ref) => (
  <BasePopoverContent
    ref={ref}
    className={cn(
      'bg-secondary-blue-700 border-primary-blue-400 text-white',
      className
    )}
    {...props}
  />
));
PopoverContent.displayName = 'PopoverContent';

export { Popover, PopoverTrigger, PopoverContent };
