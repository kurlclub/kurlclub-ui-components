'use client';

import * as React from 'react';

import { Separator as BaseSeparator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const Separator = React.forwardRef<
  React.ElementRef<typeof BaseSeparator>,
  React.ComponentPropsWithoutRef<typeof BaseSeparator>
>(({ className, ...props }, ref) => (
  <BaseSeparator
    ref={ref}
    className={cn('bg-primary-blue-400', className)}
    {...props}
  />
));
Separator.displayName = 'Separator';

export { Separator };
