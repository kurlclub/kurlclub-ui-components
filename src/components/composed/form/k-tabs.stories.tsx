import type { Meta, StoryObj } from '@storybook/react';
import { Home, Settings, User } from 'lucide-react';

import { KTabs } from './k-tabs';

const meta = {
  title: 'Components/Form/KTabs',
  component: KTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Vertical: Story = {
  args: {
    items: tabItems,
    variant: 'vertical',
    value: 'home',
  },
};

export const Underline: Story = {
  args: {
    items: tabItems,
    variant: 'underline',
    value: 'profile',
  },
};

export const WithoutIcons: Story = {
  args: {
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'reports', label: 'Reports' },
    ],
    variant: 'underline',
    value: 'overview',
  },
};
