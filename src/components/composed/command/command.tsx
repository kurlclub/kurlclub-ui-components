'use client';

import * as React from 'react';

import type { DialogProps } from '@radix-ui/react-dialog';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Command as CommandPrimitive } from 'cmdk';

import {
  Command as BaseCommand,
  CommandEmpty as BaseCommandEmpty,
  CommandGroup as BaseCommandGroup,
  CommandItem as BaseCommandItem,
  CommandList as BaseCommandList,
  CommandSeparator as BaseCommandSeparator,
  CommandShortcut as BaseCommandShortcut,
  Dialog,
  DialogContent,
} from '@/components/ui';
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

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 bg-secondary-blue-700 border-primary-blue-400">
        <Command className="**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 **:[[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 **:[[cmdk-input]]:h-12 **:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b" cmdk-input-wrapper="">
    <MagnifyingGlassIcon className="ml-3 mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

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

const CommandShortcut = BaseCommandShortcut;
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
};
