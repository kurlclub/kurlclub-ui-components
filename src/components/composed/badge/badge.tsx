import * as React from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border p-1.5 pr-2 text-sm leading-normal text-white font-normal transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default text-nowrap',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary-green-700 text-white hover:bg-primary-green-600',
        secondary:
          'border-transparent bg-primary-blue-400/50 text-white hover:bg-primary-blue-400/70',
        destructive:
          'border-transparent bg-alert-red-500 text-white hover:bg-alert-red-600',
        outline:
          'border-primary-blue-400 bg-transparent text-white hover:bg-primary-blue-400/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
