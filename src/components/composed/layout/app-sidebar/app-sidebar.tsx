'use client';

import * as React from 'react';

import { ChevronRight, type LucideIcon } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  useSidebar,
} from '@/components/ui';

export interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

export interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  navItems: NavItem[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
  groupLabel?: string;
  onNavigate?: (url: string) => void;
  currentPath?: string;
}

export function AppSidebar({
  navItems,
  header = null,
  footer,
  groupLabel = 'GENERAL',
  onNavigate,
  currentPath = '',
  ...props
}: AppSidebarProps) {
  const { state } = useSidebar();
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    const initialOpen: string[] = [];
    navItems.forEach((item) => {
      if (
        item.items?.some(
          (subItem) =>
            currentPath === subItem.url ||
            (subItem.url !== '/' && currentPath.startsWith(subItem.url))
        )
      ) {
        initialOpen.push(item.title);
      }
    });
    return initialOpen;
  });

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const handleNavigation = (url: string) => {
    if (onNavigate) {
      onNavigate(url);
    }
  };

  return (
    <Sidebar
      collapsible="icon"
      className="**:data-[slot='sidebar-inner']:border-r-0!"
      {...props}
    >
      <SidebarHeader>{header}</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => {
              const isCurrentPage = currentPath === item.url || item.isActive;
              const hasSubItems = item.items && item.items.length > 0;
              const isOpen = openItems.includes(item.title);
              const hasActiveSubItem = item.items?.some(
                (subItem) => currentPath === subItem.url
              );

              if (hasSubItems) {
                return (
                  <Collapsible
                    key={item.title}
                    asChild
                    open={isOpen}
                    onOpenChange={() => toggleItem(item.title)}
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          isActive={isCurrentPage || hasActiveSubItem}
                          tooltip={
                            state === 'collapsed' ? item.title : undefined
                          }
                        >
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          <ChevronRight
                            className={`ml-auto transition-transform duration-200 ${
                              isOpen ? 'rotate-90' : ''
                            }`}
                          />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={currentPath === subItem.url}
                              >
                                <a
                                  href={subItem.url}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(subItem.url);
                                  }}
                                >
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              }

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isCurrentPage}
                    tooltip={state === 'collapsed' ? item.title : undefined}
                  >
                    <a
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.url);
                      }}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      {footer && (
        <>
          <SidebarSeparator />
          <SidebarFooter>{footer}</SidebarFooter>
        </>
      )}
    </Sidebar>
  );
}
