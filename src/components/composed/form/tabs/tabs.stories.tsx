import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Home, Settings, User } from 'lucide-react';

import { Tabs } from './tabs';

const meta = {
  title: 'Form/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['vertical', 'underline'],
      description: 'Tab variant style',
    },
    items: {
      control: 'object',
      description: 'Array of tab items',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Vertical: Story = {
  render: function Component(args) {
    const [value, setValue] = useState('home');
    return (
      <div className="w-[500px]">
        <Tabs {...args} value={value} onTabChange={setValue} />
      </div>
    );
  },
  args: {
    items: tabItems,
    variant: 'vertical',
  },
};

export const Underline: Story = {
  render: function Component(args) {
    const [value, setValue] = useState('overview');
    return (
      <div className="w-[500px]">
        <Tabs {...args} value={value} onTabChange={setValue} />
      </div>
    );
  },
  args: {
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'reports', label: 'Reports' },
    ],
    variant: 'underline',
  },
};

export const UnderlineWithIcons: Story = {
  render: function Component(args) {
    const [value, setValue] = useState('profile');
    return (
      <div className="w-[500px]">
        <Tabs {...args} value={value} onTabChange={setValue} />
      </div>
    );
  },
  args: {
    items: tabItems,
    variant: 'underline',
  },
};
