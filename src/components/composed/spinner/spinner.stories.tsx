import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './spinner';

const usageSnippet = [
  "import { Spinner } from '@kurlclub/ui-components';",
  '',
  'export function SpinnerExample() {',
  '  return <Spinner message="Loading..." size="md" />;',
  '}',
  '',
].join('\n');

const usageDescription = [
  'Usage example:',
  '',
  '```tsx',
  usageSnippet,
  '```',
  '',
].join('\n');
const meta: Meta<typeof Spinner> = {
  title: 'Composed/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: { component: usageDescription },
    },
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
};

export default meta;
type Story = StoryObj<typeof meta>;

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
