import type { Meta, StoryObj } from '@storybook/react';

import { AppLoader } from './app-loader';

const usageSnippet = [
  "import { AppLoader } from '@kurlclub/ui-components';",
  '',
  'export function AppLoaderExample() {',
  '  return <AppLoader />;',
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
const meta: Meta<typeof AppLoader> = {
  title: 'Composed/AppLoader',
  component: AppLoader,
  parameters: {
    docs: {
      description: { component: usageDescription },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppLoader>;

export const Default: Story = {
  render: () => (
    <div className="h-screen w-screen">
      <AppLoader />
    </div>
  ),
};
