import type { Meta, StoryObj } from '@storybook/react';

import { CollapsibleSection } from './collapsible-section';

const meta: Meta<typeof CollapsibleSection> = {
  title: 'Composed/CollapsibleSection',
  component: CollapsibleSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CollapsibleSection>;

export const Default: Story = {
  args: {
    title: 'Personal Information',
    children: (
      <div className="p-4 md:p-8 space-y-4">
        <div className="flex justify-between">
          <span className="text-primary-blue-200">Name:</span>
          <span className="text-white">John Doe</span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary-blue-200">Email:</span>
          <span className="text-white">john.doe@example.com</span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary-blue-200">Phone:</span>
          <span className="text-white">+1 234 567 8900</span>
        </div>
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <CollapsibleSection {...args} />
    </div>
  ),
};

export const DefaultOpen: Story = {
  args: {
    title: 'Account Details',
    defaultOpen: true,
    children: (
      <div className="p-4 md:p-8 space-y-4">
        <div className="flex justify-between">
          <span className="text-primary-blue-200">Member ID:</span>
          <span className="text-white">KC-2024-001</span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary-blue-200">Status:</span>
          <span className="text-primary-green-500">Active</span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary-blue-200">Joined:</span>
          <span className="text-white">January 15, 2024</span>
        </div>
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <CollapsibleSection {...args} />
    </div>
  ),
};

export const MultipleSections: Story = {
  render: () => (
    <div className="w-[600px] space-y-0">
      <CollapsibleSection title="Personal Information" defaultOpen>
        <div className="p-4 md:p-8 space-y-4">
          <div className="flex justify-between">
            <span className="text-primary-blue-200">Name:</span>
            <span className="text-white">John Doe</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary-blue-200">Email:</span>
            <span className="text-white">john.doe@example.com</span>
          </div>
        </div>
      </CollapsibleSection>
      <CollapsibleSection title="Membership Details">
        <div className="p-4 md:p-8 space-y-4">
          <div className="flex justify-between">
            <span className="text-primary-blue-200">Member ID:</span>
            <span className="text-white">KC-2024-001</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary-blue-200">Status:</span>
            <span className="text-primary-green-500">Active</span>
          </div>
        </div>
      </CollapsibleSection>
      <CollapsibleSection title="Payment History">
        <div className="p-4 md:p-8 space-y-4">
          <div className="flex justify-between">
            <span className="text-primary-blue-200">Last Payment:</span>
            <span className="text-white">$50.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary-blue-200">Date:</span>
            <span className="text-white">March 1, 2024</span>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  ),
};

export const WithRichContent: Story = {
  args: {
    title: 'Subscription Plan',
    defaultOpen: true,
    children: (
      <div className="p-4 md:p-8">
        <div className="bg-secondary-blue-600 rounded-lg p-4 space-y-3">
          <h4 className="text-white font-medium">Premium Plan</h4>
          <p className="text-primary-blue-200 text-sm">
            Access to all premium features including advanced analytics,
            priority support, and exclusive content.
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-secondary-blue-500">
            <span className="text-primary-blue-200">Monthly Fee:</span>
            <span className="text-primary-green-500 font-semibold">$49.99</span>
          </div>
        </div>
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <CollapsibleSection {...args} />
    </div>
  ),
};
