'use client';

import * as React from 'react';

import {
  Command as BaseCommand,
  CommandEmpty as BaseCommandEmpty,
  CommandGroup as BaseCommandGroup,
  CommandItem as BaseCommandItem,
  CommandList as BaseCommandList,
  CommandSeparator as BaseCommandSeparator,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';

const Command = React.forwardRef<
  React.ElementRef<typeof BaseCommand>,
  React.ComponentPropsWithoutRef<typeof BaseCommand>
>(({ className, ...props }, ref) => (
  <BaseCommand
    ref={ref}
    className={cn('bg-secondary-blue-700 text-white', className)}
    {...props}
  />
));
Command.displayName = 'Command';

const CommandList = BaseCommandList;
CommandList.displayName = 'CommandList';

const CommandEmpty = BaseCommandEmpty;
CommandEmpty.displayName = 'CommandEmpty';

const CommandGroup = BaseCommandGroup;
CommandGroup.displayName = 'CommandGroup';

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof BaseCommandSeparator>,
  React.ComponentPropsWithoutRef<typeof BaseCommandSeparator>
>(({ className, ...props }, ref) => (
  <BaseCommandSeparator
    ref={ref}
    className={cn('bg-primary-blue-400', className)}
    {...props}
  />
));
CommandSeparator.displayName = 'CommandSeparator';

const CommandItem = React.forwardRef<
  React.ElementRef<typeof BaseCommandItem>,
  React.ComponentPropsWithoutRef<typeof BaseCommandItem>
>(({ className, ...props }, ref) => (
  <BaseCommandItem
    ref={ref}
    className={cn(
      'hover:bg-secondary-blue-600 data-[selected=true]:bg-secondary-blue-600 cursor-pointer',
      className
    )}
    {...props}
  />
));
CommandItem.displayName = 'CommandItem';

export {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
};
