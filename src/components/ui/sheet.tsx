'use client';

import * as React from 'react';

import { type VariantProps, cva } from 'class-variance-authority';
import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

type SheetInteractOutsideEvent = Parameters<
  NonNullable<
    React.ComponentPropsWithoutRef<
      typeof SheetPrimitive.Content
    >['onInteractOutside']
  >
>[0];
type SheetPointerDownOutsideEvent = Parameters<
  NonNullable<
    React.ComponentPropsWithoutRef<
      typeof SheetPrimitive.Content
    >['onPointerDownOutside']
  >
>[0];
type SheetFocusOutsideEvent = Parameters<
  NonNullable<
    React.ComponentPropsWithoutRef<
      typeof SheetPrimitive.Content
    >['onFocusOutside']
  >
>[0];

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      side = 'right',
      className,
      children,
      onInteractOutside,
      onFocusOutside,
      onPointerDownOutside,
      ...props
    },
    ref
  ) => {
    const contentRef = React.useRef<HTMLDivElement | null>(null);

    const shouldPreventOutside = React.useCallback((event: Event) => {
      const target =
        event.target instanceof HTMLElement ? event.target : null;
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

    const handleInteractOutside: React.ComponentPropsWithoutRef<
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

    const handlePointerDownOutside: React.ComponentPropsWithoutRef<
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

    const handleFocusOutside: React.ComponentPropsWithoutRef<
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
          ref={(node) => {
            contentRef.current = node as HTMLDivElement | null;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              (ref as React.MutableRefObject<typeof node | null>).current =
                node;
            }
          }}
          className={cn(sheetVariants({ side }), className)}
          onInteractOutside={handleInteractOutside}
          onPointerDownOutside={handlePointerDownOutside}
          onFocusOutside={handleFocusOutside}
          {...props}
        >
          {children}
        </SheetPrimitive.Content>
      </SheetPortal>
    );
  }
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
