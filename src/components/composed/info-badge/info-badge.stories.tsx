import type { Meta, StoryObj } from '@storybook/react';

import { InfoBadge } from './info-badge';

const meta = {
  title: 'Composed/InfoBadge',
  component: InfoBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
    },
    showIcon: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof InfoBadge>;

export default meta;
type Story = StoryObj<typeof InfoBadge>;

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Information',
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: 'success',
    children: 'No Icon',
    showIcon: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <InfoBadge variant="success">Active</InfoBadge>
      <InfoBadge variant="warning">Pending</InfoBadge>
      <InfoBadge variant="error">Inactive</InfoBadge>
      <InfoBadge variant="info">Info</InfoBadge>
    </div>
  ),
};
