'use client';

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui';

import { BrandLogo } from '../brand-logo/brand-logo';
import type { BrandLogoVariant } from '../brand-logo/brand-logo';

export interface TeamSwitcherProps {
  collapsedLogo?: string;
  expandedLogo?: string;
  alt?: string;
  brandLogoVariant?: BrandLogoVariant;
}

const DEFAULT_COLLAPSED_LOGO = '/assets/svg/logo-icon.png';

export function TeamSwitcher({
  collapsedLogo = DEFAULT_COLLAPSED_LOGO,
  expandedLogo,
  alt = 'Logo',
  brandLogoVariant = 'app',
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
          ) : expandedLogo ? (
            <img
              src={expandedLogo}
              alt={alt}
              width={120}
              height={18}
              className="w-auto object-contain h-4"
            />
          ) : (
            <div className="h-6 w-28">
              <BrandLogo variant={brandLogoVariant} />
            </div>
          )}
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
