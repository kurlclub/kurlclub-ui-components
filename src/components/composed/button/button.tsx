import * as React from 'react';

import { Loader2 } from 'lucide-react';

import {
  Button as ShadcnButton,
  type ButtonProps as ShadcnButtonProps,
} from '@/components/ui';
import { cn } from '@/lib/utils';

const variantStyles = {
  default:
    'bg-primary-green-500 text-primary-blue-500 shadow-sm hover:bg-primary-green-700',
  destructive:
    'bg-alert-red-600 text-white shadow-xs hover:bg-alert-red-600/90 hover:text-white/80',
  outline:
    'border border-secondary-blue-500 text-white bg-background shadow-xs hover:bg-secondary-blue-500',
  outlinePrimary:
    'border border-primary-green-500 bg-background shadow-xs text-primary-green-500 hover:bg-secondary-blue-500',
  secondary:
    'bg-transparent text-primary-green-500 shadow-xs hover:bg-secondary-blue-500',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
};

export interface ButtonProps extends Omit<ShadcnButtonProps, 'variant'> {
  loading?: boolean;
  loadingText?: string;
  variant?: keyof typeof variantStyles;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      loading,
      loadingText = 'Loading...',
      disabled,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    return (
      <ShadcnButton
        ref={ref}
        className={cn(variantStyles[variant], className)}
        disabled={disabled || loading}
        variant={undefined}
        aria-busy={loading}
        aria-label={loading ? loadingText : undefined}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" />}
        {loading ? loadingText : children}
      </ShadcnButton>
    );
  }
);

Button.displayName = 'Button';

export { Button };
