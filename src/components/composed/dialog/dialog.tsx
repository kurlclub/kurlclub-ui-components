import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';

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

const DialogComponent: React.FC<DialogProps> = ({
  title,
  closable = true,
  trigger,
  children,
  className,
  onOpenChange,
  open,
  footer,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        closable={closable}
        className={`bg-primary-blue-500 border-secondary-blue-500 rounded-lg! max-w-full ${className}`}
      >
        {title ? (
          <DialogTitle>{title}</DialogTitle>
        ) : (
          <VisuallyHidden>
            <DialogTitle>Dialog</DialogTitle>
          </VisuallyHidden>
        )}
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};

export { DialogComponent as Dialog };
