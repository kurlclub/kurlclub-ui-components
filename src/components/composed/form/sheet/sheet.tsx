'use client';

import * as React from 'react';

import { Cross2Icon } from '@radix-ui/react-icons';

import {
  Sheet as BaseSheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui';

export interface SheetProps {
  title?: string | React.ReactNode;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isOpen: boolean;
  onClose: (open: boolean) => void;
  position?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  onCloseBtnClick?: () => void;
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
  onCloseBtnClick,
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
        className={` bg-secondary-blue-700 border-primary-blue-400 border p-0 flex flex-col w-full ${widthClass} ${className || ''}`}
      >
        <SheetHeader className="relative border-b border-primary-blue-400 px-5 py-[30px] bg-secondary-blue-700 h-[80px] flex-shrink-0">
          <button
            onClick={() => {
              if (onCloseBtnClick) {
                onCloseBtnClick();
                return;
              }
              onClose(false);
            }}
            className="fixed right-7 top-[33px] rounded-xs opacity-70 ring-offset-0 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none z-30 data-[state=open]:bg-secondary"
          >
            <Cross2Icon className="h-6 w-6 cursor-pointer" />
          </button>
          {title && (
            <SheetTitle className="text-xl font-medium text-white leading-normal ">
              {title}
            </SheetTitle>
          )}
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        <div className="px-5 pb-5 pt-2 flex-1 overflow-y-auto">{children}</div>
        {footer && (
          <div className="flex h-[80px] justify-end bg-secondary-blue-700 px-3 py-4 border-t border-primary-blue-400 flex-shrink-0">
            {footer}
          </div>
        )}
      </SheetContent>
    </BaseSheet>
  );
};
