import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './textarea';

const usageSnippet = [
  "import { useState } from 'react';",
  "import { Textarea } from '@kurlclub/ui-components';",
  '',
  'export function TextareaExample() {',
  "  const [value, setValue] = useState('');",
  '',
  '  return (',
  '    <Textarea',
  '      label="Notes"',
  '      value={value}',
  '      onChange={(e) => setValue(e.target.value)}',
  '      placeholder="Add a note"',
  '      rows={4}',
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
  title: 'Form/Textarea',
  component: Textarea,
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
      description: 'Label for the textarea field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea field',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Component(args) {
    const [value, setValue] = useState(args.value || '');
    return (
      <Textarea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Description',
  },
};

export const WithValue: Story = {
  render: function Component(args) {
    const [value, setValue] = useState(args.value || '');
    return (
      <Textarea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Bio',
    value:
      'This is a sample bio text that demonstrates the auto-resize feature.',
  },
};

export const Disabled: Story = {
  render: function Component(args) {
    const [value, setValue] = useState(args.value || '');
    return (
      <Textarea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Comments',
    disabled: true,
    value: 'This field is disabled',
  },
};
