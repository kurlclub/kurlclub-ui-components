'use client';

import * as React from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui';

import { KAccordionClose, KAccordionOpen } from './icons/accordion-icons';

export interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
  onOpenChange,
  className,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={handleOpenChange}
      className={className}
    >
      <CollapsibleTrigger className="flex px-4 md:px-8 py-3 border-y border-secondary-blue-500 justify-between items-center w-full hover:bg-secondary-blue-600/50 transition-colors">
        <h3 className="text-[15px] font-normal leading-normal text-primary-blue-50">
          {title}
        </h3>
        <div className="transition-transform duration-300">
          {isOpen ? <KAccordionOpen /> : <KAccordionClose />}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
