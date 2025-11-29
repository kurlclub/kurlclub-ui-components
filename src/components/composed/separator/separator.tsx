'use client';

import * as React from 'react';

import { Separator as SeparatorPrimitive } from '@/components/ui';
import { cn } from '@/lib/utils';

export const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive>
>(({ className, ...props }, ref) => (
  <SeparatorPrimitive
    ref={ref}
    className={cn('bg-primary-blue-400', className)}
    {...props}
  />
));
Separator.displayName = 'Separator';
