import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Composed/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-[400px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none text-white">
          Kurl Club
        </h4>
        <p className="text-sm text-primary-blue-200">
          Premium membership management system
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div className="text-white">Members</div>
        <Separator orientation="vertical" />
        <div className="text-white">Staff</div>
        <Separator orientation="vertical" />
        <div className="text-white">Reports</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div className="text-white">Dashboard</div>
      <Separator orientation="vertical" />
      <div className="text-white">Settings</div>
      <Separator orientation="vertical" />
      <div className="text-white">Profile</div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-[350px] bg-secondary-blue-600 rounded-lg p-6">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-white">Account Details</h3>
        <p className="text-sm text-primary-blue-200">
          Manage your account information
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-primary-blue-200">Email</span>
          <span className="text-white">user@example.com</span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="text-primary-blue-200">Member ID</span>
          <span className="text-white">KC-2024-001</span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="text-primary-blue-200">Status</span>
          <span className="text-primary-green-500">Active</span>
        </div>
      </div>
    </div>
  ),
};

export const WithCustomColor: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div>
        <p className="text-white mb-2">Default (primary-blue-400)</p>
        <Separator />
      </div>
      <div>
        <p className="text-white mb-2">Custom (primary-green-500)</p>
        <Separator className="bg-primary-green-500" />
      </div>
      <div>
        <p className="text-white mb-2">Custom (alert-red-500)</p>
        <Separator className="bg-alert-red-500" />
      </div>
    </div>
  ),
};
