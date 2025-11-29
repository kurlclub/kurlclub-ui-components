import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './spinner';

const meta = {
  title: 'Composed/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    message: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const WithMessage: Story = {
  args: {
    size: 'md',
    message: 'Loading data...',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-8 items-start">
      <div>
        <p className="text-sm text-gray-400 mb-2 text-center">Small</p>
        <Spinner size="sm" />
      </div>
      <div>
        <p className="text-sm text-gray-400 mb-2 text-center">Medium</p>
        <Spinner size="md" />
      </div>
      <div>
        <p className="text-sm text-gray-400 mb-2 text-center">Large</p>
        <Spinner size="lg" />
      </div>
    </div>
  ),
};
