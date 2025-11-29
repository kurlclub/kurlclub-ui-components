import type { Meta, StoryObj } from '@storybook/react';
import { BarChart3, Calendar, CreditCard, Settings, Users } from 'lucide-react';

import { TeamSwitcher } from '@/components/composed/team-switcher';
import { useSidebar } from '@/components/ui';

import { AppHeader } from '../app-header/app-header';
import { AppSidebar } from '../app-sidebar/app-sidebar';
import { AppLayout } from './app-layout';

const meta: Meta<typeof AppLayout> = {
  title: 'Layout/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    sidebar: { control: false },
    header: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

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
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
];

export const Default: Story = {
  render: () => (
    <AppLayout
      sidebar={
        <AppSidebar
          navItems={navItems}
          groupLabel="GENERAL"
          currentPath="/"
          header={<TeamSwitcher />}
        />
      }
    >
      <div className="p-8 bg-primary-blue-500 h-full">
        <h1 className="text-3xl font-bold text-white">Welcome to Your App</h1>
        <p className="mt-4 text-white/70">
          This is your main content area. Add your page content here.
        </p>
      </div>
    </AppLayout>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <AppLayout
      sidebar={
        <AppSidebar
          navItems={navItems}
          groupLabel="GENERAL"
          currentPath="/dashboard"
          header={<TeamSwitcher />}
        />
      }
      header={
        <AppHeader>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-sm font-medium leading-normal text-secondary-blue-400">
              Hey, John Doe
            </span>
            <span className="text-base font-semibold text-white">
              Good Morning
            </span>
          </div>
        </AppHeader>
      }
    >
      <div className="p-8 bg-primary-blue-500 h-full">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="mt-4 text-white/70">Your dashboard content goes here.</p>
      </div>
    </AppLayout>
  ),
};

const FooterWithUserFull = () => {
  const { state } = useSidebar();

  if (state === 'collapsed') {
    return (
      <div className="p-3 flex items-center justify-center">
        <div className="h-9 w-9 shrink-0 rounded-md bg-primary-green-500 flex items-center justify-center text-primary-blue-500 font-bold text-sm">
          JD
        </div>
      </div>
    );
  }

  return (
    <div className="p-3">
      <div className="flex items-center gap-3 rounded-lg bg-secondary-blue-200/10 p-3">
        <div className="h-10 w-10 shrink-0 rounded-md bg-primary-green-500 flex items-center justify-center text-primary-blue-500 font-bold text-sm">
          JD
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white truncate">John Doe</p>
          <p className="text-xs text-white/60 truncate">john@example.com</p>
        </div>
      </div>
    </div>
  );
};

export const FullExample: Story = {
  render: () => (
    <AppLayout
      sidebar={
        <AppSidebar
          navItems={navItems}
          groupLabel="GENERAL"
          currentPath="/dashboard"
          header={<TeamSwitcher />}
          footer={<FooterWithUserFull />}
        />
      }
      header={
        <AppHeader>
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="flex flex-col text-left leading-tight">
              <span className="text-sm font-medium leading-normal text-secondary-blue-400">
                Hey, John Doe
              </span>
              <span className="text-base font-semibold text-white">
                Good Morning
              </span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="rounded-full bg-secondary-blue-500 p-2 text-white hover:bg-secondary-blue-400">
              🔔
            </button>
            <button className="rounded-md bg-primary-green-500 px-4 py-2 text-sm font-medium text-primary-blue-500">
              Quick Actions
            </button>
          </div>
        </AppHeader>
      }
    >
      <div className="p-8 bg-primary-blue-500 h-full">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-secondary-blue-500 p-6">
            <h3 className="text-lg font-semibold text-white">Card 1</h3>
            <p className="mt-2 text-white/70">Some content here</p>
          </div>
          <div className="rounded-lg bg-secondary-blue-500 p-6">
            <h3 className="text-lg font-semibold text-white">Card 2</h3>
            <p className="mt-2 text-white/70">Some content here</p>
          </div>
          <div className="rounded-lg bg-secondary-blue-500 p-6">
            <h3 className="text-lg font-semibold text-white">Card 3</h3>
            <p className="mt-2 text-white/70">Some content here</p>
          </div>
        </div>
      </div>
    </AppLayout>
  ),
};
