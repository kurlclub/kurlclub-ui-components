'use client';

import {
  Sheet as BaseSheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui';

export interface SheetProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isOpen: boolean;
  onClose: (open: boolean) => void;
  position?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Sheet = ({
  title,
  description,
  children,
  footer,
  isOpen,
  onClose,
  position = 'right',
  className,
  width = 'sm',
}: SheetProps) => {
  const isHorizontal = position === 'top' || position === 'bottom';
  const widthClass = isHorizontal
    ? 'w-full'
    : {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        full: 'sm:max-w-full',
      }[width];

  return (
    <BaseSheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side={position}
        className={`bg-secondary-blue-700 border-primary-blue-400 border p-0 flex flex-col w-full ${widthClass} ${className || ''}`}
      >
        <SheetHeader className="border-b border-primary-blue-400 px-5 py-[30px] bg-secondary-blue-700 h-20 shrink-0 justify-center">
          {title && (
            <SheetTitle className="text-xl font-medium text-white leading-normal">
              {title}
            </SheetTitle>
          )}
          {description && (
            <SheetDescription className="text-sm text-gray-400">
              {description}
            </SheetDescription>
          )}
        </SheetHeader>
        <div className="px-5 pb-5 pt-2 flex-1 overflow-y-auto">{children}</div>
        {footer && (
          <div className="flex h-20 justify-end bg-secondary-blue-700 px-3 py-4 border-t border-primary-blue-400 shrink-0">
            {footer}
          </div>
        )}
      </SheetContent>
    </BaseSheet>
  );
};
