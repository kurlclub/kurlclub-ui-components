import type { Meta, StoryObj } from '@storybook/react';

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
    title: 'Information:',
    message: 'This is an informational message with a title.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning:',
    message: 'This action cannot be undone.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success:',
    message: 'Your changes have been saved successfully.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error:',
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

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <InfoBanner
        variant="info"
        title="Info:"
        message="This is an informational message."
      />
      <InfoBanner
        variant="warning"
        title="Warning:"
        message="This action cannot be undone."
      />
      <InfoBanner
        variant="success"
        title="Success:"
        message="Your changes have been saved."
      />
      <InfoBanner
        variant="error"
        title="Error:"
        message="Something went wrong."
      />
    </div>
  ),
};
