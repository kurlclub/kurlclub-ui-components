'use client';

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui';

export interface TeamSwitcherProps {
  collapsedLogo: string;
  expandedLogo: string;
  alt?: string;
}

export function TeamSwitcher({
  collapsedLogo,
  expandedLogo,
  alt = 'Logo',
}: TeamSwitcherProps) {
  const { state } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className={`cursor-default hover:bg-transparent h-auto ${
            state === 'collapsed' ? 'inline-flex justify-center' : ''
          }`}
        >
          {state === 'collapsed' ? (
            <img src={collapsedLogo} alt={alt} width={36} height={36} />
          ) : (
            <img
              src={expandedLogo}
              alt={alt}
              width={120}
              height={18}
              className="w-auto object-contain h-4"
            />
          )}
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
