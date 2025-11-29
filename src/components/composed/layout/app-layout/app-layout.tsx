'use client';

import * as React from 'react';

import { SidebarInset, SidebarProvider } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface AppLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header?: React.ReactNode;
  sidebarDefaultOpen?: boolean;
  className?: string;
}

export function AppLayout({
  children,
  sidebar,
  header,
  sidebarDefaultOpen = true,
  className,
}: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={sidebarDefaultOpen}>
      {sidebar}
      <SidebarInset className={cn('flex flex-col min-h-screen', className)}>
        {header && <div className="sticky top-0 z-50 shrink-0">{header}</div>}
        <div className="h-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
