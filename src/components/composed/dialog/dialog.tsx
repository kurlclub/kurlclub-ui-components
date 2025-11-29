import * as React from 'react';

import {
  Dialog as BaseDialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface DialogProps {
  title?: string;
  trigger?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  closable?: boolean;
  open?: boolean;
  onOpenChange?: () => void;
}

const Dialog: React.FC<DialogProps> = ({
  title,
  trigger,
  children,
  className,
  onOpenChange,
  open,
  footer,
}) => {
  return (
    <BaseDialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className={`bg-primary-blue-500 border-secondary-blue-500 ${className}`}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </BaseDialog>
  );
};

export { Dialog };
