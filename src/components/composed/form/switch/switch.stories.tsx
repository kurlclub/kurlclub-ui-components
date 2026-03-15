import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './switch';

const usageSnippet = [
  "import { useState } from 'react';",
  "import { Switch } from '@kurlclub/ui-components';",
  '',
  'export function SwitchExample() {',
  '  const [checked, setChecked] = useState(false);',
  '',
  '  return (',
  '    <Switch',
  '      checked={checked}',
  '      onCheckedChange={setChecked}',
  '      label="Enable notifications"',
  '    />',
  '  );',
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
  title: 'Form/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: { component: usageDescription },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the switch',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Component(args) {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
  },
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  render: function Component(args) {
    const [checked, setChecked] = useState(true);
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
  },
  args: {
    label: 'Auto-save',
  },
};

export const Unchecked: Story = {
  render: function Component(args) {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
  },
  args: {
    label: 'Dark mode',
  },
};
