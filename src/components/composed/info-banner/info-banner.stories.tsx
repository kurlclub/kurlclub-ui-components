import type { Meta, StoryObj } from '@storybook/react';
import { Sparkles } from 'lucide-react';

import { InfoBanner } from './info-banner';

const meta = {
  title: 'Composed/InfoBanner',
  component: InfoBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'warning', 'success', 'error'],
    },
    showIcon: {
      control: 'boolean',
    },
    showBrandLogo: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof InfoBanner>;

export default meta;
type Story = StoryObj<typeof InfoBanner>;

export const Default: Story = {
  args: {
    variant: 'info',
    message: 'This is an informational message.',
  },
};

export const WithTitle: Story = {
  args: {
    variant: 'info',
    message: 'This is an informational message with a title.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    message: 'This action cannot be undone.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Your changes have been saved successfully.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    message: 'Something went wrong. Please try again.',
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: 'info',
    message: 'This is a message without an icon.',
    showIcon: false,
  },
};

export const WithBrandLogo: Story = {
  args: {
    variant: 'info',
    message: 'This is a message with the brand logo.',
    showBrandLogo: true,
  },
};

export const WithCustomIcon: Story = {
  args: {
    variant: 'success',
    message: 'This banner uses a custom icon.',
    icon: Sparkles,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <InfoBanner variant="info" message="This is an informational message." />
      <InfoBanner variant="warning" message="This action cannot be undone." />
      <InfoBanner variant="success" message="Your changes have been saved." />
      <InfoBanner variant="error" message="Something went wrong." />
    </div>
  ),
};
