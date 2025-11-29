import type { Meta, StoryObj } from '@storybook/react';

import { SidebarInset, SidebarProvider } from '@/components/ui';

import { AppSidebar } from '../app-sidebar/app-sidebar';
import { AppHeader } from './app-header';

const meta: Meta<typeof AppHeader> = {
  title: 'Layout/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <SidebarProvider>
        <AppSidebar
          navItems={[
            { title: 'Dashboard', url: '/dashboard', icon: undefined },
          ]}
          groupLabel="GENERAL"
        />
        <SidebarInset>
          <Story />
          <main className="flex-1 p-8 bg-primary-blue-500 h-full">
            <h1 className="text-2xl font-bold text-white">Page Content</h1>
          </main>
        </SidebarInset>
      </SidebarProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

export const Default: Story = {
  args: {},
};

export const WithGreeting: Story = {
  args: {
    children: (
      <div className="flex flex-col text-left leading-tight">
        <span className="text-sm font-medium leading-normal text-secondary-blue-400">
          Hey, John Doe
        </span>
        <span className="text-base font-semibold text-white">Good Morning</span>
      </div>
    ),
  },
};

export const WithActions: Story = {
  args: {
    children: (
      <>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-sm font-medium leading-normal text-secondary-blue-400">
            Hey, John Doe
          </span>
          <span className="text-base font-semibold text-white">
            Good Morning
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="rounded-md bg-primary-green-500 px-4 py-2 text-sm font-medium text-primary-blue-500">
            Action
          </button>
        </div>
      </>
    ),
  },
};

export const FullExample: Story = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
};
