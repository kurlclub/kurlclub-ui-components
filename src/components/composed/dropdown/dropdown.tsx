'use client';

import * as React from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuCheckboxItem as DropdownMenuCheckboxItemPrimitive,
  DropdownMenuContent as DropdownMenuContentPrimitive,
  DropdownMenuItem as DropdownMenuItemPrimitive,
  DropdownMenuLabel as DropdownMenuLabelPrimitive,
  DropdownMenuSeparator as DropdownMenuSeparatorPrimitive,
  DropdownMenuSubContent as DropdownMenuSubContentPrimitive,
  DropdownMenuSubTrigger as DropdownMenuSubTriggerPrimitive,
  DropdownMenuTrigger as DropdownMenuTriggerPrimitive,
} from '@/components/ui';
import { cn } from '@/lib/utils';

// Re-export primitives that don't need styling
export {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuRadioGroup,
  DropdownMenuShortcut,
} from '@/components/ui';

export const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuTriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuTriggerPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuTriggerPrimitive
    ref={ref}
    className={cn(
      'outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 data-[state=open]:ring-0',
      className
    )}
    {...props}
  />
));
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

// Styled components with Kurl Club colors
export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuContentPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuContentPrimitive
    ref={ref}
    className={cn(
      'bg-secondary-blue-600 border-secondary-blue-500 text-white',
      className
    )}
    {...props}
  />
));
DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuItemPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuItemPrimitive
    ref={ref}
    className={cn(
      'text-primary-blue-100 hover:bg-secondary-blue-500 hover:text-white focus:bg-secondary-blue-500 focus:text-white cursor-pointer',
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = 'DropdownMenuItem';

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuCheckboxItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuCheckboxItemPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuCheckboxItemPrimitive
    ref={ref}
    className={cn(
      'text-primary-blue-100 hover:bg-secondary-blue-500 hover:text-white focus:bg-secondary-blue-500 focus:text-white cursor-pointer',
      className
    )}
    {...props}
  />
));
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none text-primary-blue-100 hover:bg-secondary-blue-500 hover:text-white focus:bg-secondary-blue-500 focus:text-white data-disabled:pointer-events-none data-disabled:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center rounded-full border border-primary-blue-400">
      <DropdownMenuPrimitive.ItemIndicator>
        <div className="h-2.5 w-2.5 rounded-full bg-primary-green-500" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuLabelPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuLabelPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuLabelPrimitive
    ref={ref}
    className={cn('text-primary-blue-200', className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuSeparatorPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSeparatorPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuSeparatorPrimitive
    ref={ref}
    className={cn('bg-secondary-blue-400', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuSubTriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSubTriggerPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuSubTriggerPrimitive
    ref={ref}
    className={cn(
      'text-primary-blue-100 hover:bg-secondary-blue-500 hover:text-white focus:bg-secondary-blue-500 focus:text-white cursor-pointer',
      className
    )}
    {...props}
  />
));
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuSubContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSubContentPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuSubContentPrimitive
    ref={ref}
    className={cn(
      'bg-secondary-blue-600 border-secondary-blue-500 text-white',
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';
