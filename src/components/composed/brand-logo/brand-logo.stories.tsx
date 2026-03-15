import type { Meta, StoryObj } from '@storybook/react';

import { BrandLogo } from './brand-logo';

const usageSnippet = [
  "import { BrandLogo } from '@kurlclub/ui-components';",
  '',
  'export function BrandLogoExample() {',
  '  return <BrandLogo />;',
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
const meta = {
  title: 'Composed/BrandLogo',
  component: BrandLogo,
  parameters: {
    docs: {
      description: { component: usageDescription },
    },
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
      <div className="inline-flex h-6 items-center">
        <BrandLogo {...args} />
      </div>
    </div>
  ),
};

export const Admin: Story = {
  render: (args) => (
    <div className="rounded-xl bg-secondary-blue-600 p-6 shadow-lg shadow-black/30">
      <div className="inline-flex h-6 items-center">
        <BrandLogo {...args} variant="admin" />
      </div>
    </div>
  ),
};
