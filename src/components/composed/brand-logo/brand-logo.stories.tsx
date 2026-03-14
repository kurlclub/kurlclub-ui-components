import type { Meta, StoryObj } from '@storybook/react';

import { BrandLogo } from './brand-logo';

const meta = {
  title: 'Composed/BrandLogo',
  component: BrandLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['app', 'admin'],
    },
  },
} satisfies Meta<typeof BrandLogo>;

export default meta;
type Story = StoryObj<typeof BrandLogo>;

export const Default: Story = {
  render: (args) => (
    <div className="rounded-xl bg-secondary-blue-600 p-6 shadow-lg shadow-black/30">
      <div className="h-5 w-28">
        <BrandLogo {...args} />
      </div>
    </div>
  ),
};

export const Admin: Story = {
  render: (args) => (
    <div className="rounded-xl bg-secondary-blue-600 p-6 shadow-lg shadow-black/30">
      <div className="h-5 w-28">
        <BrandLogo {...args} variant="admin" />
      </div>
    </div>
  ),
};
