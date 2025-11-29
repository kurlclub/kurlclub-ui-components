import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import {
  BarChart3,
  Calendar,
  CreditCard,
  Dumbbell,
  Settings,
  UserCheck,
  Users,
} from 'lucide-react';

import { TeamSwitcher } from '@/components/composed/team-switcher';
import { SidebarInset, SidebarProvider, useSidebar } from '@/components/ui';

import { AppSidebar } from './app-sidebar';

const meta: Meta<typeof AppSidebar> = {
  title: 'Layout/AppSidebar',
  component: AppSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
        <SidebarInset>
          <main className="flex-1 p-8 bg-primary-blue-500 h-full">
            <h1 className="text-2xl font-bold text-white">Main Content</h1>
            <p className="text-white/70 mt-2">
              Toggle the sidebar to see collapsed state
            </p>
          </main>
        </SidebarInset>
      </SidebarProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AppSidebar>;

const navItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: BarChart3,
  },
  {
    title: 'Members',
    url: '/members',
    icon: Users,
  },
  {
    title: 'Payments',
    url: '/payments',
    icon: CreditCard,
  },
  {
    title: 'Attendance',
    url: '/attendance',
    icon: Calendar,
  },
  {
    title: 'Staff Management',
    url: '/staff-management',
    icon: UserCheck,
  },
  {
    title: 'Plans & Workouts',
    url: '/plans-and-workouts',
    icon: Dumbbell,
  },
  {
    title: 'General Settings',
    url: '/general-settings',
    icon: Settings,
  },
];

const navItemsWithSubItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: BarChart3,
  },
  {
    title: 'Members',
    url: '/members',
    icon: Users,
  },
  {
    title: 'Payments',
    url: '#',
    icon: CreditCard,
    items: [
      {
        title: 'Recurring Payments',
        url: '/payments',
      },
      {
        title: 'Per Session Payments',
        url: '/payments/session-payments',
      },
    ],
  },
  {
    title: 'Attendance',
    url: '/attendance',
    icon: Calendar,
  },
];

export const Default: Story = {
  args: {
    navItems,
    groupLabel: 'GENERAL',
    currentPath: '/dashboard',
  },
};

export const WithSubItems: Story = {
  args: {
    navItems: navItemsWithSubItems,
    groupLabel: 'GENERAL',
    currentPath: '/payments',
  },
};

export const WithHeader: Story = {
  args: {
    navItems,
    groupLabel: 'GENERAL',
    currentPath: '/dashboard',
    header: <TeamSwitcher />,
  },
};

const FooterWithUser = () => {
  const { state } = useSidebar();

  if (state === 'collapsed') {
    return (
      <div className="p-3 flex items-center justify-center">
        <div className="h-9 w-9 shrink-0 rounded-md bg-primary-green-500 flex items-center justify-center text-primary-blue-500 font-bold text-sm">
          GN
        </div>
      </div>
    );
  }

  return (
    <div className="p-3">
      <div className="flex items-center gap-3 rounded-lg bg-secondary-blue-200/10 p-3">
        <div className="h-10 w-10 shrink-0 rounded-md bg-primary-green-500 flex items-center justify-center text-primary-blue-500 font-bold text-sm">
          GN
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white truncate">Gym Name</p>
          <p className="text-xs text-white/60 truncate">ID: GYM001</p>
        </div>
      </div>
    </div>
  );
};

export const WithFooter: Story = {
  args: {
    navItems,
    groupLabel: 'GENERAL',
    currentPath: '/dashboard',
    footer: <FooterWithUser />,
  },
};

const InteractiveComponent = () => {
  const [currentPath, setCurrentPath] = useState('/dashboard');
  const { state } = useSidebar();

  return (
    <AppSidebar
      navItems={navItemsWithSubItems}
      groupLabel="GENERAL"
      currentPath={currentPath}
      onNavigate={(url) => {
        setCurrentPath(url);
        console.log('Navigating to:', url);
      }}
      header={<TeamSwitcher />}
      footer={
        state === 'collapsed' ? (
          <div className="p-3 flex items-center justify-center">
            <div className="h-9 w-9 shrink-0 rounded-md bg-primary-green-500 flex items-center justify-center text-primary-blue-500 font-bold text-sm">
              GN
            </div>
          </div>
        ) : (
          <div className="p-3">
            <div className="flex items-center gap-3 rounded-lg bg-secondary-blue-200/10 p-3">
              <div className="h-10 w-10 shrink-0 rounded-md bg-primary-green-500 flex items-center justify-center text-primary-blue-500 font-bold text-sm">
                GN
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">
                  Gym Name
                </p>
                <p className="text-xs text-white/60 truncate">ID: GYM001</p>
              </div>
            </div>
          </div>
        )
      }
    />
  );
};

export const Interactive: Story = {
  render: () => <InteractiveComponent />,
};
