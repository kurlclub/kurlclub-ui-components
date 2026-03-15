'use client';

import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className
      )}
      {...props}
    />
  );
}

type SheetInteractOutsideEvent = Parameters<
  NonNullable<
    React.ComponentProps<typeof SheetPrimitive.Content>['onInteractOutside']
  >
>[0];
type SheetPointerDownOutsideEvent = Parameters<
  NonNullable<
    React.ComponentProps<typeof SheetPrimitive.Content>['onPointerDownOutside']
  >
>[0];
type SheetFocusOutsideEvent = Parameters<
  NonNullable<
    React.ComponentProps<typeof SheetPrimitive.Content>['onFocusOutside']
  >
>[0];

function SheetContent({
  className,
  children,
  side = 'right',
  onInteractOutside,
  onFocusOutside,
  onPointerDownOutside,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
}) {
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const shouldPreventOutside = React.useCallback((event: Event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    const dialogAncestor = target?.closest?.('[role="dialog"]');

    if (
      dialogAncestor &&
      contentRef.current &&
      dialogAncestor !== contentRef.current
    ) {
      return true;
    }

    if (typeof document !== 'undefined') {
      const openDialogs = document.querySelectorAll(
        '[data-state="open"][role="dialog"]'
      );
      if (openDialogs.length > 1) {
        return true;
      }
    }

    return false;
  }, []);

  const handleInteractOutside: React.ComponentProps<
    typeof SheetPrimitive.Content
  >['onInteractOutside'] = React.useCallback(
    (event: SheetInteractOutsideEvent) => {
      if (shouldPreventOutside(event)) {
        event.preventDefault();
      }
      onInteractOutside?.(event);
    },
    [onInteractOutside, shouldPreventOutside]
  );

  const handlePointerDownOutside: React.ComponentProps<
    typeof SheetPrimitive.Content
  >['onPointerDownOutside'] = React.useCallback(
    (event: SheetPointerDownOutsideEvent) => {
      if (shouldPreventOutside(event)) {
        event.preventDefault();
      }
      onPointerDownOutside?.(event);
    },
    [onPointerDownOutside, shouldPreventOutside]
  );

  const handleFocusOutside: React.ComponentProps<
    typeof SheetPrimitive.Content
  >['onFocusOutside'] = React.useCallback(
    (event: SheetFocusOutsideEvent) => {
      if (shouldPreventOutside(event)) {
        event.preventDefault();
      }
      onFocusOutside?.(event);
    },
    [onFocusOutside, shouldPreventOutside]
  );

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        ref={contentRef}
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          side === 'right' &&
            'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
          side === 'left' &&
            'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
          side === 'top' &&
            'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
          side === 'bottom' &&
            'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
          className
        )}
        onInteractOutside={handleInteractOutside}
        onPointerDownOutside={handlePointerDownOutside}
        onFocusOutside={handleFocusOutside}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1.5 p-4', className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
