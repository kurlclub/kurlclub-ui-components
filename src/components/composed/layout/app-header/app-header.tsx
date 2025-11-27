'use client';

import * as React from 'react';

import { Separator } from '@/components/ui/separator';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

export interface AppHeaderProps extends React.ComponentProps<'header'> {
  children?: React.ReactNode;
}

export function AppHeader({ children, className, ...props }: AppHeaderProps) {
  const { isMobile } = useSidebar();

  return (
    <header
      className={cn(
        `flex h-16 shrink-0 items-center  gap-3 sticky top-3 z-50 border-b border-b-secondary-blue-500 px-4 bg-background-dark ${!isMobile ? 'rounded-tl-3xl' : ''}`,
        className
      )}
      {...props}
    >
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 h-4 bg-secondary-blue-400"
      />
      {children}
    </header>
  );
}
